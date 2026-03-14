import { Download, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import headshot from "@/assets/headshot.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-accent/30 shadow-2xl md:h-52 md:w-52">
              <img
                src={headshot}
                alt="José Antonio Gómez - General Manager & Economist"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              José Antonio Gómez
            </h1>
            <p className="mt-3 font-body text-lg font-medium tracking-wide text-accent md:text-xl">
              General Manager · Economist · MBA
            </p>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              20+ years of experience in agro-industrial and financial services.
              Proven track record in P&L management, EBITDA growth, and opening
              local & international markets across Latin America.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/60 md:justify-start">
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
