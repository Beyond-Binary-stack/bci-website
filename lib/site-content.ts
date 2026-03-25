export type TrustItem = {
  title: string;
  description: string;
  icon: "badgeCheck" | "globe" | "building" | "shield";
};

export type StatItem = {
  value: number;
  suffix: string;
  label: string;
  icon: "users" | "graduationCap" | "school" | "award";
};

export type MediaCard = {
  title: string;
  description: string;
  image: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

export type NewsItem = {
  title: string;
  summary: string;
  image: string;
};

export const branding = {
  schoolName: "British Canadian International School",
  shortName: "British Canadian",
  logo: "/BC/Logo.jpg",
};

export const heroContent = {
  eyebrow: "British Canadian International School",
  title: "Welcome to British Canadian International School",
  subtitle: "Shaping Future Leaders Through Quality Education",
  description:
    "A supportive school community where students build confidence, curiosity, and character through a strong academic foundation.",
  primaryAction: { label: "Apply Now", href: "#cta" },
  secondaryAction: { label: "Explore Programs", href: "#programs" },
  poster: "/BC/building1.jpg",
};

export const trustItems: TrustItem[] = [
  {
    title: "Qualified Teachers",
    description:
      "Experienced educators guide every learner with care, consistency, and high academic standards.",
    icon: "badgeCheck",
  },
  {
    title: "International Curriculum",
    description:
      "A globally minded learning pathway helps students grow with confidence in a changing world.",
    icon: "globe",
  },
  {
    title: "Modern Facilities",
    description:
      "Well-equipped spaces support creativity, discovery, and active learning across every age group.",
    icon: "building",
  },
  {
    title: "Safe Learning Environment",
    description:
      "Students thrive in a welcoming campus culture built on respect, structure, and wellbeing.",
    icon: "shield",
  },
];

export const overviewContent = {
  image: "/BC/building2.png",
  title: "A School Community Built For Growth",
  description:
    "British Canadian International School is committed to providing high-quality education in a supportive and diverse learning environment. Our mission is to nurture students academically, socially, and personally.",
  secondaryText:
    "From early years to middle school, students are encouraged to explore their strengths, think independently, and grow into responsible future leaders.",
  action: { label: "Learn More", href: "#student-life" },
};

export const stats: StatItem[] = [
  { value: 1200, suffix: "+", label: "Students", icon: "users" },
  { value: 80, suffix: "+", label: "Teachers", icon: "graduationCap" },
  { value: 25, suffix: "", label: "Classrooms", icon: "school" },
  { value: 10, suffix: "+", label: "Years of Excellence", icon: "award" },
];

export const programs: MediaCard[] = [
  {
    title: "Kindergarten",
    description:
      "A nurturing environment designed to build strong foundations for early learners.",
    image: "/BC/Students%201.jpg",
  },
  {
    title: "Primary School",
    description:
      "Developing essential academic skills, creativity, and curiosity through engaging daily learning.",
    image: "/BC/Classroom1.jpg",
  },
  {
    title: "Middle School Until Grade 8",
    description:
      "Preparing students for future success through leadership, critical thinking, and character development.",
    image: "/BC/Students%203.jpg",
  },
];

export const facilities: MediaCard[] = [
  {
    title: "Science Laboratories",
    description: "Hands-on spaces that encourage experimentation and problem solving.",
    image: "/BC/student%20in%20Lap1.png",
  },
  {
    title: "Computer Labs",
    description: "Digital resources that support innovation and modern learning.",
    image: "/BC/student%20in%20Lap2.jpg",
  },
  {
    title: "Library",
    description: "A quiet reading and research environment for every age group.",
    image: "/BC/Classroom4.jpg",
  },
  {
    title: "Sports Field",
    description: "Outdoor areas that promote teamwork, movement, and wellbeing.",
    image: "/BC/Sports.jpg",
  },
  {
    title: "Classrooms",
    description: "Bright, welcoming spaces designed for focused everyday learning.",
    image: "/BC/Classroom2.jpg",
  },
];

export const tourContent = {
  title: "Explore Our Campus",
  description:
    "Discover our classrooms, labs, playgrounds, and student activities through a guided visual campus tour.",
  action: { label: "Watch Campus Tour", href: "#tour-video" },
  poster: "/BC/building1.jpg",
  highlights: ["Classrooms", "Labs", "Playground", "Student Activities"],
};

export const studentLife: MediaCard[] = [
  {
    title: "Sports Activities",
    description: "Students build confidence, discipline, and teamwork through sports.",
    image: "/BC/sports2.jpg",
  },
  {
    title: "School Events",
    description: "Celebrations and special events create meaningful shared memories.",
    image: "/BC/Activities1.jpg",
  },
  {
    title: "Student Clubs",
    description: "Clubs help learners discover interests beyond the classroom.",
    image: "/BC/Activities2.jpg",
  },
  {
    title: "Field Trips",
    description: "Real-world experiences make learning more engaging and memorable.",
    image: "/BC/Activities3.jpg",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "This school provides excellent education and a supportive environment for students.",
    name: "Sarah A.",
    role: "Parent of a Primary Student",
  },
  {
    quote:
      "The teachers genuinely care, and my child has grown in confidence both academically and socially.",
    name: "Michael T.",
    role: "Parent of a Kindergarten Student",
  },
  {
    quote:
      "We value the balance of discipline, warmth, and opportunity that the academy offers every day.",
    name: "Nadia R.",
    role: "Parent of a Grade 7 Student",
  },
];

export const newsItems: NewsItem[] = [
  {
    title: "Annual Sports Day",
    summary:
      "Students celebrated teamwork and school spirit through a full day of athletic activities.",
    image: "/BC/sports3.jpg",
  },
  {
    title: "Graduation Ceremony",
    summary:
      "Families and teachers came together to celebrate our students' milestones and achievements.",
    image: "/BC/Graduation-Cermony1.jpg",
  },
  {
    title: "Science Fair Event",
    summary:
      "Young innovators presented creative experiments and problem-solving projects to the school community.",
    image: "/BC/student%20in%20Lap3.jpg",
  },
];

export const galleryItems: MediaCard[] = [
  {
    title: "Events",
    description: "Snapshots from memorable school-wide celebrations.",
    image: "/BC/Graduation-Cermony2.jpg",
  },
  {
    title: "Classroom Activities",
    description: "Moments of collaboration, discovery, and hands-on learning.",
    image: "/BC/Classroom5.jpg",
  },
  {
    title: "Sports",
    description: "Active student life on the field, court, and playground.",
    image: "/BC/Sports.jpg",
  },
  {
    title: "Celebrations",
    description: "School traditions that bring students, staff, and families together.",
    image: "/BC/Activities4.jpg",
  },
];

export const ctaContent = {
  title: "Start Your Child's Journey Today",
  description:
    "Join British Canadian International School and give your child the opportunity to grow, learn, and succeed in a supportive educational environment.",
  action: { label: "Apply for Admission", href: "#hero" },
};

export const footerContent = {
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#overview" },
    { label: "Academics", href: "#programs" },
    { label: "Admissions", href: "#cta" },
    { label: "Student Life", href: "#student-life" },
    { label: "Contact", href: "#footer" },
  ],
  contact: [
    { label: "Phone", value: "+1 (000) 123-4567", href: "tel:+10001234567" },
    { label: "Email", value: "info@britishcanadianacademy.edu", href: "mailto:info@britishcanadianacademy.edu" },
    {
      label: "Address",
      value: "Campus address to be updated with the official school location",
      href: "https://maps.google.com/?q=British+Canadian+Academy",
    },
  ],
  social: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps?q=British+Canadian+Academy&output=embed",
};
