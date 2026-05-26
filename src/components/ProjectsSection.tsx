import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  // Array data proyek menggunakan gambar kustom baru Anda
  const projects = [
    {
      title: 'GELAS KACA YANG MENANBAHKAN KESAN MEWAH',
      description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan dashboard analitik.',
      image: '/prkd-1.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
    {
      title: 'AIR BOTOL MURNI',
      description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking untuk siswa dan pengajar.',
      image: '/prkd-2.jpg',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
    {
      title: 'TUMBLER BIRU ELEKTRIK',
      description: 'Dashboard analytics untuk manajemen dan pemantauan media sosial dengan real-time data visualization dan automated reporting.',
      image: '/prkd-3.jpg',
      tags: ['React', 'D3.js', 'Firebase', 'Tailwind'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-amber-400">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-slate-950">
            Projects Terpilih
          </h2>
          <div className="w-16 h-1.5 bg-emerald-600 mx-auto rounded-full shadow-sm" />
        </div>

        {/* Grid Cards Proyek */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl flex flex-col group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Box Gambar Proyek */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Detail Konten Proyek */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack / Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold border border-slate-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tombol Aksi (Code & Demo) */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}