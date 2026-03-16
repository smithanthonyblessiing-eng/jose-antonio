import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const StickyHeader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <div className="flex items-center gap-3">
          <img src={profileImg} alt="José Antonio Gómez" className="h-8 w-8 rounded-full object-cover" />
          <span className="font-display text-lg font-bold text-primary">
            José Antonio Gómez
          </span>
        </div>
        <a
          href="/resume/Resume_Jose_Antonio_Gomez.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <Download size={16} />
          Download CV
        </a>
      </div>
    </header>
  );
};

export default StickyHeader;
