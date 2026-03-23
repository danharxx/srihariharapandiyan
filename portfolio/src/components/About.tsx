import { personalInfo } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Avatar Side */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-right" data-aos-delay="100">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-70 blur-lg" />
              <div className="relative rounded-3xl overflow-hidden glass-card p-2 aspect-square max-w-[350px] w-full">
                <img
                  src={`${import.meta.env.BASE_URL}images/avatar.png`}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-2xl font-display font-semibold text-white mb-6">
              Hi, I'm {personalInfo.name}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="glass-card p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-primary/30"
                >
                  <h4 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-sm font-medium text-primary uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
