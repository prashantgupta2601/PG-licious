'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimationWrapper';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4kB3gGRUJZXqaTT0thtDGCuHBdGc7FZZaYeya0J2GNHU0znNYnS5soHHc4pt9AL8903k6Cmug3bkJf6mObu69vhUK_0xWzeMwqCLv1fKB5ELAfv6JfZmWbDNkVAEgCWHzeOD6GX_KZKkYvd_47TbHBkDkXY0R84lH7_VkOv8rQi-r-Oolqoa694Etf9j7ukB55NWKew9LrQvCEqILbHLf2tG6QhYprEWuL_CO9mVmbAaZTjpaC1LAG6oS-26j5-vKw3-BAV7lWyU"
          alt="Our Story"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <FadeIn className="bg-white/40 backdrop-blur-md p-12 rounded-3xl border border-white/50 max-w-4xl mx-auto shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-950 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-stone-900 max-w-2xl mx-auto font-light leading-relaxed">
              For over three generations, we have pursued perfection in every fold of dough and whisk of cream.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              The Art of Soft Minimalism
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                We believe that true luxury lies in restraint. Our creations are an homage to the essential elements of baking: time, temperature, and the finest natural ingredients sourced globally.
              </p>
              <p>
                Every pastry that leaves our kitchen is a testament to mindful preparation. We eschew artificial enhancements in favor of deep, complex flavors that develop slowly, reflecting our philosophy of indulgent sophistication.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9849sxIlsNBx0ACRP4Ds_2DSZXwI0W_BJrVpmOPZW_E-g2a-R8VttN-qhUCUhX_kAcD6ykXMo5ZD94DxH5gPxPzbdvrtYaRF-dyJ54NDnTjGhPDXyb-hzvLQKqB4Lc_RFTRLoD3Sxf2KDqvZoRIT1ddC8BV4zN7MFidXcr6PV_qh__7uSXodP2mFvw-b7ZYv_ME5MkRHk_bm-1AqPv3Y4bXxoPCk_oXXtdl1r6gwUYdFgb2BDCFHhX0NFuYntrYSSF7_TV642Yog" 
              alt="Minimalist Baking"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-surface-container/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-on-surface-variant text-lg">Tracing the path of our passion, from humble beginnings to a sanctuary of sweetness.</p>
          </FadeIn>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Item 1: Large */}
            <StaggerItem className="md:col-span-2 relative overflow-hidden rounded-3xl group shadow-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdX9BQUFhpCmm4WQhhPdroRvjp8p0etRxm94ekrnS4TWvOIaTWTTRHMIJRYHKkBozW9ItTMMlekP8rkBZaS8F7C3XeNLQldy38nTKqJZwmbiBeA77qf_B8BAuJo1iZIheOz4KD-yeg1S9aSOS87TZ4VfOpSluGk0cXaTE_PJZr3n5PR-mWvL0HroVMjgzWW11zqq99mwlAmFVvTeZhmFnVTTs3ZJ3ugDPUouOzrGe908_-jtHbPAe3OjZa6Xx8iznvQZwXFxWYQCQ"
                alt="The First Oven"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <span className="text-white/80 text-sm font-medium mb-2">1954</span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">The First Oven</h3>
                <p className="text-white/90 text-sm max-w-md">Our founder opened the doors to a modest boulangerie, introducing signature sourdoughs.</p>
              </div>
            </StaggerItem>

            {/* Item 2: Small */}
            <StaggerItem className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" /></svg>
              </div>
              <div>
                <span className="text-secondary text-sm font-medium block mb-1">1978</span>
                <h3 className="text-xl font-serif font-bold text-primary mb-2">The Entremet Era</h3>
                <p className="text-on-surface-variant text-sm">Shift focus to highly technical, layered mousse cakes.</p>
              </div>
            </StaggerItem>

            {/* Item 3: Small */}
            <StaggerItem className="bg-primary/5 p-8 rounded-3xl border border-primary/10 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <div>
                <span className="text-secondary text-sm font-medium block mb-1">2001</span>
                <h3 className="text-xl font-serif font-bold text-primary mb-2">Master Chocolatier</h3>
                <p className="text-on-surface-variant text-sm">Expanding our repertoire to include artisanal chocolate bonbons.</p>
              </div>
            </StaggerItem>

            {/* Item 4: Large */}
            <StaggerItem className="md:col-span-2 relative overflow-hidden rounded-3xl group shadow-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChy8kWs8cdknI7EQNPm5wRfoB2zdA0QD25CymNxn9z8U_P_esguRhoLydvnOhp_py9yWXrCqb8e7j7bRmFCkIZAHCkZh1zEfhc2_THYeuLN-oj-9JO-22dXF1doM0-AV6BusxQmnYU0nOZ8kb8lYQ1QkXcUcsxRxQDr4tCv7Snp1ey1xWO4GDLhjZqqjW1IFF_C2axClB1C77UiI85PNmyPxZtJXKBoeuiX7AHnxloG87bghxAyAsSxnniQ1-tEL3U0PjDY8hYmvg"
                alt="Indulgent Sophistication"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <span className="text-white/80 text-sm font-medium mb-2">Present</span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Indulgent Sophistication</h3>
                <p className="text-white/90 text-sm max-w-md">A reimagined space blending modern aesthetics with timeless traditions.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">The Visionary Minds</h2>
            <p className="text-on-surface-variant text-lg">Meet the experts shaping our culinary landscape.</p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              name: "Elara Vance",
              role: "Executive Pastry Chef",
              bio: "Bringing two decades of classical French training, Elara orchestrates the delicate balance of flavors in our signature collections.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADR_Azrp0cqjXYZ8puSpJUB01AjQjOZfYc-53LBNbybhAbfWWYUJDjgQmZ_UfAqi7umt8NdtAQzxzT25VY-ZxaVrFT4ILfbyQ6CQ0BQV-kXRk2a46oplHbni6JvGzDyyt58H1Xp1zNyb3VimPsGuUx0K2h-UOUAY-u2rEfGmSMGCYcGELsO_Ps2KYQGu8NIaIZz_hqoZL1uJZmaM82VIk8Zz1JGupk5PgOCx5yqspDnfx-l5uGhLhR_Sw1O0DTzDAMs9N8OglODAg"
            },
            {
              name: "Julian Thorne",
              role: "Head of Boulangerie",
              bio: "Julian is the custodian of our mother dough, ensuring every loaf achieves the perfect crust and an airy, soulful crumb.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDssQj8CiZumKXGUws51w8oWYHGvC5Oq6PDEqAXJONlXVMpZxtLyzky8W85hZCxt8DyplkB6ixsKN5poJ0KxWyVOy6WynCXaJqMOf4vanJ6viUwGNmFwkzfmoWgNK-hP4F3AtiyhGf7_tMUChHqv1w8jZxAwqEpO4cFbdVNkosYRBsX8RsP6a8g9wP8KTly_PbOFQaQpF0Jr8KPc3zLsFpTcoCJhfinatVGDGgIHHqGo9FtnJuAaINp6wFzPi5McjFcC6LDdiYru5c"
            },
            {
              name: "Amara Lin",
              role: "Master Chocolatier",
              bio: "Amara transforms single-origin cacao into sculptural, melt-in-your-mouth art pieces that define modern indulgence.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP_KQPLgXgfuUlOdRD9GhPLwfDK7dTV2JNDEJMgaKfCJkSXikBVpd5FpOJ275qemIGoS_axXKfgTLnXAslGOrX8sPZXUC722lINIrMrPg-n8jio8xobzIoS27AHzC6PcUgLxEHjEGqixRZXx7hBhoSp8Kqxl3YU_VPLh42s_-fqBE5lto1w7bYOf8IkNeW68trz58ilFpEDBjCr88mfMAS9Rhq_szye9EhuyBD7Q2vBhEnqNk4huVUzVDZFiDksQW-pIB6DUMBlPI"
            }
          ].map((member, i) => (
            <StaggerItem key={i} className="group">
              <Link href={member.name === "Amara Lin" ? "/about/amara-lin" : "#"} className={member.name === "Amara Lin" ? "cursor-pointer" : "cursor-default"}>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    {member.name === "Amara Lin" && (
                      <span className="text-white font-serif italic text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Profile
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-4">{member.role}</p>
                <p className="text-on-surface-variant leading-relaxed">{member.bio}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </main>
  );
}
