export const businessInfo = {
  legalName: 'Sunny F. Ogunro, CPA',
  dbaName: "Sunny's Bookkeeping & Tax Service",
  tagline: 'Bookkeeping, Tax Service & IRS Representation',
  phone: '(512) 928-9860',
  phoneRaw: '5129289860',
  fax: '(512) 926-1751',
  email: 'cpa@taxsunny.onmicrosoft.com',
  address: {
    street: '5407 North Highway 35, Suite 300',
    city: 'Austin',
    state: 'TX',
    zip: '78723',
  },
  fullAddress: '5407 North Highway 35, Suite 300, Austin, TX 78723',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sunny%27s+Bookkeeping+%26+Tax+Service+5407+North+Highway+35+Austin+TX+78723',
  embedMapsUrl: 'https://www.google.com/maps?q=5407+North+Highway+35,+Suite+300,+Austin,+TX+78723&output=embed',
  website: 'sunnytax.com',
  foundedYear: 1999,
  yearsServing: 25,
  rating: 4.5,
  reviewCount: 9,
  reviewSource: 'Yelp',
  hours: [
    { day: 'Monday', open: '9:00 AM', close: '6:00 PM' },
    { day: 'Tuesday', open: '9:00 AM', close: '6:00 PM' },
    { day: 'Wednesday', open: '9:00 AM', close: '6:00 PM' },
    { day: 'Thursday', open: '9:00 AM', close: '6:00 PM' },
    { day: 'Friday', open: '9:00 AM', close: '5:00 PM' },
    { day: 'Saturday', open: '10:00 AM', close: '3:00 PM' },
    { day: 'Sunday', open: null, close: null },
  ],
  credentials: ['CPA', 'EA (Enrolled Agent)', 'ATA', 'ATP'],
  social: {
    facebook: 'https://www.facebook.com/p/Sunnys-Bookkeeping-Tax-Service-100081556926182',
    linkedin: 'https://www.linkedin.com/in/sunny-s-bookkeeping-and-tax-service-1a4002258',
  },
};

export const services = [
  {
    slug: 'individual-tax-preparation',
    title: 'Individual Tax Preparation',
    icon: 'User',
    summary:
      'Accurate, personalized preparation of your personal income tax returns—federal and state—with careful attention to deductions and credits.',
    features: [
      'Federal & state return preparation',
      'Maximized deductions and credits',
      'Electronic filing (e-file)',
      'Amended returns for prior years',
      'Multi-state returns',
    ],
  },
  {
    slug: 'business-tax-preparation',
    title: 'Business Tax Preparation',
    icon: 'Building2',
    summary:
      'Comprehensive tax preparation for small businesses, partnerships, and corporations—structured to keep your business compliant and efficient.',
    features: [
      'Corporate & partnership returns',
      'Schedule C preparation',
      'Payroll tax returns',
      'Texas franchise tax filings',
      'Small business tax strategy',
    ],
  },
  {
    slug: 'bookkeeping',
    title: 'Bookkeeping Services',
    icon: 'BookOpen',
    summary:
      'Complete bookkeeping services for small businesses. We keep your financial records organized and up to date year-round.',
    features: [
      'Monthly bookkeeping',
      'Bank reconciliations',
      'Financial statements',
      'Accounts payable & receivable',
      'General ledger maintenance',
    ],
  },
  {
    slug: 'irs-representation',
    title: 'IRS Representation',
    icon: 'ShieldCheck',
    summary:
      'As an Enrolled Agent, Sunny F. Ogunro is licensed to represent taxpayers before the IRS—handling audits, collections, and disputes on your behalf.',
    features: [
      'IRS audit representation',
      'IRS Offer in Compromise',
      'IRS collection resolution',
      'Texas Sales Tax audit representation',
      'Penalty abatement requests',
    ],
  },
  {
    slug: 'tax-planning',
    title: 'Tax Planning & Forecasting',
    icon: 'TrendingUp',
    summary:
      'Proactive, year-round tax planning to help you minimize liabilities and make informed financial decisions for the future.',
    features: [
      'Long-term tax planning',
      'Mid-year tax forecasting',
      'Retirement tax strategies',
      'Business entity structuring',
      'Estimated tax planning',
    ],
  },
  {
    slug: 'tax-consultation',
    title: 'Tax Consultation',
    icon: 'MessageSquare',
    summary:
      'One-on-one consultations to answer your tax questions, review your financial situation, and provide clear, actionable guidance.',
    features: [
      'Personal tax consultations',
      'Business advisory sessions',
      'Tax compliance reviews',
      'Financial statement review',
      'New business tax guidance',
    ],
  },
];

