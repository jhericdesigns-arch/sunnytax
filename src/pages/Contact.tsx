import { Phone, Mail, MapPin, Clock, Calendar, Star, Navigation } from 'lucide-react';
import { PageHeader, ContactForm, HoursTable } from '@/components/Sections';
import { businessInfo } from '@/data/business';

export default function Contact() {
  return (
    <>
      <PageHeader
        label="Contact & Booking"
        title="Get in Touch With Us"
        description="We look forward to hearing from you. Schedule an appointment, send us a message, or stop by our Austin office."
      />

      <section className="py-20 lg:py-28">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <span className="section-label">Contact Information</span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-ink-900 text-balance">
                We're Here to Help
              </h2>
              <p className="mt-4 text-lg text-ink-500">
                Reach out by phone, email, or visit our office. Walk-ins are welcome, but appointments are recommended for the best service.
              </p>

              <div className="mt-8 space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="group flex items-center gap-4 rounded-2xl bg-ink-50 p-5 transition-colors hover:bg-primary-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/30">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Telephone</p>
                    <p className="font-serif text-lg font-bold text-ink-900 group-hover:text-primary-700">{businessInfo.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="group flex items-center gap-4 rounded-2xl bg-ink-50 p-5 transition-colors hover:bg-primary-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/30">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Email</p>
                    <p className="truncate font-medium text-ink-900 group-hover:text-primary-700">{businessInfo.email}</p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={businessInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-ink-50 p-5 transition-colors hover:bg-primary-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/30">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Address</p>
                    <p className="font-medium text-ink-900 group-hover:text-primary-700">
                      {businessInfo.address.street}<br />
                      {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                    </p>
                  </div>
                </a>

                {/* Fax */}
                <div className="flex items-center gap-4 rounded-2xl bg-ink-50 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-300 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Fax</p>
                    <p className="font-medium text-ink-900">{businessInfo.fax}</p>
                  </div>
                </div>
              </div>

              {/* Rating badge */}
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
                <Star className="h-8 w-8 fill-accent-400 text-accent-400" />
                <div>
                  <p className="font-serif text-2xl font-bold text-ink-900">{businessInfo.rating} / 5</p>
                  <p className="text-sm text-ink-400">{businessInfo.reviewCount} verified {businessInfo.reviewSource} reviews</p>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-6">
                <HoursTable />
              </div>
            </div>

            {/* Form + map */}
            <div>
              <ContactForm />

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl shadow-sm ring-1 ring-ink-100">
                <iframe
                  title="Sunny's Bookkeeping & Tax Service location"
                  src={businessInfo.embedMapsUrl}
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href={businessInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-4 w-full"
              >
                <Navigation className="h-4 w-4" />
                Get Driving Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
