export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Supply Chain Expertise',
    icon: '🔗',
    skills: [
      { name: 'End-to-End Procurement', proficiency: 92 },
      { name: 'Demand Forecasting & Planning', proficiency: 88 },
      { name: 'Inventory Management', proficiency: 90 },
      { name: 'Supplier Relationship Management', proficiency: 85 },
      { name: 'Cost Optimization', proficiency: 87 },
      { name: 'S&OP', proficiency: 82 },
    ],
  },
  {
    category: 'Analytics & Tools',
    icon: '📊',
    skills: [
      { name: 'Advanced Excel', proficiency: 95 },
      { name: 'Power BI & DAX', proficiency: 90 },
      { name: 'SQL', proficiency: 85 },
      { name: 'Python', proficiency: 75 },
      { name: 'Tableau', proficiency: 80 },
      { name: 'ERP/SAP Systems', proficiency: 78 },
    ],
  },
  {
    category: 'Business Operations',
    icon: '⚙️',
    skills: [
      { name: 'Process Optimization', proficiency: 88 },
      { name: 'KPI Development & Tracking', proficiency: 90 },
      { name: 'Stakeholder Management', proficiency: 85 },
      { name: 'Cross-Functional Collaboration', proficiency: 92 },
      { name: 'Project Management', proficiency: 83 },
      { name: 'Six Sigma', proficiency: 78 },
    ],
  },
  {
    category: 'Technical Proficiencies',
    icon: '💻',
    skills: [
      { name: 'Data Modeling', proficiency: 87 },
      { name: 'Procurement Analytics', proficiency: 92 },
      { name: 'Spend Analysis', proficiency: 88 },
      { name: 'Forecasting Models', proficiency: 85 },
      { name: 'Dashboard Development', proficiency: 90 },
      { name: 'Data Visualization', proficiency: 88 },
    ],
  },
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  keyMetrics?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'rkg-tech',
    company: 'RKG Technology Inc',
    role: 'Supply Chain & Business Development Intern',
    period: 'Jun 2025 – Aug 2025',
    location: 'Remote',
    achievements: [
      'Orchestrated end-to-end purchase order lifecycle, coordinating cross-functionally with finance, operations, and sales to streamline procurement activities',
      'Built Excel-based inventory models and Power BI dashboards that reduced stock mismatches and improved reporting efficiency',
      'Conducted SKU-level demand forecasting and consumption analysis to optimize replenishment planning and reduce overstock/stockout risk',
      'Evaluated supplier pricing, MOQ, and delivery reliability to drive sourcing decisions',
    ],
    keyMetrics: [
      'Reduced stock mismatches',
      'Improved reporting efficiency',
      'Contributed to cost reduction',
    ],
  },
  {
    id: 'larsen-toubro',
    company: 'Larsen & Toubro',
    role: 'Procurement Analyst',
    period: 'Jan 2021 – Dec 2023',
    location: 'India',
    achievements: [
      'Led analytical initiatives to improve purchase order accuracy and reduce material shortages across large infrastructure projects',
      'Developed SQL queries and Tableau dashboards to extract and visualize procurement, inventory, and supplier performance data for executive reviews',
      'Created supplier performance scorecards using Excel and Power Query that drove improvements in on-time delivery and SLA compliance',
      'Optimized demand planning processes by analyzing historical usage patterns, project schedules, and lead times',
      'Streamlined procurement workflows including invoice matching, GRN processing, and approval cycles',
    ],
    keyMetrics: [
      'Improved PO accuracy',
      'Reduced material shortages',
      'Enhanced delivery reliability',
      'Reduced procurement cycle time',
    ],
  },
];
