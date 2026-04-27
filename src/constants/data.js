import Footer from "@/components/navigation/footer";
import { Search, Shield, Grid3x3, Zap, Target, Eye, Users, Mail, Phone, MapPin, Timer } from "lucide-react";
import { ChevronDownIcon } from "lucide-react";

export const FeaturesCard = [
  {
    icon: Search,
    title: "Easy Search",
    description:
      "Find jobs quickly with our advanced search filters and smart recommendations.",
  },
  {
    icon: Shield,
    title: "Verified Jobs",
    description:
      "All job postings are verified by our team to ensure legitimacy and quality.",
  },
  {
    icon: Grid3x3,
    title: "Categories",
    description:
      "Browse jobs by industry, experience level, location, and more categories.",
  },
  {
    icon: Zap,
    title: "Quick Apply",
    description:
      "Apply to multiple jobs with one click using your saved profile and resume.",
  },
];

export const FAQs = [
  {
    question: "How do I apply for a job?",
    answer: "Simply click on any job listing that interests you, review the details, and click the 'Apply Now' button. You'll need to create an account and upload your resume. Some positions may require additional documents or a cover letter."
  },
  {
    question: "Is it free to use?",
    answer: "Yes, creating an account and applying for jobs is completely free for job seekers. We make money by charging employers to post job listings, so our platform remains free for candidates."
  },
  {
    question: "How do I create a profile?",
    answer: "Click the 'Sign Up' button in the header, fill out your basic information, upload your resume, and complete your profile. A complete profile increases your chances of being discovered by employers."
  },
  {
    question: "Can I save jobs for later?",
    answer: "Yes, you can save jobs to your favorites list by clicking the heart icon on any job listing. Access your saved jobs from your dashboard anytime."
  },
  {
    question: "How do I track my applications?",
    answer: "All your job applications are tracked in your dashboard. You can see the status of each application, whether it's pending, reviewed, or if you've received a response from the employer."
  },
  {
    question: "What if I need help with my application?",
    answer: "We offer resume review services and application tips in our resources section. You can also contact our support team if you need assistance with the platform."
  }
];

export const About_Values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower individuals with access to opportunities while helping businesses discover the right talent with ease and confidence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading job platform that transforms how people find opportunities and how businesses connect with talent making meaningful careers accessible to everyone.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A diverse group of passionate creators, developers, and problem-solvers committed to building a platform that connects people to opportunities and helps businesses grow through the right talent.",
  },
];
export const Contact_Card = [
  {
    icon: Mail,
    title: "Email",
    description:
      "jobhunt2025@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description:
      "09123247022",
  },
  {
    icon: MapPin,
    title: "Address",
    description:
      "9, Kolawole Eboda Street, Ketu, Lagos.",
  },
];


