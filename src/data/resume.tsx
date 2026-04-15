import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Docker } from "@/components/ui/svgs/docker";

export const getResumeData = (locale: string) => {
  const isEn = locale === "en";

  return {
    name: "Camilo Hernández",
    initials: "CHR",
    url: "https://github.com/hrcamilo11",
    location: "Medellín, Colombia",
    locationLink: "https://www.google.com/maps/place/Medell%C3%ADn,+Antioquia",
    description: isEn 
      ? "Systems Engineering and Data Science student. Focused on backend, cloud (AWS), and offensive cybersecurity."
      : "Estudiante de Ingeniería de Sistemas e Informática e Ingeniería en Ciencias de Datos. Enfocado en backend, cloud (AWS) y ciberseguridad ofensiva.",
    summary: isEn
      ? "Systems Engineering and Data Science student at UPB. Specialized in backend development, serverless architectures on AWS (Lambda, DynamoDB, S3, Cognito), and CI/CD pipelines. Active cybersecurity researcher and CTF player with a focus on binary exploitation and web vulnerabilities."
      : "Estudiante de Ingeniería de Sistemas y Ciencia de Datos en la UPB. Especializado en desarrollo backend, arquitecturas serverless en AWS (Lambda, DynamoDB, S3, Cognito) y pipelines CI/CD. Investigador activo en ciberseguridad y jugador de CTF con enfoque en explotación binaria y vulnerabilidades web.",
    avatarUrl: "/profile1.png",
    skills: [
      { name: "React", icon: Icons.react },
      { name: "Node.js", icon: Nodejs },
      { name: "Python", icon: Python },
      { name: "Go", icon: Golang },
      { name: "TypeScript", icon: Icons.typescript },
      { name: "PostgreSQL", icon: Icons.postgresql },
      { name: "Docker", icon: Docker },
      { name: "AWS", icon: Icons.aws },
      { name: isEn ? "Data Science" : "Ciencia de Datos", icon: Icons.globe },
      { name: isEn ? "Cybersecurity (CTF)" : "Ciberseguridad (CTF)", icon: Icons.globe },
    ],
    navbar: [
      { href: "/", icon: HomeIcon, label: isEn ? "Home" : "Inicio" },
      { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
      email: "hrcamilo11@gmail.com",
      tel: "",
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/hrcamilo11",
          icon: Icons.github,
          navbar: true,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/camilo-hernandez-44b79b149",
          icon: Icons.linkedin,
          navbar: true,
        },
        email: {
          name: isEn ? "Send Email" : "Enviar Email",
          url: "mailto:hrcamilo11@gmail.com",
          icon: Icons.email,
          navbar: false,
        },
      },
    },

    work: [
      {
        company: "Laboratorio Nacional de Calidad de la Energía (LNCE)",
        href: "https://www.upb.edu.co",
        badges: [],
        location: "Medellín, Colombia",
        title: isEn ? "Research Intern" : "Pasante Investigativo",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Logos%C3%ADmbolo_UPB.svg",
        start: isEn ? "February 2024" : "Febrero 2024",
        end: isEn ? "Present" : "Presente",
        description: isEn
          ? "Development and implementation of a full-stack web platform with serverless architecture on AWS (Lambda, DynamoDB, S3, Cognito). Implementation of CI/CD pipelines and process automation."
          : "Desarrollo e implementación de plataforma web full-stack con arquitectura serverless en AWS (Lambda, DynamoDB, S3, Cognito). Implementación de pipelines CI/CD y automatización de procesos.",
      },
      {
        company: "Universidad Pontificia Bolivariana",
        href: "https://www.upb.edu.co",
        badges: [],
        location: "Medellín, Colombia",
        title: isEn ? "Student Assistant" : "Auxiliar de Laboratorio",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Logos%C3%ADmbolo_UPB.svg",
        start: "2022",
        end: "2023",
        description: isEn
          ? "Monitoring of containerized services in Docker, improving observability and fault detection. Support in programming labs."
          : "Monitoreo de servicios contenerizados en Docker, mejorando la observabilidad y detección de fallos. Apoyo en laboratorios de programación.",
      },
    ],
    education: [
      {
        school: "Universidad Pontificia Bolivariana",
        href: "https://www.upb.edu.co",
        degree: isEn 
          ? "Systems Engineering & Data Science Engineering" 
          : "Ingeniería de Sistemas e Informática e Ingeniería en Ciencia de Datos",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Logos%C3%ADmbolo_UPB.svg",
        start: "2020",
        end: "2025",
      },
    ],
    projects: [
      {
        title: "Tracktext",
        href: "https://github.com/hrcamilo11/Tracktext",
        dates: "2024",
        active: true,
        description: isEn
          ? "A TypeScript-based tool designed for tracking and processing text data with high precision."
          : "Herramienta basada en TypeScript diseñada para el seguimiento y procesamiento de datos de texto con alta precisión.",
        technologies: ["TypeScript", "Node.js"],
        links: [
          {
            type: "GitHub",
            href: "https://github.com/hrcamilo11/Tracktext",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video: "",
      },
      {
        title: "TuSolucion - Plataforma",
        href: "https://github.com/hrcamilo11/TuSolucion---Plataforma",
        dates: "2023",
        active: true,
        description: isEn
          ? "Full-stack service platform connecting providers with clients through efficient resource management."
          : "Plataforma de servicios full-stack que conecta proveedores con clientes mediante una gestión eficiente de recursos.",
        technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
        links: [
          {
            type: "Source",
            href: "https://github.com/hrcamilo11/TuSolucion---Plataforma",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video: "",
      },
      {
        title: "TravelTales",
        href: "https://github.com/hrcamilo11/TravelTales",
        dates: "2023",
        active: true,
        description: isEn
          ? "Modern web application for travelers to document and share globetrotting experiences."
          : "Aplicación web moderna para viajeros diseñada para documentar y compartir experiencias de viaje por el mundo.",
        technologies: ["JavaScript", "HTML", "CSS"],
        links: [
          {
            type: "Source",
            href: "https://github.com/hrcamilo11/TravelTales",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video: "",
      },
      {
        title: "SIGAA Clone",
        href: "https://github.com/hrcamilo11/SIGAA",
        dates: "2022",
        active: true,
        description: isEn
          ? "Academic management system clone focused on UI/UX improvements and responsive design."
          : "Clon de sistema de gestión académica enfocado en mejoras de UI/UX y diseño responsivo.",
        technologies: ["HTML", "CSS", "JavaScript"],
        links: [
          {
            type: "GitHub",
            href: "https://github.com/hrcamilo11/SIGAA",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video: "",
      },
    ],
    hackathons: [],
  } as const;
};

// Default export for backward compatibility if needed, but components should use getResumeData(locale)
export const DATA = getResumeData("es");
