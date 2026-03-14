import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MBA International Programme",
    institution: "Universidad Adolfo Ibáñez (UAI)",
    location: "Viña del Mar, Chile",
    year: "2000",
  },
  {
    degree: "Global Consulting Practicum",
    institution: "Wharton Business School – UAI",
    location: "Pennsylvania, USA / Viña del Mar, Chile",
    year: "2000",
  },
  {
    degree: "International Immersion",
    institution: "Copenhagen Business School",
    location: "Copenhagen, Denmark",
    year: "2000",
  },
  {
    degree: "Economist",
    institution: "Universidad de Lima",
    location: "Lima, Peru",
    year: "1996",
  },
  {
    degree: "Lean Six Sigma Black Belt",
    institution: "HSBC México S.A.",
    location: "Mexico City, Mexico",
    year: "2008",
  },
  {
    degree: "LEGO Serious Play – Certified Facilitator",
    institution: "Rasmussen Consulting",
    location: "Santiago, Chile",
    year: "2015",
  },
];

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const EducationSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-display text-3xl font-bold text-primary md:text-4xl">
          Education & Certifications
        </h2>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {education.map((ed) => (
            <motion.div
              key={ed.degree}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex gap-4 rounded-lg border bg-background p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <GraduationCap size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-primary">
                  {ed.degree}
                </h3>
                <p className="font-body text-sm text-foreground">{ed.institution}</p>
                <p className="font-body text-xs text-muted-foreground">
                  {ed.location} · {ed.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
