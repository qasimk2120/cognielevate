export const SITE_URL = 'https://cognielevate.co/';
export const ORG_ID = `${SITE_URL}#organization`;
export const WEBSITE_ID = `${SITE_URL}#website`;
export const LOGO_URL = `${SITE_URL}assets/cognielevate.png`;
export const OG_IMAGE_URL = `${SITE_URL}assets/og-image.png`;

export const sameAs = [
  'https://www.tiktok.com/@cognielevate',
  'https://www.instagram.com/cognifocus.app/',
  'https://x.com/cognielevate',
  'https://www.facebook.com/share/1Am7kCzkjG/',
  'https://discord.gg/HbU3XYyFCz',
  'https://cognifocus.app/',
];

export const coreKeywords = [
  'CogniElevate',
  'CogniFocus',
  'productivity apps',
  'focus app',
  'Android focus app',
  'app blocker',
  'distraction blocker',
  'intelligent systems',
  'time-saving software',
  'startup building productivity tools',
];

export const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'CogniElevate',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  image: OG_IMAGE_URL,
  description: 'CogniElevate builds intelligent products and systems that reduce wasted time across productivity, shopping, healthcare, robotics, and future markets.',
  email: 'cognielevate@gmail.com',
  sameAs,
  foundingLocation: {
    '@type': 'Place',
    name: 'Pakistan',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
    },
  },
  areaServed: 'Worldwide',
  knowsAbout: [
    'Productivity software',
    'Focus systems',
    'App blocking',
    'Distraction reduction',
    'Artificial intelligence',
    'Healthcare workflow systems',
    'Shopping decision systems',
    'Robotics systems',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'cognielevate@gmail.com',
      contactType: 'customer support',
      availableLanguage: ['en'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+923262878356',
      contactType: 'customer support',
      availableLanguage: ['en'],
    },
  ],
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'CogniElevate',
  description: 'CogniElevate builds intelligent products that remove friction, speed up decisions, and reduce wasted time.',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
};

export const cognifocusSoftwareSchema = {
  '@type': 'SoftwareApplication',
  '@id': 'https://cognifocus.app/#software',
  name: 'CogniFocus',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'Android',
  url: 'https://cognifocus.app/',
  image: 'https://cognifocus.app/assets/logo/app-logo.png',
  publisher: { '@id': ORG_ID },
  description: 'CogniFocus is an Android focus app that reacts to user behavior with focus sessions, Distraction Shield app blocking, recovery nudges, streaks, XP, and character-driven accountability.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://cognifocus.app/',
  },
};

export const webPageSchema = ({ id, url, name, description, breadcrumb }) => ({
  '@type': 'WebPage',
  '@id': id,
  url,
  name,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  inLanguage: 'en',
  breadcrumb: breadcrumb ? { '@id': id.replace(/#webpage$/, '#breadcrumb') } : undefined,
});

export const breadcrumbSchema = ({ id, items }) => ({
  '@type': 'BreadcrumbList',
  '@id': id,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
});
