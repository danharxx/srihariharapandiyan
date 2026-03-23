import { projects } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-white/10 hover:border-primary/40 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Action Links */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-white/10 hover:bg-primary rounded-full text-white transition-colors duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-white/10 hover:bg-secondary rounded-full text-white transition-colors duration-300"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-primary text-white font-medium transition-all duration-300 hover:bg-white/5"
          >
            View More on GitHub <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
