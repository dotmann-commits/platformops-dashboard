// ─── Mock data for MikeOps Dashboard ───────────────────────────────────

export const skillGroups = [
  {
    id: 'platform-engineering',
    label: 'Platform Engineering',
    color: 'blue',
    skills: [
      { name: 'Networking & Infrastructure', level: 80, description: 'Cloud systems, VM provisioning, networking, GitHub Actions, deployment workflows' },
      { name: 'CI/CD Pipelines', level: 75, description: 'GitHub Actions, deployment workflows, environment management' },
      { name: 'Docker & Containers', level: 82, description: 'Containerisation, docker-compose, service orchestration' },
    ],
  },
  {
    id: 'operations-support',
    label: 'Operations Support',
    color: 'green',
    skills: [
      { name: 'Incident & Issue Triage', level: 92, description: 'Root-cause analysis, escalation paths, SLA tracking' },
      { name: 'Internal Workflow Design', level: 88, description: 'Mapping, gap analysis, and redesign of business processes' },
      { name: 'Cross-team Collaboration', level: 92, description: 'Bridging technical and non-technical stakeholders' },
    ],
  },
  {
    id: 'crm-automation',
    label: 'CRM Automation',
    color: 'orange',
    skills: [
      { name: 'HubSpot / Salesforce Config', level: 78, description: 'Pipeline setup, field mapping, deal stage automation' },
      { name: 'Lead Capture & Routing', level: 88, description: 'Form integrations, webhook triggers, assignment rules' },
      { name: 'Follow-up Sequences', level: 84, description: 'Email/task automation tied to CRM events' },
    ],
  },
  {
    id: 'business-process',
    label: 'Business Process Improvement',
    color: 'teal',
    skills: [
      { name: 'Process Mapping (BPMN)', level: 78, description: 'As-is / to-be diagrams, swimlane flows' },
      { name: 'KPI & Metrics Definition', level: 82, description: 'Identifying measurable outcomes for process changes' },
      { name: 'Change Management Support', level: 68, description: 'Documentation, training guides, stakeholder comms' },
    ],
  },
  {
    id: 'workflow-automation',
    label: 'Workflow Automation',
    color: 'cyan',
    skills: [
      { name: 'n8n / Make (Integromat)', level: 82, description: 'Multi-step automations, webhook triggers, API calls' },
      { name: 'Zapier Integrations', level: 86, description: 'App connectors, filters, data transformation' },
      { name: 'REST API Consumption', level: 84, description: 'Reading API docs, building HTTP request chains' },
    ],
  },
  {
    id: 'web-applications',
    label: 'Web Applications',
    color: 'rose',
    skills: [
      { name: 'React + TypeScript', level: 60, description: 'Component design, hooks, state management basics' },
      { name: 'Tailwind CSS', level: 68, description: 'Utility-first styling, responsive layouts' },
      { name: 'Backend Basics (Node/Supabase)', level: 55, description: 'REST endpoints, database queries, auth basics' },
    ],
  },
];

export const experiences = [
  {
    role: 'Operations Support Specialist',
    company: 'Current Employer',
    period: '2022 – Present',
    highlights: [
      'Support day-to-day business operations across multiple departments',
      'Troubleshoot operational issues and coordinate resolutions with technical teams',
      'Identify and document opportunities for workflow automation',
      'Improve internal processes to reduce manual effort and errors',
      'Work directly with business teams to translate needs into technical solutions',
      'Create SOPs and guides for recurring operational tasks',
    ],
  },
];

