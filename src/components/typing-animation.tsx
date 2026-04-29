"use client";

import { useState, useEffect } from 'react';

const roles = [
  "Software Engineer",
  "Web Developer",
  "Social Media Specialist",
  "Digital Marketer",
  "Voice Artist"
];

const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenRoles = 2000;

export default function TypingAnimation() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        // Deleting text
        if (text.length > 0) {
          setText(currentRole.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        // Typing text
        if (text.length < currentRole.length) {
          setText(currentRole.substring(0, text.length + 1));
        } else {
          // Wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenRoles);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <p className="text-xl sm:text-2xl font-semibold text-muted-foreground">
      I am a <span className="text-primary">{text}</span>
      <span className="animate-ping">|</span>
    </p>
  );
}
