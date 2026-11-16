/**
 * SITE CONTENT
 *
 * Every word on the page comes from this file. Edit, save, and the dev
 * server (`npm run dev`) refreshes the page.
 *
 * The career details follow his own LinkedIn profile, and the testimonials
 * are his LinkedIn recommendations.
 *
 * - Text can use **bold**, *italic* and [links](https://example.com).
 * - Dates are "YYYY", "YYYY-MM" or "YYYY-MM-DD". The site formats them.
 * - Leave `end` out of anything that is still ongoing.
 */
import type { Chapter, Contact, Education, Fact, Highlight, SectionMeta, Testimonial } from './types';

/* Contact links ---------------------------------------------------------- */
/* Fill these in before publishing. Each link appears once it is set. */

export const contact: Contact = {
  email: 'snaagaa@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/nagarajan-s-5722804/',
};

/* Site ------------------------------------------------------------------ */

export const site = {
  title: 'Swaminathan Nagarajan · MD & CEO',
  description:
    'Swaminathan (Naga) Nagarajan: more than three decades in the Tata Group, twice as managing director and CEO, with board experience in India, Kenya, Indonesia and the US. IIT Madras, and IIM Ahmedabad gold medallist.',
  lang: 'en-GB',
  /** true asks search engines not to list the site. */
  noindex: false,
};

/** Page sections, in order. The nav comes from here. */
export const sections = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'education', title: 'Education' },
  { id: 'testimonials', title: 'Testimonials' },
] as const satisfies readonly SectionMeta[];

/* Hero ------------------------------------------------------------------ */

export const person = {
  name: 'Swaminathan Nagarajan',
  shortName: 'S Nagarajan',
  /** Other forms of his name, so searches for any of them find the site. */
  alternateNames: ['S Nagarajan', 'Nagarajan S'],
  /** Used in the footer and the browser tab. */
  headline: 'MD & CEO',
  /** The row of credentials under his name. **Bold** text is picked out in gold. */
  highlights: [
    { title: 'MD & CEO', detail: 'Tata Chemicals Magadi and Metahelix Life Sciences' },
    { title: 'IIM Ahmedabad', detail: 'PGDM, **Gold Medallist**' },
    { title: 'IIT Madras', detail: 'B.Tech, Electronics & Communication' },
  ] satisfies Highlight[],
  lede: 'More than three decades in the Tata Group, across chemicals, crop protection and seeds, media and telecom, with board experience in India, Kenya, Indonesia and the US.',
};

/* About -------------------------------------------------------------- */
/*
 * `summary` is his own LinkedIn "About" text, kept in his words. The only
 * changes: the first line is in the past tense, "~33 years" is now "~35"
 * (1991 to 2026), and spacing and punctuation are tidied.
 * `facts` is the board-focused list beside it, all taken from his LinkedIn.
 */

export const about = {
  summary: [
    'Mr Nagarajan most recently held the responsibility of MD and CEO at Tata Chemicals Magadi.',
    'Earlier, as COO of Rallis India Ltd, Mr Nagarajan was responsible for operations of both Crop Protection and Seeds businesses. The seeds business was previously housed in Rallis’ subsidiary, Metahelix Life Sciences Ltd, where he served as MD & CEO.',
    'Prior to that, he was Executive VP-Corporate at Tata Elxsi Ltd, a technology services & product engineering company.',
    'In the past, Mr Nagarajan headed Visual Computing Labs (VCL), the CG Animation & Visual Effects division of Tata Elxsi Ltd, as its COO. VCL serviced the media and entertainment industry both Indian and International (Hollywood, UK & Continental Europe). He led several change management efforts at the exciting, but challenging business: initially setting up a studio in LA (Hollywood), multisite delivery centers, JV in USA etc. and then later implementing strong bottomline focussed consolidation initiatives. He is experienced in the full business cycle of incubation, growth & consolidation.',
    'Mr Nagarajan earlier ran the Postpaid Business Unit of Tata Teleservices Ltd.',
    'Overall, he has ~35 years of CEO/CXO and cross-functional experience in Sales, Marketing, Customer Service, Operations, Finance & Corporate Planning. Through various phases of his career, he has managed large scale activities involving large teams (1200+) and has worked in multiple locations. Having earlier worked in Tata Cellular Ltd (which later merged with Birla AT&T Ltd to become Idea Cellular Ltd), the two telecom companies have given him the experience of working in unstructured & high velocity startup & scaleup contexts. Prior to Tata Cellular, he worked in the Finance & Corporate Planning area at Tata Motors Ltd.',
    'Mr Nagarajan’s professional career began with the Tata Administrative Service in 1991. He holds a B Tech degree from Indian Institute of Technology, Madras and he is a PGDM Gold Medallist from Indian Institute of Management, Ahmedabad.',
  ],
  facts: [
    {
      label: 'Board experience',
      value: [
        'Tata Chemicals Magadi, Kenya, as Managing Director & CEO',
        'Metahelix Life Sciences, as Executive Director, then Managing Director',
        'PT Metahelix Lifesciences, Indonesia, as President Commissioner',
        'A Squared Elxsi Entertainment, a US joint venture',
        'Zero Waste Agro Organics',
      ],
    },
    {
      label: 'Industry bodies',
      value: ['Federation of Seed Industry of India, as a founding Director', 'CropLife India', 'Crop Care Federation of India'],
    },
    {
      label: 'Governance',
      value: ['Chief Ethics Officer, Tata Elxsi', 'Assessor and team leader, Tata Business Excellence Model'],
    },
    { label: 'Sectors', value: ['Chemicals', 'Crop protection and seeds', 'Media and entertainment', 'Telecom'] },
    { label: 'Education', value: ['B.Tech, IIT Madras', 'PGDM, IIM Ahmedabad, gold medallist'] },
  ] satisfies Fact[],
};

