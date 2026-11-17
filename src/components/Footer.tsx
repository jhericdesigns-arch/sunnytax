import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, ArrowRight, Star } from 'lucide-react';
import { businessInfo, navLinks, services } from '@/data/business';
import { Link, navigate } from '@/lib/router';

export default function Footer() {
  const today = new Date().getDay();
  const todayHours = businessInfo.hours[today === 0 ? 6 : today - 1];

  return (
    <footer className="bg-ink-950 text-ink-400">
      {/* CTA strip */}
      <div className="border-b border-white/5">
        <div className="container-content flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">Ready to file with confidence?</h3>
            <p className="mt-1 text-sm text-ink-400">Schedule your appointment today and get expert tax help.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button onClick={() => navigate('/contact')} className="btn-accent">
              Schedule an Appointment
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href={`tel:${businessInfo.phoneRaw}`} className="btn border border-white/15 text-white hover:bg-white/10">
              <Phone className="h-4 w-4" />
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-content grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:pr-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 font-serif text-xl font-bold text-white">
              S
            </div>
            <div className="leading-tight">
              <p className="font-serif text-base font-bold text-white">Sunny's Tax</p>
              <p className="text-[11px] text-ink-500">CPA · EA · Austin, TX</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            Providing quality, personalized financial guidance to individuals and businesses in Austin, Texas for over {businessInfo.yearsServing} years.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={businessInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-ink-400 transition-colors hover:bg-primary-600 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={businessInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-ink-400 transition-colors hover:bg-primary-600 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <button
                  onClick={() => navigate('/services')}
                  className="link-underline text-ink-400 hover:text-white"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path as '/' | '/about' | '/services' | '/faq' | '/contact'}
                  className="link-underline text-ink-400 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h4>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-primary-400" />
              <span className="text-ink-400">
                {businessInfo.address.street}<br />
                {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" />
              <a href={`tel:${businessInfo.phoneRaw}`} className="text-ink-400 hover:text-white">
                {businessInfo.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" />
              <a href={`mailto:${businessInfo.email}`} className="break-all text-ink-400 hover:text-white">
                {businessInfo.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-primary-400" />
              <span className="text-ink-400">
                {todayHours?.open ? (
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-success-400" />
                    Open today · {todayHours.open} – {todayHours.close}
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-ink-500" />
                    Closed today
                  </span>
                )}
              </span>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
            <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
            <span className="text-sm font-semibold text-white">{businessInfo.rating}</span>
            <span className="text-xs text-ink-500">· {businessInfo.reviewCount} {businessInfo.reviewSource} reviews</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-500 md:flex-row">
          <p>© {new Date().getFullYear()} {businessInfo.legalName}. All rights reserved.</p>
          <p className="text-ink-600">{businessInfo.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