export const team = [
  {
    name: 'Sunny F. Ogunro',
    credentials: 'CPA, EA, ATA, ATP',
    role: 'Founder & Principal Accountant',
    bio: "Sunny is a caring family man with a wife and five children. He graduated from St. Edward's University at Austin with a Bachelor of Business Administration in Accounting and obtained his Certified Public Accountant license. He has been serving the Austin area for over 25 years since opening Sunny's Bookkeeping & Tax Service. Sunny is an Enrolled Agent authorized to represent taxpayers before the IRS and holds securities licenses (Series 63, 66, and 7). He is a member of the Texas Society of Public Accountants and the National Association of Accountants.",
    expertise: [
      'IRS representation & Offer in Compromise',
      'Business and personal tax preparation',
      'Bookkeeping and payroll preparation',
      'IRS Audit Relief',
    ],
    community: [
      'Immigration Commissioner for the City of Austin (3+ years)',
      'Treasurer for Better Austin Today PAC (3 years)',
      'Treasurer for Outreach Production Program',
      'Financial adviser with Cetera Financial Specialists',
    ],
  },
  {
    name: 'Funmi Ogunro',
    credentials: 'BA',
    role: 'Office Manager',
    bio: 'Funmi is a graduate of Baylor University. As office manager, she is in charge of the bookkeeping department as well as the electronic tax preparation database.',
    expertise: ['Bookkeeping department lead', 'Electronic tax preparation database'],
    community: [],
  },
  {
    name: 'Jason Shaw',
    credentials: '',
    role: 'Tax Manager',
    bio: 'Jason serves as the Tax Manager, supporting the firm in delivering quality tax preparation and client service.',
    expertise: ['Tax preparation', 'Client service'],
    community: [],
  },
];

export const reviews = [
  {
    author: 'Paula Q.',
    date: 'June 2021',
    rating: 5,
    text: "My husband and I have been using Sunny's services for three years. He helped us sort through the disaster our previous tax preparer left us with. He has been kind and honest about our options.",
  },
  {
    author: 'Erika V.',
    date: 'November 2019',
    rating: 5,
    text: "Sunny has taken a multi-year mess that I had with our taxes and has made it make sense. Good or bad news—he delivers the news directly and succinctly and allows us to make the final decisions.",
  },
  {
    author: 'Nicole M.',
    date: 'August 2016',
    rating: 5,
    text: "Professional, knowledgeable, and dependable service. Sunny's expertise made a real difference with our tax situation.",
  },
];

export const faqs = [
  {
    question: 'What services does Sunny\u2019s Bookkeeping & Tax Service offer?',
    answer:
      'We provide individual and business tax preparation, bookkeeping, payroll preparation, IRS representation (including Offers in Compromise and audit relief), tax planning and forecasting, and tax consultation. We serve clients throughout the Austin area.',
  },
  {
    question: 'Can Sunny represent me before the IRS?',
    answer:
      'Yes. Sunny F. Ogunro is an Enrolled Agent (EA), which means he is federally licensed to represent taxpayers before the IRS in matters including audits, collections, and appeals. He also holds a CPA license and has extensive experience with IRS Offer in Compromise and audit relief cases.',
  },
  {
    question: 'Do you file taxes electronically (e-file)?',
    answer:
      'Yes. We offer electronic filing (e-file) for both federal and state tax returns to provide faster processing and quicker refunds for our clients.',
  },
  {
    question: 'What should I bring to my tax appointment?',
    answer:
      'Bring a government-issued photo ID, Social Security cards for yourself and any dependents, W-2s and 1099s, records of deductible expenses, prior year tax return, and any IRS or state tax correspondence you have received. For business clients, please bring your bookkeeping records and financial statements.',
  },
  {
    question: 'Do you offer year-round tax planning?',
    answer:
      'Yes. We offer long-term, annual, and mid-year tax planning and forecasting services to help individuals and businesses minimize tax liabilities and make informed financial decisions throughout the year—not just at filing time.',
  },
  {
    question: 'How are your fees structured?',
    answer:
      'Fees vary depending on the complexity of your tax situation and the services required. We provide personalized service, so we recommend scheduling a consultation to discuss your specific needs. Please contact our office for more information.',
  },
  {
    question: 'Do you serve businesses as well as individuals?',
    answer:
      'Absolutely. We specialize in both individual and business tax preparation. For businesses, we also offer bookkeeping, payroll preparation, financial statements, and Texas Sales Tax audit representation.',
  },
  {
    question: 'What are your office hours?',
    answer:
      'We are open Monday through Thursday from 9:00 AM to 6:00 PM, Friday from 9:00 AM to 5:00 PM, and Saturday from 10:00 AM to 3:00 PM. We are closed on Sundays. Walk-ins are welcome, but appointments are recommended.',
  },
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export const heroImage = 'https://images.pexels.com/photos/7821671/pexels-photo-7821671.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';
export const aboutImage = 'https://images.pexels.com/photos/7821714/pexels-photo-7821714.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';
export const austinSkyline = 'https://images.pexels.com/photos/39881381/pexels-photo-39881381.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200';
export const taxDeskImage = 'https://images.pexels.com/photos/6963865/pexels-photo-6963865.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200';
