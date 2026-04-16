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
      ? "Systems  Engineer. Focused on backend, cloud (AWS), and offensive cybersecurity."
      : "Ingeniero de Sistemas e Informática. Enfocado en backend, cloud (AWS) y ciberseguridad ofensiva.",
    summary: isEn
      ? "Systems Engineer. Specialized in backend development, serverless architectures on AWS (Lambda, DynamoDB, S3, Cognito), and CI/CD pipelines. Active cybersecurity researcher and CTF player with a focus on binary exploitation and web vulnerabilities."
      : "Ingeniero de Sistemas e Informática. Especializado en desarrollo backend, arquitecturas serverless en AWS (Lambda, DynamoDB, S3, Cognito) y pipelines CI/CD. Investigador activo en ciberseguridad y jugador de CTF con enfoque en explotación binaria y vulnerabilidades web.",
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
      { name: isEn  ? "Data Science" : "Ciencia de Datos", icon: Icons.database },
      { name: isEn ? "Cybersecurity (CTF)" : "Ciberseguridad (CTF)", icon: Icons.shield },
      { name: "Linux", icon: Icons.linux },
      { name: "Git", icon: Icons.git },
      { name: "JavaScript", icon: Icons.javascript },
      { name: "Tailwind CSS", icon: Icons.tailwindcss },
      { name: "Firebase", icon: Icons.firebase },
      { name: "HTML5", icon: Icons.html5 },
      { name: "CSS3", icon: Icons.css3 },
      { name: "Next.js", icon: Icons.nextjs },
      
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
        company: "Laboratorio Nacional de Comunidades Energeticas (LNCE)",
        href: "https://www.upb.edu.co",
        badges: [],
        location: "Medellín, Colombia",
        title: isEn ? "Systems Engineer" : "Ingeniero de Sistemas e Informática",
        logoUrl: "/projects/experience.svg",
        start: isEn ? "February 2026" : "Febrero 2026",
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
        title: isEn ? "Systems Intern" : "Practicante Sistemas",
        logoUrl: "/projects/experience.svg",
        start: isEn ? "June 2025" : "Junio 2025",
        end: isEn ? "February 2026" : "Febrero 2026",
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
          ? "Systems Engineering" 
          : "Ingeniería de Sistemas e Informática",
        logoUrl: "/projects/education.svg",
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
          ? "Tracktext is a web application developed in React that allows textile companies to manage orders, customers, production, and inventory. The platform facilitates efficient management of production processes and communication between different roles within the company."
          : "Tracktext es una aplicación web desarrollada en React que permite a empresas textiles gestionar pedidos, clientes, producción e inventario. La plataforma facilita la administración eficiente de los procesos de producción y la comunicación entre diferentes roles dentro de la empresa.",
        technologies: ["TypeScript", "Node.js", "Jest"],
        links: [
          {
            type: "GitHub",
            href: "https://github.com/hrcamilo11/Tracktext",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/projects/project_generic.png", 
        video: "",
      },
      {
        title: "TuSolucion - Plataforma",
        href: "https://github.com/hrcamilo11/TuSolucion---Plataforma",
        dates: "2023",
        active: true,
        description: isEn
          ? "A comprehensive full-stack ecosystem connecting service providers with clients. Implements real-time resource management, secure payment gateways, and a robust rating system."
          : "Un ecosistema full-stack completo que conecta proveedores de servicios con clientes. Implementa gestión de recursos en tiempo real, pasarelas de pago seguras y un robusto sistema de calificación.",
        technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "TailwindCSS"],
        links: [
          {
            type: "GitHub",
            href: "https://github.com/hrcamilo11/TuSolucion---Plataforma",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/projects/project_generic.png",
        video: "",
      },
      {
        title: "TravelTales",
        href: "https://github.com/hrcamilo11/TravelTales",
        dates: "2023",
        active: true,
        description: isEn
          ? "Modern social platform for global travelers to share immersive stories and travel logs. Built with a focus on interactive UX and seamless mobile responsiveness."
          : "Plataforma social moderna para viajeros globales, diseñada para compartir historias inmersivas y diarios de viaje. Construida con enfoque en UX interactiva y respuesta móvil fluida.",
        technologies: ["JavaScript", "HTML5", "CSS3", "Firebase"],
        links: [
          {
            type: "GitHub",
            href: "https://github.com/hrcamilo11/TravelTales",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/projects/project_generic.png",
        video: "",
      },
      {
        title: "SIGAA Clone",
        href: "https://github.com/hrcamilo11/SIGAA",
        dates: "2022",
        active: true,
        description: isEn
          ? "A refined reconstruction of the UPB academic portal, prioritizing accessibility and modern UI patterns. Achieved a 40% improvement in load times through asset optimization."
          : "Una reconstrucción refinada del portal académico de la UPB, priorizando la accesibilidad y patrones de UI modernos. Logró una mejora del 40% en los tiempos de carga mediante optimización de activos.",
        technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
        links: [
          {
            type: "GitHub",
            href: "https://github.com/hrcamilo11/SIGAA",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/projects/project_generic.png",
        video: "",
      },
    ],
    ctfs: [
      {
        title: isEn ? "Ch0wn3rs (Competitive CTF Team)" : "Ch0wn3rs (Equipo de CTF)",
        dates: "2025 - Present",
        location: "Global / Medellín, CO",
        description: isEn
          ? "Co-founder and member of Ch0wn3rs, a professional CTF team. We specialize in Binary Exploitation, Pwn, and Web Vulnerabilities. Ranked #1 in Colombia and #16 Globally in 2026."
          : "Co-fundador y miembro de Ch0wn3rs, un equipo profesional de CTF. Nos especializamos en Explotación Binaria, Pwn y Vulnerabilidades Web. Clasificados como #1 en Colombia y #16 a nivel Global en 2026.",
        image: "https://ctftime.org//media/team/LogoCh0wn3rs.jpeg",
        links: [
          {
            title: "CTFtime Profile",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "https://ctftime.org/team/408704/",
          },
          {
            title: "Team Website",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "https://ch0wn3rs.ninja/",
          },
        ],
      },
    ],
  } as const;
};

// Default export for backward compatibility
export const DATA = getResumeData("es");
