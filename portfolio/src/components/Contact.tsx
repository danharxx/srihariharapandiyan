import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { personalInfo } from "@/data/portfolio";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent Successfully! 🚀",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Let's talk about your next project.
            </h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-4 glass rounded-xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-1">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-lg text-white font-medium hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-4 glass rounded-xl text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg text-white font-medium">SRM Institute of Science and Technology, Trichy</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 glass rounded-xl text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-lg text-white font-medium">+91 86083 84145</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 md:p-10 rounded-3xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Your Name</label>
                  <input
                    {...register("name")}
                    className={`w-full px-5 py-4 rounded-xl glass-input text-white placeholder:text-white/30 focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Your Email</label>
                  <input
                    {...register("email")}
                    className={`w-full px-5 py-4 rounded-xl glass-input text-white placeholder:text-white/30 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Subject</label>
                <input
                  {...register("subject")}
                  className={`w-full px-5 py-4 rounded-xl glass-input text-white placeholder:text-white/30 focus:outline-none ${errors.subject ? 'border-red-500' : ''}`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className={`w-full px-5 py-4 rounded-xl glass-input text-white placeholder:text-white/30 focus:outline-none resize-none ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message <Send size={20} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
