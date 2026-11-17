import { Phone, Calendar, MapPin, Clock, Star, ShieldCheck, CheckCircle2, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { businessInfo, services, reviews, team, faqs } from '@/data/business';
import { heroImage, aboutImage, austinSkyline, taxDeskImage } from '@/data/business';
import { navigate, Link } from '@/lib/router';

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-20 pb-24 lg:pt-28 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional tax consultation"
          className="h-full w-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/95 to-primary-950/80" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Floating shapes */}
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-primary-600/20 blur-3xl" />
      <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-content relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-primary-200 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-success-400" />
              Open Today · {businessInfo.hours[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]?.open} – {businessInfo.hours[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]?.close}
            </div>

            <h1 className="animate-fade-in-up animate-delay-100 mt-6 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl text-balance">
              Expert Tax Preparation &<br />
              <span className="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">
                Bookkeeping in Austin
              </span>
            </h1>

            <p className="animate-fade-in-up animate-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              For over {businessInfo.yearsServing} years, {businessInfo.dbaName} has provided quality, personalized financial guidance to individuals and businesses. CPA-led. IRS-represented. Locally trusted.
            </p>

            <div className="animate-fade-in-up animate-delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => navigate('/contact')} className="btn-accent text-base">
                <Calendar className="h-5 w-5" />
                Schedule an Appointment
              </button>
              <button onClick={() => navigate('/services')} className="btn border border-white/15 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10">
                Explore Our Services
              </button>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-in-up animate-delay-400 mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-white">{businessInfo.yearsServing}+</p>
                <p className="mt-1 text-xs text-ink-400">Years Serving Austin</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-white">{businessInfo.rating}★</p>
                <p className="mt-1 text-xs text-ink-400">{businessInfo.reviewCount} {businessInfo.reviewSource} Reviews</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-white">CPA · EA</p>
                <p className="mt-1 text-xs text-ink-400 Licensed Credentials">Licensed Credentials</p>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="animate-scale-in animate-delay-300 lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 font-serif text-2xl font-bold text-white shadow-lg">
                    S
                  </div>
                  <div>
                    <p className="font-serif text-base font-bold text-white">Sunny F. Ogunro</p>
                    <p className="text-xs text-primary-200">CPA, EA, ATA, ATP</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { icon: ShieldCheck, label: 'IRS Representation Licensed' },
                    { icon: CheckCircle2, label: 'Federal & State E-File' },
                    { icon: Users, label: 'Individuals & Businesses' },
                    { icon: TrendingUp, label: 'Year-Round Tax Planning' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                      <item.icon className="h-5 w-5 shrink-0 text-primary-300" />
                      <span className="text-sm font-medium text-ink-200">{item.label}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-ink-900 transition-transform hover:scale-[1.02]"
                >
                  <Calendar className="h-4 w-4" />
                  Book Your Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services Preview ---------- */
export function ServicesPreview() {
  const icons: Record<string, typeof ShieldCheck> = {
    User: Users,
    Building2: ShieldCheck,
    BookOpen: CheckCircle2,
    ShieldCheck,
    TrendingUp,
    MessageSquare: Phone,
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">What We Do</span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
            Comprehensive Tax & Accounting Services
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            From individual tax returns to complex IRS representation, we cover every aspect of your tax and financial needs with precision and care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] || ShieldCheck;
            return (
              <div
                key={service.slug}
                className="card-hover group animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-ink-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{service.summary}</p>
                <button
                  onClick={() => navigate('/services')}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => navigate('/services')} className="btn-secondary">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Choose Us ---------- */
export function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Licensed & Trusted',
      desc: 'CPA and Enrolled Agent credentials mean your taxes are handled by a federally licensed professional authorized to represent you before the IRS.',
    },
    {
      icon: Users,
      title: 'Personalized Service',
      desc: 'Every client receives close analysis and attention. We take the time to understand your unique financial situation and goals.',
    },
    {
      icon: TrendingUp,
      title: 'Year-Round Support',
      desc: "We're not just here at tax time. We offer ongoing tax planning, bookkeeping, and financial guidance throughout the entire year.",
    },
    {
      icon: MapPin,
      title: 'Locally Rooted in Austin',
      desc: `Serving the Austin community for over ${businessInfo.yearsServing} years. We understand Texas tax laws and local business needs.`,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-ink-50 py-20 lg:py-28">
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="container-content relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="section-label">Why Choose Us</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              Experience You Can Trust. Service That Makes a Difference.
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Our dedication to high standards, seasoned professionals, and hard work is the reason our clients return year after year.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-bold text-ink-900">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 blur-2xl opacity-60" />
            <img
              src={taxDeskImage}
              alt="Tax preparation desk with forms and calculator"
              className="relative rounded-3xl shadow-2xl shadow-ink-300/40"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-ink-100">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-50 text-success-600">
                  <Star className="h-6 w-6 fill-success-500" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-ink-900">{businessInfo.rating}/5</p>
                  <p className="text-xs text-ink-400">Verified {businessInfo.reviewSource} Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Client Reviews</span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Real reviews from real clients, verified through {businessInfo.reviewSource}.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={review.author}
              className="card animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">"{review.text}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 font-serif text-base font-bold text-primary-600">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink-900">{review.author}</p>
                  <p className="text-xs text-ink-400">{review.date} · Verified {businessInfo.reviewSource} Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact CTA ---------- */
export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-700 py-20 lg:py-24">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary-500/30 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent-400/15 blur-3xl" />

      <div className="container-content relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
              Let's Handle Your Taxes With Confidence
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Whether you need tax preparation, bookkeeping, or IRS representation, we're here to help. Schedule your appointment today.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => navigate('/contact')} className="btn-accent text-base">
                <Calendar className="h-5 w-5" />
                Schedule an Appointment
              </button>
              <a href={`tel:${businessInfo.phoneRaw}`} className="btn border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                <Phone className="h-5 w-5" />
                {businessInfo.phone}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-primary-200" />
                <div>
                  <p className="text-sm font-semibold text-white">Visit Us</p>
                  <p className="text-sm text-primary-100">{businessInfo.fullAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 shrink-0 text-primary-200" />
                <div>
                  <p className="text-sm font-semibold text-white">Call Us</p>
                  <a href={`tel:${businessInfo.phoneRaw}`} className="text-sm text-primary-100 hover:text-white">
                    {businessInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 shrink-0 text-primary-200" />
                <div>
                  <p className="text-sm font-semibold text-white">Office Hours</p>
                  <p className="text-sm text-primary-100">Mon–Thu: 9AM–6PM · Fri: 9AM–5PM · Sat: 10AM–3PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats Bar ---------- */
export function StatsBar() {
  return (
    <section className="border-y border-ink-100 bg-white py-12">
      <div className="container-content grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {[
          { value: `${businessInfo.yearsServing}+`, label: 'Years in Austin' },
          { value: 'CPA · EA', label: 'Licensed Credentials' },
          { value: `${businessInfo.rating}★`, label: `${businessInfo.reviewSource} Rating` },
          { value: '6', label: 'Core Services' },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-3xl font-bold text-primary-700 lg:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-ink-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Page Header (for subpages) ---------- */
export function PageHeader({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-primary-600/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="container-content relative text-center">
        <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-200">
          {label}
        </span>
        <h1 className="animate-fade-in-up animate-delay-100 mt-6 font-serif text-4xl font-bold text-white sm:text-5xl text-balance">
          {title}
        </h1>
        <p className="animate-fade-in-up animate-delay-200 mx-auto mt-5 max-w-2xl text-lg text-ink-300 text-balance">
          {description}
        </p>
      </div>
    </section>
  );
}

/* ---------- Contact Form (shared) ---------- */
export function ContactForm() {
  return (
    <form
      className="card mt-8"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');
        const subject = `Appointment Request from ${name}`;
        const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = `mailto:${businessInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
        form.reset();
      }}
    >
      <h3 className="font-serif text-xl font-bold text-ink-900">Request an Appointment</h3>
      <p className="mt-1 text-sm text-ink-500">Fill out the form below and we'll get back to you shortly.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink-700">Full Name *</label>
          <input name="name" required type="text" className="input-field" placeholder="John Smith" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink-700">Phone Number *</label>
          <input name="phone" required type="tel" className="input-field" placeholder="(512) 000-0000" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink-700">Email Address *</label>
          <input name="email" required type="email" className="input-field" placeholder="john@email.com" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink-700">Service Needed</label>
          <select name="service" className="input-field">
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-semibold text-ink-700">Message</label>
        <textarea name="message" rows={4} className="input-field resize-none" placeholder="Tell us about your tax needs..." />
      </div>
      <button type="submit" className="btn-primary mt-6 w-full text-base">
        <Calendar className="h-5 w-5" />
        Request Appointment
      </button>
      <p className="mt-3 text-center text-xs text-ink-400">
        By submitting, you agree to be contacted about your request. We respect your privacy.
      </p>
    </form>
  );
}

/* ---------- Hours Table (shared) ---------- */
export function HoursTable() {
  const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  return (
    <div className="card">
      <div className="flex items-center gap-3">
        <Clock className="h-5 w-5 text-primary-600" />
        <h3 className="font-serif text-lg font-bold text-ink-900">Office Hours</h3>
      </div>
      <ul className="mt-4 space-y-2">
        {businessInfo.hours.map((h, i) => (
          <li
            key={h.day}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
              i === todayIdx ? 'bg-primary-50 font-semibold' : ''
            }`}
          >
            <span className={i === todayIdx ? 'text-primary-700' : 'text-ink-600'}>
              {h.day}
              {i === todayIdx && <span className="ml-2 text-xs text-primary-500">Today</span>}
            </span>
            <span className={h.open ? 'text-ink-700' : 'text-ink-400'}>
              {h.open ? `${h.open} – ${h.close}` : 'Closed'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}


