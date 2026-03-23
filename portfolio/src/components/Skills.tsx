import { skills } from "@/data/portfolio";
import { Code2, Server, Wrench } from "lucide-react";

export function Skills() {
  const categories = [
    { title: "Frontend", icon: <Code2 className="text-primary" size={24} />, data: skills.frontend },
    { title: "Backend", icon: <Server className="text-secondary" size={24} />, data: skills.backend },
    { title: "Tools & DevOps", icon: <Wrench className="text-primary" size={24} />, data: skills.tools },
  ];

  return (
    <section id="skills" className="py-24 relative bg-black/20">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div 
              key={category.title} 
              className="glass-card p-8 rounded-3xl hover:border-primary/30 transition-colors duration-300"
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 glass rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.data.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white/80">{skill.name}</span>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-sm animate-[pulse_2s_ease-in-out_infinite]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