export const jobs = [
  {
    id: 1,
    title: "Product Designer",
    company: "DesignLab",
    category: "design",
    description:
      "We're seeking a creative product designer to help shape the future of our platform. You'll work closely with engineers and product managers to deliver delightful experiences.This role offers the opportunity to work on cutting-edge technologies and make a significant impact on our product.",
    location: "Lagos",
    duration: "Full-time",
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React, TypeScript, and modern JavaScript",
      "Strong understanding of web performance optimization",
      "Experience with state management libraries (Redux, Zustand, etc.)",
      "Familiarity with CSS-in-JS solutions and responsive design",
      "Experience with testing frameworks (Jest, React Testing Library)",
      "Strong communication and collaboration skills"
    ],
    responsibilities: [
      "Build and maintain scalable React applications",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Write clean, maintainable, and well-tested code",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and mentor junior developers",
      "Contribute to technical architecture decisions",
      "Stay up-to-date with emerging frontend technologies"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work schedule and remote options",
      "Professional development budget",
      "Unlimited PTO",
      "Modern office with free snacks and meals"
    ],
    salary: "$140,000 - $180,000",
    postedDate: "2026-04-10",
    
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateTech",
    category: "product",
    description:
      "Drive product strategy and execution from concept to launch. You'll work with cross-functional teams to deliver features that customers love.",
    location: "Seattle, WA",
    duration: "Full-time",
     description: "As a Product Designer at DesignLab, you'll play a crucial role in shaping the user experience of our products. You'll work in a collaborative environment with product managers, engineers, and other designers to create intuitive and beautiful interfaces that solve real user problems.",
    requirements: [
      "3+ years of product design experience",
      "Strong portfolio demonstrating UX/UI design skills",
      "Proficiency in Figma and other design tools",
      "Understanding of user-centered design principles",
      "Experience with design systems",
      "Strong communication and presentation skills",
      "Ability to iterate quickly based on feedback"
    ],
    responsibilities: [
      "Design end-to-end user experiences for web and mobile",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Collaborate with engineering to ensure design quality",
      "Contribute to and maintain our design system",
      "Present design concepts to stakeholders",
      "Advocate for user needs throughout the product development process"
    ],
    benefits: [
      "Competitive salary and equity",
      "100% remote work flexibility",
      "Health, dental, and vision coverage",
      "Home office stipend",
      "Annual learning and development budget",
      "Generous PTO policy",
      "Company retreats twice a year"
    ],
    salary: "$120,000 - $150,000",
    postedDate: "2026-04-09",
  },
  
  
  {
      id: 3,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    category: "engineering",
    description:
      "Join our team to build amazing user experiences with React and TypeScript. We're looking for someone passionate about creating accessible, performant web applications.",
    location: "San Francisco, CA",
    duration: "Full-time",
    description: "GrowthHub is looking for a creative and data-driven Marketing Manager to lead our marketing initiatives. You'll develop and execute comprehensive marketing strategies that drive brand awareness, generate leads, and support our business growth objectives.",
    requirements: [
      "4+ years of marketing experience, preferably in B2B SaaS",
      "Proven track record of successful marketing campaigns",
      "Strong analytical skills and data-driven mindset",
      "Experience with marketing automation tools (HubSpot, Marketo, etc.)",
      "Excellent writing and communication skills",
      "Knowledge of SEO, SEM, and content marketing",
      "Bachelor's degree in Marketing or related field"
    ],
    responsibilities: [
      "Develop and execute marketing strategies and campaigns",
      "Manage content creation across multiple channels",
      "Analyze marketing performance and optimize campaigns",
      "Collaborate with sales team to generate qualified leads",
      "Manage marketing budget and vendor relationships",
      "Build and grow our social media presence",
      "Organize events and webinars"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive benefits package",
      "Commuter benefits",
      "Professional development opportunities",
      "Collaborative office environment",
      "Regular team events and activities",
      "Generous vacation policy"
    ],
    salary: "$100,000 - $130,000",
    postedDate: "2026-04-08",
  },
 {
      id: 4,
    title: "Marketing Manager",
    company: "GrowthHub",
    category: "marketing",
    description:
      "Lead our marketing efforts and help us reach new audiences. You'll be responsible for strategy, content creation, and campaign management across multiple channels.",
    location: "New York, NY",
    duration: "Part-time",
    description: "GrowthHub is looking for a creative and data-driven Marketing Manager to lead our marketing initiatives. You'll develop and execute comprehensive marketing strategies that drive brand awareness, generate leads, and support our business growth objectives.",
    requirements: [
      "4+ years of marketing experience, preferably in B2B SaaS",
      "Proven track record of successful marketing campaigns",
      "Strong analytical skills and data-driven mindset",
      "Experience with marketing automation tools (HubSpot, Marketo, etc.)",
      "Excellent writing and communication skills",
      "Knowledge of SEO, SEM, and content marketing",
      "Bachelor's degree in Marketing or related field"
    ],
    responsibilities: [
      "Develop and execute marketing strategies and campaigns",
      "Manage content creation across multiple channels",
      "Analyze marketing performance and optimize campaigns",
      "Collaborate with sales team to generate qualified leads",
      "Manage marketing budget and vendor relationships",
      "Build and grow our social media presence",
      "Organize events and webinars"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive benefits package",
      "Commuter benefits",
      "Professional development opportunities",
      "Collaborative office environment",
      "Regular team events and activities",
      "Generous vacation policy"
    ],
    salary: "$100,000 - $130,000",
    postedDate: "2026-04-08",
  },
  {
      id: 5,
    title: "Backend Engineer",
    company: "DataFlow Systems",
    category: "engineering",
    description:
      "Build scalable and reliable backend systems using Node.js and PostgreSQL. You'll work on APIs, databases, and infrastructure that power our applications.",
    location: "Austin, TX",
    duration: "Full-time",
     description: "Join SalesForce Pro as a Sales Representative and help businesses transform how they work. You'll be responsible for the full sales cycle, from prospecting to closing, working with companies of all sizes to understand their needs and demonstrate how our solution can help them succeed.",
    requirements: [
      "2+ years of B2B sales experience",
      "Proven track record of meeting or exceeding quotas",
      "Excellent communication and presentation skills",
      "Experience with CRM software (Salesforce, HubSpot, etc.)",
      "Self-motivated with strong organizational skills",
      "Ability to understand technical products",
      "Bachelor's degree preferred"
    ],
    responsibilities: [
      "Generate new business through outbound prospecting",
      "Conduct product demonstrations and presentations",
      "Manage the full sales cycle from lead to close",
      "Build and maintain relationships with clients",
      "Meet and exceed monthly and quarterly sales targets",
      "Collaborate with marketing on lead generation campaigns",
      "Provide feedback to product team on customer needs"
    ],
    benefits: [
      "Base salary plus uncapped commission",
      "Comprehensive health benefits",
      "401(k) with company match",
      "Phone and travel reimbursement",
      "Career advancement opportunities",
      "Sales training and enablement programs",
      "Team incentives and rewards"
    ],
    salary: "$70,000 - $90,000 base + commission",
    postedDate: "2026-04-11",
  },
  
  {
    id: 6,
    title: "Sales Representative",
    company: "SalesForce Pro",
    category: "Sales",
     description:
      "Help businesses discover our platform and grow their teams. You'll be the face of our company, building relationships and closing deals with potential clients.",
    location: "Abuja, Nigeria",
    duration: "Full-time",
     description: "InnovateTech is looking for a Product Manager who can drive product vision and execution. You'll work at the intersection of business, technology, and design to build products that solve real customer problems and drive business growth. This is an opportunity to make a significant impact on our product roadmap and company direction.",
    requirements: [
      "3+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Experience with agile development methodologies",
      "Ability to translate customer needs into product requirements",
      "Excellent stakeholder management skills",
      "Data-driven decision-making approach",
      "Technical background or strong technical acumen preferred"
    ],
    responsibilities: [
      "Define product vision and strategy",
      "Prioritize features and manage product roadmap",
      "Gather and analyze user feedback and data",
      "Write clear product requirements and user stories",
      "Work closely with engineering and design teams",
      "Launch products and features to market",
      "Track and analyze product metrics"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health coverage",
      "Flexible work arrangements",
      "Professional development budget",
      "Modern office with great amenities",
      "Unlimited PTO",
      "Regular team offsites"
    ],
    salary: "$130,000 - $160,000",
    postedDate: "2026-04-13",
  },
   
  {
    id: 7,
    title: "UX Researcher",
    company: "UserFirst Design",
    category: "design",
    description:
      "Conduct user research and analysis to inform product decisions and improve user experiences.",
   location: "Boston, MA",
    duration: "Contract",
    description: "UserFirst Design is seeking a UX Researcher to help us build products that truly meet user needs. You'll conduct qualitative and quantitative research, synthesize findings, and work closely with product and design teams to inform decision-making. This is a 6-month contract position with potential for extension.",
    requirements: [
      "2+ years of UX research experience",
      "Experience with various research methodologies",
      "Strong analytical and synthesis skills",
      "Proficiency with research tools (UserTesting, Dovetail, etc.)",
      "Excellent communication and presentation skills",
      "Experience working in agile environments",
      "Portfolio demonstrating research projects"
    ],
    responsibilities: [
      "Plan and conduct user research studies",
      "Perform usability testing and interviews",
      "Analyze research data and identify insights",
      "Create research reports and presentations",
      "Collaborate with designers and product managers",
      "Build and maintain user personas and journey maps",
      "Advocate for user needs across the organization"
    ],
    benefits: [
      "Competitive contract rate",
      "Flexible schedule",
      "Remote work options",
      "Access to research tools and resources",
      "Collaborative team environment",
      "Opportunity for contract extension"
    ],
    salary: "$80 - $100/hour",
    postedDate: "2026-04-07",
     
  },
 
  {
    id: 8,
    title: "DevOps Engineer",
    company: "CloudMasters",
    category: "engineering",
    description:
      "Maintain and improve our cloud infrastructure. You'll work with Kubernetes, AWS, and CI/CD pipelines to ensure reliable deployments and system performance.",
    location: "Lagos",
    duration: "Full-time",
    description: "CloudMasters is looking for a DevOps Engineer to help us build and maintain world-class infrastructure. You'll work on automation, monitoring, and optimization of our cloud systems, ensuring high availability and performance for our customers. This role offers the opportunity to work with modern tools and technologies in a fully remote environment.",
    requirements: [
      "3+ years of DevOps or infrastructure experience",
      "Strong experience with AWS (EC2, S3, RDS, Lambda, etc.)",
      "Proficiency with Kubernetes and container orchestration",
      "Experience with Infrastructure as Code (Terraform, CloudFormation)",
      "Knowledge of CI/CD tools (GitHub Actions, Jenkins, CircleCI)",
      "Scripting skills (Python, Bash, or similar)",
      "Understanding of security best practices"
    ],
    responsibilities: [
      "Manage and optimize cloud infrastructure on AWS",
      "Build and maintain CI/CD pipelines",
      "Implement monitoring and alerting systems",
      "Automate infrastructure provisioning and deployment",
      "Ensure system security and compliance",
      "Troubleshoot production issues and incidents",
      "Improve system reliability and performance"
    ],
    benefits: [
      "Competitive salary and equity",
      "100% remote work",
      "Comprehensive health benefits",
      "Home office setup budget",
      "Professional certification reimbursement",
      "Flexible PTO",
      "Annual company retreat"
    ],
    salary: "$135,000 - $175,000",
    postedDate: "2026-04-14",
  },
    
  
];



