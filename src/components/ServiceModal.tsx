import {
  X, ArrowRight, PlusCircle, CalendarDays, Link2,
  Clock, ShieldCheck, TrendingUp, Users, Bell, BarChart3,
  Server, Workflow, Database, FileText, Route, Headphones
} from "lucide-react";

type Service = {
  id?: string;
  title: string;
  description: string;
};

type Step = {
  title: string;
  subtitle: string;
  tool: string;
  logo: string;
};

type Benefit = {
  title: string;
  text: string;
  icon: React.ElementType;
};

const logoMap: Record<string, string> = {
  n8n: "n8n",
  Prometheus: "prometheus",
  Grafana: "grafana",
  Docker: "docker",
  "Alert System": "",
  Airtable: "airtable",
  "AI System": "",
  Zapier: "zapier",
  Make: "make",
  Voiceflow: "voiceflow",
  Vapi: "v",
  Retell: "retool",
  Gmail: "gmail",
  HubSpot: "hubspot",
  "CRM System": "",
  React: "react",
  TypeScript: "typescript",
  Tailwind: "tailwindcss",
  Cloudflare: "cloudflare",
  Vercel: "vercel",
  Supabase: "supabase",
  Notion: "notion",
};

function logoUrl(tool: string) {
  const slug = logoMap[tool];
  return slug ? `https://cdn.simpleicons.org/${slug}` : "";
}

function getStatusLabel(service: Service) {
  const id = service.id ?? "";

  if (id === "crm-setup") return "Contact → Active Pipeline";
  if (id === "infra-automation-monitoring") return "Issue Detected → System Healthy";
  if (id === "lead-capture") return "Visitor → Qualified Lead";
  if (id === "followup") return "Lead → Re-engaged Customer";
  if (id === "task-routing") return "Request → Assigned Owner";
  if (id === "ticket-workflow") return "Ticket → Resolved";
  if (id === "bpa") return "Manual → Automated Workflow";
  if (id === "reporting") return "Data → Actionable Insight";

  return "Workflow → Automated System";
}

