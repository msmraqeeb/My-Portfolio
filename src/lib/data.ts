import { CodeXml, Component, Layout, BarChart, Sun, Cloud, Palette, BrainCircuit, PenTool, Tv, Megaphone, Paintbrush } from 'lucide-react';

export const profile = {
  name: 'Shakil Mahmud',
  roles: ['Software Engineer', 'Web Developer', 'Social Media Specialist', 'Digital Marketer', 'Voice Artist'],
  bio: "I'm a passionate and creative full-stack developer, dedicated to building beautiful and functional web experiences. I can boost your business to the next success level through social media marketing. You can hire me for your voice artist in your advertisement. A whole package I can offer you.",
  image: 'profile-picture',
  location: 'Dhaka, Bangladesh',
  contact: {
    email: 'msmraqeeb@gmail.com',
    phone: '+1 123 456 7890',
  },
  about: {
    description: "I am a passionate developer with a knack for creating elegant, efficient, and user-friendly digital experiences. With a strong foundation in both front-end and back-end technologies, I specialize in bringing ideas to life from concept to deployment. My goal is to always build products that provide pixel-perfect, performant experiences. By hiring me you can utilize my multi section skills so that your team will boost than before.",
    details: [
      { label: "Name", value: "Shakil Mahmud" },
      { label: "Email", value: "msmraqeeb@gmail.com" },
      { label: "From", value: "Dhaka, Bangladesh" },
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
      year: "2009 - 2012",
      title: "B.Sc. in Computer Science & Engineering",
      institution: "Stamford University",
      description: "Focused on web design and software development. Gathered skills on social medias."
    },
    {
      year: "2007 - 2008",
      title: "H.S.C",
      institution: "Notre Dame College",
      description: "Specialized in science projects and acheived a top result."
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
