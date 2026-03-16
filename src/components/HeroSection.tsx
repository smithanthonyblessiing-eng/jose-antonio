import { Download, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { useEffect, useRef } from "react";

const NODE_COUNT = 40;
const CONNECTION_DIST = 140;

function drawMesh(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;
  const dpr = window.devicePixelRatio || 1;

  // Generate nodes with random positions and slow velocities
  const nodes = Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3 * dpr,
    vy: (Math.random() - 0.5) * 0.3 * dpr,
    r: (1.2 + Math.random() * 1.8) * dpr,
  }));

  const connDist = CONNECTION_DIST * dpr;

  let animId: number;

  function frame() {
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);

    // Update positions
    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connDist) {
          const alpha = (1 - dist / connDist) * 0.25;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `hsla(199, 89%, 48%, ${alpha})`;
          ctx.lineWidth = 0.7 * dpr;
          ctx.stroke();
        }
      }
    }

    // Draw glowing nodes
    for (const n of nodes) {
      // Glow
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
      grad.addColorStop(0, "hsla(199, 89%, 48%, 0.35)");
      grad.addColorStop(1, "hsla(199, 89%, 48%, 0)");
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(199, 89%, 48%, 0.7)";
      ctx.fill();
    }

    animId = requestAnimationFrame(frame);
  }

  frame();

  return () => cancelAnimationFrame(animId);
}

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resize();
    const cleanup = drawMesh(canvas);
    window.addEventListener("resize", resize);

    return () => {
      cleanup?.();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-32">
      {/* Digital mesh canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle star-like pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
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