/* Experience (most recent first) ------------------------------------- */

export const career: Chapter[] = [
  {
    id: 'tata-chemicals-magadi',
    organisation: 'Tata Chemicals Magadi',
    sector: 'Soda ash',
    location: 'Magadi, Kenya',
    start: '2024',
    end: '2026',
    intro:
      'Led Tata Chemicals’ business in Kenya, Africa’s largest soda ash manufacturer. Founded at Lake Magadi in 1911, it became part of Tata Chemicals in 2005.',
    roles: [
      {
        title: 'Managing Director & CEO',
        points: [
          'In 2025 the company commissioned a 10-tonne-per-hour electric calciner, the first of its kind in the global soda ash industry, together with a 5 MW solar plant. The two replaced heavy furnace oil and put the operation on a path to net-zero carbon.',
        ],
      },
    ],
  },
  {
    id: 'rallis',
    organisation: 'Rallis India',
    sector: 'Crop protection, crop nutrition and seeds',
    location: 'Mumbai',
    start: '2019-04',
    end: '2024-10',
    intro:
      'Responsible for the operations of the crop protection, crop nutrition and seeds businesses of Rallis India and Metahelix Life Sciences. He stayed on the board of Metahelix and facilitated its merger with Rallis.',
    roles: [
      {
        title: 'Chief Operating Officer',
        start: '2019-04',
        end: '2024-10',
        points: [
          'Part of The Leadership Vanguard programme (2020), in which senior leaders from several sectors work with impact entrepreneurs on systems change, combining commercial value with value for people and planet.',
        ],
      },
    ],
    boards: ['Zero Waste Agro Organics', 'CropLife India', 'Crop Care Federation of India'],
  },
  {
    id: 'metahelix',
    organisation: 'Metahelix Life Sciences',
    sector: 'Agri-biotech and hybrid seeds',
    location: 'Bengaluru',
    start: '2016-03',
    end: '2019-03',
    /* Figures are from Rallis India's annual reports, 2016-17 to 2019-20. */
    intro:
      'Led the Tata group’s agri-biotech company, a wholly owned subsidiary of Rallis India. It develops, produces and sells hybrid seeds, including paddy, millet, maize and cotton, with more than 15,000 farmers producing its seed.',
    stats: [
      { value: '+33%', label: 'revenue, 2015-16 to 2018-19, from ₹253 to ₹337 crore' },
      { value: '+59%', label: 'pre-tax profit in 2017-18, to ₹33 crore' },
      { value: '11', label: 'new products in 2016-17, his first year' },
    ],
    roles: [
      {
        title: 'Managing Director & CEO',
        start: '2017-04',
        end: '2019-03',
        points: [
          'Cotton seed volumes more than doubled in 2017-18.',
          'Facilitated its merger into Rallis, agreed by both boards in January 2019 and completed in February 2020.',
        ],
      },
      {
        title: 'CEO & Executive Director',
        start: '2016-03',
        end: '2017-03',
        points: ['Kept the company second in the hybrid millet market, and began seed production in Indonesia in March 2017.'],
      },
    ],
    boards: [
      'PT Metahelix Lifesciences, Indonesia, as President Commissioner',
      'Federation of Seed Industry of India, as a founding Director',
    ],
  },
  {
    id: 'tata-elxsi',
    organisation: 'Tata Elxsi',
    sector: 'Animation and visual effects',
    start: '2009-02',
    end: '2016-02',
    intro:
      'Headed Visual Computing Labs, the CG animation and visual-effects division of Tata Elxsi, serving the media and entertainment industry in India and abroad, including Hollywood, the UK and continental Europe. He set up a studio in Los Angeles, delivery centres on several sites and a joint venture in the US, and later led a consolidation focused on the bottom line.',
    roles: [
      {
        title: 'Executive Vice President, Corporate',
        start: '2015-09',
        end: '2016-02',
        points: ['Responsible for select strategic and special initiatives; also Chief Ethics Officer.'],
      },
      { title: 'Chief Operating Officer, Visual Computing Labs', start: '2009-02', end: '2015-08' },
    ],
    boards: ['A Squared Elxsi Entertainment, USA: a joint venture to design, create and monetise content'],
  },
  {
    id: 'tata-teleservices',
    organisation: 'Tata Teleservices',
    sector: 'Telecom',
    start: '2002',
    end: '2009-02',
    intro: 'Seven years across sales and marketing, customer service and business-unit leadership.',
    roles: [
      {
        title: 'VP & Business Unit Head, HNI',
        start: '2007-09',
        end: '2009-02',
        points: ['All-India head of the business unit for high-net-worth customers.'],
      },
      {
        title: 'VP & Regional Business Unit Head, Postpaid',
        start: '2006-01',
        end: '2007-08',
        points: [
          'Headed postpaid operations for five circles: Andhra Pradesh, Kolkata, Bihar–Jharkhand, West Bengal and Orissa.',
          'Assessor and team leader, several times over, for the Tata Business Excellence Model (TBEM), akin to the Malcolm Baldrige assessment.',
        ],
      },
      {
        title: 'VP, Customer Service',
        start: '2004',
        end: '2006',
        points: [
          'Headed customer care for the company’s largest hub, Andhra Pradesh and Karnataka.',
          'Six Sigma Green Belt training from Motorola University, on a custom programme for the Tata Group.',
        ],
      },
      {
        title: 'GM, Sales & Marketing',
        start: '2002',
        end: '2004',
        points: ['Headed sales and marketing for the Tamil Nadu circle, including Chennai.'],
      },
    ],
  },
  {
    id: 'early-career',
    organisation: 'Tata Motors & Tata Cellular',
    sector: 'Automotive and telecom',
    start: '1991',
    end: '2002',
    intro:
      'His career began with the **Tata Administrative Service** in 1991. He worked in finance and corporate planning at **Tata Motors**, then at **Tata Cellular**, which later merged with Birla AT&T to become Idea Cellular. Tata Cellular and Tata Teleservices gave him experience of fast-moving start-up and scale-up settings.',
    roles: [],
  },
];

