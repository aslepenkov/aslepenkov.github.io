export interface Metric {
  value: string
  label: string
}

export interface Project {
  name: string
  blurb: string
  tags: string[]
  url: string
}

export interface Role {
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export const profile = {
  name: 'Alex Slepenkov',
  title: 'Senior Software Engineer | .NET, AWS, AI Agents',
  summary:
    'I specialize in agentic engineering: building the agents, tools, skills and harnesses that let LLMs run the full SDLC (design, code, test, review, deploy) behind automated quality gates. 8+ years in .NET; 4+ years shipping scalable TypeScript and AWS platforms.',
  email: 'alexmichel249@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alex-slepenkov/',
  github: 'https://github.com/aslepenkov',
  location: 'Astana, Kazakhstan',
  metrics: [
    { value: 'Since 2016', label: 'in software engineering' },
    { value: '35%', label: 'API latency cut on high-load DB operations' },
    { value: '200M+', label: 'rows/day in a near real-time ETL pipeline' },
  ] as Metric[],
}

export const projects: Project[] = [
  {
    name: '42 – Agentic Factory',
    blurb:
      'Autonomous full-SDLC pipeline (spec, tickets, parallel worktrees, clean-context review, verify, auto-fix) with planner, implementer, reviewer and verifier sub-agents. Works with Claude Code, Codex and Cursor.',
    tags: ['Agents', 'Sub-agents', 'Claude Code', 'Codex', 'Cursor'],
    url: 'https://github.com/aslepenkov/42',
  },
  {
    name: 'TestCat',
    blurb:
      'Minimalistic test-based code-analysis agent (chat-completion + tool-call loop) on the GitHub Copilot API. CLI, REST/WebSocket backend and dashboard, multi-service Docker.',
    tags: ['TypeScript', 'GitHub Copilot API', 'WebSocket', 'Docker'],
    url: 'https://github.com/aslepenkov/TestCat',
  },
  {
    name: 'dotnetcv – High-Scale Microservices Demo',
    blurb:
      'Language-agnostic e-commerce system using CQRS, Clean Architecture, the outbox pattern, RabbitMQ, Redis and PostgreSQL. Docker Compose, Kubernetes, LocalStack (AWS) and Grafana observability.',
    tags: ['.NET 9', 'Django', 'React', 'TypeScript', 'RabbitMQ', 'PostgreSQL', 'Kubernetes'],
    url: 'https://github.com/aslepenkov/dotnetcv',
  },
]

export const roles: Role[] = [
  {
    title: 'Senior Software Engineer',
    company: 'EPAM Systems',
    location: 'Astana, Kazakhstan',
    period: '12/2022 – Present',
    bullets: [
      'Built agentic debugging tools for .NET and JavaScript that find root causes autonomously.',
      'Built an AI code-review assistant and reusable AI skills; tuned the agent harness for reliability and output quality.',
      'Migrated .NET 6 to .NET 10 and delivered React/.NET features with AI agents.',
      'Designed and owned end-to-end distributed integration of legacy .NET systems with cloud-native REST APIs, enabling horizontal scaling and reducing coupling across core services; built on AWS (Lambda, SQS, SNS, S3, IAM) with Terraform, using idempotent processing, retries and dead-letter queues.',
      'Fixed a critical data-corruption defect in the frontend-to-API integration layer affecting data-driven tables.',
      'Cut API latency 35% on high-load database operations through advanced indexing and efficient data-retrieval patterns.',
      'Ran services on Kubernetes with observability (logs, metrics, alerts); built an end-to-end test suite and maintained GitLab CI/CD pipelines.',
      'Mentored junior engineers on building scalable, highly available services with long-term maintainability.',
    ],
  },
  {
    title: 'Software Engineer',
    company: '2GIS',
    location: 'Novosibirsk, Russia',
    period: '07/2021 – 12/2022',
    bullets: [
      'Built an ETL pipeline processing 200M+ rows daily for near real-time analytics.',
      'Cut deployment time from 1 hour to 10 minutes (TeamCity pipelines); built an Excel-to-SQL tool saving about 10 hours/week.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'FG BCS',
    location: 'Novosibirsk, Russia',
    period: '11/2020 – 07/2021',
    bullets: ['Delivered DWH-support backend features, improving reporting efficiency by 25%.'],
  },
  {
    title: 'Junior Software Engineer',
    company: 'XTools Pro',
    location: 'Novosibirsk, Russia',
    period: '04/2018 – 11/2020',
    bullets: ['Built asynchronous task-queue geodata search for ArcGIS and Excel-to-ArcGIS connectors.'],
  },
  {
    title: 'Junior Software Engineer',
    company: 'EPAM Systems',
    location: 'Karaganda, Kazakhstan',
    period: '01/2016 – 08/2016',
    bullets: ['Built custom VSTO-based UI controls for the Microsoft Office suite, improving onboarding experience.'],
  },
]

export const skills: SkillGroup[] = [
  {
    label: 'Agentic AI',
    items: [
      'Custom CLI agents',
      'Custom tools',
      'Skills and sub-agents',
      'MCP servers',
      'Hooks and harness tuning',
      'Full-SDLC agentic development',
    ],
  },
  {
    label: 'LLM Integration',
    items: [
      'Ollama',
      'OpenAI',
      'Anthropic',
      'NVIDIA NIM',
      'OpenAI Agents SDK',
      'RAG',
      'Prompt engineering',
      'GitHub Copilot',
      'Cursor',
      'Claude Code',
      'Codex',
      'OMP',
    ],
  },
  { label: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL'] },
  {
    label: 'Frameworks',
    items: ['.NET', '.NET Framework', 'Entity Framework', 'React', 'Angular', 'Node.js'],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      'AWS (Lambda, SQS, SNS, S3, IAM, EC2)',
      'Terraform',
      'Docker',
      'Kubernetes',
      'Observability',
      'GitLab CI',
      'GitHub Actions',
      'Jenkins',
      'TeamCity',
    ],
  },
  { label: 'Databases', items: ['PostgreSQL', 'MS SQL Server', 'MongoDB', 'Redis'] },
  {
    label: 'Architecture & Practices',
    items: [
      'Microservices',
      'Distributed systems',
      'System design',
      'REST API design',
      'Clean Architecture',
      'CQRS',
      'DDD',
      'Spec-driven development',
      'TDD',
    ],
  },
]
