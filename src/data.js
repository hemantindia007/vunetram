// Edit this file to update the site content.

export const company = {
  name: 'Vunetram Technologies',
  tagline: 'Cloud Migration · Hybrid Solutions · DevOps · Monitoring',
  email: 'hello@vunetram.com',
  phone: '+91 00000 00000',
  location: 'Bengaluru, India',
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Technology', href: '#stack' },
  { label: 'Industries', href: '#industries' },
  { label: 'Team', href: '#leadership' },
  { label: 'Insights', href: '#insights' },
]

// Mega-menu structure for the dropdown navbar.
// Each item has an icon + one-line description so the menu is scannable.
export const megaMenu = [
  {
    label: 'Solutions',
    width: 'wide',
    groups: [
      {
        heading: 'Advise & Migrate',
        items: [
          { label: 'Cloud Strategy & Assessment', desc: 'Readiness, TCO & roadmap', href: '/#services', icon: 'spark' },
          { label: 'Cloud Migration', desc: 'AWS, Azure or GCP, zero-downtime', href: '/#services', icon: 'cloud' },
          { label: 'Hybrid Cloud', desc: 'Unify on-prem & multi-cloud', href: '/#services', icon: 'hybrid' },
          { label: 'Application Modernization', desc: 'Monolith to microservices', href: '/#services', icon: 'layers' },
        ],
      },
      {
        heading: 'Build & Automate',
        items: [
          { label: 'AI & GenAI Modernization', desc: 'RAG, LLM apps & agents', href: '/#services', icon: 'ai' },
          { label: 'DevOps & Automation', desc: 'CI/CD, IaC & GitOps', href: '/#services', icon: 'devops' },
          { label: 'Data & Analytics', desc: 'Pipelines, lakes & BI', href: '/#services', icon: 'data' },
          { label: 'Observability', desc: 'Metrics, logs, traces & SLOs', href: '/#services', icon: 'monitor' },
        ],
      },
      {
        heading: 'Secure & Optimize',
        items: [
          { label: 'Cloud Security & Compliance', desc: 'IAM, posture & ISO/SOC2', href: '/#services', icon: 'shield' },
          { label: 'FinOps & Cost Optimization', desc: 'Right-size & govern spend', href: '/#services', icon: 'coins' },
          { label: 'Managed Cloud', desc: '24x7 run, optimize & support', href: '/#services', icon: 'check' },
        ],
      },
    ],
    featured: {
      eyebrow: 'Featured',
      title: 'From pilot to production AI',
      text: 'See how we ship GenAI with guardrails in weeks, not quarters.',
      href: '/#work',
    },
  },
  {
    label: 'Industries',
    items: [
      { label: 'BFSI & Fintech', desc: 'Secure, compliant cloud', href: '/#industries', icon: 'bank' },
      { label: 'Healthcare', desc: 'Resilient, auditable systems', href: '/#industries', icon: 'health' },
      { label: 'Retail & E-commerce', desc: 'Scale for peak traffic', href: '/#industries', icon: 'cart' },
      { label: 'Manufacturing', desc: 'Modernize operations', href: '/#industries', icon: 'factory' },
      { label: 'Media & SaaS', desc: 'Ship features faster', href: '/#industries', icon: 'media' },
      { label: 'Logistics', desc: 'Reliable, real-time data', href: '/#industries', icon: 'truck' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About Vunetram', desc: 'Our mission and approach', href: '/#about', icon: 'spark' },
      { label: 'Leadership', desc: 'The people behind the work', href: '/#leadership', icon: 'check' },
      { label: 'Technology', desc: 'The stack we build on', href: '/#stack', icon: 'devops' },
      { label: 'Case Studies', desc: 'Real outcomes, real numbers', href: '/#work', icon: 'monitor' },
      { label: 'Insights', desc: 'Blog, guides & events', href: '/#insights', icon: 'media' },
      { label: 'Careers', desc: 'Build the cloud with us', href: '/careers', icon: 'cloud' },
    ],
  },
]

export const heroSlides = [
  {
    eyebrow: 'AI & GenAI Modernization',
    title: 'Turn your cloud into an',
    highlight: 'AI advantage',
    text: 'Cloud is the foundation, GenAI is the accelerator. We help you take AI initiatives from pilot to production — RAG, agents, MLOps, and LLM apps on a platform built to scale.',
    primary: { label: 'Explore AI solutions', href: '#services' },
    secondary: { label: 'Talk to an expert', href: '#contact' },
  },
  {
    eyebrow: 'Cloud Migration',
    title: 'Migrate to the cloud',
    highlight: 'without the downtime',
    text: 'Assess, plan, and move workloads to AWS, Azure, or GCP with a pragmatic, low-risk migration path — from first assessment to go-live.',
    primary: { label: 'Start your migration', href: '#contact' },
    secondary: { label: 'Explore services', href: '#services' },
  },
  {
    eyebrow: 'Hybrid Cloud',
    title: 'Unify on-prem and',
    highlight: 'multi-cloud',
    text: 'One secure, well-governed platform across clouds and data centers, with consistent networking, identity, and policy.',
    primary: { label: 'Design your platform', href: '#contact' },
    secondary: { label: 'See case studies', href: '#work' },
  },
  {
    eyebrow: 'DevOps & Automation',
    title: 'Ship faster with',
    highlight: 'automated delivery',
    text: 'CI/CD pipelines, infrastructure as code, and GitOps workflows — then run them with managed 24x7 support.',
    primary: { label: 'Automate your pipeline', href: '#contact' },
    secondary: { label: 'Our tech stack', href: '#stack' },
  },
  {
    eyebrow: 'Observability',
    title: 'See everything with',
    highlight: 'full-stack monitoring',
    text: 'Metrics, logs, and traces with SLOs and smart alerting, so you catch issues before your customers do.',
    primary: { label: 'Get observability', href: '#contact' },
    secondary: { label: 'How we work', href: '#about' },
  },
]

export const services = [
  {
    title: 'Cloud Strategy & Assessment',
    description:
      'Start with a clear plan. We assess your estate, costs, and risks, then hand you a pragmatic migration and modernization roadmap.',
    points: ['Readiness & risk assessment', 'TCO & business case', 'Target architecture & roadmap'],
    icon: 'spark',
  },
  {
    title: 'Cloud Migration',
    description:
      'Assess, plan, and move workloads to AWS, Azure, or GCP with minimal downtime. Rehost, replatform, or refactor — we pick the right path for each application.',
    points: ['Migration assessment & TCO analysis', 'Zero/low-downtime cutovers', 'Data & database migration'],
    icon: 'cloud',
  },
  {
    title: 'Hybrid Cloud Solutions',
    description:
      'Unify on-prem and multi-cloud estates into one secure, well-governed platform with consistent networking, identity, and policy.',
    points: ['Multi-cloud & on-prem connectivity', 'Landing zones & governance', 'Cost & workload placement'],
    icon: 'hybrid',
  },
  {
    title: 'Application Modernization',
    description:
      'Move from brittle monoliths to cloud-native services. We containerize, re-platform, and refactor apps for scale and speed.',
    points: ['Monolith to microservices', 'Containerization & Kubernetes', 'API-first re-platforming'],
    icon: 'layers',
  },
  {
    title: 'AI & GenAI Modernization',
    description:
      'Take AI from pilot to production. We build RAG pipelines, LLM apps, and agentic workflows, with the MLOps and guardrails to run them safely at scale.',
    points: ['GenAI & RAG solution design', 'LLMOps / MLOps pipelines', 'Amazon Bedrock, Azure OpenAI, Vertex AI'],
    icon: 'ai',
  },
  {
    title: 'DevOps Delivery & Support',
    description:
      'Build CI/CD pipelines, infrastructure as code, and automated release workflows — then run them with 24x7 managed support.',
    points: ['CI/CD & GitOps pipelines', 'Infrastructure as Code (Terraform)', 'Managed 24x7 operations'],
    icon: 'devops',
  },
  {
    title: 'Data & Analytics',
    description:
      'Turn data into decisions. We build pipelines, lakes, and warehouses with BI and ML-ready foundations on the cloud.',
    points: ['Data lakes & warehouses', 'ETL / ELT pipelines', 'BI dashboards & ML-ready data'],
    icon: 'data',
  },
  {
    title: 'Monitoring & Observability',
    description:
      'Full-stack visibility with metrics, logs, and traces. Dashboards, alerting, and SLOs so you catch issues before customers do.',
    points: ['Metrics, logs & distributed tracing', 'SLOs, alerting & on-call', 'Prometheus, Grafana, ELK, Datadog'],
    icon: 'monitor',
  },
  {
    title: 'Cloud Security & Compliance',
    description:
      'Security built in from day one. Least-privilege access, encryption, and posture management aligned to frameworks like ISO 27001 and SOC 2.',
    points: ['IAM & least-privilege access', 'Posture & vulnerability management', 'ISO 27001 / SOC 2 readiness'],
    icon: 'shield',
  },
  {
    title: 'FinOps & Cost Optimization',
    description:
      'Cut cloud spend without cutting corners. We right-size, autoscale, and put spend governance in place so costs stay predictable.',
    points: ['Right-sizing & autoscaling', 'Spend visibility & budgets', 'Reserved & savings-plan strategy'],
    icon: 'coins',
  },
  {
    title: 'Managed Cloud Services',
    description:
      'Hand off the run. We operate, patch, optimize, and support your cloud 24x7 — with your team fully in the loop.',
    points: ['24x7 managed operations', 'Patching & optimization', 'Shared on-call & documentation'],
    icon: 'check',
  },
]

export const stats = [
  { value: '120+', label: 'Workloads Migrated' },
  { value: '99.95%', label: 'Platform Uptime' },
  { value: '40%', label: 'Avg. Cloud Cost Saved' },
  { value: '24x7', label: 'Managed Support' },
]

export const industries = [
  { name: 'BFSI & Fintech', icon: 'bank' },
  { name: 'Healthcare', icon: 'health' },
  { name: 'Retail & E-commerce', icon: 'cart' },
  { name: 'Manufacturing', icon: 'factory' },
  { name: 'Media & SaaS', icon: 'media' },
  { name: 'Logistics', icon: 'truck' },
]

export const differentiators = [
  {
    title: 'Cloud-native by default',
    description: 'We design for automation, resilience, and scale from day one — not as an afterthought.',
  },
  {
    title: 'Platform-agnostic',
    description: 'AWS, Azure, GCP, or hybrid. We recommend what fits your workloads and budget, not a vendor quota.',
  },
  {
    title: 'You own everything',
    description: 'Infrastructure as code, documented pipelines, and knowledge transfer so your team stays in control.',
  },
]

export const testimonials = [
  {
    quote:
      'Vunetram migrated our core platform to a hybrid setup with zero customer-facing downtime. Their DevOps automation cut our release cycle from weeks to days.',
    author: 'Ananya Rao',
    role: 'Head of Engineering',
    company: 'Fintech Platform',
    rating: 5,
  },
  {
    quote:
      'They took our GenAI pilot to production in weeks. The RAG assistant they built on Bedrock now handles over half our support tickets with real guardrails.',
    author: 'Michael Chen',
    role: 'VP of Product',
    company: 'SaaS Company',
    rating: 5,
  },
  {
    quote:
      'The observability stack they set up gives us real confidence. We now catch issues long before they reach production, and our on-call load dropped sharply.',
    author: 'Priya Nair',
    role: 'VP of Technology',
    company: 'Healthcare Group',
    rating: 5,
  },
  {
    quote:
      'A genuine partner, not just a vendor. They documented everything and trained our team to run it ourselves — no lock-in, no mystery.',
    author: 'Rohan Mehta',
    role: 'Chief Technology Officer',
    company: 'Retail Group',
    rating: 5,
  },
  {
    quote:
      'Our cloud bill dropped 40% in the first quarter after their FinOps review, with no impact on performance. The ROI was obvious almost immediately.',
    author: 'Sarah Williams',
    role: 'Director of Cloud',
    company: 'Logistics Firm',
    rating: 5,
  },
  {
    quote:
      'From Kubernetes to CI/CD to monitoring, they modernized our whole delivery pipeline. Deploys that used to scare us are now routine.',
    author: 'David Okafor',
    role: 'Engineering Manager',
    company: 'Media & Streaming',
    rating: 5,
  },
]

export const clients = ['Northwind', 'Acme Corp', 'BlueOrbit', 'Finvera', 'Medisys', 'Cartly']

// Replace with your real founders and leadership team.
export const leadership = [
  {
    name: 'Founder Name',
    title: 'Founder & CEO',
    bio: 'Sets the vision and leads Vunetram\u2019s mission to make cloud and AI deliver real business value.',
    photo: '/images/team/leader-1.svg',
    linkedin: '#',
    email: 'ceo@vunetram.com',
  },
  {
    name: 'Co-founder Name',
    title: 'Co-founder & CTO',
    bio: 'Drives technical strategy across cloud architecture, DevOps, and GenAI engineering.',
    photo: '/images/team/leader-2.svg',
    linkedin: '#',
    email: 'cto@vunetram.com',
  },
  {
    name: 'Leader Name',
    title: 'Chief Operating Officer',
    bio: 'Runs delivery and operations, ensuring every engagement ships on time and to standard.',
    photo: '/images/team/leader-3.svg',
    linkedin: '#',
    email: 'coo@vunetram.com',
  },
  {
    name: 'Leader Name',
    title: 'Chief Revenue Officer',
    bio: 'Builds partnerships and helps enterprises find the right path to cloud and AI adoption.',
    photo: '/images/team/leader-4.svg',
    linkedin: '#',
    email: 'cro@vunetram.com',
  },
]

export const certifications = [
  'AWS Partner',
  'Microsoft Azure',
  'Google Cloud',
  'Kubernetes (CKA)',
  'Terraform Certified',
  'ISO 27001 Aligned',
]

export const caseStudies = [
  {
    tag: 'GenAI',
    title: 'A production RAG assistant for support teams',
    summary:
      'Built a retrieval-augmented GenAI assistant on Amazon Bedrock, grounded in the client\u2019s own docs, with guardrails and evaluation.',
    image: '/images/case-ai.svg',
    metrics: [
      { value: '55%', label: 'Faster ticket resolution' },
      { value: '3 wk', label: 'Pilot to production' },
    ],
  },
  {
    tag: 'Fintech',
    title: 'Zero-downtime migration to a hybrid platform',
    summary:
      'Migrated a core payments platform from on-prem to a hybrid AWS setup with no customer-facing downtime.',
    image: '/images/case-fintech.svg',
    metrics: [
      { value: '0', label: 'Downtime minutes' },
      { value: '38%', label: 'Infra cost saved' },
    ],
  },
  {
    tag: 'SaaS',
    title: 'From weekly releases to daily deploys',
    summary:
      'Rebuilt CI/CD with GitOps and IaC, giving a SaaS team safe, automated, multiple-times-a-day releases.',
    image: '/images/case-saas.svg',
    metrics: [
      { value: '10x', label: 'Faster releases' },
      { value: '70%', label: 'Fewer rollbacks' },
    ],
  },
  {
    tag: 'Retail',
    title: 'Full-stack observability before peak season',
    summary:
      'Rolled out metrics, logs, traces, and SLO-based alerting ahead of a high-traffic retail event.',
    image: '/images/case-retail.svg',
    metrics: [
      { value: '99.95%', label: 'Peak uptime' },
      { value: '4x', label: 'Faster incident MTTR' },
    ],
  },
]

export const insights = [
  {
    type: 'Blog',
    date: 'Oct 2026',
    title: 'A pragmatic checklist for your first cloud migration',
    excerpt: 'The assessment steps that save weeks of rework — and the mistakes we see most often.',
    image: '/images/insight-migration.svg',
  },
  {
    type: 'Guide',
    date: 'Sep 2026',
    title: 'GitOps in practice: safer deploys with Argo CD',
    excerpt: 'How we structure environments, promotions, and rollbacks for enterprise teams.',
    image: '/images/insight-gitops.svg',
  },
  {
    type: 'Event',
    date: 'Nov 2026',
    title: 'Webinar: Cutting cloud spend without cutting corners',
    excerpt: 'Join our engineers for a live session on right-sizing, autoscaling, and FinOps basics.',
    image: '/images/insight-finops.svg',
  },
]

export const faqs = [
  {
    q: 'How long does a typical cloud migration take?',
    a: 'It depends on scope, but most mid-sized migrations run 6–16 weeks. We start with a short assessment to give you a realistic timeline, cost estimate, and risk plan before any work begins.',
  },
  {
    q: 'Which cloud providers do you work with?',
    a: 'AWS, Microsoft Azure, and Google Cloud — plus hybrid and on-prem setups. We recommend what fits your workloads and budget rather than pushing a single vendor.',
  },
  {
    q: 'Do you offer ongoing support after migration?',
    a: 'Yes. We provide managed 24x7 operations, monitoring, and optimization. You can hand off fully or keep your team in the loop with shared on-call and documentation.',
  },
  {
    q: 'Will our team be locked out of our own infrastructure?',
    a: 'Never. Everything is infrastructure as code, documented, and handed over with knowledge transfer. You always own your accounts, pipelines, and configuration.',
  },
  {
    q: 'How do you handle security and compliance?',
    a: 'We build least-privilege access, encryption, and auditability in from day one, and align to frameworks like ISO 27001. We can tailor controls to your industry requirements.',
  },
]

export const careers = {
  perks: [
    {
      title: 'Remote-first & flexible',
      description: 'Work where you do your best thinking, with flexible hours and a focus on outcomes.',
      icon: 'hybrid',
    },
    {
      title: 'Learn & get certified',
      description: 'Sponsored AWS, Azure, and GCP certifications plus a yearly learning budget.',
      icon: 'devops',
    },
    {
      title: 'Real ownership',
      description: 'Small teams, big impact. You ship to production and own what you build.',
      icon: 'cloud',
    },
    {
      title: 'Health & wellbeing',
      description: 'Comprehensive health cover for you and your family, and generous time off.',
      icon: 'health',
    },
    {
      title: 'Modern toolchain',
      description: 'Terraform, Kubernetes, GitOps, and best-in-class observability — no legacy drag.',
      icon: 'monitor',
    },
    {
      title: 'Mentorship culture',
      description: 'Pair with senior cloud engineers and grow fast through real project work.',
      icon: 'check',
    },
  ],
  values: [
    { title: 'Customer outcomes first', description: 'We measure success by the business value we create, not hours billed.' },
    { title: 'Automate everything', description: 'If we do it twice, we script it. Toil is a bug.' },
    { title: 'Default to transparency', description: 'Clear docs, honest status, and knowledge shared freely.' },
  ],
  openRoles: [
    {
      title: 'Senior Cloud Engineer',
      department: 'Engineering',
      location: 'Bengaluru / Remote',
      type: 'Full-time',
      description: 'Lead cloud migrations and architect scalable, secure landing zones on AWS and Azure.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote (India)',
      type: 'Full-time',
      description: 'Build and run CI/CD pipelines, IaC, and GitOps workflows for enterprise clients.',
    },
    {
      title: 'Site Reliability Engineer (SRE)',
      department: 'Operations',
      location: 'Bengaluru / Hybrid',
      type: 'Full-time',
      description: 'Own observability, SLOs, and incident response across managed customer platforms.',
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Pre-sales',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      description: 'Partner with clients to design hybrid and multi-cloud solutions that fit their goals.',
    },
    {
      title: 'DevOps Intern',
      department: 'Engineering',
      location: 'Remote (India)',
      type: 'Internship',
      description: 'Learn modern cloud operations hands-on alongside our senior engineering team.',
    },
  ],
}

export const techStack = [
  {
    group: 'Cloud',
    icon: 'cloud',
    blurb: 'The platforms we architect, migrate, and run on.',
    tools: ['AWS', 'Microsoft Azure', 'Google Cloud'],
  },
  {
    group: 'Containers & Orchestration',
    icon: 'hybrid',
    blurb: 'Portable, scalable workloads across any environment.',
    tools: ['Docker', 'Kubernetes', 'Helm', 'EKS / AKS / GKE'],
  },
  {
    group: 'Automation & IaC',
    icon: 'devops',
    blurb: 'Everything as code — repeatable, reviewable, reliable.',
    tools: ['Terraform', 'Ansible', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD'],
  },
  {
    group: 'Observability',
    icon: 'monitor',
    blurb: 'Metrics, logs, and traces for full-stack visibility.',
    tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'OpenTelemetry'],
  },
  {
    group: 'AI & GenAI',
    icon: 'ai',
    blurb: 'From RAG and LLM apps to agents and MLOps in production.',
    tools: ['Amazon Bedrock', 'Azure OpenAI', 'Vertex AI', 'LangChain', 'SageMaker', 'Vector DBs'],
    featured: true,
  },
]
