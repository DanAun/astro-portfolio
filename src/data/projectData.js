import compilerImg from "../assets/img-projects/compiler.jpg";
import cloudSecImg from "../assets/img-projects/cloud-security.webp";
import mediaServerImg from "../assets/img-projects/media-server.jpg";
import ctfImg from "../assets/img-projects/aviation-ctf.jpg";
import warehouseImg from "../assets/img-projects/warehouse-3d.webp";

export const projects = [
  // SECURITY PROJECTS
  {
    title: "Aviation Capture The Flag Platform",
    description:
      "Designed and developed a comprehensive CTF platform for EUROCONTROL to train cybersecurity skills across the European aviation community. Includes challenges covering network security, web exploitation, cryptography, and aviation-specific scenarios.",
    image: ctfImg.src,
    technologies: ["CTF Design", "Security", "Web", "Aviation"],
    read: "#", // Not ready yet - will be disabled
    code: "#", // Not ready yet - will be disabled
    category: ["security", "development"],
    highlighted: true,
  },
  {
    title: "Cloud Security Research Project",
    description:
      "Research project exploring cloud security concepts, best practices, and vulnerabilities in Azure and AWS environments. Covered IAM, network security, encryption, and compliance frameworks.",
    image: cloudSecImg.src,
    technologies: ["Azure", "AWS", "Cloud Security", "IAM"],
    read: "https://aitbytes.github.io/Securite-Cloud",
    code: "https://github.com/aitbytes/Securite-Cloud",
    category: ["security"],
    highlighted: true,
  },
  // SYSTEMS & INFRASTRUCTURE PROJECTS
  {
    title: "C-like Compiler & VHDL Microprocessor",
    description:
      "Academic project building a complete compiler for a C-like language and designing a microprocessor in VHDL. Implemented lexical analysis, parsing, code generation, and instruction set architecture.",
    image: compilerImg.src,
    technologies: ["C", "VHDL", "x86 Assembly", "Compiler Design"],
    read: "#", // Not ready yet - will be disabled
    code: "https://github.com/DanAun/compiler-and-vhdl-microprocessor",
    category: ["systems"],
    highlighted: true,
  },
  {
    title: "Self-Hosted Media Server",
    description:
      "Personal project setting up a self-hosted media server with automated downloads, streaming, and network configuration. Implemented using on privately hosted Linux Server with custom networking and security configurations.",
    image: mediaServerImg.src,
    technologies: ["Linux", "Docker", "Networking", "Self-hosting"],
    read: "/projects/self-hosted-media-server",
    code: "#",
    category: ["systems"],
    highlighted: false,
  },
  // DEVELOPMENT PROJECTS
  {
    title: "3D Warehouse Visualization System",
    description:
      "Interactive 3D visualization application for AutoStore warehouse systems. Built with ReactJS, TypeScript, and BabylonJS, integrated with .NET APIs for real-time data visualization and customization of warehouse layouts.",
    image: warehouseImg.src,
    technologies: ["React", "TypeScript", "BabylonJS", ".NET"],
    read: "#",
    code: "#",
    category: ["development"],
    highlighted: false,
  },
];