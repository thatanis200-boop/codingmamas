import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950">
      
      {/* Efek Cahaya Latar Belakang (Glow) */}
      <div className="absolute w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute w-64 h-64 bg-amber-400/10 rounded-full blur-3xl translate-x-12 translate-y-12" />

      <div className="relative flex flex-col items-center z-10">
        
        {/* Spinner Animasi Berputar (Hijau & Kuning) */}
        <div className="relative w-20 h-20 mb-6">
          {/* Lingkaran Luar (Hijau Emerald) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-4 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent"
          />
          {/* Lingkaran Dalam (Kuning Amber) - Berputar Terbalik */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
            className="absolute inset-2 rounded-full border-4 border-t-amber-400 border-r-transparent border-b-transparent border-l-transparent"
          />
        </div>

        {/* Teks Logo dengan Efek Mengetik/Memudar */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="font-display text-xl font-extrabold tracking-widest text-white uppercase"
        >
          Falyas<span className="text-lime-400">.</span>Dev
        </motion.h1>

        {/* Bar Progress Kecil di Bawah */}
        <div className="w-32 h-1 bg-slate-900 rounded-full mt-4 overflow-hidden border border-white/5">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-full h-full bg-gradient-to-r from-emerald-500 to-lime-400 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}