function getConfig(service: Service): {
  steps: Step[];
  tools: string[];
  benefits: Benefit[];
  how: string;
} {
  const id = service.id ?? "";

  if (id === "crm-setup") {
    return {
      steps: [
        { title: "1. Audit CRM", subtitle: "Review fields, stages, and gaps", tool: "CRM System", logo: "CRM System" },
        { title: "2. Configure Pipeline", subtitle: "Set stages and deal flow", tool: "HubSpot", logo: "HubSpot" },
        { title: "3. Map Data", subtitle: "Connect forms and records", tool: "Airtable", logo: "Airtable" },
        { title: "4. Automate Actions", subtitle: "Tasks, reminders, updates", tool: "n8n", logo: "n8n" },
        { title: "5. Track Follow-up", subtitle: "Keep deals moving", tool: "Gmail", logo: "Gmail" },
      ],
      tools: ["CRM System", "HubSpot", "Airtable", "n8n", "Gmail", "Make", "Zapier"],
      benefits: [
        { title: "Cleaner Pipeline", text: "Deals and contacts move through clear stages instead of scattered notes.", icon: Route },
        { title: "Less Manual Admin", text: "Updates, reminders, and records happen automatically.", icon: Clock },
        { title: "Better Follow-up", text: "Leads are easier to track and less likely to be forgotten.", icon: Bell },
        { title: "Sales Visibility", text: "You can see where each opportunity stands.", icon: BarChart3 },
      ],
      how: "We structure your CRM pipeline, connect your forms and tools, and automate the repetitive actions that keep deals moving.",
    };
  }

  if (id === "infra-automation-monitoring") {
    return {
      steps: [
        { title: "1. Monitor Service", subtitle: "Track APIs, servers, and apps", tool: "Prometheus", logo: "Prometheus" },
        { title: "2. Collect Metrics", subtitle: "Measure health and errors", tool: "Grafana", logo: "Grafana" },
        { title: "3. Detect Issue", subtitle: "Rules catch failures early", tool: "Docker", logo: "Docker" },
        { title: "4. Trigger Workflow", subtitle: "Start incident automation", tool: "n8n", logo: "n8n" },
        { title: "5. Notify Team", subtitle: "Send alert and next action", tool: "Alert System", logo: "Alert System" },
      ],
      tools: ["Prometheus", "Grafana", "Docker", "n8n", "Alert System", "Airtable", "AI System"],
      benefits: [
        { title: "Faster Detection", text: "Issues are identified before they become larger incidents.", icon: Clock },
        { title: "Lower Downtime", text: "Alerts and workflows help teams respond quickly.", icon: ShieldCheck },
        { title: "Clear Metrics", text: "Dashboards show what is healthy and what needs attention.", icon: BarChart3 },
        { title: "Operational Control", text: "Your infrastructure becomes easier to observe and manage.", icon: Server },
      ],
      how: "We connect monitoring, metrics, alert rules, and automation so system problems are detected and routed quickly.",
    };
  }

  if (id === "lead-capture") {
    return {
      steps: [
        { title: "1. Visitor Submits", subtitle: "Website, form, ad, or chat", tool: "React", logo: "React" },
        { title: "2. Validate Lead", subtitle: "Clean and structure data", tool: "n8n", logo: "n8n" },
        { title: "3. Store Record", subtitle: "Save lead information", tool: "Airtable", logo: "Airtable" },
        { title: "4. Notify Team", subtitle: "Send alert instantly", tool: "Alert System", logo: "Alert System" },
        { title: "5. Start Follow-up", subtitle: "Email or task created", tool: "Gmail", logo: "Gmail" },
      ],
      tools: ["React", "n8n", "Airtable", "Gmail", "Alert System", "Make", "Zapier"],
      benefits: [
        { title: "No Missed Leads", text: "Every submission is captured and routed automatically.", icon: Bell },
        { title: "Faster Response", text: "Your team gets notified as soon as a lead arrives.", icon: Clock },
        { title: "Cleaner Records", text: "Lead data is stored consistently for follow-up.", icon: Database },
        { title: "Better Conversion", text: "Fast structured follow-up improves the chance of closing.", icon: TrendingUp },
      ],
      how: "We connect your lead sources to your CRM, database, email, and notification systems so new opportunities move immediately.",
    };
  }

  if (id === "followup") {
    return {
      steps: [
        { title: "1. Trigger Event", subtitle: "Lead action or time delay", tool: "CRM System", logo: "CRM System" },
        { title: "2. Check Status", subtitle: "Read customer stage", tool: "Airtable", logo: "Airtable" },
        { title: "3. Choose Message", subtitle: "Personalised next step", tool: "AI System", logo: "AI System" },
        { title: "4. Send Follow-up", subtitle: "Email or task reminder", tool: "Gmail", logo: "Gmail" },
        { title: "5. Log Activity", subtitle: "Track response and outcome", tool: "n8n", logo: "n8n" },
      ],
      tools: ["CRM System", "Airtable", "AI System", "Gmail", "n8n", "Make", "Zapier"],
      benefits: [
        { title: "Consistent Follow-up", text: "Customers receive timely messages without manual chasing.", icon: Bell },
        { title: "Personalised Timing", text: "Messages can change based on stage, priority, or behaviour.", icon: Users },
        { title: "Less Repetition", text: "Teams do not need to remember every reminder manually.", icon: Clock },
        { title: "Activity History", text: "Each follow-up can be logged for visibility.", icon: FileText },
      ],
      how: "We automate follow-up sequences based on customer actions, timing, CRM stage, and business rules.",
    };
  }

  if (id === "task-routing") {
    return {
      steps: [
        { title: "1. Request Arrives", subtitle: "Email, form, ticket, or chat", tool: "Gmail", logo: "Gmail" },
        { title: "2. Read Context", subtitle: "Identify category and priority", tool: "AI System", logo: "AI System" },
        { title: "3. Apply Rules", subtitle: "Choose owner or queue", tool: "n8n", logo: "n8n" },
        { title: "4. Assign Task", subtitle: "Route to the right person", tool: "CRM System", logo: "CRM System" },
        { title: "5. Notify Owner", subtitle: "Send alert and next step", tool: "Alert System", logo: "Alert System" },
      ],
      tools: ["Gmail", "AI System", "n8n", "CRM System", "Alert System", "Airtable", "Notion"],
      benefits: [
        { title: "Clear Ownership", text: "Every request gets assigned instead of sitting unattended.", icon: Users },
        { title: "Faster Routing", text: "Rules move work to the right person immediately.", icon: Route },
        { title: "Less Confusion", text: "Teams know who owns what and what happens next.", icon: Workflow },
        { title: "Better Prioritisation", text: "Urgent work can be detected and escalated faster.", icon: ShieldCheck },
      ],
      how: "We build routing rules that classify incoming work and send it to the right owner, queue, or workflow automatically.",
    };
  }

  if (id === "ticket-workflow") {
    return {
      steps: [
        { title: "1. Ticket Created", subtitle: "Customer issue captured", tool: "Support Desk", logo: "" },
        { title: "2. Categorise", subtitle: "Classify issue type", tool: "AI System", logo: "AI System" },
        { title: "3. Escalate", subtitle: "Apply SLA and priority", tool: "n8n", logo: "n8n" },
        { title: "4. Update Status", subtitle: "Track progress", tool: "Airtable", logo: "Airtable" },
        { title: "5. Notify Customer", subtitle: "Send resolution update", tool: "Gmail", logo: "Gmail" },
      ],
      tools: ["AI System", "n8n", "Airtable", "Gmail", "Alert System", "CRM System"],
      benefits: [
        { title: "Faster Support", text: "Tickets move through the right process without manual sorting.", icon: Headphones },
        { title: "Better Escalation", text: "High-priority issues can be routed before they become bigger problems.", icon: ShieldCheck },
        { title: "Status Visibility", text: "Teams can see what is open, pending, or resolved.", icon: BarChart3 },
        { title: "Cleaner Communication", text: "Customers and teams receive consistent updates.", icon: Bell },
      ],
      how: "We automate ticket intake, categorisation, escalation, status updates, and notifications so support work moves predictably.",
    };
  }

  if (id === "bpa") {
    return {
      steps: [
        { title: "1. Map Process", subtitle: "Document current workflow", tool: "Notion", logo: "Notion" },
        { title: "2. Find Bottleneck", subtitle: "Identify wasted steps", tool: "Workflow Map", logo: "" },
        { title: "3. Redesign Flow", subtitle: "Simplify the process", tool: "AI System", logo: "AI System" },
        { title: "4. Automate Steps", subtitle: "Build repeatable workflows", tool: "n8n", logo: "n8n" },
        { title: "5. Maintain & Improve", subtitle: "Human review and optimization", tool: "Dashboard", logo: "" },
      ],
      tools: ["Notion", "AI System", "n8n", "Airtable", "Google Analytics", "Search Console", "Dashboard"],
      benefits: [
        { title: "Improves Visibility", text: "SEO and analytics help turn operational improvements into discoverable growth.", icon: TrendingUp },
        { title: "Removes Bottlenecks", text: "Slow manual steps are redesigned into cleaner workflows.", icon: Workflow },
        { title: "Keeps Humans in Control", text: "Important decisions can include approval steps, reviews, and clear ownership.", icon: Users },
        { title: "Ongoing Maintenance", text: "Systems can be monitored, improved, and adjusted as the business changes.", icon: ShieldCheck },
      ],
      how: "We analyse workflows, improve visibility with SEO and analytics, automate repetitive work, and add human-in-the-loop review plus maintenance so the system stays reliable over time.",
    };
  }

  if (id === "reporting") {
    return {
      steps: [
        { title: "1. Collect Data", subtitle: "Pull from tools and records", tool: "Airtable", logo: "Airtable" },
        { title: "2. Clean Metrics", subtitle: "Format and validate values", tool: "n8n", logo: "n8n" },
        { title: "3. Build Dashboard", subtitle: "Visualise KPIs", tool: "Grafana", logo: "Grafana" },
        { title: "4. Send Report", subtitle: "Scheduled summary", tool: "Gmail", logo: "Gmail" },
        { title: "5. Alert Changes", subtitle: "Notify when metrics shift", tool: "Alert System", logo: "Alert System" },
      ],
      tools: ["Airtable", "n8n", "Grafana", "Gmail", "Alert System", "Google Sheets", "Dashboard"],
      benefits: [
        { title: "Better Decisions", text: "Important numbers become visible without manual reporting.", icon: TrendingUp },
        { title: "Less Spreadsheet Work", text: "Reports are generated automatically from live data.", icon: Database },
        { title: "Faster Visibility", text: "Teams see changes earlier and can respond quicker.", icon: Bell },
        { title: "Clear KPIs", text: "Dashboards show what matters instead of scattered data.", icon: BarChart3 },
      ],
      how: "We connect your business data sources, clean the numbers, build dashboards, and automate reports or alerts.",
    };
  }

  return {
    steps: [
      { title: "1. Understand Need", subtitle: "Review the workflow", tool: "Discovery", logo: "" },
      { title: "2. Design System", subtitle: "Map the best solution", tool: "Workflow", logo: "" },
      { title: "3. Connect Tools", subtitle: "Integrate your stack", tool: "n8n", logo: "n8n" },
      { title: "4. Automate Work", subtitle: "Remove manual steps", tool: "AI System", logo: "AI System" },
      { title: "5. Track Outcome", subtitle: "Measure the result", tool: "Dashboard", logo: "" },
    ],
    tools: ["n8n", "AI System", "Airtable", "Gmail", "Dashboard"],
    benefits: [
      { title: "Saves Time", text: "The workflow becomes easier to run.", icon: Clock },
      { title: "Reduces Errors", text: "Automation reduces manual copying and missed steps.", icon: ShieldCheck },
      { title: "Improves Visibility", text: "You can track what happens across the process.", icon: BarChart3 },
      { title: "Scales With You", text: "The system can grow with the business.", icon: Users },
    ],
    how: "We design and connect the right workflow for your operational need.",
  };
}
export default function ServiceModal({ service, onClose }: { service: Service | null; onClose: () => void }) {
  if (!service) return null;

  const activeService = service;
  const config = getConfig(activeService);

  function goToAutomationRequest() {
    window.dispatchEvent(
      new CustomEvent("mikeops-service-request", {
        detail: {
          serviceId: activeService.id ?? "",
          serviceTitle: activeService.title,
          serviceDescription: activeService.description,
        },
      })
    );

    onClose();

    setTimeout(() => {
      document.querySelector("#automation-request")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-md">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[92vh] w-full max-w-7xl overflow-hidden rounded-[30px] border border-blue-400/40 bg-[#06111f] p-3 text-white shadow-2xl md:p-3"
      >
        <button type="button" onClick={onClose} className="absolute right-6 top-6 rounded-full p-2 text-white/80 hover:bg-white/10" aria-label="Close service details">
          <X size={28} />
        </button>

        <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">MikeOps Service</p>

        <h2 className="mt-3 max-w-5xl text-2xl font-black tracking-tight md:text-4xl">{activeService.title}</h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">{activeService.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-lg border border-blue-400/25 bg-slate-950/60 px-4 py-2 text-sm text-slate-200">
            <CalendarDays size={16} className="text-cyan-300" />
            Typical implementation: 2–7 days
          </span>

          <span className="inline-flex items-center gap-2 rounded-lg border border-blue-400/25 bg-slate-950/60 px-4 py-2 text-sm text-slate-200">
            <Link2 size={16} className="text-emerald-300" />
            Integrate with your existing tools
          </span>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.6fr_0.9fr]">
          <div>
            <h3 className="mb-3 text-lg font-black">What it looks like</h3>

            <div className="grid grid-cols-5 gap-1 md:gap-3">
              {config.steps.map((step, index) => {
                const logo = logoUrl(step.logo);

                return (
                  <div key={step.title} className="relative rounded-xl border border-white/10 bg-slate-950/70 p-1.5 text-center shadow-lg md:rounded-2xl md:p-3">
                    {index < config.steps.length - 1 && (
                      <div className="absolute -right-4 top-1/2 10 hidden -translate-y-1/2 text-cyan-300 md:block">
                        <ArrowRight className="animate-pulse drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]" size={26} />
                      </div>
                    )}

                    <p className="text-[9px] font-black leading-tight md:text-sm">{step.title}</p>
                    <p className="mt-1 hidden min-h-[34px] text-[11px] leading-relaxed text-slate-300 sm:block">{step.subtitle}</p>

                    <div className="mx-auto mt-2 flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 ring-1 ring-white/10 md:mt-3 md:h-12 md:w-12 md:rounded-2xl">
                      {logo ? (
                        <img
                          src={logo}
                          alt={step.tool}
                          className="h-5 w-5 object-contain md:h-8 md:w-8"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <Server size={22} className="text-blue-300 md:size-[38px]" />
                      )}
                    </div>

                    <div className="mx-auto mt-2 hidden rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs font-bold sm:inline-flex">
                      {step.tool}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex justify-center">
              <span className="rounded-full bo400/30 bg-emerald-500/10 px-5 py-2 text-sm font-bold text-emerald-200">
                {getStatusLabel(activeService)}
              </span>
            </div>

            <h3 className="mt-4 mb-3 text-lg font-black">Tools & Integrations</h3>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {config.tools.map((tool) => {
                const logo = logoUrl(tool);

                return (
                  <div key={tool} className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-2 py-2">
                    {logo ? <img
                        src={logo}
                        alt={tool}
                        className="h-5 w-5 object-contain"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      /> : <Database size={22} className="text-blue-300" />}
                    <span className="text-xs font-bold">{tool}</span>
                  </div>
              );
              })}
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/70 p-3">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-300">
                  <Workflow size={24} />
                </div>
                <div>
                  <h4 className="font-black">How it works</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{config.how}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-white/10 lg:border-l lg:pl-8">
            <h3 className="mb-3 text-lg font-black">Why it helps</h3>

            <div className="space-y-2">
              {config.benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black">{benefit.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">{benefit.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-2 border-t border-white/10 pt-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="button" onClick={goToAutomationRequest} className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-900/40 hover:bg-blue-500">
              <PlusCircle size={26} />
              Request this service
              <ArrowRight size={22} />
            </button>

            <div className="ml-auto hidden items-center gap-3 text-sm font-semibold text-slate-300 lg:flex">
              <span className="text-emerald-300">Secure.</span>
              <span className="text-emerald-300">Reliable.</span>
              <span className="text-cyan-300">Built for scale.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
