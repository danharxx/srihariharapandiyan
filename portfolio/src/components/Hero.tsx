import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ChevronRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full glass text-primary font-medium text-sm mb-6 border-primary/20">
            👋 Welcome to my universe
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 tracking-tight">
            I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <div className="text-xl md:text-3xl font-medium text-white/80 h-[40px] md:h-[60px] mb-6">
            <TypeAnimation
              sequence={[
                personalInfo.titles[0], 2000,
                personalInfo.titles[1], 2000,
                personalInfo.titles[2], 2000,
                personalInfo.titles[3], 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </div>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              View My Work
              <ChevronRight size={20} />
            </button>
            
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="px-8 py-4 rounded-full glass text-white font-semibold flex items-center gap-2 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center border border-white/10 hover:border-white/30"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div 
          className="w-1 h-12 rounded-full bg-white/10 relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary to-secondary"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
