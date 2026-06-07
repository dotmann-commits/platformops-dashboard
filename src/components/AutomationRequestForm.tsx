import { useEffect, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const webhookUrl = "/api/automation-request";

export default function AutomationRequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    currentChallenge: "",
    currentTools: "",
    automationType: "",
    priority: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    function handleAuditIntentClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const auditLink = target.closest("[data-audit-intent='true']");

      if (!auditLink) return;

      setFormData((current) => ({
        ...current,
        automationType: "ai-automation-audit",
        priority: "medium",
        message:
          current.message ||
          "I would like MikeOps to audit my business workflows and identify automation opportunities.",
      }));
    }

    function handleServiceRequest(event: Event) {
      const customEvent = event as CustomEvent<{
        serviceId?: string;
        serviceTitle?: string;
        serviceDescription?: string;
      }>;

      const serviceId = customEvent.detail?.serviceId || "";
      const serviceTitle = customEvent.detail?.serviceTitle || "MikeOps service";

      const automationType =
        serviceId.includes("crm")
          ? "crm"
          : serviceId.includes("lead")
            ? "lead"
            : serviceId.includes("assistant")
              ? "ai-assistant"
              : serviceId.includes("bpa") || serviceId.includes("workflow") || serviceId.includes("task") || serviceId.includes("ticket") || serviceId.includes("reporting") || serviceId.includes("infra")
                ? "workflow-automation"
                : "custom";

      setFormData((current) => ({
        ...current,
        automationType,
        priority: current.priority || "medium",

        message:
          current.message ||
          `I clicked Request this service for: ${serviceTitle}. Please review this service request and recommend the best next step.`,
      }));
    }

    document.addEventListener("click", handleAuditIntentClick);
    window.addEventListener("mikeops-service-request", handleServiceRequest);

    return () => {
      document.removeEventListener("click", handleAuditIntentClick);
      window.removeEventListener("mikeops-service-request", handleServiceRequest);
    };
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setStatus("idle");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          ...formData,
          submittedAt:new Date().toISOString(),
          source:"MikeOps Dashboard"
        })
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");

      setFormData({
        fullName:"",
        email:"",
        company:"",
        currentChallenge:"",
        currentTools:"",
        automationType:"",
        priority:"",
        message:"",
      });

    } catch(err){
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <section
      id="automation-request"
      className="bg-[#020617] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-black">
            Submit Automation Request
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Tell MikeOps what you want automated and where your current workflow slows down.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          action="#"
          method="dialog"
          className="space-y-6 rounded-[32px] border border-slate-800 bg-[#071120] p-8"
        >
          {status === "success" && (
            <div className="rounded-2xl border border-blue-400/25 bg-blue-500/10 px-6 py-5 text-blue-50 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                  <CheckCircle size={22} />
                </div>

                <div>
                  <p className="text-base font-black text-white">
                    Form submitted successfully.
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    We’ve received your request. The MikeOps team will review it and reach out to you soon with the next best step.
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
                    MikeOps • AI Automation • Operations Systems
            </p>
                </div>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-400/10 px-5 py-4 text-red-200">
              <AlertCircle className="mt-1 shrink-0" size={20}/>
              <div>
                <p className="font-black">Submission failed.</p>
                <p className="mt-1 text-sm text-red-100/80">
                  Please wait a moment and try again.
                </p>
              </div>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <input
              required
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
            />

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
            />
          </div>

          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company / Project"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
          />

          <textarea
            required
            rows={4}
            name="currentChallenge"
            value={formData.currentChallenge}
            onChange={handleChange}
            placeholder="Current challenge..."
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
          />

          <input
            name="currentTools"
            value={formData.currentTools}
            onChange={handleChange}
            placeholder="Current tools..."
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <select
              required
              name="automationType"
              value={formData.automationType}
              onChange={handleChange}
              className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
            >
              <option value="">Type of Automation Needed</option>
              <option value="ai-automation-audit">AI Automation Audit</option>
              <option value="ai-assistant">AI Assistant</option>
              <option value="workflow-automation">Workflow Automation</option>
              <option value="crm">CRM Automation</option>
              <option value="lead">Lead Systems</option>
              <option value="custom">Custom Solution</option>
            </select>

            <select
              required
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
            >
              <option value="">Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium — Audit request / needed soon</option>
              <option value="high">High</option>
            </select>
          </div>

          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional notes..."
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-cyan-400 py-4 font-black text-black flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send size={18}/>
            {loading ? "Submitting..." : "Submit Automation Request"}
          </button>
        </form>
      </div>
    </section>
  );
}
