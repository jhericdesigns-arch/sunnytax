import { ShieldCheck, Award, Heart, Target, Users, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageHeader, ContactCTA } from '@/components/Sections';
import { businessInfo, team, aboutImage, austinSkyline } from '@/data/business';
import { navigate } from '@/lib/router';

export default function About() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Dedicated to Austin's Financial Success"
        description={`For over ${businessInfo.yearsServing} years, ${businessInfo.dbaName} has been providing quality, personalized financial guidance to local individuals and businesses.`}
      />

      {/* Introduction */}
      <section className="py-20 lg:py-28">
        <div className="container-content">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 blur-2xl opacity-60" />
              <img
                src={aboutImage}
                alt="Professional tax consultation in office"
                className="relative rounded-3xl shadow-2xl shadow-ink-300/40"
                loading="lazy"
              />
            </div>
            <div>
              <span className="section-label">Our Background</span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
                A Foundation of Trust & Expertise
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                {businessInfo.dbaName}, led by {businessInfo.legalName}, has been providing quality, personalized financial guidance to local individuals and businesses for over {businessInfo.yearsServing} years. Our expertise ranges from basic tax management and bookkeeping services to more in-depth services such as financial statements and IRS representation.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                By combining our expertise, experience, and the team mentality of our staff, we assure that every client receives the close analysis and attention they deserve. Our dedication to high standards, hiring of seasoned tax professionals, and work ethic is the reason our client base returns year after year.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-ink-50 p-5">
                  <ShieldCheck className="h-6 w-6 text-primary-600" />
                  <p className="mt-3 font-serif text-lg font-bold text-ink-900">CPA & EA Licensed</p>
                  <p className="mt-1 text-xs text-ink-400">Federally authorized to represent before the IRS</p>
                </div>
                <div className="rounded-xl bg-ink-50 p-5">
                  <Award className="h-6 w-6 text-primary-600" />
                  <p className="mt-3 font-serif text-lg font-bold text-ink-900">{businessInfo.yearsServing}+ Years</p>
                  <p className="mt-1 text-xs text-ink-400">Serving the Austin community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Mission & Values</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              What Drives Us Every Day
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To help clients maintain financial viability in the present, while taking a proactive approach to achieve future goals through research and sound analysis.',
              },
              {
                icon: ShieldCheck,
                title: 'Excellence',
                desc: 'We are dedicated to meeting our clients\u2019 goals with high standards of excellence and professionalism in everything we do.',
              },
              {
                icon: Heart,
                title: 'Personalized Care',
                desc: 'Open communication and understanding of our clients\u2019 needs. Every individual and business receives close analysis and attention.',
              },
              {
                icon: TrendingUp,
                title: 'Proactive Approach',
                desc: 'We don\u2019t just react to tax season. We help you plan ahead, stay compliant, and achieve your financial goals year-round.',
              },
            ].map((value) => (
              <div key={value.title} className="card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-ink-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Our Team</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ink-900 sm:text-4xl text-balance">
              Meet the Professionals Behind Your Taxes
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="card-hover">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 font-serif text-2xl font-bold text-white shadow-lg">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-ink-900">{member.name}</h3>
                {member.credentials && (
                  <p className="text-sm font-semibold text-primary-600">{member.credentials}</p>
                )}
                <p className="mt-1 text-sm text-ink-400">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">{member.bio}</p>

                {member.expertise.length > 0 && (
                  <div className="mt-5 border-t border-ink-100 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Areas of Expertise</p>
                    <ul className="mt-3 space-y-2">
                      {member.expertise.map((exp) => (
                        <li key={exp} className="flex items-start gap-2 text-sm text-ink-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.community.length > 0 && (
                  <div className="mt-4 border-t border-ink-100 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Community Involvement</p>
                    <ul className="mt-3 space-y-2">
                      {member.community.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-ink-600">
                          <Users className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Austin section */}
      <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-24">
        <div className="absolute inset-0">
          <img src={austinSkyline} alt="Austin, Texas skyline" className="h-full w-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/60" />
        </div>
        <div className="container-content relative text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
            Proudly Serving Austin, Texas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-300">
            Located at {businessInfo.fullAddress}, we've been a staple of the Austin business community for over {businessInfo.yearsServing} years.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="btn-accent mt-8 text-base"
          >
            Get Directions & Schedule a Visit
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
