export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string[];
  technologies: string[];
  link?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'supply-chain-dashboard',
    title: 'Supply Chain Management Dashboard',
    category: 'Data Analytics',
    description: 'Built an end-to-end analytics solution that transformed raw supply chain data into actionable insights for operations leadership.',
    impact: [
      'Eliminated hours of manual reporting by automating KPI tracking across procurement, inventory, and logistics',
      'Enabled real-time visibility into supplier performance, defect trends, and margin analysis',
      'Created optimized data models and DAX measures that improved query performance and dashboard responsiveness'
    ],
    technologies: ['Power BI', 'DAX', 'Excel', 'Data Modeling'],
    featured: true,
  },
  {
    id: 'inventory-optimization',
    title: 'Inventory Tracking & Forecasting Model',
    category: 'Operations Analytics',
    description: 'Developed Excel-based models to monitor real-time inventory levels, predict demand patterns, and optimize reorder points.',
    impact: [
      'Reduced stock mismatches and improved inventory accuracy',
      'Supported data-driven replenishment planning and safety stock decisions',
      'Integrated with ERP systems to automate data flow and reduce manual entry errors'
    ],
    technologies: ['Excel', 'Power Query', 'VBA', 'ERP Integration'],
    featured: true,
  },
  {
    id: 'supplier-performance',
    title: 'Supplier Performance Scorecard',
    category: 'Procurement Analytics',
    description: 'Created a comprehensive supplier evaluation framework using Excel and SQL to track delivery reliability, quality metrics, and cost competitiveness.',
    impact: [
      'Improved on-time delivery rates and SLA compliance across key suppliers',
      'Provided transparency into supplier relationships and performance trends',
      'Enabled data-backed negotiations and strategic sourcing decisions'
    ],
    technologies: ['Excel', 'SQL', 'Tableau', 'Power Query'],
    featured: false,
  },
];
