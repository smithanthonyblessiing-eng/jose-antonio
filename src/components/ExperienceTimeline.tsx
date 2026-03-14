import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Role {
  company: string;
  title: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  url?: string;
}

const roles: Role[] = [
  {
    company: "Netafim Chile (ORBIA)",
    title: "Managing Director",
    location: "Chile",
    period: "May 2023 – Present",
    description:
      "Global leader in irrigation solutions for sustainable agriculture. Full P&L responsibility and innovation strategy.",
    achievements: [
      "17% growth in sales (2023-2024)",
      "Developed strategic plan to double company size in 5 years",
    ],
    url: "https://www.netafim.com/en/",
  },
  {
    company: "Semillas Generación 2000 S.A.",
    title: "General Manager",
    location: "Chile",
    period: "Feb 2021 – Apr 2023",
    description:
      "Chilean seed production company offering multiplication, nursery, grow out, treatment, and disinfection services.",
    url: "https://www.sg-2000.com/",
  },
  {
    company: "CHEMIE S.A.",
    title: "Corporate General Manager",
    location: "Chile",
    period: "Oct 2011 – Dec 2020",
    description:
      "200+ employees across agricultural and animal health industries in Latin America. Direct P&L, new business and innovation strategy.",
    achievements: [
      "Increased total sales from US$40M to US$70M in 9 years",
      "Created and mentored a high-performance team",
      '"Great Place to Work" award 2017',
      "Standardization and digitalization of products, processes, and systems",
    ],
    url: "https://chemiesa.com/",
  },
  {
    company: "HSBC Bank",
    title: "Regional Director – Projects",
    location: "Mexico City, Mexico",
    period: "2010 – 2011",
    description:
      "Created and led a regional team of 1,400 FTEs across LATAM to deliver complex migration projects.",
    achievements: [
      "35-50% reduction of operating expenses at HSBC branches in LATAM",
      "Standardization and digitalization reducing process time by 20%",
    ],
  },
  {
    company: "HSBC Bank",
    title: "Head of Premier Project / Head of OPSCO",
    location: "Santiago, Chile",
    period: "2007 – 2010",
    description:
      "Prepared and executed the Business Plan for Personal Banking in Chile. Led Due Diligence for Credit Card business acquisition.",
    achievements: [
      "Ensured bank operation continuity 24 hrs after 2010 Chile earthquake",
      "Created HSBC Personal Financial Services in Chile",
      "Launched the first 4 HSBC branches in Chile",
    ],
  },
  {
    company: "HSBC Bank USA N.A.",
    title: "Assistant Vice President",
    location: "Santiago, Chile",
    period: "2003 – 2007",
    description:
      "Investment advisory and client portfolio management with minimum US$1MM financial investments.",
  },
  {
    company: "TD Bank / TD Securities Inc.",
    title: "Regional Representative",
    location: "Santiago, Chile",
    period: "2001 – 2002",
    description:
      "US$400M portfolio management across Financial Institutions and Corporates in LATAM.",
  },
  {
    company: "Bancosur – Banco Santander Peru",
    title: "Relationship Manager / Investment Advisor",
    location: "Lima, Peru",
    period: "1997 – 2001",
    description:
      "Development and implementation of Domestic Private Banking and post-merger integration.",
    achievements: [
      "Launched Private Domestic Banking area",
      "Launched the first VISA Platinum credit card in Peru",
    ],
  },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExperienceTimeline = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-display text-3xl font-bold text-primary md:text-4xl">
          Leadership Experience
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center font-body text-muted-foreground">
          A career spanning global finance and agro-industrial leadership
        </p>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-12">
            {roles.map((role, i) => (
              <motion.div
                key={`${role.company}-${role.period}`}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="relative md:pl-14"
              >
                {/* Dot */}
                <div className="absolute left-3 top-1.5 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-background md:flex">
                  <Briefcase size={10} className="text-accent" />
                </div>

                <div className="rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary">
                        {role.title}
                      </h3>
                      <p className="font-body text-sm font-semibold text-accent">
                        {role.company}
                      </p>
                    </div>
                    <span className="shrink-0 font-body text-xs font-medium text-muted-foreground">
                      {role.period} · {role.location}
                    </span>
                  </div>

                  <p className="mt-3 font-body text-sm leading-relaxed text-foreground">
                    {role.description}
                  </p>

                  {role.achievements && (
                    <ul className="mt-3 space-y-1">
                      {role.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 font-body text-sm text-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
