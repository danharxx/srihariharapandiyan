import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-white/10 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-white inline-block mb-4">
              hari<span className="text-gradient">.dev</span>
            </a>
            <p className="text-muted-foreground max-w-xs">
              Building exceptional digital experiences with modern web technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 text-white transition-all duration-300 hover:text-primary hover:-translate-y-1">
              <Github size={20} />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 text-white transition-all duration-300 hover:text-primary hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 text-white transition-all duration-300 hover:text-secondary hover:-translate-y-1">
              <Twitter size={20} />
            </a>
            <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 text-white transition-all duration-300 hover:text-secondary hover:-translate-y-1">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
          >
            Back to top
            <span className="p-2 rounded-full glass group-hover:bg-primary/20 transition-colors">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
