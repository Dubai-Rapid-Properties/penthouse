/**
 * Single source of truth for the page.
 *
 * Every figure, label and contact detail on the landing page is read from here,
 * so the whole offer can be updated in one file. Money is stored as the exact
 * display string ("AED 3,300,000") so nothing is ever re-formatted or rounded
 * by the UI; raw numbers appear only where structured data needs them.
 */

const WHATSAPP_NUMBER = '971567770272';
const WHATSAPP_MESSAGE =
  "Hello, I'm interested in the DIFC Duplex Penthouse at Park Towers. Please share more details.";

export const contact = {
  agentCompany: 'Dubai Rapid Properties',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage: WHATSAPP_MESSAGE,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  phoneDisplay: '+971 4 529 4904',
  phoneHref: 'tel:+97145294904',
  email: 'office@dubairapidproperties.com',
  address: 'DRP — Golden Mile 9, Palm Jumeirah, Dubai, UAE',
  websiteDisplay: 'www.dubairapidproperties.com',
  websiteUrl: 'https://www.dubairapidproperties.com',
} as const;

export const brand = {
  name: 'Dubai Rapid Properties',
  logoLight: '/images/logo/drp-logo-white.png', // for dark grounds
  logoDark: '/images/logo/drp-logo-dark.png', // for light grounds
  logoWidth: 720,
  logoHeight: 385,
} as const;

/**
 * Unit size. `sqft` and `sqm` are the raw values (structured data needs them);
 * the label strings are what the page renders, so the size is formatted
 * identically everywhere it appears.
 */
export const size = {
  sqft: 2057,
  sqm: 191.1,
  sqftLabel: '2,057 sqft',
  sqmLabel: '191.1 sqm',
  full: '2,057 sqft (191.1 sqm)',
} as const;

export const hero = {
  label: 'Ready to Move In or Rent — DIFC',
  title: 'DIFC Duplex Penthouse',
  subtitle: '2-Bedroom Duplex · 2,057 sqft · Park Towers, DIFC',
  tagline: 'Move In, Rent Out, or Unlock Further Investment Potential — The Choice Is Yours.',
  price: 'AED 3,300,000',
  priceNote: 'AED 1,604/sqft · Target purchase price AED 3,200,000 (AED 1,556/sqft)',
  image: '/images/gallery/hero-living.jpg',
  imageAlt:
    'Main living area of the DIFC duplex penthouse at sunset, framed by floor-to-ceiling angled glazing overlooking the Dubai skyline',
  imageWidth: 1264,
  imageHeight: 843,
  primaryCta: 'Enquire on WhatsApp',
  secondaryCta: 'Explore Your Options',
} as const;

export const quickFacts = [
  { value: '2', label: 'Bedrooms' },
  { value: 'Duplex', label: 'Penthouse' },
  { value: size.sqftLabel, label: size.sqmLabel },
  { value: 'Park Towers', label: 'DIFC' },
  { value: 'AED 1,604', label: 'Per sqft' },
  { value: 'Ready', label: 'To move / rent' },
] as const;

