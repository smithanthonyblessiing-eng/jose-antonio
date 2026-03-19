import { Download, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const DownloadCTA = () => {
  return (
    <section className="bg-primary py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 text-center"
      >
        <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Interested in Working Together?
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-primary-foreground/70">
          Download my CV for a complete overview or connect with me directly on
          LinkedIn.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/resume/Resume_Jose_Antonio_Gomez.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3.5 font-body text-sm font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl animate-pulse-slow"
          >
            <Download size={18} />
            Download Full CV (PDF)
          </a>
          <a
            href="https://www.linkedin.com/in/jose-antonio-gomez-rocha/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadCTA;
