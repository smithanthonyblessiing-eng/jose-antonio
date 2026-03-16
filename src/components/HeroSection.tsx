import { Download, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import headshot from "@/assets/headshot.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-32">
      {/* Subtle star-like pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--accent)) 0.5px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Profile badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-accent"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Profile
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl"
          >
            José Antonio Gómez
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 h-[3px] w-12 rounded-full bg-accent"
          />

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-5 font-body text-lg font-medium tracking-wide text-accent md:text-xl"
          >
            General Manager · Economist · MBA
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 max-w-3xl font-body text-base leading-relaxed text-primary-foreground/70 md:text-lg"
          >
            20+ years of experience in agro-industrial and financial services.
            Proven track record in P&L management, EBITDA growth, and opening
            local & international markets across Latin America.
          </motion.p>

          {/* Contact row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-primary-foreground/60"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-accent" />
              Santiago, Chile
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail size={14} className="text-accent" />
              joseagomezrocha@hotmail.com
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={14} className="text-accent" />
              +56 9 9433-0136
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/resume/Resume_Jose_Antonio_Gomez.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-body text-sm font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/joseagomezrocha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              LinkedIn Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