export const opportunity = {
  label: 'The Opportunity',
  heading: 'Priced well below the district it sits in',
  paragraphs: [
    'A two-bedroom duplex penthouse inside Park Towers, in the heart of the Dubai International Financial Centre, available at AED 1,604 per square foot — in a district where comparable towers trade above AED 2,500 per square foot.',
    'It is ready today. Buy it and move straight in, or let it as it stands and start earning rental income — no renovation is required for either. For investors who want more, an optional renovation can lift both the rent and the resale value, and our team can plan and manage it with you.',
    'Supply in this specific category — duplex penthouse floor plates inside DIFC — is limited and is not being replenished, while demand for the district keeps growing as DIFC expands. Whether you are buying a home or an investment, the four options below set out each route.',
  ],
  image: '/images/gallery/glazing-portrait.jpg',
  imageAlt:
    'Floor-to-ceiling angled glazing in the duplex penthouse, looking out across Dubai from the upper level',
  imageWidth: 843,
  imageHeight: 1264,
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const gallery: GalleryImage[] = [
  {
    src: '/images/gallery/hero-living.jpg',
    alt: 'Living area with pale sofas, round marble coffee tables and a stone column, set against floor-to-ceiling glazing and the Dubai skyline at sunset',
    caption: 'Living Area',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/glazing-portrait.jpg',
    alt: 'Full-height angled window framing a clear sky and the city below, with a potted palm on the stone floor',
    caption: 'Floor-to-Ceiling Glazing',
    width: 843,
    height: 1264,
  },
  {
    src: '/images/gallery/kitchen-island.jpg',
    alt: 'Dark kitchen island beneath the dramatic diagonal structure of the tower’s glass façade',
    caption: 'Kitchen',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/master-bedroom.jpg',
    alt: 'Master bedroom with a tall upholstered headboard, twin bedside lamps, a writing desk and full-height curtained windows',
    caption: 'Master Bedroom',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/master-ensuite.jpg',
    alt: 'Master en-suite bathroom with a freestanding oval bath, walk-in rain shower and marble mosaic tiling, with the bedroom beyond',
    caption: 'Master En-Suite',
    width: 1106,
    height: 960,
  },
  {
    src: '/images/gallery/reception-lounge.jpg',
    alt: 'Reception lounge with armchairs and a low table, lit by afternoon sun through the full-height glazing',
    caption: 'Living Area',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/upper-lounge.jpg',
    alt: 'Upper-level lounge with seating arranged along the curved glass wall above the coastline',
    caption: 'Living Area',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/kitchen-bar.jpg',
    alt: 'Kitchen with breakfast bar seating, fitted cabinetry and appliances, opening onto the glazed living space',
    caption: 'Kitchen',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/ensuite-view.jpg',
    alt: 'En-suite bathroom finished in mosaic tile, with a dark vanity and walk-in shower, lit by a full-height window behind sheer curtains',
    caption: 'En-Suite with View',
    width: 1365,
    height: 768,
  },
  {
    src: '/images/gallery/second-bathroom.jpg',
    alt: 'Second bathroom finished in mosaic tile with a long twin vanity, bath and walk-in shower',
    caption: 'Second Bathroom',
    width: 1365,
    height: 768,
  },
  {
    src: '/images/gallery/guest-bathroom.jpg',
    alt: 'Guest bathroom with a vessel basin on a dark stone counter, mirrored wall and bath',
    caption: 'Guest Bathroom',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/lounge-detail.jpg',
    alt: 'Detail of the lounge: a fluted marble coffee table with a candle and book, beside a pale armchair',
    caption: 'Lounge Detail',
    width: 843,
    height: 1264,
  },
  {
    src: '/images/gallery/living-area.jpg',
    alt: 'Second aspect of the living area, showing the seating arrangement and the run of glazing along the façade',
    caption: 'Living Area, Second Aspect',
    width: 1264,
    height: 843,
  },
];

/* -------------------------------------------------------------------------- */
/*  Pricing & the four options                                                */
/* -------------------------------------------------------------------------- */

/**
 * Price per square foot, checked against the unit size above:
 *   asking  AED 3,300,000 / 2,057 sqft = AED 1,604.28 -> AED 1,604/sqft
 *   target  AED 3,200,000 / 2,057 sqft = AED 1,555.66 -> AED 1,556/sqft
 * (The earlier AED 1,585 figure was the target price over the old 2,018 sqft.)
 */
export const pricing = {
  asking: 'AED 3,300,000',
  target: 'AED 3,200,000',
  askingPerSqft: 'AED 1,604/sqft',
  targetPerSqft: 'AED 1,556/sqft',
} as const;

/**
 * One row of a feasibility ledger.
 *  - item:     an ordinary line (deductions carry a leading "−" in the value)
 *  - subtotal: closes a group (e.g. "Total purchase cost")
 *  - total:    a headline total (e.g. "Total investment")
 */
export type LedgerRow = {
  label: string;
  value: string;
  note?: string;
  kind?: 'item' | 'subtotal' | 'total';
};

export type LedgerGroup = {
  heading?: string;
  rows: readonly LedgerRow[];
};

/** Shared by every option: what it costs to buy the unit. */
const purchaseCosts: LedgerGroup = {
  heading: 'Purchase costs',
  rows: [
    { label: 'Target purchase price', value: 'AED 3,200,000', note: 'Asking AED 3,300,000' },
    { label: 'DIFC registration fee (5%)', value: 'AED 160,000' },
    { label: 'Agency fee (2%)', value: 'AED 64,000' },
    { label: 'Total purchase cost', value: 'AED 3,424,000', kind: 'subtotal' },
  ],
};

/** Planning assumptions used throughout the studies -- edit here, then re-check the sums. */
export const assumptions = {
  label: 'Basis of the Figures',
  heading: 'How these numbers are calculated',
  intro:
    'Every option is calculated on the same basis, so the four can be compared like for like. The assumptions below are estimates and should be confirmed for the specific unit before purchase.',
  items: [
    'Cash purchase at the target price of AED 3,200,000. Mortgage and finance costs are not included.',
    'Acquisition costs: DIFC registration fee of 5% and agency fee of 2% of the purchase price.',
    'Service charges estimated at approximately AED 25 per sqft per year (about AED 51,500 for 2,057 sqft). The unit’s actual service-charge statement should be confirmed.',
    'Long-term lettings: property management at 5% of rent. Short-term lettings: holiday-home management at 20% of revenue, plus an estimated AED 24,000 a year for utilities, licensing and upkeep.',
    'Holding costs while the unit is vacant (service charges and utilities): about AED 5,000 a month — AED 45,000 over ~9 months for Option 03 and AED 30,000 over ~6 months for Option 04.',
    'Resale costs: 2% agency fee on the sale price plus an estimated AED 5,000 for NOC and transfer administration.',
    'Resale values are based on current DIFC comparables. No capital appreciation is added to the resale scenarios.',
    'Yields and ROI are calculated on total cash invested, before personal tax, and are not annualised unless stated.',
  ],
  projectedNote:
    'Projected, not guaranteed: every rental income, resale value, profit and return on this page is a projection based on current market data and the assumptions above. None of these returns is guaranteed, and actual results may be higher or lower.',
} as const;

export type OptionCard = {
  id: string;
  number: string;
  icon: 'home' | 'key' | 'trend' | 'layers';
  title: string;
  tag: string;
  summary: string;
  points: string[];
  renovation: 'none' | 'optional';
  figure: { label: string; value: string };
};

export const options = {
  label: 'Your Options',
  heading: 'One Property. Four Possibilities.',
  intro:
    'Choose the approach that matches your lifestyle or investment goals. The penthouse is ready today — renovation is an option to increase returns, never a requirement.',
  tagline: 'Move In, Rent Out, or Unlock Further Investment Potential — The Choice Is Yours.',
  footnote: 'Projected figures, not guaranteed. Full breakdown under each option.',
  cards: [
    {
      id: 'option-move-in',
      number: '01',
      icon: 'home',
      title: 'Buy & Move In',
      tag: 'Personal Use',
      summary: 'Your DIFC residence, ready to enjoy. No renovation required.',
      points: [
        'Purchase and enjoy the property in its current condition',
        'No renovation required',
        'Ideal for end-users looking for a residence in DIFC',
      ],
      renovation: 'none',
      figure: { label: 'Total purchase cost', value: 'AED 3,424,000' },
    },
    {
      id: 'option-rent',
      number: '02',
      icon: 'key',
      title: 'Buy & Rent',
      tag: 'Rental Income',
      summary: 'Start generating rental income without renovating.',
      points: [
        'Purchase and rent out the property as-is',
        'No renovation required',
        'Gross and net rental income, with ROI',
      ],
      renovation: 'none',
      figure: { label: 'Projected gross rent per year', value: 'AED 200,000 – 280,000' },
    },
    {
      id: 'option-resale',
      number: '03',
      icon: 'trend',
      title: 'Renovate & Resell',
      tag: 'Capital Gain',
      summary: 'Explore potential capital gains through renovation.',
      points: [
        'Purchase, renovate and resell for potential profit',
        'Optional strategy — our team can plan and manage the works',
        'Renovation costs, total investment, resale value, net profit and ROI',
      ],
      renovation: 'optional',
      figure: { label: 'Projected net profit', value: 'AED 826,000 – 1,022,000' },
    },
    {
      id: 'option-combined',
      number: '04',
      icon: 'layers',
      title: 'Renovate, Rent & Resell',
      tag: 'Combined Returns',
      summary: 'Combine rental income with a future resale strategy.',
      points: [
        'Purchase and renovate, generate rental income, then resell',
        'Optional strategy — rent and resale gain stack together',
        'Rental income, resale value, total costs and combined ROI',
      ],
      renovation: 'optional',
      figure: { label: 'Projected combined net profit', value: 'AED 1,074,500 – 1,270,500' },
    },
  ] satisfies OptionCard[],
} as const;

/** Lead-in to the four feasibility studies. */
export const studies = {
  label: 'Feasibility Studies',
  heading: 'The numbers behind each option',
  intro:
    'For investors who want the detail: each option is broken down into purchase costs, renovation (where applicable), rental returns and resale — gross and net.',
} as const;

/* Option 01 — Buy & Move In ------------------------------------------------ */

export const optionMoveIn = {
  id: 'option-move-in',
  label: 'Option 01 — Personal Use',
  heading: 'Buy & Move In',
  intro:
    'Purchase the penthouse and live in it exactly as it is today. It is ready for occupation — no renovation, no waiting. Your costs are the purchase itself, the registration and agency fees, and the building’s annual service charges.',
  ledger: [
    purchaseCosts,
    {
      heading: 'Ongoing ownership costs',
      rows: [{ label: 'Service charges (est. ~AED 25/sqft)', value: 'AED 51,500 / yr' }],
    },
  ] satisfies LedgerGroup[],
  highlights: {
    heading: 'Why live here',
    items: [
      'Two bedrooms across a duplex layout — 2,057 sqft',
      'Floor-to-ceiling glazing over the Dubai skyline',
      '3 minutes to DIFC Gate Village, 4 minutes to Emirates Towers Metro',
      'Ready to move in — no works required',
    ],
  },
  optionalNote: {
    heading: 'Renovation is optional',
    body: 'If you would like to personalise finishes or furnishings at any point, our team can plan and manage the work with you. It is a choice, not a requirement.',
  },
} as const;

/* Option 02 — Buy & Rent --------------------------------------------------- */

export const optionRent = {
  id: 'option-rent',
  label: 'Option 02 — Rental Income',
  heading: 'Buy & Rent',
  intro:
    'Let the penthouse in its current condition and start earning straight away. Three rental positions, from a single-cheque long lease to a managed short-term let — shown both gross and net of running costs.',
  purchase: purchaseCosts,
  rentalsHeading: 'Projected gross rental income — as-is',
  rentals: [
    { type: 'Long-term rent', amount: 'AED 200,000', terms: '1 cheque · per year', highlight: false },
    { type: 'Long-term rent', amount: 'AED 210,000', terms: '2 cheques · per year', highlight: false },
    { type: 'Short-term rent', amount: 'AED 280,000', terms: '75% occupancy · per year', highlight: true },
  ],
  netHeading: 'From gross to net rental income',
  net: [
    {
      heading: 'Long-term let — 1 cheque',
      rows: [
        { label: 'Gross rental income', value: 'AED 200,000' },
        { label: 'Service charges (est.)', value: '− AED 51,500' },
        { label: 'Property management (5%)', value: '− AED 10,000' },
        { label: 'Net rental income', value: 'AED 138,500', kind: 'subtotal' },
      ],
      yields: [
        { label: 'Gross yield', value: '5.8%' },
        { label: 'Net yield', value: '4.0%' },
      ],
    },
    {
      heading: 'Short-term let — 75% occupancy',
      rows: [
        { label: 'Gross rental income', value: 'AED 280,000' },
        { label: 'Service charges (est.)', value: '− AED 51,500' },
        { label: 'Holiday-home management (20%)', value: '− AED 56,000' },
        { label: 'Utilities, licensing & upkeep (est.)', value: '− AED 24,000' },
        { label: 'Net rental income', value: 'AED 148,500', kind: 'subtotal' },
      ],
      yields: [
        { label: 'Gross yield', value: '8.2%' },
        { label: 'Net yield', value: '4.3%' },
      ],
    },
  ],
  yieldBasis:
    'Yields are per year, on the total purchase cost of AED 3,424,000. Projected, not guaranteed.',
  appreciation: {
    heading: 'Capital Appreciation',
    value: '3-year assumption — 5% annually',
    note: 'An assumption only — not included in the yields above and not guaranteed.',
  },
  rationale: {
    heading: 'Why This Category',
    body: 'DIFC is rapidly expanding, while availability of units in this specific category remains limited due to strong demand and restricted supply.',
  },
  importantNote: {
    heading: 'No renovation needed',
    body: 'These projections are for the unit as it stands today. Renovation is optional — if upgrades are carried out, projected long-term rent rises to AED 290,000 – 310,000 a year (see Option 04).',
  },
} as const;

/* Option 03 — Renovate & Resell -------------------------------------------- */

export const optionResale = {
  id: 'option-resale',
  label: 'Option 03 — Capital Gain',
  heading: 'Renovate & Resell',
  intro:
    'An optional value-add strategy: acquire at the target price, carry out a full renovation and furnishing programme, then resell into the district’s prevailing rate. Our team can plan and manage the works for you.',
  ledger: [
    purchaseCosts,
    {
      heading: 'Renovation & holding costs',
      rows: [
        { label: 'Renovation & furnishing', value: 'AED 600,000' },
        {
          label: 'Holding costs (est.)',
          value: 'AED 45,000',
          note: 'Service charges & utilities, ~9 months',
        },
        { label: 'Total renovation & holding', value: 'AED 645,000', kind: 'subtotal' },
      ],
    },
    { rows: [{ label: 'Total investment', value: 'AED 4,069,000', kind: 'total' }] },
    {
      heading: 'Resale',
      rows: [
        { label: 'Projected resale value', value: 'AED 5,000,000 – 5,200,000' },
        {
          label: 'Resale costs (est.)',
          value: '− AED 105,000 – 109,000',
          note: '2% agency fee + NOC & transfer admin',
        },
        { label: 'Net sale proceeds', value: 'AED 4,895,000 – 5,091,000', kind: 'subtotal' },
      ],
    },
  ] satisfies LedgerGroup[],
  results: [
    {
      label: 'Projected net profit',
      value: 'AED 826,000 – 1,022,000',
      note: 'Net sale proceeds less total investment',
    },
    {
      label: 'Projected ROI',
      value: '20.3% – 25.1%',
      note: 'On AED 4,069,000 invested, over ~9–12 months',
    },
  ],
  renovation: {
    heading: 'Renovation & Exit Strategy',
    budget: 'AED 600,000',
    scope:
      'Budget covering electrical installations, flooring, window tint and doors, carpentry, AC systems, kitchen and bathroom upgrades, wall finishes, lighting, paint, decorative elements, furniture, appliances and interior décor.',
    timelineLabel: 'Estimated timeline',
    timeline: '4–6 months',
    exit:
      'After renovation the investor can resell or retain the unit as a rental asset and benefit from potential future capital appreciation.',
  },
  comparables: {
    heading: 'Market Comparables',
    // The subject unit is listed alongside the comparables so the entry rate
    // reads directly against the district rate, per square foot.
    subject: {
      name: 'This unit — Park Towers',
      sizeLabel: size.sqftLabel,
      price: 'AED 3,300,000',
      rate: 'AED 1,604/sqft',
    },
    items: [
      { name: 'Central Park Towers', price: 'AED 5.20M', rate: 'AED 2,550/sqft' },
      { name: 'Index Tower', price: 'AED 5.25M', rate: 'AED 2,516/sqft' },
    ],
    note: 'Comparable DIFC towers trade above AED 2,500 per square foot. At 2,057 sqft, this unit is offered at AED 1,604 per square foot at the asking price (AED 1,556 at the target price) — the gap is the opportunity.',
    footnote: 'Market data extracted from DXB Interact.',
  },
} as const;

/* Option 04 — Renovate, Rent & Resell -------------------------------------- */

export const optionCombined = {
  id: 'option-combined',
  label: 'Option 04 — Combined Returns',
  heading: 'Renovate, Rent & Resell',
  intro:
    'The same optional renovation as Option 03, but the unit is let for a year before it is sold. Net rental income is added on top of the resale gain rather than replacing it.',
  ledger: [
    purchaseCosts,
    {
      heading: 'Renovation & holding costs',
      rows: [
        { label: 'Renovation & furnishing', value: 'AED 600,000' },
        {
          label: 'Holding costs (est.)',
          value: 'AED 30,000',
          note: 'Service charges & utilities, ~6 months of works',
        },
        { label: 'Total renovation & holding', value: 'AED 630,000', kind: 'subtotal' },
      ],
    },
    { rows: [{ label: 'Total investment', value: 'AED 4,054,000', kind: 'total' }] },
    {
      heading: 'Rental year — after renovation',
      rows: [
        {
          label: 'Gross rental income',
          value: 'AED 300,000',
          note: '12 months, mid-point of AED 290,000 – 310,000',
        },
        { label: 'Service charges (est.)', value: '− AED 51,500' },
        { label: 'Property management (5%)', value: '− AED 15,000' },
        { label: 'Net rental income', value: 'AED 233,500', kind: 'subtotal' },
      ],
    },
    {
      heading: 'Resale — at the end of the lease',
      rows: [
        { label: 'Projected resale value', value: 'AED 5,000,000 – 5,200,000' },
        {
          label: 'Resale costs (est.)',
          value: '− AED 105,000 – 109,000',
          note: '2% agency fee + NOC & transfer admin',
        },
        { label: 'Net sale proceeds', value: 'AED 4,895,000 – 5,091,000' },
        {
          label: 'Gain on resale',
          value: 'AED 841,000 – 1,037,000',
          note: 'Net sale proceeds less total investment',
          kind: 'subtotal',
        },
      ],
    },
  ] satisfies LedgerGroup[],
  yields: [
    { label: 'Gross rental yield', value: '7.4%', note: 'Per year, on total investment' },
    { label: 'Net rental yield', value: '5.8%', note: 'Per year, on total investment' },
  ],
  results: [
    {
      label: 'Projected combined net profit',
      value: 'AED 1,074,500 – 1,270,500',
      note: 'Gain on resale + 1 year net rent',
    },
    {
      label: 'Projected combined ROI',
      value: '26.5% – 31.3%',
      note: 'On AED 4,054,000 invested, over ~18 months',
    },
  ],
  comparison:
    'Against AED 826,000 – 1,022,000 projected on a straight renovate-and-resell (Option 03).',
} as const;

export const location = {
  label: 'Location',
  heading: 'Park Towers, DIFC',
  intro:
    'On the Financial Centre side of Sheikh Zayed Road — inside the DIFC district, minutes from Downtown and a straight run to the airport.',
  mapImage: '/images/location-map.png',
  mapImageAlt:
    'Illustrated map of the Dubai coastline from Palm Jumeirah to Deira, with Park Towers marked in orange within DIFC, beside Sheikh Zayed Road',
  mapImageWidth: 2200,
  mapImageHeight: 947,
  embedSrc: 'https://www.google.com/maps?q=Park%20Towers%2C%20DIFC%2C%20Dubai&output=embed',
  embedTitle: 'Google Map showing Park Towers, DIFC, Dubai',
  driveTimesNote: 'Approximate driving times in normal traffic.',
  landmarks: [
    { name: 'DIFC Gate Village', time: '3 min' },
    { name: 'Emirates Towers Metro', time: '4 min' },
    { name: 'Sheikh Zayed Road', time: '2 min' },
    { name: 'Downtown Dubai & Burj Khalifa', time: '8 min' },
    { name: 'The Dubai Mall', time: '9 min' },
    { name: 'City Walk', time: '8 min' },
    { name: 'DXB International Airport', time: '15 min' },
  ],
} as const;

export const finalCta = {
  label: 'Next Step',
  heading: 'Get in Touch with a Specialist',
  body: 'Whether you plan to live here, let it or invest further, full floor plans, the complete feasibility studies and a viewing can be arranged directly. Message on WhatsApp for the fastest reply.',
  backgroundImage: '/images/gallery/reception-lounge.jpg',
  backgroundWidth: 1264,
  backgroundHeight: 843,
  ctaLabel: 'Message Us on WhatsApp',
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} Dubai Rapid Properties. All rights reserved.`,
  disclaimer:
    'All figures, projections and returns stated on this page are estimates based on current market data and the stated assumptions, and are provided for information purposes only. Projected rental income, resale values and returns are not guaranteed. They do not constitute financial advice or a guarantee of future performance. Renovation is optional and is not required to purchase, occupy or let the property. Terms and availability are subject to change.',
} as const;

export const seo = {
  title: 'DIFC Duplex Penthouse — Park Towers | Dubai Rapid Properties',
  description:
    '2-bedroom duplex penthouse, 2,057 sqft, in Park Towers, DIFC at AED 3,300,000 — AED 1,604/sqft in a district trading above AED 2,500/sqft. Ready to move in or rent, with optional renovation strategies and full feasibility studies.',
  siteName: 'Dubai Rapid Properties',
  ogImage: '/images/og-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt:
    'Living area of the DIFC duplex penthouse at Park Towers, with floor-to-ceiling glazing over the Dubai skyline',
  // Structured-data values -- the only place raw numbers are used.
  numericPrice: 3300000,
  currency: 'AED',
  numberOfBedrooms: 2,
  floorSizeValue: size.sqft,
  floorSizeUnitCode: 'FTK', // UN/CEFACT code for square foot
  locality: 'Dubai International Financial Centre',
  region: 'Dubai',
  country: 'AE',
} as const;
