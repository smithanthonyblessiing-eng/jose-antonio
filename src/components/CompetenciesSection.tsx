import { motion } from "framer-motion";

interface TagGroup {
  category: string;
  tags: string[];
}

const groups: TagGroup[] = [
  {
    category: "Leadership & Management",
    tags: [
      "P&L Management",
      "Strategic Planning",
      "Change Management",
      "Team Building (up to 1,400 FTEs)",
      "High-Performance Teams",
      "Multi-Cultural Leadership",
    ],
  },
  {
    category: "Industries Served",
    tags: [
      "Agro-Industrial",
      "Agricultural Inputs",
      "Animal Health",
      "Irrigation & Water Tech",
      "Seed Production",
      "Financial Services",
      "Private Banking",
      "Retail Banking",
    ],
  },
  {
    category: "Functional Expertise",
    tags: [
      "Business Development",
      "EBITDA Optimization",
      "M&A / Due Diligence",
      "Operational Excellence",
      "Lean Six Sigma (Black Belt)",
      "Process Digitalization",
      "International Market Expansion",
      "Innovation Strategy",
    ],
  },
  {
    category: "Soft Skills",
    tags: [
      "Adaptability & Flexibility",
      "Active Listening",
      "Persistence & Commitment",
      "LEGO Serious Play Facilitator",
      "Bilingual (Spanish / English)",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const pill = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const CompetenciesSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-display text-3xl font-bold text-primary md:text-4xl">
          Core Competencies & Industries
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center font-body text-muted-foreground">
          Areas of expertise honed across two decades of executive leadership
        </p>

        <div className="mx-auto mt-12 max-w-4xl space-y-10">
          {groups.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-lg font-semibold text-primary">
                {group.category}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="mt-4 flex flex-wrap gap-2.5"
              >
                {group.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={pill}
                    className="inline-block rounded-full border border-border bg-card px-4 py-1.5 font-body text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
