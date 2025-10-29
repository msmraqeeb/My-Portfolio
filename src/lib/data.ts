
import { PanelsTopLeft, CodeXml, ChartNoAxesColumnIncreasing, Megaphone, Paintbrush, Tv } from 'lucide-react';

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
        icon: PanelsTopLeft,
        title: "Web Design",
        description: "Crafting visually stunning and user-friendly website designs that leave a lasting impression."
    },
    {
        icon: CodeXml,
        title: "Web Development",
        description: "Building robust, scalable, and high-performance websites using modern technologies."
    },
    {
        icon: ChartNoAxesColumnIncreasing,
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
      year: "Jan 2025 - Present",
      title: "Head of Creative Lead",
      institution: "Regnum Resource Ltd.",
      description: "Lead the creative team focusing on performance, scalability and client satisfaction."
    },
    {
      year: "Mar 2024 - Dec 2024",
      title: "RJ & News Anchor",
      institution: "Capital FM 94.8",
      description: "Hosted live radio programs and anchored news bulletins."
    }
  ]
};


export const portfolio = [
  {
    title: 'Lakewood Of Strathmore',
    category: 'Web Design',
    image: 'project-lakewood',
    link: 'https://liveinlakewood.ca/',
  },
  {
    title: 'InVEST USA',
    category: 'Web Design',
    image: 'project-investusa',
    link: 'https://investusa.org/',
  },
  {
    title: 'iShip',
    category: 'Web Design',
    image: 'project-iship',
    link: 'https://ishipinc.com/',
  },
  {
    title: 'Heckya',
    category: 'Web Design',
    image: 'project-heckya',
    link: 'https://heckya.ca/',
  },
  {
    title: 'Marketing Campaign',
    category: 'Branding',
    image: 'project-2',
    link: '#',
  },
  {
    title: 'Social Media Content',
    category: 'Branding',
    image: 'project-6',
    link: '#',
  }
];
