import { motion } from "framer-motion";

const metrics = [
  { value: "70%", label: "Sales Growth at CHEMIE S.A.", sub: "US$40M → US$70M in 9 years" },
  { value: "1,400+", label: "Team Members Led", sub: "Across LATAM regional operations" },
  { value: "35-50%", label: "OpEx Reduction", sub: "HSBC LATAM branch migrations" },
  { value: "17%", label: "Revenue Growth", sub: "Netafim Chile (2023-2024)" },
  { value: "20+", label: "Years of Experience", sub: "Agro-industrial & financial services" },
  { value: "6+", label: "Countries", sub: "Multi-market leadership across LATAM" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ImpactGrid = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-display text-3xl font-bold text-primary md:text-4xl">
          Measurable Impact
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center font-body text-muted-foreground">
          Key results delivered across executive leadership roles
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={item}
              className="rounded-xl border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="font-display text-4xl font-bold text-accent md:text-5xl">
                {m.value}
              </span>
              <p className="mt-3 font-body text-sm font-semibold uppercase tracking-wider text-primary">
                {m.label}
              </p>
              <p className="mt-1 font-body text-sm text-muted-foreground">{m.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactGrid;
