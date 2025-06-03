"use client";

import Image from "next/image";
import { useState } from "react";
import photo from "../../public/assets/Foto.webp";

export default function Home() {
  const [activeSection, setActiveSection] = useState('projects');

  const skills = [
    { 
      name: "Flutter", 
      level: 90, 
      color: "from-blue-400 to-blue-600",
      icon: "🦋",
      description: "Desarrollo móvil multiplataforma"
    },
    { 
      name: "ReactJS", 
      level: 85, 
      color: "from-cyan-400 to-cyan-600",
      icon: "⚛️",
      description: "Interfaces de usuario modernas"
    },
    { 
      name: "NestJS", 
      level: 85, 
      color: "from-red-400 to-red-600",
      icon: "🪺",
      description: "Backend escalable y robusto"
    },
    { 
      name: "NextJS", 
      level: 80, 
      color: "from-gray-600 to-gray-800",
      icon: "▲",
      description: "Aplicaciones web full-stack"
    },
    { 
      name: "ExpressJS", 
      level: 80, 
      color: "from-green-400 to-green-600",
      icon: "🚀",
      description: "APIs REST y servicios web"
    },
    { 
      name: "AWS/GCP", 
      level: 75, 
      color: "from-orange-400 to-orange-600",
      icon: "☁️",
      description: "Despliegue en la nube"
    },
    { 
      name: "SQL/NoSQL", 
      level: 75, 
      color: "from-purple-400 to-purple-600",
      icon: "🗄️",
      description: "Gestión de bases de datos"
    },
    { 
      name: "Tailwind CSS", 
      level: 85, 
      color: "from-teal-400 to-teal-600",
      icon: "🎨",
      description: "Diseño y estilos modernos"
    }
  ];

  const experience = [
    {
      title: "Desarrollador móvil",
      company: "Freelance",
      period: "Octubre 2024 - Enero 2025",
      description: "Desarrollo de aplicaciones móviles en Flutter, empleando gestores de estado como BLoC y Cubit para una gestión eficiente y escalable del estado de la aplicación."
    },
    {
      title: "Desarrollador full stack",
      company: "Proyecto independiente",
      period: "Febrero 2024 - Mayo 2024",
      description: "Desarrollo de aplicaciones móviles en Flutter, utilizando gestores de estado como BLoC y Cubit, y aplicando principios de Clean Architecture y DDD. Participación en desarrollo web con React y Redux."
    },
    {
      title: "Líder Técnico",
      company: "Proyecto de software",
      period: "Febrero 2023 - Octubre 2023",
      description: "Lideré el desarrollo completo de un software utilizando React, NestJS y Flutter, desde la recolección de requerimientos hasta el despliegue en las tiendas de aplicaciones y en AWS. Desarrollo de aplicación web externa con Next.js."
    },
    {
      title: "Desarrollador Backend",
      company: "Desarrollo independiente",
      period: "Enero 2021 - Febrero 2023",
      description: "Desarrollo del backend desde cero con Node.js, empleando Express como framework principal y PostgreSQL como sistema de gestión de bases de datos."
    },
    {
      title: "Desarrollador Full Stack Junior",
      company: "Gran Colombia Gold",
      period: "Julio 2020 - Enero 2021",
      description: "Desarrollador junior en un proyecto basado en .NET Framework, asumiendo tareas desafiantes que contribuyeron significativamente al desarrollo de habilidades técnicas."
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Asistente con Gemini AI",
      tech: ["Flutter", "NestJS", "Google AI", "BLoC"],
      description: "Aplicación móvil inteligente que utiliza IA de Google Gemini para proporcionar asistencia personal avanzada con procesamiento de lenguaje natural.",
      features: ["Chat con IA", "Reconocimiento de voz", "Análisis de texto", "Multiplataforma"],
      status: "Completado",
      year: "2024",
      category: "Mobile App",
      githubUrl: "https://github.com/DiegoYepes05/Chat_Flutter_IA", // Reemplaza con tu URL real
      liveUrl: "" // Si tienes demo en vivo
    },
    {
      id: 2,
      title: "E-commerce Platform",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      description: "Plataforma completa de comercio electrónico con panel administrativo, gestión de inventario y sistema de pagos integrado.",
      features: ["Catálogo productos", "Pagos seguros", "Dashboard admin", "Analytics en tiempo real"],
      status: "En desarrollo",
      year: "2024",
      category: "Web App",
      githubUrl: "https://github.com/DiegoYepes05",
      liveUrl: ""
    },
    {
      id: 3,
      title: "Portfolio Interactivo",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      description: "CV digital interactivo y responsive con animaciones suaves, diseño moderno y optimización para dispositivos móviles.",
      features: ["Diseño moderno", "Animaciones suaves", "Totalmente responsive", "Alta performance"],
      status: "Completado",
      year: "2024",
      category: "Portfolio",
      githubUrl: "https://github.com/DiegoYepes05/CV-Diego",
      liveUrl: ""
    },
    {
      id: 4,
      title: "Sistema de Gestión Empresarial",
      tech: ["React", "NestJS", "PostgreSQL", "Docker"],
      description: "Software completo para gestión empresarial desarrollado durante mi rol como Líder Técnico, desde requerimientos hasta despliegue.",
      features: ["Gestión completa", "Despliegue AWS", "Clean Architecture", "Escalable"],
      status: "Completado",
      year: "2023",
      category: "Enterprise Software",
      githubUrl: "https://github.com/DiegoYepes05",
      liveUrl: ""
    }
  ];

  const references = [
    {
      name: "Juanita Pinzon Arias",
      position: "Contadora",
      phone: "+57 319 5483792"
    },
    {
      name: "Mario Felipe Hurtado Nieto",
      position: "Desarrollador senior full stack",
      phone: "+57 317 2934436"
    }
  ];

  const contact = {
    email: "diegoyepes520@gmail.com",
    phone: "+57 (300) 637-8865",
    location: "Medellín, Colombia",
    linkedin: "https://www.linkedin.com/in/diego-fernando-yepes-p%C3%A9rez-aab96a210/",
    github: "https://github.com/DiegoYepes05"
  };

  return (
    <main className="max-w-xl mx-auto min-h-dvh bg-gradient-to-b from-black via-sky-950 to-gray-800">
      <header className="text-white">
        <Image
          alt="Diego Yepes Pérez photo"
          src={photo}
          width={500}
          height={300}
          className="h-[50vh] w-full object-cover mask-radial-at-center mask-radial-from-45% mask-radial-to-80% animate-pulse-fade-in"
        />

        <div className="flex flex-col justify-center items-center mb-8 -mt-4">
          <h1 className="text-3xl font-extrabold leading-tight mt-1 font-display">
            Diego Fernando Yepes Pérez
          </h1>
          <p className="text-sky-300 text-lg font-medium">Full Stack Developer</p>
        </div>

        <p className="text-gray-300 text-center mt-4 text-sm px-4 text-balance">
          Desarrollador Full Stack con más de 4 años de experiencia creando
          soluciones tecnológicas innovadoras. Especializado en Flutter, React,
          Node.js y NestJS, con experiencia liderando proyectos desde la
          conceptualización hasta el despliegue en producción.
        </p>

        {/* Navigation Tabs */}
        <nav className="flex justify-center mt-6 px-4">
          <div className="flex bg-gray-800/50 rounded-full p-1">
            {[
              { id: 'projects', label: 'Proyectos' },
              { id: 'skills', label: 'Habilidades' },
              { id: 'experience', label: 'Experiencia' },
              { id: 'references', label: 'Referencias' },
              { id: 'contact', label: 'Contacto' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`px-3 py-2 rounded-full text-xs font-medium transition-all ${
                  activeSection === id
                    ? 'bg-sky-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Sections */}
        <section className="pt-6 px-4 pb-16">
          {activeSection === 'projects' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center mb-6">Mis Proyectos</h3>
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-sky-500 transition-all group backdrop-blur-sm"
                >
                  {/* Header del proyecto */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{project.category} • {project.year}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ml-3 flex-shrink-0 ${
                      project.status === 'Completado' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Descripción */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-sky-600/20 text-sky-400 px-2 py-1 rounded-lg text-xs border border-sky-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Características */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2 flex-shrink-0"></span>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Botones de acción */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-700">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                    >
                      <span className="mr-2">⚡</span>
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                      >
                        <span className="mr-2">🌐</span>
                        Ver Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center mb-6">Habilidades Técnicas</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map(({ name, level, color, icon, description }) => (
                  <div 
                    key={name} 
                    className={`bg-gradient-to-br ${color} rounded-2xl p-4 text-white relative overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="relative z-10">
                      <div className="text-2xl mb-2">{icon}</div>
                      <h4 className="font-bold text-sm mb-1">{name}</h4>
                      <p className="text-xs opacity-90 mb-2">{description}</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-white/20 rounded-full h-1.5">
                          <div 
                            className="bg-white h-1.5 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${level}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium">{level}%</span>
                      </div>
                    </div>
                    <div className="absolute -right-4 -bottom-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                      {icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center mb-6">Experiencia</h3>
              {experience.map(({ title, company, period, description }, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-sky-300">{title}</h4>
                  <p className="text-gray-400 text-sm">{company} • {period}</p>
                  <p className="text-gray-300 mt-2 text-sm">{description}</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'references' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center mb-6">Referencias</h3>
              {references.map(({ name, position, phone }, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-sky-300">{name}</h4>
                  <p className="text-gray-400 text-sm">{position}</p>
                  <a href={`tel:${phone}`} className="text-gray-300 hover:text-green-300 transition-colors text-sm mt-2 inline-block">
                    {phone}
                  </a>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center mb-6">Contacto</h3>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">📧</span>
                  </div>
                  <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-sky-300 transition-colors">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">📱</span>
                  </div>
                  <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-green-300 transition-colors">
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">📍</span>
                  </div>
                  <span className="text-gray-300">{contact.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">💼</span>
                  </div>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">⚡</span>
                  </div>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors">
                    GitHub Repositories
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>
      </header>
    </main>
  );
}