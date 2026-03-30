export const siteConfig = {
  organization: "ZOE MENTORSHIP ENDEAVORS",
  tagline: "Admirable Transformation",
  description:
    "ZOE MENTORSHIP ENDEAVORS equips schools, young people, and communities with mentorship, leadership, and wellbeing programs that build confidence, character, and purpose.",
  contactCta: {
    label: "Contact Us",
    href: "/contact",
  },
  secondaryCta: {
    label: "Explore Programs",
    href: "/programs",
  },
  contact: {
    email: "info@zoementorship.org",
    phoneDisplay: "+254 741 232 944",
    phoneHref: "tel:+254741232944",
    emailHref: "mailto:info@zoementorship.org",
    locationLabel: "Nairobi, Kenya",
    locationHref: "https://www.google.com/maps?q=Nairobi,Kenya",
    hours: [
      "Monday - Friday: 9:00 AM - 5:00 PM",
      "Saturday: By appointment",
      "Sunday: Closed",
    ],
  },
} as const;

export const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/activities", label: "Activities" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroStats = [
  { value: "4", label: "Signature programs" },
  { value: "7", label: "School mentorship themes" },
  { value: "1", label: "Clear mission around growth and impact" },
] as const;

export const homeHighlights = [
  {
    title: "Purpose-led mentorship",
    description:
      "We guide learners and young leaders toward clarity, confidence, and responsible citizenship.",
    href: "/about",
  },
  {
    title: "School-ready programs",
    description:
      "Every session is structured for practical impact in classrooms, leadership spaces, and community settings.",
    href: "/programs",
  },
  {
    title: "Hands-on activities",
    description:
      "From workshops to bootcamps, we create memorable learning moments that move people into action.",
    href: "/activities",
  },
] as const;

export const aboutSections = [
  {
    title: "Our Mission",
    content:
      "To provide transformative mentorship and personal development programs that inspire growth, strengthen leadership, and equip individuals with life skills for impact and excellence.",
  },
  {
    title: "Our Vision",
    content:
      "To be a leading mentorship and coaching organization that empowers individuals to discover their purpose, maximize their potential, and thrive in all spheres of life.",
  },
  {
    title: "How We Work",
    content:
      "We combine mentorship, coaching, wellbeing support, and practical learning experiences to help young people build character, resilience, and future focus.",
  },
  {
    title: "Who We Serve",
    content:
      "Our programs are designed for schools, student leaders, mentorship clubs, and communities that want meaningful growth and measurable transformation.",
  },
] as const;

export const coreValues = [
  {
    icon: "shield",
    title: "Integrity",
    description: "We uphold honesty, trust, and ethical standards in every engagement.",
  },
  {
    icon: "sparkles",
    title: "Empowerment",
    description: "We help every participant recognize and grow their potential.",
  },
  {
    icon: "award",
    title: "Excellence",
    description: "We design experiences that are thoughtful, practical, and high quality.",
  },
  {
    icon: "users",
    title: "Collaboration",
    description: "We work closely with schools, families, and communities for lasting change.",
  },
  {
    icon: "heart",
    title: "Service",
    description: "We lead with empathy and a deep commitment to meaningful impact.",
  },
  {
    icon: "star",
    title: "Respect",
    description: "We value dignity, diversity, and healthy relationships in every space we enter.",
  },
] as const;

export const programs = [
  {
    icon: "users",
    title: "Whole-School Mentorship Day",
    description:
      "A broad, high-energy mentorship experience designed to align an entire school around character, resilience, and vision.",
    topics: ["Discipline", "Emotional resilience", "Safeguarding", "Future vision"],
  },
  {
    icon: "book",
    title: "Half-Day Candidate and Leaders Workshop",
    description:
      "Targeted sessions for exam classes and student leaders who need focus, calm, and practical leadership habits.",
    topics: ["Exam stress", "Leadership skills", "Goal-setting"],
  },
  {
    icon: "handshake",
    title: "Leadership Bootcamp",
    description:
      "An immersive experience that helps student leaders serve well, make sound decisions, and influence peers positively.",
    topics: ["Leadership as service", "Conflict resolution", "Integrity", "Peer influence"],
  },
  {
    icon: "brain",
    title: "Mental Health and Safeguarding Sessions",
    description:
      "Supportive conversations that strengthen wellbeing awareness, safety, and healthy relationship skills.",
    topics: ["Stress and anxiety", "Substance abuse", "Peer relationships"],
  },
] as const;

export const mentorshipTopics = [
  "Discipline and responsible citizenship",
  "Emotional intelligence and stress management",
  "Leadership and constructive student voice",
  "Mental health and wellbeing",
  "Safeguarding and positive relationships",
  "Future focus and vision building",
  "Comprehensive sex education",
] as const;

export const activities = [
  {
    icon: "calendar",
    title: "Mentorship Days",
    description:
      "School-wide experiences that combine inspiration, accountability, and future-focused conversations.",
  },
  {
    icon: "mic",
    title: "Talks and Workshops",
    description:
      "Interactive sessions for students, prefects, clubs, and staff teams who need practical tools and fresh perspective.",
  },
  {
    icon: "school",
    title: "Leadership Labs",
    description:
      "Facilitated group sessions where student leaders practice problem-solving, communication, and service.",
  },
  {
    icon: "sparkles",
    title: "Community Impact Moments",
    description:
      "Activities that push participants to move beyond personal growth into positive action for others.",
  },
] as const;

export const contactMethods = [
  {
    icon: "mail",
    title: "Email",
    value: siteConfig.contact.email,
    href: siteConfig.contact.emailHref,
  },
  {
    icon: "phone",
    title: "Phone",
    value: siteConfig.contact.phoneDisplay,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: "map",
    title: "Location",
    value: siteConfig.contact.locationLabel,
    href: siteConfig.contact.locationHref,
  },
] as const;
