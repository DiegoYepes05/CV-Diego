"use client";

import Image from "next/image";
import photo from "../../public/assets/Foto.webp";
export default function Home() {
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
        </div>

        {/* <section className="flex gap-2 justify-center">
          {[
            { href: 'https://twitch.tv/midudev', bg: 'bg-purple-100', icon: 'twitch', delay: '' },
            { href: 'https://github.com/midudev', bg: 'bg-zinc-900', icon: 'github', delay: 'animate-delay-100' },
            { href: 'https://instagram.com/midudev', bg: 'bg-gradient-to-tr from-yellow-300 via-pink-600 to-purple-600', icon: 'instagram', delay: 'animate-delay-200' },
            { href: 'https://youtube.com/midudev', bg: 'bg-white', icon: 'youtube', delay: 'animate-delay-300' },
            { href: 'https://x.com/midudev', bg: 'bg-black', icon: 'x', delay: 'animate-delay-400' },
            { href: 'https://linkedin.com/in/midudev', bg: 'bg-white', icon: 'linkedin', delay: 'animate-delay-500' },
          ].map(({ href, bg, icon, delay }) => (
            <a key={icon} className={`${bg} social-button animate-slide-up-fade ${delay}`} href={href} target="_blank" rel="noopener noreferrer">
              <svg width="28" height="28">
                <use xlinkHref={`/assets/sprite.svg#${icon}`} />
              </svg>
            </a>
          ))}
        </section> */}

        <p className="text-midu-lol text-center mt-4 text-sm px-4 text-balance">
          Desarrollador Full Stack con más de 4 años de experiencia creando
          soluciones tecnológicas innovadoras. Especializado en Flutter, React,
          Node.js y NestJS, con experiencia liderando proyectos desde la
          conceptualización hasta el despliegue en producción.
        </p>

        <section className="pt-4 px-4 pb-16">
          <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full">
            {[
              {
                title: "Flutter, Nestjs",
                href: "#",
                classes:
                  "from-cyan-900 via-cyan-700 to-cyan-500 border-cyan-900",
                span: "Asistente con gemini",
                col: "col-span-2",
              },
              {
                title: "Nextjs",
                href: "#",
                classes: "from-html via-orange-300 to-white border-html",
                span: "Cv - Diego Yepes",

                col: "col-span-1",
              },
              {
                title: "Nextj, nodejs, mongo",
                href: "#",
                classes:
                  "from-[#663399] via-[#8e44ad] to-white border-[#663399]",
                span: "E-commerce",
                col: "col-span-1",
              },
            ].map(({ title, href, classes, span, col }) => (
              <a
                key={title}
                href={href}
                className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${classes} border flex flex-col items-start hover:scale-105 hover:contrast-125 transition group ${col} p-7 min-h-[180px]`}
              >
                <span className="absolute bottom-2 left-4 font-bold text-2xl group-hover:-translate-y-1 transition-transform">
                  {title}
                </span>
                <svg
                  className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hover:scale-125 transition-transform"
                  width="100"
                  height="100"
                ></svg>
                <span className="absolute top-2 left-4 text-xs border rounded-xl px-1 py-0.5">
                  {span}
                </span>
              </a>
            ))}
          </div>
        </section>
      </header>
    </main>
  );
}
