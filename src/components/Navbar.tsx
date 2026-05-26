import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi ketika halaman di-scroll agar navbar berubah warna
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-slate-950/80 backdrop-blur-md border-b border-emerald-500/10 shadow-lg shadow-emerald-950/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO BARU: Menggantikan <Dev /> */}
        <a 
          href="#home" 
          className="font-display text-2xl font-extrabold tracking-tight text-white group"
        >
          {/* Warna teks utama putih, warna titik menggunakan hijau kemilau */}
          Falyas<span className="text-lime-400 group-hover:text-emerald-500 transition-colors">.</span>
        </a>

        {/* Menu Navigasi Layar Lebar (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors duration-200 relative group py-1"
            >
              {item.name}
              {/* Garis bawah interaktif saat menu di-hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-lime-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Tombol Menu Layar Kecil (Mobile Burger Button) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-slate-300 hover:text-lime-400 focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu Navigasi Dropdown Layar Kecil (Mobile Menu) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-emerald-500/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Menutup otomatis saat menu diklik
                  className="text-base font-medium text-slate-300 hover:text-lime-400 py-2 block border-b border-slate-900 last:border-0"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}