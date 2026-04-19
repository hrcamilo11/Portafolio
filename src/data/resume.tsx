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
    certifications: [
      { name: "Angular 16", href: "/certificaciones/diploma-angular16.pdf" },
      { name: "API REST", href: "/certificaciones/diploma-api-rest.pdf" },
      { name: "JavaScript Básico", href: "/certificaciones/diploma-basico-javascript.pdf" },
      { name: "Estructuras de Datos PHP", href: "/certificaciones/diploma-datos-php.pdf" },
      { name: "DB SQL", href: "/certificaciones/diploma-dbsql-2024.pdf" },
      { name: "Desbloquea tu Creatividad", href: "/certificaciones/diploma-desbloquea-creatividad.pdf" },
      { name: "Manipulación del DOM", href: "/certificaciones/diploma-dom.pdf" },
      { name: "Estructuras de Datos", href: "/certificaciones/diploma-estructuras-datos.pdf" },
      { name: "Fundamentos de BD", href: "/certificaciones/diploma-fundamentos-db.pdf" },
      { name: "Gestión del Tiempo", href: "/certificaciones/diploma-gestion-tiempo-2019.pdf" },
      { name: "Git y GitHub", href: "/certificaciones/diploma-git-github.pdf" },
      { name: "GraphQL", href: "/certificaciones/diploma-graphql.pdf" },
      { name: "HTML y CSS", href: "/certificaciones/diploma-html-css-2020.pdf" },
      { name: "Ingeniería de Software", href: "/certificaciones/diploma-ingenieria2017.pdf" },
      { name: "Inglés para Compras", href: "/certificaciones/diploma-ingles-compras-2020.pdf" },
      { name: "Inglés Intermedio", href: "/certificaciones/diploma-ingles-intermedio-conversacion.pdf" },
      { name: "Inglés para Principiantes", href: "/certificaciones/diploma-ingles-principiantes-2020.pdf" },
      { name: "Manejo de Ansiedad", href: "/certificaciones/diploma-manejo-ansiedad-terapify.pdf" },
      { name: "Buenas Prácticas de Código", href: "/certificaciones/diploma-mejor-codigo.pdf" },
      { name: "Programación Orientada a Objetos", href: "/certificaciones/diploma-oop.pdf" },
      { name: "Pensamiento Lógico", href: "/certificaciones/diploma-pensamiento-logico-2020.pdf" },
      { name: "PHP Avanzado", href: "/certificaciones/diploma-php-avanzado.pdf" },
      { name: "PHP Composer", href: "/certificaciones/diploma-php-composer.pdf" },
      { name: "PHP POO", href: "/certificaciones/diploma-php-poo.pdf" },
      { name: "PHP Práctico", href: "/certificaciones/diploma-php-practico.pdf" },
      { name: "PHP", href: "/certificaciones/diploma-php.pdf" },
      { name: "PostgreSQL", href: "/certificaciones/diploma-postgresql-19.pdf" },
      { name: "SQL Práctico", href: "/certificaciones/diploma-practico-sql.pdf" },
      { name: "Programación Estructurada", href: "/certificaciones/diploma-programacion-estructurada.pdf" },
      { name: "React 17", href: "/certificaciones/diploma-react-17.pdf" },
      { name: "React Avanzado", href: "/certificaciones/diploma-react-avanzado-old.pdf" },
      { name: "Manejo de Estado en React", href: "/certificaciones/diploma-react-estado.pdf" },
      { name: "React Patrones de Render", href: "/certificaciones/diploma-react-patrones-render.pdf" },
      { name: "React Router y Redux", href: "/certificaciones/diploma-react-router-redux.pdf" },
      { name: "React con Webpack y Sass", href: "/certificaciones/diploma-react-webpack-sass.pdf" },
      { name: "SQL y MySQL", href: "/certificaciones/diploma-sql-mysql2018.pdf" },
      { name: "Technical Writing", href: "/certificaciones/diploma-technical-writing.pdf" },
      { name: "TypeScript", href: "/certificaciones/diploma-typescript-22.pdf" },
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
        title: "Presupuesto",
        href: "https://www.presupuesto.cfd",
        dates: "2024",
        active: true,
        description: isEn
          ? "Web platform designed for personal finance management, allowing users to effectively track expenses, manage incomes, and optimize their monthly budgets."
          : "Plataforma web diseñada para la gestión de finanzas personales, permitiendo a los usuarios llevar un seguimiento efectivo de gastos, gestionar ingresos y optimizar sus presupuestos mensuales.",
        technologies: ["React", "TypeScript", "Node.js", "TailwindCSS"],
        links: [
          {
            type: "Website",
            href: "https://www.presupuesto.cfd",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "GitHub",
            href: "https://github.com/hrcamilo11/Presupuesto",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/projects/project_generic.png", 
        video: "",
      },
      {
        title: "Simulador de Física",
        href: "https://simulador-fisica.vercel.app",
        dates: "2023",
        active: true,
        description: isEn
          ? "Interactive physics simulator built to visualize classical mechanics, kinematics, and dynamics in real time, serving as an educational tool for students."
          : "Simulador interactivo de física construido para visualizar mecánica clásica, cinemática y dinámica en tiempo real, sirviendo como herramienta educativa para estudiantes.",
        technologies: ["JavaScript", "HTML5", "CSS3", "Physics Simulation"],
        links: [
          {
            type: "Website",
            href: "https://simulador-fisica.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "GitHub",
            href: "https://github.com/hrcamilo11/SimuladorFisica",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/projects/project_generic.png", 
        video: "",
      },
      {
        title: "TuSolucion - Plataforma",
        href: "https://tu-solucion-plataforma.vercel.app",
        dates: "2023",
        active: true,
        description: isEn
          ? "A comprehensive full-stack ecosystem connecting service providers with clients. Implements real-time resource management, secure payment gateways, and a robust rating system."
          : "Un ecosistema full-stack completo que conecta proveedores de servicios con clientes. Implementa gestión de recursos en tiempo real, pasarelas de pago seguras y un robusto sistema de calificación.",
        technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "TailwindCSS"],
        links: [
          {
            type: "Website",
            href: "https://tu-solucion-plataforma.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
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
        title: "Tracktext",
        href: "https://tracktext.vercel.app",
        dates: "2024",
        active: true,
        description: isEn
          ? "Tracktext is a web application developed in React that allows textile companies to manage orders, customers, production, and inventory. The platform facilitates efficient management of production processes and communication between different roles within the company."
          : "Tracktext es una aplicación web desarrollada en React que permite a empresas textiles gestionar pedidos, clientes, producción e inventario. La plataforma facilita la administración eficiente de los procesos de producción y la comunicación entre diferentes roles dentro de la empresa.",
        technologies: ["TypeScript", "React", "Node.js", "Jest"],
        links: [
          {
            type: "Website",
            href: "https://tracktext.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "GitHub",
            href: "https://github.com/hrcamilo11/Tracktext",
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
