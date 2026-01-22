import { Experience, Education, Certification } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "PT. Asuransi Jiwa Astra (Astralife)",
    role: "Software Developer",
    period: "August 2023 - present",
    location: "Jakarta, Indonesia",
    description: [
      "Developed and maintained scalable applications for Astralife core and integration systems.",
      "Collaborated with cross-functional teams in Waterfall and Scrum environments.",
      "Optimized system performance through code refactoring and efficient algorithms.",
      "Conducted unit/integration testing (JUnit) and managed CI/CD pipelines via Jenkins."
    ],
    projects: "Astralife core system, internal integration system",
    tech: ["Spring Framework", "RedHat EAP", "Quarkus", "native JavaScript", "JQuery", "Oracle SQL", "PostgreSQL", "Kogito DMN", "Jasper Report"],
    notableAchievement: "Achieved 90% optimization on contract/policy browsing with million-set data."
  },
  {
    company: "PT. Sinarmas Multiartha Tbk.",
    role: "Software Developer",
    period: "October 2022 – August 2023",
    location: "Jakarta, Indonesia",
    description: [
      "Developed Danasaham core systems and various internal/external integration systems (Banks, Digital Signature, eKYC, etc.).",
      "Delivered high-quality software solutions in Waterfall and Scrum environments.",
      "Ensured robust deployments through JUnit testing and Jenkins pipelines."
    ],
    projects: "Danasaham core system, internal/external integration systems",
    tech: ["Spring Framework", "native JavaScript", "JQuery", "PostgreSQL", "ActiveMQ", "Redis", "MongoDB"],
  },
  {
    company: "PT. Sofco Graha",
    role: "Software Developer",
    period: "January 2022 – October 2022",
    location: "Jakarta, Indonesia",
    description: [
      "Developed Gaji.id core systems and external integration systems.",
      "Collaborated in Scrum environments to deliver robust HRIS solutions.",
      "Debugged production issues and optimized algorithm performance.",
      "My best tuning is 30% optimization on process 'Hitung Tunjangan Karyawan'."
    ],
    projects: "Gaji.id core system, internal/external integration system",
    tech: ["Spring Framework", "native JavaScript", "PostgreSQL", "ActiveMQ", "Jasper Report"],
    notableAchievement: "Achieved 30% optimization on 'Hitung Tunjangan Karyawan' process."
  },
  {
    company: "PT. Cyberindo Sinergi System",
    role: "Intern Software Developer",
    period: "October 2021 – January 2022",
    location: "Jakarta, Indonesia",
    description: [
      "Developed external integration software for core systems.",
      "Identified and resolved production bugs efficiently."
    ],
    projects: "External integration system",
    tech: ["Spring Framework", "MySQL"],
  }
];

export const FORMAL_EDUCATION: Education[] = [
  {
    institution: "UNIVERSITAS MERCUBUANA",
    period: "2016 – 2020",
    location: "Jakarta, Indonesia",
    degree: "Bachelor Degree of Economic",
    details: "GPA 3.72"
  }
];

export const INFORMAL_EDUCATION: Education[] = [
  {
    institution: "G2 ACADEMY",
    period: "2021",
    location: "Jakarta, Indonesia",
    degree: "Software Developer Bootcamp",
    details: "Specialization in Java and JavaScript"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    provider: "ORACLE",
    year: "2025",
    name: "Oracle Certified Associate Java 8",
    verificationUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=30489A77C49002363FA74590D04887F326749D8C83050E22FA83D8ED63BE3898"
  },
  {
    provider: "VMware / Broadcom",
    year: "2025",
    name: "Spring Certified Professional",
    verificationUrl: "https://cp.certmetrics.com/vmware/en/public/verify/credential/a65480396d64485489494f2cb2ed1ee9",
    badgeUrl: "https://www.credly.com/badges/772b0210-f4ed-49fa-9d67-eac86a748106/public_url"
  }
];

export const SKILLS = {
  programming: ["Java", "JavaScript", "JQuery", "Spring Framework", "Quarkus", "RedHat EAP"],
  database: ["Oracle SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  tools: ["Docker", "Jenkins", "JUnit", "Kafka", "ActiveMQ", "RabbitMQ", "Linux", "Jasper Report", "Kogito DMN"],
  business: ["HRIS", "Stock Market", "Insurance", "Banking", "Accounting"]
};