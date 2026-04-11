export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    children: [
      { label: 'AI Chat Widget', href: '/ai-chat-widget', description: 'Convert website visitors 24/7' },
      { label: 'AI Text/SMS', href: '/ai-text-sms', description: 'Instant intelligent text replies' },
      { label: 'AI Voice/Phone', href: '/ai-voice-phone', description: 'Never miss a call again' },
      { label: 'Pro Website', href: '/websites', description: 'A website built for your trade' },
      { label: 'Lead Alerts & Follow-Ups', href: '/lead-alerts', description: 'Instant alerts + automated follow-ups' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

export const HERO = {
  badge: 'AI Receptionist for Home Service Pros',
  headline: 'Stop Losing Jobs to the Guy Who Answers First.',
  subheadline: 'Ligato AI handles your calls, texts, website chats, and even builds your website. 24/7. One AI brain trained on your business. Every lead captured. Every customer impressed.',
  cta1: 'Book a Demo',
  cta2: 'See How It Works',
};

export const CHANNELS = [
  {
    name: 'AI Chat Widget',
    slug: '/ai-chat-widget',
    description: 'Turn website visitors into booked jobs with an AI assistant that knows your business inside and out.',
    icon: 'chat',
  },
  {
    name: 'AI Text/SMS',
    slug: '/ai-text-sms',
    description: 'Every text gets an instant, intelligent reply. Perfect for yard signs, truck wraps, and Google listings.',
    icon: 'sms',
  },
  {
    name: 'AI Voice/Phone',
    slug: '/ai-voice-phone',
    description: 'AI answers every call with a natural voice. Full transcripts, emergency detection, appointment booking.',
    icon: 'voice',
  },
  {
    name: 'Pro Website',
    slug: '/websites',
    description: 'Don\'t have a website? We\'ll build you a professional, mobile-friendly site, included in your plan.',
    icon: 'globe',
  },
];

export const PAIN_POINTS = {
  without: [
    'Miss calls while on a job, lose the lead',
    'Can\'t afford a full-time receptionist',
    'Contact forms sit unread for hours',
    'Competitors answer the phone first and win the job',
    'Customers search at 9pm but you\'re done at 7pm',
    'Nobody leaves voicemails. They just call the next guy',
  ],
  with: [
    'AI answers every call, text, and chat instantly',
    '$499/mo. A fraction of a receptionist\'s salary',
    'Leads captured and alerts sent in 30 seconds',
    'First to respond, every single time',
    '24/7 coverage: nights, weekends, holidays',
    'No voicemail needed. AI handles the full conversation',
  ],
};

export const CROSS_FEATURES = [
  {
    title: 'Instant Owner Alerts',
    description: 'SMS and email alert within 30 seconds of every new lead. Emergency alerts flagged separately.',
    icon: 'bell',
  },
  {
    title: 'AI Brain Training',
    description: 'Custom-trained on your business: services, hours, area, pricing, and FAQs. No coding required.',
    icon: 'brain',
  },
  {
    title: 'Lead Capture & CRM',
    description: 'Every conversation logged with full transcript. Contacts extracted automatically. Built-in pipeline.',
    icon: 'contacts',
  },
  {
    title: 'Appointment Booking',
    description: 'AI checks real calendar availability and books appointments mid-conversation across all channels.',
    icon: 'calendar',
  },
  {
    title: 'After-Hours Coverage',
    description: 'AI adjusts behavior based on your hours. Captures leads overnight so you wake up to opportunities.',
    icon: 'moon',
  },
  {
    title: 'TCPA Compliant',
    description: 'AI never claims to be human. Discloses it\'s an AI assistant. Named persona, not a fake person.',
    icon: 'shield',
  },
];

export const PRICING = {
  price: '$499',
  period: '/month',
  tagline: 'Everything you need. One simple price.',
  comparison: 'Less than $3/hour for a 24/7 receptionist.',
  features: [
    'All four products (Chat, SMS, Voice, Website)',
    '1,000 voice minutes included',
    'Unlimited chat & SMS conversations',
    'Custom AI brain trained on your business',
    'Instant lead alerts (SMS + email)',
    'Full conversation transcripts',
    'Built-in CRM pipeline',
    'Appointment booking integration',
    'After-hours coverage',
    'Trade-specific AI knowledge',
    'Professional website built for your business',
  ],
  noFees: 'No setup fees. No contracts. $0.25/min after 1,000 minutes.',
};

export const FAQ_ITEMS = [
  {
    question: 'How long does setup take?',
    answer: 'Most businesses are up and running in under 24 hours. You fill out a simple form with your business details, and we configure your AI brain. No coding or technical knowledge required.',
  },
  {
    question: 'Is there a contract or commitment?',
    answer: 'No contracts. It\'s month-to-month. You can cancel anytime. We believe you\'ll stay because the product works, not because you\'re locked in.',
  },
  {
    question: 'What trades do you support?',
    answer: 'Plumbers, HVAC techs, electricians, landscapers, roofers, painters, general contractors, pest control, cleaning services, handyman services, and more. Our AI has trade-specific knowledge built in.',
  },
  {
    question: 'How does the AI learn my business?',
    answer: 'You fill out a simple onboarding form: business name, services, service area, hours, pricing guidance, and FAQs. The AI uses this to give accurate, personalized responses. You can update it anytime.',
  },
  {
    question: 'Can I take over a conversation from the AI?',
    answer: 'Absolutely. For SMS and chat, you can jump in and reply manually at any time. The AI steps back and you take over seamlessly.',
  },
  {
    question: 'What happens if someone calls with an emergency?',
    answer: 'The AI detects emergency keywords like "burst pipe" or "gas leak" and immediately sends you a priority alert. You\'ll know within seconds.',
  },
  {
    question: 'Do I need a new phone number?',
    answer: 'You get a dedicated local phone number for SMS and voice. You can forward your existing number to it, or use it as an additional line.',
  },
  {
    question: 'Are there per-message or per-call fees?',
    answer: 'Your plan includes 1,000 voice minutes per month, more than enough for most small businesses. Chat and SMS are unlimited. If you go over 1,000 voice minutes, it\'s just $0.25 per additional minute. No hidden fees.',
  },
];

export const BUSINESS_TYPES = [
  'Plumber',
  'HVAC Technician',
  'Electrician',
  'Landscaper',
  'Roofer',
  'Painter',
  'General Contractor',
  'Pest Control',
  'Cleaning Service',
  'Handyman',
  'Other',
];

// Chat mockup conversation
export const CHAT_CONVERSATION = [
  { role: 'ai', text: "Hi! I'm Alex with Ace Plumbing. Have a question or need to schedule service? I'm here to help!", delay: 0 },
  { role: 'user', text: "Yeah, my kitchen faucet has been dripping for a couple days. Do you guys fix that?", delay: 2000 },
  { role: 'ai', text: "Absolutely! Leaky faucets are one of our most common repairs. We can usually fix them in a single visit. Would you like to schedule a time for one of our plumbers to come take a look?", delay: 4000 },
  { role: 'user', text: "Sure, what do you have available this week?", delay: 6500 },
  { role: 'ai', text: "Let me check our schedule... We have openings on Thursday between 10am-2pm or Friday morning at 9am. Which works better for you?", delay: 8500 },
  { role: 'user', text: "Thursday at 10 works. My name is Mike.", delay: 11000 },
  { role: 'ai', text: "Perfect! I've got you down for Thursday at 10am, Mike. Can I grab your phone number so we can send you a confirmation and reminder?", delay: 13000 },
];

// SMS mockup conversation
export const SMS_CONVERSATION = [
  { role: 'customer', text: "Hey, do you guys do sprinkler repair?", delay: 0 },
  { role: 'ai', text: "Hi there! Yes, we do! Green Valley Landscaping handles all types of sprinkler and irrigation repair. What seems to be the issue?", delay: 2000 },
  { role: 'customer', text: "Got a zone that won't turn on. Probably a valve issue", delay: 4500 },
  { role: 'ai', text: "Sounds like it could be a solenoid or valve issue. We see that a lot. We can have someone out to diagnose and repair it. Want to set up an appointment?", delay: 6500 },
  { role: 'customer', text: "Yeah that'd be great. This is Mike S btw", delay: 9000 },
  { role: 'ai', text: "Thanks Mike! We have availability tomorrow afternoon or Wednesday morning. What works best?", delay: 11000 },
];

// Voice mockup transcript
export const VOICE_TRANSCRIPT = [
  { speaker: 'AI', text: "Thanks for calling Ace Plumbing! I'm Alex, how can I help you today?", time: '0:02' },
  { speaker: 'Caller', text: "Hi, yeah, I've got a water heater that's not producing hot water anymore.", time: '0:06' },
  { speaker: 'AI', text: "I'm sorry to hear that! Is it a tank or tankless water heater, do you know?", time: '0:10' },
  { speaker: 'Caller', text: "It's a tank, about 8 years old.", time: '0:14' },
  { speaker: 'AI', text: "Got it. An 8-year-old tank unit, could be the heating element or thermostat. We can send a technician to diagnose it. Would you like to schedule a visit?", time: '0:17' },
  { speaker: 'Caller', text: "Yeah, as soon as possible. We've got no hot water.", time: '0:24' },
  { speaker: 'AI', text: "Totally understand. Let me check for the earliest slot. We have an opening tomorrow morning at 8am. Can I book that for you?", time: '0:28' },
];

// Chat widget feature page content
export const CHAT_WIDGET_PAGE = {
  badge: 'AI Chat Widget',
  headline: 'Turn Website Visitors Into Booked Jobs',
  subheadline: 'An AI chat assistant that lives on your website, knows your business, and converts visitors into leads 24/7. Even at 2am.',
  howItWorks: [
    { step: 1, title: 'Widget Loads', description: 'A single script tag adds the chat widget to your website. Customizable colors match your brand.' },
    { step: 2, title: 'AI Greets Visitors', description: 'After 8 seconds of browsing, a friendly greeting pops up. Like a team member saying hello.' },
    { step: 3, title: 'Natural Conversation', description: 'Visitors ask questions and get real answers about your services, hours, and pricing. No generic chatbot nonsense.' },
    { step: 4, title: 'Lead Captured', description: 'AI naturally collects name and phone number through conversation. You get an SMS/email alert within 30 seconds.' },
    { step: 5, title: 'Appointment Booked', description: 'If the visitor wants to book, the AI checks your real calendar and books the appointment on the spot.' },
  ],
  sellingPoints: [
    { title: 'Converts 24/7', description: 'Your website works for you around the clock. Night owls and early birds get instant answers.' },
    { title: 'No Forms to Fill', description: 'The AI collects info through natural conversation. Way better than "fill out this form and we\'ll get back to you."' },
    { title: 'Instant Response', description: 'Zero wait time. The moment someone has a question, they get a knowledgeable answer.' },
    { title: 'Knows Your Business', description: 'Trained on your services, hours, area, and pricing. Gives accurate answers, not generic responses.' },
    { title: 'Books Appointments', description: 'Integrates with your calendar. AI checks availability and books appointments mid-conversation.' },
    { title: 'Branded Experience', description: 'Custom colors, name, and personality. Feels like a real team member, not a robot.' },
  ],
};

// SMS feature page content
export const SMS_PAGE = {
  badge: 'AI Text/SMS',
  headline: 'Every Text Gets an Instant, Intelligent Reply',
  subheadline: 'A dedicated business number powered by AI. Customers text, get smart answers in seconds, and you capture every lead. Automatically.',
  howItWorks: [
    { step: 1, title: 'Customer Sees Your Number', description: 'On your truck wrap, yard sign, business card, or Google listing. Wherever you display your number.' },
    { step: 2, title: 'They Text You', description: '"Hey, do you guys do sprinkler repair?" The customer texts like they would any business.' },
    { step: 3, title: 'AI Responds Instantly', description: 'Same AI brain that powers your chat and phone. Personalized, knowledgeable answers in seconds.' },
    { step: 4, title: 'Conversation Flows', description: 'AI handles follow-ups, captures contact info, and can book appointments. All through text.' },
    { step: 5, title: 'You Get Alerted', description: 'New lead notification with name, job type, and a link to the full conversation. Jump in anytime to take over.' },
  ],
  sellingPoints: [
    { title: '98% Open Rate', description: 'SMS blows email out of the water. Your messages actually get read.' },
    { title: 'No App Needed', description: 'Works with any phone\'s native texting. Customers don\'t need to download anything.' },
    { title: 'Perfect for Field Marketing', description: '"Text us!" on yard signs, truck wraps, and business cards. Simple and effective.' },
    { title: 'After-Hours Coverage', description: 'AI responds even when you\'re on a job or sleeping. No lead goes unanswered.' },
    { title: 'Take Over Anytime', description: 'Jump into any conversation and reply manually. The AI steps back seamlessly.' },
    { title: 'Context Aware', description: 'AI remembers the full conversation. No repeating yourself or losing context.' },
  ],
};

// Voice feature page content
export const VOICE_PAGE = {
  badge: 'AI Voice/Phone',
  headline: 'Never Miss a Call Again',
  subheadline: 'AI answers your phone with a natural voice, handles the full conversation, books appointments, and sends you a complete transcript.',
  howItWorks: [
    { step: 1, title: 'Call Comes In', description: 'Customer calls your business number. Configurable as overflow (rings you first) or always-on.' },
    { step: 2, title: 'AI Answers', description: '"Thanks for calling Ace Plumbing! I\'m Alex, how can I help?" Natural voice, not a phone tree.' },
    { step: 3, title: 'Full Conversation', description: 'AI asks smart follow-up questions, answers questions about services, hours, and availability.' },
    { step: 4, title: 'Info Captured', description: 'Name, phone, job type. All extracted from the conversation automatically.' },
    { step: 5, title: 'You Get Everything', description: 'SMS alert with call summary + full transcript in your dashboard. Emergency calls flagged immediately.' },
  ],
  sellingPoints: [
    { title: 'No Voicemail Needed', description: 'Callers get real answers from a knowledgeable AI, not "leave a message after the beep."' },
    { title: 'Full Transcripts', description: 'Every word of every call is transcribed and stored. Know exactly what was discussed.' },
    { title: 'Emergency Detection', description: '"Burst pipe" or "gas leak" triggers an immediate priority alert to your phone.' },
    { title: 'Professional Impression', description: 'AI sounds like a knowledgeable team member. Great first impression for your business.' },
    { title: 'Overflow or Always-On', description: 'Set it to answer only missed calls, or handle everything. Your choice.' },
    { title: 'Appointment Booking', description: 'AI checks your calendar and books appointments during the call.' },
  ],
};

// Website feature page content
export const WEBSITE_PAGE = {
  badge: 'Pro Website',
  headline: 'No Website? We\'ll Build One For You.',
  subheadline: 'A professional, mobile-friendly website designed for your trade. Built by us, hosted by us, maintained by us. Included in your Ligato AI plan.',
  howItWorks: [
    { step: 1, title: 'Tell Us About Your Business', description: 'A quick form or 10-minute call. We\'ll ask about your services, service area, and what makes you stand out.' },
    { step: 2, title: 'We Design & Build Everything', description: 'Custom layout, professional copy, mobile-friendly design. We handle it all so you don\'t lift a finger.' },
    { step: 3, title: 'Your Site Goes Live', description: 'Live in under a week. Your AI chat widget is already embedded, ready to capture leads from day one.' },
    { step: 4, title: 'We Maintain It Forever', description: 'Need to update your services or add new photos? Just ask. Unlimited edits included.' },
    { step: 5, title: 'Customers Find You on Google', description: 'Built with SEO basics so you actually show up when homeowners search for your services.' },
  ],
  sellingPoints: [
    { title: 'Zero Upfront Cost', description: 'No $5,000 web design invoice. Your website is included in your Ligato AI plan.' },
    { title: 'Live in Under a Week', description: 'We move fast. Most sites are designed, built, and live within 5-7 business days.' },
    { title: 'We Write Everything', description: 'Don\'t know what to put on your site? We write all the content for you based on your business.' },
    { title: 'Mobile-First Design', description: 'Looks great on the phones your customers are using to find you. Touch-friendly, fast-loading.' },
    { title: 'Unlimited Edits', description: 'New service? Updated hours? Just text or email us and we\'ll update your site. No extra charge.' },
    { title: 'AI Chat Built In', description: 'Your Ligato AI chat widget is embedded from day one, converting visitors into leads 24/7.' },
  ],
};

// Lead Alerts & Follow-Ups feature page content
export const ALERTS_PAGE = {
  badge: 'Lead Alerts & Follow-Ups',
  headline: 'Every Lead Gets Chased Down. Automatically.',
  subheadline: 'Instant owner alerts the second a lead comes in. Automated follow-ups for leads who don\'t book. Appointment reminders so nobody forgets. You stay in the loop without lifting a finger.',
  howItWorks: [
    { step: 1, title: 'Lead Comes In', description: 'A customer calls, texts, or chats. The AI handles the conversation and captures their info.' },
    { step: 2, title: 'You Get Alerted Instantly', description: 'Within 30 seconds, you get an SMS and email with the lead\'s name, phone, job type, and urgency level.' },
    { step: 3, title: 'AI Follows Up Automatically', description: 'If the lead doesn\'t book, Ligato sends a follow-up email (and text once approved) 2 hours later.' },
    { step: 4, title: 'Appointment Reminders Go Out', description: '24 hours before a booked appointment, the customer gets a reminder with the date, time, and business phone number.' },
    { step: 5, title: 'Track Everything in Your Dashboard', description: 'See pending follow-ups, sent messages, and reminder status in the Follow-Up Center. Nothing falls through the cracks.' },
  ],
  sellingPoints: [
    { title: '30-Second Owner Alerts', description: 'SMS + email the moment a lead is captured. Emergency situations flagged with priority alerts so you can act fast.' },
    { title: 'Automated Follow-Ups', description: 'Leads who call but don\'t book get a friendly follow-up. No manual effort — the system handles it.' },
    { title: 'Appointment Reminders', description: 'Customers get a reminder 24 hours before their appointment. Fewer no-shows, less wasted time.' },
    { title: 'Follow-Up Center Dashboard', description: 'One place to see every pending follow-up, every sent message, and every upcoming reminder.' },
    { title: 'Email Now, SMS When Ready', description: 'Email follow-ups and reminders work immediately. SMS activates the moment your business texting is approved.' },
    { title: 'No Leads Left Behind', description: 'The #1 reason small businesses lose jobs: slow follow-up. Ligato makes sure every lead gets chased.' },
  ],
};

// Alerts mockup conversation for the feature page
export const ALERTS_TIMELINE = [
  { type: 'lead', time: '2:14 PM', title: 'New lead via Voice', description: 'Mike Johnson — kitchen faucet repair, Provo UT' },
  { type: 'alert', time: '2:14 PM', title: 'Owner alert sent', description: 'SMS + email to your phone' },
  { type: 'followup', time: '4:14 PM', title: 'Auto follow-up sent', description: '"Hi Mike, following up on your faucet repair inquiry..."' },
  { type: 'booking', time: '4:22 PM', title: 'Mike books appointment', description: 'Tuesday at 9:00 AM' },
  { type: 'reminder', time: 'Mon 9:00 AM', title: 'Reminder sent to Mike', description: '"Just a reminder — we\'re coming out tomorrow at 9 AM"' },
];

export const ABOUT_CONTENT = {
  headline: 'Built for the Trades',
  subheadline: 'We built Ligato AI because home service pros deserve better than missed calls and contact form black holes.',
  story: [
    'Every day, skilled tradespeople lose jobs. Not because they lack talent, but because they can\'t answer the phone while they\'re 20 feet up a ladder or elbow-deep in a repair.',
    'The big companies have call centers. They have receptionists. They have teams of people handling inbound leads. Solo operators and small crews? They\'ve got voicemail. And nobody leaves voicemails anymore.',
    'Ligato AI levels the playing field. One AI brain, trained on your specific business, handling every call, text, and website chat. 24/7. It\'s the first employee every solo operator can actually afford.',
  ],
  mission: 'Our mission is simple: make sure no home service pro ever loses a job because they couldn\'t answer the phone.',
};
