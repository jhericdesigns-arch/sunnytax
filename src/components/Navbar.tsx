import { useEffect, useState } from 'react';
import { Phone, Menu, X, Calendar, Star } from 'lucide-react';
import { businessInfo, navLinks } from '@/data/business';
import { Link, navigate, usePage } from '@/lib/router';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const page = usePage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [page]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-ink-900 text-ink-300 lg:block">
        <div className="container-content flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="font-medium text-ink-100">
              {businessInfo.address.street} · {businessInfo.address.city}, {businessInfo.address.state}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
              <span className="font-semibold text-white">{businessInfo.rating}</span>
              <span className="text-ink-400">· {businessInfo.reviewCount} {businessInfo.reviewSource} reviews</span>
            </span>
            <a href={`tel:${businessInfo.phoneRaw}`} className="flex items-center gap-1.5 font-medium text-white transition-colors hover:text-primary-300">
              <Phone className="h-3.5 w-3.5" />
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-lg shadow-ink-200/30 backdrop-blur-md'
            : 'bg-white'
        }`}
      >
        <nav className="container-content flex h-18 items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 font-serif text-xl font-bold text-white shadow-lg shadow-primary-600/30 transition-transform group-hover:scale-105">
              S
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-base font-bold text-ink-900">Sunny's Tax</span>
              <span className="text-[11px] font-medium tracking-wide text-ink-400">CPA · EA · Austin, TX</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path as '/' | '/about' | '/services' | '/faq' | '/contact'}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  page === link.path
                    ? 'text-primary-700'
                    : 'text-ink-600 hover:text-ink-900 hover:bg-ink-50'
                }`}
              >
                {link.label}
                {page === link.path && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary-600" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="hidden btn-primary sm:inline-flex"
            >
              <Calendar className="h-4 w-4" />
              Schedule Appointment
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-50 text-ink-700 transition-colors hover:bg-ink-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
            mobileOpen ? 'max-h-screen border-t border-ink-100' : 'max-h-0'
          }`}
        >
          <div className="container-content flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path as '/' | '/about' | '/services' | '/faq' | '/contact'}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  page === link.path
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-ink-700 hover:bg-ink-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary mt-3 w-full"
            >
              <Calendar className="h-4 w-4" />
              Schedule Appointment
            </button>
            <a href={`tel:${businessInfo.phoneRaw}`} className="btn-secondary mt-2 w-full">
              <Phone className="h-4 w-4" />
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
