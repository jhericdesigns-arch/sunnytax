import { ShieldCheck, Users, BookOpen, CheckCircle2, ArrowRight, Calendar, Phone } from 'lucide-react';
import { PageHeader, ContactCTA } from '@/components/Sections';
import { services, businessInfo } from '@/data/business';
import { navigate } from '@/lib/router';

const iconMap: Record<string, typeof ShieldCheck> = {
  User: Users,
  Building2: ShieldCheck,
  BookOpen,
  ShieldCheck,
  TrendingUp: Calendar,
  MessageSquare: Phone,
};

export default function Services() {
  return (
    <>
      <PageHeader
        label="Our Services"
        title="Comprehensive Tax & Accounting Solutions"
        description="We provide a wide range of professional services to individuals and businesses. Our firm strives to meet each client's specific needs in planning for the future and achieving their goals."
      />

      {/* Services list */}
      <section className="py-20 lg:py-28">
        <div className="container-content">
          <div className="space-y-16">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || ShieldCheck;
              const isReversed = i % 2 === 1;
              return (
                <div
                  key={service.slug}
                  className={`grid gap-10 lg:grid-cols-2 lg:items-center ${isReversed ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/30">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-bold text-primary-600">Service {String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="mt-5 font-serif text-2xl font-bold text-ink-900 sm:text-3xl">{service.title}</h2>
                    <p className="mt-4 text-lg leading-relaxed text-ink-500">{service.summary}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-ink-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => navigate('/contact')}
                      className="btn-primary mt-8"
                    >
                      <Calendar className="h-4 w-4" />
                      Request This Service
                    </button>
                  </div>

                  {/* Visual */}
                  <div className="relative">
                    <div className={`absolute -inset-4 rounded-3xl blur-2xl opacity-60 ${
                      isReversed ? 'bg-gradient-to-br from-accent-100 to-primary-100' : 'bg-gradient-to-br from-primary-100 to-accent-100'
                    }`} />
                    <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-ink-50 to-primary-50 p-8 ring-1 ring-ink-100">
                      <div className="flex h-full flex-col items-center justify-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl">
                          <Icon className="h-12 w-12 text-primary-600" />
                        </div>
                        <p className="mt-6 font-serif text-lg font-bold text-ink-900">{service.title}</p>
                        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                          {service.features.slice(0, 3).map((f) => (
                            <span key={f} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-500 ring-1 ring-ink-100">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">How It Works</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              Simple, Straightforward Process
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              We've made working with us as easy and transparent as possible.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Reach Out', desc: 'Call us or fill out the appointment request form. Tell us about your tax needs.' },
              { step: '02', title: 'Schedule', desc: 'We\u2019ll find a time that works for you. Walk-ins are welcome, appointments are recommended.' },
              { step: '03', title: 'Meet & Review', desc: 'Bring your documents. We\u2019ll review your situation and provide clear guidance.' },
              { step: '04', title: 'File & Relax', desc: 'We prepare and e-file your returns accurately. You receive copies for your records.' },
            ].map((item) => (
              <div key={item.step} className="relative card-hover">
                <span className="font-serif text-5xl font-bold text-primary-100">{item.step}</span>
                <h3 className="mt-2 font-serif text-lg font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
