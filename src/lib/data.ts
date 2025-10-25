import { CodeXml, Component, Database, GitMerge, Server, Cloud, Palette, BrainCircuit } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export const profile = {
  name: 'Alex Doe',
  title: 'Full-Stack Developer & UI/UX Enthusiast',
  bio: "I'm a passionate developer with a knack for creating elegant, efficient, and user-friendly digital experiences. With a strong foundation in both front-end and back-end technologies, I specialize in bringing ideas to life from concept to deployment. I thrive on solving complex problems and am constantly learning to keep up with the ever-evolving world of technology.",
  image: 'profile-picture',
};

export const skills = [
  { name: 'React', icon: Component },
  { name: 'Next.js', icon: Component },
  { name: 'TypeScript', icon: CodeXml },
  { name: 'Node.js', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Git & GitHub', icon: GitMerge },
  { name: 'Docker', icon: Server },
  { name: 'Cloud Services', icon: Cloud },
  { name: 'GenAI', icon: BrainCircuit },
];

export const projects = [
  {
    title: 'Project Nova',
    description: 'A comprehensive project management tool designed to streamline team collaboration. Features include task tracking, real-time updates, and resource allocation.',
    image: 'project-1',
    tags: ['Web App', 'React', 'Node.js', 'Real-time'],
    link: '#',
  },
  {
    title: 'ConnectSphere',
    description: 'A mobile-first social networking platform focused on connecting professionals in niche industries. Built with a focus on performance and scalability.',
    image: 'project-2',
    tags: ['Mobile', 'Next.js', 'PostgreSQL', 'UI/UX'],
    link: '#',
  },
  {
    title: 'DataViz Suite',
    description: 'An interactive data visualization dashboard that transforms complex datasets into insightful and easy-to-understand charts and graphs.',
    image: 'project-3',
    tags: ['Data', 'TypeScript', 'D3.js'],
    link: '#',
  },
  {
    title: 'Artisan E-commerce',
    description: 'A sleek and modern e-commerce platform for artisans to sell their handcrafted goods. Features a custom checkout flow and inventory management system.',
    image: 'project-4',
    tags: ['E-commerce', 'React', 'Stripe'],
    link: '#',
  },
];
