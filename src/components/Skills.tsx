import {
  Activity,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { skillGroups } from "../data/mockData";

const iconMap: Record<string, React.ElementType> = {
  "platform-engineering": Cloud,
  "operations-support": ShieldCheck,
  "crm-automation": Database,
  "business-process": Activity,
  "workflow-automation": Workflow,
  "web-applications": Code2,
};

const proofMap: Record<string, string[]> = {
  "platform-engineering": [
    "Docker deployments",
    "Networking & Infrastructure",
    "CI/CD workflow setup",
    "Monitoring foundations",
  ],
  "operations-support": [
    "Incident triage",
    "SLA awareness",
    "Process documentation",
    "Cross-team coordination",
  ],
  "crm-automation": [
    "CRM pipeline setup",
    "Lead routing",
    "Follow-up automation",
    "Customer data flow",
  ],
  "business-process": [
    "Workflow mapping",
    "SEO visibility",
    "KPI tracking",
    "Process redesign",
  ],
  "workflow-automation": [
    "n8n workflows",
    "Webhook systems",
    "API integrations",
    "Data transformation",
  ],
  "web-applications": [
    "React interfaces",
    "TypeScript structure",
    "Tailwind layouts",
    "Frontend deployment",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#020617] px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
            Capability Layer
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Practical systems expertise for modern business operations.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            MikeOps combines operations support, automation, CRM workflows, infrastructure systems, SEO visibility, and frontend engineering to design practical business solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.id] || Layers;
            const capabilities = proofMap[group.id] || group.skills.map((skill) => skill.name);

            return (
              <article
                key={group.id}
                className="group rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black text-slate-200">
                      {group.label}
                    </span>

                    <h3 className="mt-4 text-2xl font-black text-white">
                      {group.label}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-200">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="space-y-3">
                  {capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                    >
                      <GitBranch className="shrink-0 text-cyan-300" size={17} />
                      <span className="text-sm font-bold text-slate-100">
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    {group.skills.map((skill) => skill.description).join(" • ")}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
