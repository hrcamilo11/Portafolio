import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Camilo Hernández",
  initials: "CHR",
  url: "https://github.com/hrcamilo11",
  location: "Medellín, Colombia",
  locationLink: "https://www.google.com/maps/place/Medell%C3%ADn,+Antioquia",
  description:
    "Ingeniero de Sistemas enfocado en backend, cloud (AWS) y ciberseguridad ofensiva.",
  summary:
    "Ingeniero de Sistemas con experiencia en desarrollo backend y arquitecturas serverless en AWS, trabajando con servicios como Lambda, DynamoDB, S3 y Cognito. He implementado soluciones escalables, pipelines CI/CD y monitoreo de servicios en contenedores Docker. Me interesa la intersección entre cloud, DevOps y seguridad, participando activamente en CTFs con enfoque en explotación binaria y vulnerabilidades web.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Node.js", icon: Nodejs },
    { name: "Docker", icon: Docker },
    { name: "AWS (Lambda, S3, DynamoDB, Cognito)", icon: Icons.globe },
    { name: "Serverless Architecture", icon: Icons.globe },
    { name: "CI/CD Pipelines", icon: Icons.globe },
    { name: "Ciberseguridad Ofensiva", icon: Icons.globe },
    { name: "Explotación Binaria", icon: Icons.globe },
    { name: "Vulnerabilidades Web", icon: Icons.globe },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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
        name: "Send Email",
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
      title: "Ingeniero de Sistemas e Informático",
      logoUrl: "",
      start: "Febrero 2026",
      end: "Presente",
      description:
        "Desarrollo e implementación de plataforma web full-stack con arquitectura serverless en AWS (Lambda, DynamoDB, S3, Cognito). Implementación de pipelines CI/CD, buenas prácticas DevOps y automatización de procesos en entornos cloud.",
    },
    {
      company: "Universidad Pontificia Bolivariana",
      href: "https://www.upb.edu.co",
      badges: [],
      location: "Medellín, Colombia",
      title: "Pasante Investigativo – Ingeniería de Sistemas",
      logoUrl: "",
      start: "Junio 2025",
      end: "Febrero 2026",
      description:
        "Desarrollo de sistema de monitoreo para servicios contenerizados en Docker, mejorando la observabilidad y detección de fallos. Supervisión y mantenimiento de servicios en servidores privados, asegurando disponibilidad y continuidad operativa.",
    },
  ],
  education: [
    {
      school: "Universidad Pontificia Bolivariana",
      href: "https://www.upb.edu.co",
      degree: "Ingeniería de Sistemas e Informática",
      logoUrl: "",
      start: "",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Ch0wn3rs (Equipo CTF)",
      href: "https://github.com/hrcamilo11",
      dates: "Presente",
      active: true,
      description:
        "Cofundador y miembro activo de equipo enfocado en competencias Capture The Flag (CTF), especializado en explotación binaria (Pwn) y vulnerabilidades web. Desarrollo de exploits, análisis de bajo nivel y resolución de retos de ciberseguridad bajo presión.",
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
      title: "Perfil Profesional / Backend & Cloud",
      href: "https://github.com/hrcamilo11",
      dates: "2024 - Presente",
      active: true,
      description:
        "Repositorios enfocados en desarrollo backend, cloud y ciberseguridad (CTF, explotación binaria y web).",
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
