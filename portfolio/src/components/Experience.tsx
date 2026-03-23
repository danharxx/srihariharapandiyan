import { education } from "@/data/portfolio";
import { GraduationCap, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-secondary/20 rounded-xl text-secondary">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">Academic Background</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-secondary before:via-primary before:to-transparent">
            {education.map((edu) => (
              <div key={edu.id} className="relative flex items-start gap-6 pl-14">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary shadow shrink-0 absolute left-0 top-4 z-10" />
                <div className="glass-card p-6 rounded-2xl hover:border-secondary/40 transition-colors duration-300 w-full">
                  <div className="flex items-center gap-2 text-secondary font-medium text-sm mb-2">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <h5 className="text-md text-white/70 mb-3">{edu.school}</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
