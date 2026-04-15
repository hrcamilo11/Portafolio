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
      ? "Systems Engineer focused on backend, cloud (AWS), and offensive cybersecurity."
      : "Ingeniero de Sistemas enfocado en backend, cloud (AWS) y ciberseguridad ofensiva.",
    summary: isEn
      ? "Systems Engineer with experience in backend development and serverless architectures on AWS, working with services such as Lambda, DynamoDB, S3, and Cognito. I have implemented scalable solutions, CI/CD pipelines, and monitoring of containerized services in Docker. I am interested in the intersection between cloud, DevOps, and security, actively participating in CTFs with a focus on binary exploitation and web vulnerabilities."
      : "Ingeniero de Sistemas con experiencia en desarrollo backend y arquitecturas serverless en AWS, trabajando con servicios como Lambda, DynamoDB, S3 y Cognito. He implementado soluciones escalables, pipelines CI/CD y monitoreo de servicios en contenedores Docker. Me interesa la intersección entre cloud, DevOps y seguridad, participando activamente en CTFs con enfoque en explotación binaria y vulnerabilidades web.",
    avatarUrl: "/profile1.png",
    skills: [
      { name: "Python", icon: Python },
      { name: "Go", icon: Golang },
      { name: "Node.js", icon: Nodejs },
      { name: "Docker", icon: Docker },
      { name: "AWS (Lambda, S3, DynamoDB, Cognito)", icon: Icons.globe },
      { name: isEn ? "Serverless Architecture" : "Arquitecturas Serverless", icon: Icons.globe },
      { name: "CI/CD Pipelines", icon: Icons.globe },
      { name: isEn ? "Offensive Cybersecurity" : "Ciberseguridad Ofensiva", icon: Icons.globe },
      { name: isEn ? "Binary Exploitation" : "Explotación Binaria", icon: Icons.globe },
      { name: isEn ? "Web Vulnerabilities" : "Vulnerabilidades Web", icon: Icons.globe },
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
        company: "Laboratorio Nacional LNCE",
        href: "#",
        badges: [],
        location: "Medellín, Colombia",
        title: isEn ? "Systems and Informatics Engineer" : "Ingeniero de Sistemas e Informático",
        logoUrl: "/Logo - Laboratorio Color.png",
        start: isEn ? "February 2026" : "Febrero 2026",
        end: isEn ? "Present" : "Presente",
        description: isEn
          ? "Development and implementation of a full-stack web platform with serverless architecture on AWS (Lambda, DynamoDB, S3, Cognito). Implementation of CI/CD pipelines, DevOps best practices, and process automation in cloud environments."
          : "Desarrollo e implementación de plataforma web full-stack con arquitectura serverless en AWS (Lambda, DynamoDB, S3, Cognito). Implementación de pipelines CI/CD, buenas prácticas DevOps y automatización de procesos en entornos cloud.",
      },
      {
        company: "Universidad Pontificia Bolivariana",
        href: "https://www.upb.edu.co",
        badges: [],
        location: "Medellín, Colombia",
        title: isEn ? "Research Intern – Systems Engineering" : "Pasante Investigativo – Ingeniería de Sistemas",
        logoUrl: "/Logo UPB Color.png",
        start: isEn ? "June 2025" : "Junio 2025",
        end: isEn ? "February 2026" : "Febrero 2026",
        description: isEn
          ? "Development of a monitoring system for containerized services in Docker, improving observability and fault detection. Supervision and maintenance of services on private servers, ensuring availability and operational continuity."
          : "Desarrollo de sistema de monitoreo para servicios contenerizados en Docker, mejorando la observabilidad y detección de fallos. Supervisión y mantenimiento de servicios en servidores privados, asegurando disponibilidad y continuidad operativa.",
      },
    ],
    education: [
      {
        school: "Universidad Pontificia Bolivariana",
        href: "https://www.upb.edu.co",
        degree: isEn ? "Systems and Informatics Engineering" : "Ingeniería de Sistemas e Informática",
        logoUrl: "/Logo UPB Color.png",
        start: "",
        end: "2025",
      },
    ],
    projects: [
      {
        title: isEn ? "Ch0wn3rs (CTF Team)" : "Ch0wn3rs (Equipo CTF)",
        href: "https://github.com/hrcamilo11",
        dates: isEn ? "Present" : "Presente",
        active: true,
        description: isEn
          ? "Co-founder and active member of a team focused on Capture The Flag (CTF) competitions, specializing in binary exploitation (Pwn) and web vulnerabilities. Development of exploits, low-level analysis, and resolution of cybersecurity challenges under pressure."
          : "Cofundador y miembro activo de equipo enfocado en competencias Capture The Flag (CTF), especializado en explotación binaria (Pwn) y vulnerabilidades web. Desarrollo de exploits, análisis de bajo nivel y resolución de retos de ciberseguridad bajo presión.",
        technologies: [
          "Cybersecurity",
          "Binary Exploitation",
          "Pwn",
          "Web Vulnerabilities",
          "CTF",
        ],
        links: [
          {
            type: "GitHub",
            href: "https://github.com/hrcamilo11",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video: "",
      },
      {
        title: isEn ? "Professional Profile / Backend & Cloud" : "Perfil Profesional / Backend & Cloud",
        href: "https://github.com/hrcamilo11",
        dates: "2024 - Presente",
        active: true,
        description: isEn
          ? "Repositories focused on backend development, cloud, and cybersecurity (CTF, binary and web exploitation)."
          : "Repositorios enfocados en desarrollo backend, cloud y ciberseguridad (CTF, explotación binaria y web).",
        technologies: [
          "AWS",
          "Lambda",
          "DynamoDB",
          "Docker",
          "Python",
          "Go",
          "CI/CD",
        ],
        links: [
          {
            type: "Source",
            href: "https://github.com/hrcamilo11",
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
