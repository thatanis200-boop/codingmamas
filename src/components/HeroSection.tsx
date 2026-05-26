import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-emerald-500 via-lime-400 to-amber-300">
      
      {/* Efek hiasan cahaya latar belakang tambahan */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Konten Utama */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center max-w-4xl">
        
        {/* 1. Badge Selamat Datang */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/10 border border-slate-950/20 text-xs md:text-sm text-slate-900 font-semibold mb-8"
        >
          <span>👋</span> Selamat datang dan menikmati .[Welcome, please enjoy my portfolio!]
        </motion.div>

        {/* 2. Foto Profil Lingkaran dengan Status Dot Green */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="relative mb-8 group"
        >
          {/* Efek Glow Kuning di Belakang Foto */}
          <div className="absolute inset-0 rounded-full bg-amber-400 blur-md opacity-60 group-hover:opacity-80 transition duration-300" />
          
          {/* Frame Lingkaran Foto */}
          <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-[3px] border-slate-950 bg-slate-900 shadow-xl">
            <img 
              src="/ini-pp.jpg" 
              alt="Falyas Thatanis Profile" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Dot Status Hijau Aktif */}
          <span className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-[3px] border-lime-400 animate-pulse" />
        </motion.div>

        {/* 3. Judul Utama (Heading) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950 mb-4"
        >
          Hai 👋 <span className="text-slate-900">Salam Kenal</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-950 mt-2">
            Hi, [nice to meet you!]
          </span>
        </motion.h1>

        {/* 4. Deskripsi Teks */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-800 text-sm md:text-base font-medium leading-relaxed max-w-2xl mb-10"
        >
          Saya membangun aplikasi web yang indah dan fungsional, serta membagikan pengetahuan 
          melalui konten yang inspiratif. <span className="text-slate-700 block mt-1 text-xs md:text-sm font-normal">[I craft beautiful, functional web applications and share insightful knowledge through inspiring content.]</span>
        </motion.p>

        {/* 5. Tombol Aksi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row gap-4 items-center mb-12"
        >
          {/* Tombol Lihat Projects */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-full text-sm font-bold text-white bg-slate-950 hover:bg-slate-900 shadow-lg transition duration-300"
          >
            Lihat Projects
          </a>

          {/* Tombol Hubungi Saya */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-full text-sm font-bold text-slate-950 bg-white/60 border border-white/40 hover:bg-white transition duration-300"
          >
            Hubungi Saya
          </a>
        </motion.div>

        {/* 6. Ikon Media Sosial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          {[
            { icon: Github, url: 'https://github.com' },
            { icon: Linkedin, url: 'https://linkedin.com' },
            { icon: Youtube, url: 'https://youtube.com' },
            { icon: Instagram, url: 'https://instagram.com' }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-full bg-slate-950 text-white hover:bg-amber-400 hover:text-slate-950 transition-all duration-300 shadow-md"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>

      </div>

      {/* 7. Ikon Panah Scroll */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-5 z-10 text-slate-900 hover:text-slate-950 cursor-pointer transition-colors"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}