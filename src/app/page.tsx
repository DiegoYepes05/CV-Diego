"use client";

import Image from "next/image";
import { useState } from "react";
import photo from "../../public/assets/Foto.webp";

export default function Home() {
  const [activeSection, setActiveSection] = useState('projects');

  const skills = [
    { name: "Flutter", level: 90, color: "bg-blue-500" },
    { name: "ReactJS", level: 85, color: "bg-cyan-500" },
    { name: "NestJS", level: 85, color: "bg-red-500" },
    { name: "NextJS", level: 80, color: "bg-gray-800" },
    { name: "ExpressJS", level: 80, color: "bg-green-500" },
    { name: "AWS/GCP", level: 75, color: "bg-orange-500" },
    { name: "SQL/NoSQL", level: 75, color: "bg-purple-500" },
    { name: "Tailwind CSS", level: 85, color: "bg-teal-500" }
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
      title: "Asistente con Gemini",
      tech: "Flutter, NestJS",
      description: "Aplicación móvil con IA integrada para asistencia personal",
      classes: "from-cyan-900 via-cyan-700 to-cyan-500 border-cyan-900",
      col: "col-span-2"
    },
    {
      title: "Portfolio Personal",
      tech: "Next.js",
      description: "CV interactivo y responsive",
      classes: "from-orange-400 via-orange-300 to-white border-orange-400",
      col: "col-span-1"
    },
    {
      title: "E-commerce Platform",
      tech: "Next.js, Node.js, MongoDB",
      description: "Plataforma completa de comercio electrónico",
      classes: "from-[#663399] via-[#8e44ad] to-white border-[#663399]",
      col: "col-span-1"
    }
  ];

  const contact = {
    email: "diegoyepes520@gmail.com",
    phone: "+57 300 6378865",
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
              { id: 'contact', label: 'Contacto' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
            <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full">
              {projects.map(({ title, tech, description, classes, col }) => (
                <div
                  key={title}
                  className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${classes} border flex flex-col items-start hover:scale-105 hover:contrast-125 transition group ${col} p-7 min-h-[180px] cursor-pointer`}
                >
                  <span className="absolute top-2 left-4 text-xs border rounded-xl px-2 py-1 bg-white/20">
                    {tech}
                  </span>
                  <span className="absolute bottom-8 left-4 font-bold text-xl group-hover:-translate-y-1 transition-transform">
                    {title}
                  </span>
                  <span className="absolute bottom-2 left-4 text-xs opacity-80">
                    {description}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center mb-6">Habilidades Técnicas</h3>
              {skills.map(({ name, level, color }) => (
                <div key={name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="text-sm text-gray-400">{level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`${color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
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