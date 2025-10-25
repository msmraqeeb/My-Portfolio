import { CodeXml, Component, Layout, BarChart, Sun, Cloud, Palette, BrainCircuit, PenTool, Tv, Megaphone, Paintbrush } from 'lucide-react';

export const profile = {
  name: 'Alex Doe',
  roles: ['Developer', 'Designer', 'Freelancer'],
  bio: "I'm a passionate and creative full-stack developer, dedicated to building beautiful and functional web experiences.",
  image: 'profile-picture',
  location: 'New York, USA',
  contact: {
    email: 'alex.doe@example.com',
    phone: '+1 123 456 7890',
  },
  about: {
    description: "I am a passionate developer with a knack for creating elegant, efficient, and user-friendly digital experiences. With a strong foundation in both front-end and back-end technologies, I specialize in bringing ideas to life from concept to deployment. My goal is to always build products that provide pixel-perfect, performant experiences.",
    details: [
      { label: "Name", value: "Alex Doe" },
      { label: "Email", value: "alex.doe@example.com" },
      { label: "Age", value: "28" },
      { label: "From", value: "New York, USA" },
    ]
  }
};

export const services = [
    {
        icon: Layout,
        title: "Web Design",
        description: "Crafting visually stunning and user-friendly website designs that leave a lasting impression."
    },
    {
        icon: CodeXml,
        title: "Web Development",
        description: "Building robust, scalable, and high-performance websites using modern technologies."
    },
    {
        icon: BarChart,
        title: "Business Analysis",
        description: "Analyzing business needs and providing data-driven insights to improve processes and strategies."
    },
    {
        icon: Megaphone,
        title: "Digital Marketing",
        description: "Implementing effective online marketing strategies to boost brand visibility and engagement."
    },
    {
        icon: Paintbrush,
        title: "Brand Identity",
        description: "Designing unique and memorable brand identities, logos, and marketing materials."
    },
    {
        icon: Tv,
        title: "Video Editing",
        description: "Producing professional and compelling video content for various marketing needs."
    }
];

export const resume = {
  education: [
    {
      year: "2018 - 2022",
      title: "Master in Computer Science",
      institution: "Harvard University",
      description: "Focused on advanced algorithms, machine learning, and system design. Graduated with top honors."
    },
    {
      year: "2014 - 2018",
      title: "Bachelor of Science in Computer Science",
      institution: "Stanford University",
      description: "Specialized in software engineering principles, database management, and web technologies."
    }
  ],
  experience: [
    {
      year: "2022 - Present",
      title: "Sr. Full-Stack Developer",
      institution: "Apple Inc.",
      description: "Lead developer on customer-facing web platforms, focusing on performance, scalability, and user experience."
    },
    {
      year: "2019 - 2022",
      title: "Jr. Front-End Developer",
      institution: "Google LLC",
      description: "Worked on the UI/UX for various Google services, improving interactivity and accessibility."
    }
  ]
};


export const portfolio = [
  {
    title: 'Corporate Website',
    category: 'Web Design',
    image: 'project-1',
    link: '#',
  },
  {
    title: 'Marketing Campaign',
    category: 'Branding',
    image: 'project-2',
    link: '#',
  },
  {
    title: 'Mobile App UI/UX',
    category: 'App Design',
    image: 'project-3',
    link: '#',
  },
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'project-4',
    link: '#',
  },
    {
    title: 'Promotional Video',
    category: 'Video Editing',
    image: 'project-5',
    link: '#',
  },
    {
    title: 'Social Media Content',
    category: 'Branding',
    image: 'project-6',
    link: '#',
  },
];