export const services = [
  {
    id: 'crm-setup',
    title: 'CRM Automation Setup',
    description: 'Configure pipelines, stages, and automated actions inside your CRM so deals and contacts move forward without manual nudges.',
    icon: 'Settings',
  },
   
  // existing services...

  {
    id: "infra-automation-monitoring",
    icon: "BarChart2",
    title: "Infrastructure Automation & Monitoring",
    description:
      "Combine system administration, cloud operations, and automation to monitor services, detect issues, and trigger alerts or follow-up workflows before problems become business blockers.",
  },
  {
    id: 'lead-capture',
    title: 'Lead Capture Workflow',
    description: 'Connect your web forms, ads, or landing pages to your CRM and notification tools automatically.',
    icon: 'UserPlus',
  },
  {
    id: 'followup',
    title: 'Customer Follow-up Automation',
    description: 'Trigger personalised emails, tasks, or messages based on customer actions or time-based rules.',
    icon: 'Mail',
  },
  {
    id: 'task-routing',
    title: 'Internal Task Routing',
    description: 'Route incoming requests, tickets, or tasks to the right person based on rules you define.',
    icon: 'GitBranch',
  },
  {
    id: 'ticket-workflow',
    title: 'Support Ticket Workflow',
    description: 'Automate ticket creation, assignment, escalation, and resolution notifications.',
    icon: 'Ticket',
  },
  {
    id: 'bpa',
    title: 'Business Process Automation',
    description: 'Map your manual processes and replace repetitive steps with automated workflows using n8n or Make.',
    icon: 'Zap',
  },
  {
    id: 'reporting',
    title: 'Reporting & Dashboard Automation',
    description: 'Aggregate data from multiple sources and deliver scheduled reports or live dashboards to stakeholders.',
    icon: 'BarChart2',
  },
];

export const projects = [
  {
    id: 'ai-email-classifier',
    title: 'AI Email Classification & Routing System',
    tag: 'AI Operations',
    tagColor: 'cyan',
    problem: 'Business emails were arriving in one inbox with no automatic sorting, causing manual triage, slower response times, and inconsistent department routing.',
    solution: 'Built an n8n workflow that reads new Gmail messages, cleans the email data, sends the content to an AI classifier, validates the JSON response, routes emails by department, applies Gmail labels, logs results in Google Sheets, and sends Slack notifications.',
    tools: ['n8n', 'Gmail API', 'OpenRouter', 'Google Sheets', 'Slack'],
    impact: 'Automated email triage across Sales, Customer Service, HR, Finance, Operations, and Other categories with confidence scoring and explainable AI reasoning.',
  },
  {
    id: 'crm-lead-automation',
    title: 'CRM Lead Automation Pipeline',
    tag: 'CRM Automation',
    tagColor: 'orange',
    problem: 'Lead information from forms and conversations needed to be manually copied into databases, making follow-up slow and increasing the risk of missing qualified prospects.',
    solution: 'Designed a lead intake system that captures automation requests from the website, sends structured data through a webhook, stores records in Airtable, and prepares the workflow for branded email follow-up and internal notifications.',
    tools: ['React', 'n8n', 'Airtable', 'Webhook', 'Gmail'],
    impact: 'Created a reusable lead operations pipeline that turns website visitors into structured CRM records ready for follow-up, qualification, and automation planning.',
  },
  {
    id: 'website-ai-assistant',
    title: 'MikeOps Website AI Assistant',
    tag: 'AI Assistant',
    tagColor: 'teal',
    problem: 'Visitors needed a simple way to ask questions, explore automation services, and share their business challenges without immediately filling a long form.',
    solution: 'Integrated a conversational AI assistant into the website experience to answer automation questions, guide visitors, collect context, and support lead qualification before handoff.',
    tools: ['Voiceflow', 'React', 'n8n', 'Airtable'],
    impact: 'Added an interactive AI touchpoint that makes the website feel more like a smart business system than a static portfolio page.',
  },
];

export const metrics = [
  { label: 'Core Skill Areas', value: '6', icon: 'Layers' },
  { label: 'Automation Projects', value: '3', icon: 'Zap' },
  { label: 'Business Process Areas', value: '5', icon: 'GitBranch' },
  { label: 'Automation Coverage', value: 'End-to-End', icon: 'Activity' }
];

export const automationTypes = [
  'CRM Automation',
  'Lead Capture',
  'Customer Follow-up',
  'Internal Task Routing',
  'Support Ticket Workflow',
  'Reporting & Dashboards',
  'Business Process Automation',
  'Other',
];

export const priorityLevels = [
  { value: 'low', label: 'Low – Planning stage, no urgency' },
  { value: 'medium', label: 'Medium – Would like to start soon' },
  { value: 'high', label: 'High – Affecting operations now' },
  { value: 'critical', label: 'Critical – Business impact daily' },
];


  
