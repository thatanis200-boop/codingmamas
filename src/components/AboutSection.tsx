import { motion } from 'framer-motion';
import { Code2, Video, Coffee, GraduationCap, User, MapPin, Calendar, BookOpen } from 'lucide-react';

export default function AboutSection() {
  // Statistik yang disesuaikan
  const stats = [
    { icon: Code2, value: '15+', label: 'Proyek Selesai' },
    { icon: Video, value: '30+', label: 'Video Konten' },
    { icon: Coffee, value: '250+', label: 'Cangkir Kopi' },
    { icon: GraduationCap, value: 'Kelas X-8', label: 'Status Akademik' },
  ];

  // Data Pribadi Terstruktur (Sesuai gambar contoh)
  const biodata = [
    { icon: User, label: 'Nama Lengkap', value: 'Falyas Thatanis' },
    { icon: BookOpen, label: 'Kelas', value: 'Class X-8' }, // Ganti ikon agar beda dengan sekolah
    { icon: Calendar, label: 'Tanggal Lahir', value: 'Born: 22-07-2010' },
    { icon: MapPin, label: 'Tempat Tinggal', value: 'Banda Aceh, Lueng Bata' },
    { icon: GraduationCap, label: 'Institusi', value: 'Schoel: MAN 1 MODEL BANDA ACEH' }, // Ejaan disesuaikan dengan contoh gambar
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-transparent to-muted/20">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
            Profile &amp; Biography
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full shadow-sm" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* SISI KIRI: Foto Profil dengan Efek Glowing (Seperti Contoh Gambar) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-end" // Posisikan di tengah atau kanan pada layar besar
          >
            {/* Frame Lingkaran dengan Efek Glowing */}
            <div className="relative group p-1.5 rounded-full bg-background/10 border border-primary/20 shadow-2xl">
              {/* Efek Cahaya Glowing di Belakang */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-md opacity-30 group-hover:opacity-50 transition duration-500" />
              
              {/* Frame Lingkaran Utama */}
              <div className="relative aspect-square w-64 md:w-80 rounded-full overflow-hidden glass border-2 border-primary/30 shadow-inner">
                {/* INI ADALAH FOTO ANDA */}
                <img 
                  src="/ini-pp.jpg" // Path ke file di folder public
                  alt="Falyas Thatanis - Fullstack Developer & Designer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" // Efek zoom saat hover
                />
              </div>
            </div>
          </motion.div>

          {/* SISI KANAN: Biodata & Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Kotak Biodata Formal (Seperti Contoh Gambar) */}
            <div className="p-7 glass rounded-2xl border border-white/10 shadow-sm space-y-5">
              <h4 className="font-display font-bold text-xl text-primary border-b border-muted/50 pb-3">
                Informasi Pribadi
              </h4>
              <div className="space-y-3.5">
                {biodata.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                      <item.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-[12px] uppercase tracking-wider text-muted-foreground/80">{item.label}</p>
                      <p className="text-base font-semibold text-foreground tracking-tight">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deskripsi Teks */}
            <div className="space-y-5">
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                Passionate Developer &amp; Creator Muda
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Saya adalah seorang Fullstack Web Developer muda dan Content Creator yang saat ini menempuh pendidikan di MAN 1 Model Banda Aceh. Memiliki ketertarikan mendalam di dunia teknologi, saya aktif mengembangkan berbagai solusi digital interaktif di sela-sela aktivitas sekolah.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Selain membangun baris kode, saya juga mendedikasikan waktu untuk memproduksi konten edukatif seputar pemrograman. Saya percaya bahwa usia bukanlah batasan untuk berkarya, berinovasi, dan membagikan ilmu yang bermanfaat bagi komunitas teknologi di Indonesia.
              </p>
            </div>

            {/* Grid Statistik (Opsional, jika ingin tetap ada) */}
            <div className="grid grid-cols-2 gap-4 pt-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 glass rounded-xl text-center border border-white/5 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-primary/5 w-fit mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}