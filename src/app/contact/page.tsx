'use client';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimationWrapper';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';

export default function ContactPage() {
  const contactDetails = [
    {
      title: "Visit Us",
      content: "123 Artisan Way\nPastry District, NY 10001",
      icon: "📍"
    },
    {
      title: "Call Us",
      content: "+1 (555) 123-4567",
      icon: "📞"
    },
    {
      title: "Email Us",
      content: "hello@pglicious.com",
      icon: "✉️"
    },
    {
      title: "Hours of Indulgence",
      content: "Mon - Fri: 7:00 AM - 6:00 PM\nSat - Sun: 8:00 AM - 4:00 PM",
      icon: "🕒"
    }
  ];

  return (
    <main className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Indulge in Conversation
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
              Whether you have a question about our seasonal menu, a custom cake inquiry, or simply want to say hello, our team is here for you.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <FadeIn className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-10 md:p-12 border border-white/50 shadow-xl">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/70 ml-1 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full bg-white/50 border border-white/40 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/70 ml-1 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full bg-white/50 border border-white/40 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary/70 ml-1 uppercase tracking-wider">Subject</label>
                <select className="w-full bg-white/50 border border-white/40 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Custom Cake Quote</option>
                  <option>Event Catering</option>
                  <option>Wholesale Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary/70 ml-1 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="How can we help you?" 
                  className="w-full bg-white/50 border border-white/40 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                />
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </FadeIn>

          {/* Details & Info */}
          <div className="space-y-12">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactDetails.map((detail, i) => (
                <StaggerItem key={i}>
                  <Card className="p-8 bg-white/30 hover:bg-white/50 transition-colors h-full">
                    <div className="text-3xl mb-4">{detail.icon}</div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">{detail.title}</h3>
                    <p className="text-on-surface-variant whitespace-pre-line leading-relaxed">
                      {detail.content}
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Map Placeholder / Visual */}
            <FadeIn delay={0.4} className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="/images/hero_image.png" 
                alt="Boutique Location" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-white">
                  <span className="text-2xl">📍</span>
                  <span className="font-bold text-primary">Artisan Way, NY</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