/* Education ---------------------------------------------------------- */

export const education: Education[] = [
  {
    id: 'iim-ahmedabad',
    institution: 'Indian Institute of Management Ahmedabad',
    qualification: 'Post-Graduate Diploma in Management (PGDM)',
    start: '1989',
    end: '1991',
    honours: [
      '**Gold Medal** for Scholastic Merit and Academic Achievement, 1991',
      'Gujarat Alkalies & Chemicals and Bank of America industry scholarships for academic performance, 1990 and 1991',
    ],
  },
  {
    id: 'iit-madras',
    institution: 'Indian Institute of Technology Madras',
    qualification: 'B.Tech, Electronics & Communication Engineering',
    start: '1985',
    end: '1989',
    honours: [
      '**Second rank** of about 30 students in Electronics & Communication Engineering, 1989',
      'Scholarship holder for all four years',
    ],
  },
];

/* Testimonials (LinkedIn recommendations) ---------------------------- */

export const testimonials: Testimonial[] = [
  {
    author: 'Ajay Pandey',
    title: 'Board chairman and independent director; former MD & Group CEO, GIFT City',
    relationship: 'Managed Naga directly',
    date: '2012-12-28',
    text: 'Naga as he is well known amongst his colleagues has one of the best analytical minds that I have come across. His calm and composed approach coupled with a great flair for managing numbers keeps him right ahead of his peers. Always willing to learn, Naga manages his team very well. His ability to work with various members of the team really makes a positive difference and an impact on the expected results. Wish him all the luck!',
  },
  {
    author: 'Padmanaban M',
    title: 'Senior management executive',
    relationship: 'Managed Naga directly',
    date: '2013-06-14',
    text: 'Naga is a potent combination of a great intellect and a warm personality. We worked together on launch of telecom services in TTSL, TN when he exhibited his skills in sales/territory planning, key account management, channel management and people management. His work ethic and commitment to deliverables were of a high order. He will continue to rise the leadership ladder and will be an asset in any organisation!',
  },
  {
    author: 'Rick French',
    title: 'CN-Tellier Chair of Business and Public Policy, University of Ottawa',
    relationship: 'Senior colleague',
    date: '2012-12-28',
    text: 'Naga is a very bright and highly reliable analyst and a tactful manager. It was a privilege to have worked with him and I would be delighted to do so again. His integrity and commitment would be an asset to any firm or project.',
  },
  {
    author: 'Sunder Pandian',
    title: 'Head, Corporate Service & Collections, Reliance Communications',
    relationship: 'Colleague; Naga was his senior',
    date: '2011-12-18',
    text: 'Mr. Nagarajan would always be my inspiration for his abilities to run a system and change its dimension towards positive trend. Sir, it was an experience to work under your guidance.',
  },
  {
    author: 'Omesh Adiani',
    title: 'Managing Director, Starting Point Competency Training India',
    relationship: 'Reported to Naga directly',
    date: '2009-11-05',
    text: 'Mr. Nagarajan is easily one of the most brilliant persons of the century. He is extremely business savvy and kind hearted. I learnt a lot while working with him in Tata Cellular. His commitment to the Tata Group and his family equally are very high and hard to match.',
  },
];
