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
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-12 lg:gap-20">
          {/* Left Column – Profile Image (25-30%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="shrink-0 md:w-[28%] flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-accent/20 blur-xl" />
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-accent/30 shadow-2xl md:h-48 md:w-48 lg:h-56 lg:w-56">
                <img
                  src={headshot}
                  alt="José Antonio Gómez - General Manager & Economist"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column – Content (70-75%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:flex-1 md:text-left"
          >
            <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              José Antonio Gómez
            </h1>
            <p className="mt-3 font-body text-lg font-medium tracking-wide text-accent md:text-xl">
              General Manager · Economist · MBA
            </p>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              20+ years of experience in agro-industrial and financial services.
              Proven track record in P&L management, EBITDA growth, and opening
              local & international markets across Latin America.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-primary-foreground/60 md:justify-start">
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
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
