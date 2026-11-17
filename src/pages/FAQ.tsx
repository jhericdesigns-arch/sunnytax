import { useState } from 'react';
import { ChevronDown, HelpCircle, Calendar } from 'lucide-react';
import { PageHeader, ContactCTA } from '@/components/Sections';
import { faqs } from '@/data/business';
import { navigate } from '@/lib/router';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        label="FAQ"
        title="Frequently Asked Questions"
        description="Answers to common questions about our tax services, IRS representation, and what to expect when working with us."
      />

      <section className="py-20 lg:py-28">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="card">
                  <HelpCircle className="h-8 w-8 text-primary-600" />
                  <h3 className="mt-4 font-serif text-lg font-bold text-ink-900">Have More Questions?</h3>
                  <p className="mt-2 text-sm text-ink-500">
                    We're happy to answer any questions you may have. Don't hesitate to reach out.
                  </p>
                  <button onClick={() => navigate('/contact')} className="btn-primary mt-5 w-full">
                    <Calendar className="h-4 w-4" />
                    Contact Us
                  </button>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 p-6 text-white">
                  <p className="font-serif text-lg font-bold">Tax Season Tips</p>
                  <p className="mt-2 text-sm text-primary-100">
                    Bring all your documents to your appointment: W-2s, 1099s, receipts, and last year's return. The more organized you are, the smoother the process.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ list */}
            <div className="lg:col-span-2">
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-2xl ring-1 transition-all duration-300 ${
                      open === i ? 'bg-white shadow-lg ring-primary-200' : 'bg-white ring-ink-100'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className={`font-serif text-base font-bold transition-colors ${
                        open === i ? 'text-primary-700' : 'text-ink-900'
                      }`}>
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                          open === i ? 'rotate-180 text-primary-600' : 'text-ink-400'
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm leading-relaxed text-ink-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
