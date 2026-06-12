import { useEffect, useRef, useState } from "react";
type IconProps = { className?: string };

const Icon = {
  Mail: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  Phone: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  MapPin: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Github: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.73.5.5 5.74.5 12.04c0 5.1 3.29 9.42 7.86 10.96.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.94-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.96 10.96 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.66.79.55 4.57-1.54 7.86-5.86 7.86-10.96C23.5 5.74 18.27.5 12 .5Z" />
    </svg>
  ),
  Linkedin: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  ExternalLink: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
    </svg>
  ),
  ArrowRight: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  ArrowUp: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m18 15-6-6-6 6" />
    </svg>
  ),
  Download: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  Send: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </svg>
  ),
  Code: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Server: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="3" width="20" height="7" rx="2" />
      <rect x="2" y="14" width="20" height="7" rx="2" />
      <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
      <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
    </svg>
  ),
  Database: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  Sparkles: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3-1.91 5.18L5 10l5.09 1.82L12 17l1.91-5.18L19 10l-5.09-1.82L12 3Z" />
    </svg>
  ),
  Briefcase: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Menu: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  Close: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Terminal: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
};

const PERSON = {
  name: "Tammineni Saritha",
  shortName: "Saritha",
  title: "Full Stack Developer",
  tagline: "I design and build clean, scalable web applications — where thoughtful interface meets dependable backend.",
  email: "tamminenisarithachowdary@gmail.com",
  phone: "+91 93929 84202",
  location: "Hyderabad, Telangana, India",
  github: "https://github.com/Sarithatammineni",
  linkedin: "https://www.linkedin.com/in/tammineni-saritha",
  resume: "https://drive.google.com/file/d/168MCbR3TtKzqJhJExLXkmaWy6Alk8mXd/view?usp=sharing",
  about: [
    "Hello! I'm Tammineni Saritha — an aspiring Full Stack Developer currently pursuing my graduation. My interest in technology began with a simple curiosity about how websites work, which quickly grew into a passion for building useful, beautifully-crafted software.",
    "Today I focus on mastering the modern web stack — React, TypeScript, Node.js, and databases like MongoDB and MySQL. I care deeply about clean code, intuitive experiences, and continuously learning to keep up with the fast-moving web.",
  ],
  education: [
    {
      period: "2024 — Present",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      school: "Malla Reddy College of  Engineering  and Technology, Hyderabad",
      detail: "Active coursework in Data Structures, DBMS, Operating Systems, and Web Development.",
    },
    {
      period: "2022 — 2024",
      degree: "Higher Secondary Education",
      field: "Mathematics & Sciences",
      school: "Sri Chaitanya Junior College, Vijayawada.",
      detail: "Built a strong foundation in analytical thinking and problem solving.",
    },
    {
  period: "2022",
  degree: "Secondary School  (SSC)",
  field: "General Studies",
  school: "Harshita English Medium  High School, Tadikalapudi",
  detail: "Completed secondary education with emphasis on academic excellence and overall personality development.",
},

  ],
};

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: Icon.Code,
    blurb: "Pixel-perfect interfaces, fluid interactions.",
    skills: [
      { name: "HTML5 & CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 82 },
      { name: "React.js", level: 78 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Icon.Server,
    blurb: "Reliable APIs and scalable data layers.",
    skills: [
      { name: "Node.js", level: 68 },
      { name: "REST APIs", level: 72 },
      { name: "MongoDB", level: 65 },
      { name: "MySQL", level: 68 },
    ],
  },
  {
    title: "Languages",
    icon: Icon.Sparkles,
    blurb: "Versatility across paradigms.",
    skills: [
      { name: "C", level: 75 },
      { name: "Java", level: 70 },
      { name: "Python", level: 72 },
      { name: "TypeScript", level: 60 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Icon.Terminal,
    blurb: "Efficient, modern workflows.",
    skills: [
      { name: "Git & GitHub", level: 82 },
      { name: "VS Code", level: 90 },
      { name: "Figma (Basics)", level: 60 },
      { name: "Linux", level: 65 },
    ],
  },
];

const TECH_MARQUEE = [
  "React", "TypeScript", "Node.js", "Python", "MongoDB", "MySQL",
  "Tailwind CSS", "Git", "REST APIs", "Figma", "C", "Java", "Linux",
];

const PROJECTS = [
  {
    title: "Smart Agri Track",
    eyebrow: "IoT · AgriTech",
    description:
      "An intelligent agriculture tracking platform that helps farmers monitor crop health, soil conditions, irrigation schedules, and yield predictions through real-time data and smart analytics.",
    image: "/images/project-agri.jpg",
    tech: ["React", "Node.js", "MongoDB", "IoT", "REST API"],
    live: "#",
    github: PERSON.github,
  },
  {
    title: "Home Renovation Tracker",
    eyebrow: "Productivity · Dashboard",
    description:
      "A comprehensive project-management app that helps homeowners plan, budget, and track renovation progress with visual dashboards, contractor management, and milestone timelines.",
    image: "/images/project-renovation.jpg",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Node.js"],
    live: "#",
    github: PERSON.github,
  },
];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    el.querySelectorAll(".reveal").forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const handler = () => {
      const offsets = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 80) };
      });
      const closest = offsets.sort((a, b) => a.top - b.top)[0];
      if (closest) setActive(closest.id);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}


function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

function AnimatedCounter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(Math.round(to * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref} className="count-num">
      {val}
      {suffix}
    </span>
  );
}

type TypingLine = { prefix?: string; content: string; suffix?: string };

function TypingCode({ lines, speed = 32 }: { lines: TypingLine[]; speed?: number }) {
  const [printed, setPrinted] = useState<{ lineIndex: number; charIndex: number }>({ lineIndex: 0, charIndex: 0 });
  const [done, setDone] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      const line = lines[currentLine];
      const totalLineLen = (line.prefix?.length ?? 0) + line.content.length + (line.suffix?.length ?? 0);
      if (currentChar <= totalLineLen) {
        setPrinted({ lineIndex: currentLine, charIndex: currentChar });
        currentChar++;
        setTimeout(tick, speed + Math.random() * 40);
      } else {
        currentLine++;
        currentChar = 0;
        if (currentLine >= lines.length) {
          setDone(true);
        } else {
          setTimeout(tick, speed * 4);
        }
      }
    };
    const t = setTimeout(tick, 700);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [lines, speed]);

  const renderLine = (line: TypingLine, lineIdx: number) => {
    const prefixLen = line.prefix?.length ?? 0;
    const contentLen = line.content.length;
    const suffixLen = line.suffix?.length ?? 0;
    const isCurrent = lineIdx === printed.lineIndex;
    const charsToRender = isCurrent ? printed.charIndex : prefixLen + contentLen + suffixLen;
    const showCaret = isCurrent && !done;
    const prefixRendered = line.prefix ? line.prefix.slice(0, Math.max(0, charsToRender)) : "";
    const contentRendered = line.content.slice(0, Math.max(0, charsToRender - prefixLen));
    const suffixRendered = line.suffix ? line.suffix.slice(0, Math.max(0, charsToRender - prefixLen - contentLen)) : "";
    return (
      <div>
        <span className="text-accent-start">{prefixRendered}</span>
        <span className="text-navy-800">{contentRendered}</span>
        <span className="text-accent-mid">{suffixRendered}</span>
        {showCaret && <span className="caret" />}
      </div>
    );
  };

  return (
    <pre className="text-[11px] md:text-xs leading-relaxed font-mono text-navy-700 overflow-hidden whitespace-pre">
      <code>
        {lines.map((line, idx) => (
          <span key={idx} className="block">
            {renderLine(line, idx)}
          </span>
        ))}
        {done && (
          <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-accent-mid">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            &gt; ready to build something_
            <span className="inline-block w-2 h-3.5 bg-accent-mid align-middle animate-pulse" />
          </div>
        )}
      </code>
    </pre>
  );
}

function TechFloatingChips() {
  const chips = [
    { name: "React", x: "4%", y: "12%", delay: "0s", rot: -6 },
    { name: "Node.js", x: "70%", y: "6%", delay: "1.1s", rot: 4 },
    { name: "TypeScript", x: "88%", y: "42%", delay: "0.5s", rot: -3 },
    { name: "MongoDB", x: "2%", y: "58%", delay: "1.8s", rot: 5 },
    { name: "Python", x: "60%", y: "80%", delay: "2.4s", rot: -4 },
    { name: "Tailwind", x: "22%", y: "88%", delay: "0.9s", rot: 6 },
    { name: "Git", x: "85%", y: "85%", delay: "1.5s", rot: -5 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden>
      {chips.map((c) => (
        <span
          key={c.name}
          className="float-chip inline-flex items-center gap-1.5 rounded-full bg-cream-50 border border-cream-300 px-3 py-1.5 text-xs font-medium text-navy-700 shadow-sm"
          style={{
            left: c.x,
            top: c.y,
            ["--delay" as never]: c.delay,
            ["--rot" as never]: `${c.rot}deg`,
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent-start to-accent-mid" />
          {c.name}
        </span>
      ))}
    </div>
  );
}

function Marquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];
  return (
    <div className="relative overflow-hidden py-6 border-y border-cream-300 bg-cream-50">
      <div className="flex marquee-track gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-medium text-navy-600">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent-start to-accent-mid" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}


function Nav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream-100/80 backdrop-blur-lg border-b border-cream-300" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10 py-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-cream-50 text-sm font-semibold overflow-hidden">
            <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-br from-accent-start via-accent-mid to-accent-end">
              <span className="gradient-text">S</span>
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-cream-50 font-semibold">S</span>
          </span>
          <span className="font-serif text-xl italic text-navy-900">
            Saritha<span className="gradient-text">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link text-sm font-medium ${
                active === item.id ? "text-navy-900 active" : "text-navy-500 hover:text-navy-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PERSON.resume}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-navy-900 text-cream-50 px-5 py-2.5 text-sm font-medium hover:bg-navy-800 transition"
          >
            <Icon.Download className="h-4 w-4" />
            Resume
          </a>
          <button
            className="md:hidden p-2 rounded-full bg-cream-50 border border-cream-300 hover:bg-cream-200 transition"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <Icon.Close className="h-5 w-5" /> : <Icon.Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-cream-300 bg-cream-50">
          <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-navy-800 hover:bg-cream-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href={PERSON.resume}
              className="mt-2 rounded-full bg-navy-900 text-cream-50 px-4 py-3 text-sm font-medium text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-warm-glow">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <TechFloatingChips />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="lg:col-span-7 fade-up relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream-300 bg-cream-50 px-4 py-1.5 text-xs font-medium text-navy-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
                <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for full-time opportunities
            </span>

            <h1 className="mt-8 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.95] tracking-tight text-navy-900">
              Hi, I'm{" "}
              <span className="italic gradient-text">Saritha</span>
              <span className="block mt-1">
                a <span className="italic">Full Stack</span>{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Developer</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-accent-mid"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path d="M2 9 Q 50 2, 100 6 T 198 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-navy-600 max-w-xl leading-relaxed">
              {PERSON.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-navy-900 text-cream-50 px-7 py-3.5 text-sm font-medium hover:bg-navy-800 transition"
              >
                Let's work together
                <Icon.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-navy-900/20 bg-transparent px-7 py-3.5 text-sm font-medium text-navy-900 hover:bg-navy-900 hover:text-cream-50 transition"
              >
                View my work
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a href={PERSON.github} aria-label="GitHub" className="text-navy-500 hover:text-navy-900 transition">
                <Icon.Github className="h-5 w-5" />
              </a>
              <a href={PERSON.linkedin} aria-label="LinkedIn" className="text-navy-500 hover:text-navy-900 transition">
                <Icon.Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${PERSON.email}`} aria-label="Email" className="text-navy-500 hover:text-navy-900 transition">
                <Icon.Mail className="h-5 w-5" />
              </a>
              <span className="h-5 w-px bg-cream-400" />
              <span className="text-xs font-mono text-navy-500 flex items-center gap-1.5">
                <Icon.MapPin className="h-3.5 w-3.5" /> {PERSON.location}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 fade-up-slow relative" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glow behind laptop */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-accent-start/20 via-accent-mid/15 to-accent-end/20 blur-3xl drift" />

              {/* 3D laptop image — floats */}
              <div className="relative float-slow">
                <img
                  src="/images/laptop-hero.png"
                  alt="3D laptop with code"
                  className="relative w-full h-auto drop-shadow-2xl"
                />
              </div>

              {/* Floating code snippet card */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 w-[58%] rounded-2xl bg-navy-900/95 backdrop-blur p-4 md:p-5 shadow-2xl border border-navy-700 float-tilt">
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[10px] font-mono text-navy-300">developer.ts</span>
                </div>
                <TypingCode
                  lines={[
                    { prefix: "const ", content: "dev ", suffix: "= {" },
                    { content: "name: ", suffix: '"Saritha"' },
                    { content: "role: ", suffix: '"Full Stack"' },
                    { content: "passion: ", suffix: '"Clean code"' },
                    { content: "};" },
                  ]}
                />
              </div>
           
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 md:-right-6 rounded-2xl bg-cream-50 border border-cream-300 px-4 py-2 shadow-lg float-tilt" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent-start to-accent-mid flex items-center justify-center text-cream-50">
                    <Icon.Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-navy-500 uppercase tracking-wider">Status</p>
                    <p className="text-xs font-semibold text-navy-900">Open to work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal();
  return (
    <section ref={ref} id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-5 reveal">
            <span className="section-eyebrow">About</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-navy-900">
              Crafting <span className="italic gradient-text">digital</span> experiences with care.
            </h2>
            <p className="mt-8 text-navy-600 text-lg leading-relaxed max-w-lg">
              I'm a student-developer who loves turning ideas into production-ready products.
              Here's a snapshot of what I bring to the table.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div className="rounded-2xl border border-cream-300 bg-cream-50 p-5">
                <p className="font-serif text-4xl text-navy-900 leading-none">
                  <AnimatedCounter to={6} suffix="+" />
                </p>
                <p className="mt-2 text-xs text-navy-500 uppercase tracking-wider">Technologies</p>
              </div>
              <div className="rounded-2xl border border-cream-300 bg-cream-50 p-5">
                <p className="font-serif text-4xl text-navy-900 leading-none">
                  <AnimatedCounter to={2} />
                </p>
                <p className="mt-2 text-xs text-navy-500 uppercase tracking-wider">Projects</p>
              </div>
              <div className="rounded-2xl border border-cream-300 bg-cream-50 p-5">
                <p className="font-serif text-4xl text-navy-900 leading-none">
                  <AnimatedCounter to={100} suffix="%" />
                </p>
                <p className="mt-2 text-xs text-navy-500 uppercase tracking-wider">Passion</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative reveal">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/images/laptop-workspace.png"
                alt="3D laptop workspace"
                className="w-full h-auto"
              />
            </div>

            <div className="mt-8 space-y-5">
              {PERSON.about.map((p, i) => (
                <p key={i} className="text-navy-700 leading-relaxed text-lg">
                  {i === 0 ? (
                    <>
                      {p.split(PERSON.shortName).map((part, idx, arr) =>
                        idx === arr.length - 1 ? part : <>{part}<strong className="text-navy-900 font-semibold">{PERSON.shortName}</strong></>
                      )}
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const ref = useReveal();
  return (
    <section ref={ref} id="skills" className="py-20 md:py-32 bg-navy-900 text-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-accent-mid/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent-end/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7 reveal">
            <span className="section-eyebrow">Skills</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              My technical <span className="italic gradient-text">toolkit</span>.
            </h2>
          </div>
          <div className="md:col-span-5 reveal">
            <p className="text-navy-300 text-lg">
              A growing set of technologies I've been learning and applying across real-world projects.
              Clean code on both ends of the stack.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const IconCmp = cat.icon;
            return (
              <div
                key={cat.title}
                className={`reveal rounded-3xl bg-navy-800/60 backdrop-blur border border-navy-700 p-6 md:p-8 hover:border-accent-mid/50 transition-all duration-500 ${
                  idx % 2 === 0 ? "sm:translate-y-0" : "sm:translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-start to-accent-mid text-cream-50">
                      <IconCmp className="h-5 w-5" />
                    </span>
                    <h3 className="font-serif text-2xl">{cat.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-navy-300 mb-6">{cat.blurb}</p>
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-medium text-cream-50">{s.name}</span>
                        <span className="font-mono text-xs text-navy-300">{s.level}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-navy-700 overflow-hidden">
                        <div
                          className="skill-bar-fill h-full rounded-full"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const ref = useReveal();
  return (
    <section ref={ref} id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-warm-glow opacity-80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl reveal">
            <span className="section-eyebrow">Selected Work</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-navy-900">
              Projects that <span className="italic gradient-text">showcase</span> my craft.
            </h2>
          </div>
          <a
            href={PERSON.github}
            className="reveal inline-flex items-center gap-2 self-start rounded-full border border-navy-900/20 px-5 py-2.5 text-sm font-medium text-navy-900 hover:bg-navy-900 hover:text-cream-50 transition"
          >
            All on GitHub <Icon.ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="space-y-10">
          {PROJECTS.map((p, idx) => (
            <article
              key={p.title}
              className={`reveal group grid md:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7 relative">
                <div className="relative rounded-3xl overflow-hidden bg-cream-200 card-3d">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="rounded-full bg-cream-50/95 backdrop-blur px-3 py-1 text-xs font-semibold text-navy-900 border border-cream-300">
                      {p.eyebrow}
                    </span>
                  </div>
                </div>
                {/* Subtle glow */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-start/10 to-accent-mid/10 blur-2xl -z-10 group-hover:opacity-100 opacity-60 transition" />
              </div>

              <div className="md:col-span-5">
                <h3 className="font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
                  {p.title}
                </h3>
                <p className="mt-5 text-navy-600 leading-relaxed">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cream-300 bg-cream-50 px-3 py-1 text-xs font-mono text-navy-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-2 rounded-full bg-navy-900 text-cream-50 px-5 py-2.5 text-sm font-medium hover:bg-navy-800 transition"
                  >
                    <Icon.ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                  <a
                    href={p.github}
                    className="inline-flex items-center gap-2 rounded-full border border-navy-900/20 px-5 py-2.5 text-sm font-medium text-navy-900 hover:bg-navy-900 hover:text-cream-50 transition"
                  >
                    <Icon.Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const ref = useReveal();
  return (
    <section ref={ref} id="education" className="py-20 md:py-32 bg-cream-200/50">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl mb-14 reveal">
          <span className="section-eyebrow">Education</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-navy-900">
            My learning <span className="italic gradient-text">journey</span>.
          </h2>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-start via-accent-mid to-accent-end opacity-30" />

          <div className="space-y-10">
            {PERSON.education.map((e, idx) => (
              <div
                key={idx}
                className={`reveal relative grid md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 z-10">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-cream-50 border-2 border-accent-mid" />
                    <div className="absolute inset-0 rounded-full bg-accent-mid animate-ping opacity-40" />
                  </div>
                </div>

                <div className={`pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="rounded-3xl bg-cream-50 border border-cream-300 p-6 md:p-8 card-3d">
                    <span className="inline-block font-mono text-xs uppercase tracking-wider text-accent-mid">
                      {e.period}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-navy-900 mt-2 leading-tight">
                      {e.degree}
                    </h3>
                    <p className="mt-1 text-navy-700 font-medium">{e.field}</p>
                    <p className="mt-3 text-navy-500 text-sm">{e.school}</p>
                    <p className="mt-4 text-navy-600 text-sm leading-relaxed">{e.detail}</p>
                  </div>
                </div>

                <div className={`${idx % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                  <div className="rounded-3xl bg-gradient-to-br from-accent-start/10 via-accent-mid/10 to-accent-end/10 p-8 text-center">
                    <Icon.Briefcase className="h-10 w-10 text-navy-900 mx-auto" />
                    <p className="mt-4 font-serif text-xl italic text-navy-900">
                      "{idx === 0 ? "Building foundations for a career in software." : idx === 1 ? "Shaping the analytical mindset." : "Cultivated curiosity and a passion for learning."}";
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    }, 900);
  };

  return (
    <section ref={ref} id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-warm-glow pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="lg:col-span-6 reveal">
            <span className="section-eyebrow">Contact</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-navy-900">
              Let's build <span className="italic gradient-text">something</span> together.
            </h2>
            <p className="mt-6 text-navy-600 text-lg leading-relaxed max-w-lg">
              Have a project in mind, an internship opportunity, or just want to say hello?
              My inbox is always open.
            </p>

            <div className="mt-10 space-y-4 max-w-md">
              <a
                href={`mailto:${PERSON.email}`}
                className="group flex items-center gap-4 rounded-2xl bg-cream-50 border border-cream-300 p-5 hover:border-accent-mid transition"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-start to-accent-mid text-cream-50">
                  <Icon.Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-500">Email</p>
                  <p className="font-medium text-navy-900 group-hover:text-accent-mid transition break-all">
                    {PERSON.email}
                  </p>
                </div>
              </a>
              <a
                href={`tel:${PERSON.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 rounded-2xl bg-cream-50 border border-cream-300 p-5 hover:border-accent-mid transition"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-mid to-accent-end text-cream-50">
                  <Icon.Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-500">Phone</p>
                  <p className="font-medium text-navy-900 group-hover:text-accent-mid transition">
                    {PERSON.phone}
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-cream-50 border border-cream-300 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-cream-50">
                  <Icon.MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-500">Location</p>
                  <p className="font-medium text-navy-900">{PERSON.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={PERSON.github}
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-50 border border-cream-300 text-navy-700 hover:bg-navy-900 hover:text-cream-50 hover:border-navy-900 transition"
              >
                <Icon.Github className="h-4 w-4" />
              </a>
              <a
                href={PERSON.linkedin}
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-50 border border-cream-300 text-navy-700 hover:bg-navy-900 hover:text-cream-50 hover:border-navy-900 transition"
              >
                <Icon.Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 reveal relative">
            {/* 3D laptop CTA image */}
            <div className="absolute -top-10 -right-6 w-32 md:w-40 opacity-70 float-tilt hidden md:block pointer-events-none">
              <img src="/images/laptop-cta.png" alt="" className="w-full h-auto" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl bg-cream-50 border border-cream-300 p-6 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-navy-600 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl bg-transparent border-b border-cream-400 px-1 py-2 text-navy-900 placeholder-navy-400 outline-none focus:border-accent-mid transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-navy-600 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-transparent border-b border-cream-400 px-1 py-2 text-navy-900 placeholder-navy-400 outline-none focus:border-accent-mid transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-navy-600 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project, internship, or just a hello"
                  className="w-full rounded-xl bg-transparent border-b border-cream-400 px-1 py-2 text-navy-900 placeholder-navy-400 outline-none focus:border-accent-mid transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-navy-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about what you have in mind..."
                  className="w-full rounded-xl bg-transparent border border-cream-400 px-4 py-3 text-navy-900 placeholder-navy-400 outline-none focus:border-accent-mid transition resize-none"
                />
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <p className="text-xs text-navy-500">
                  I typically reply within 24 hours.
                </p>
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="inline-flex items-center gap-2 rounded-full bg-navy-900 text-cream-50 px-6 py-3 text-sm font-medium hover:bg-navy-800 active:scale-[0.98] transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "sent" ? (
                    <>Sent ✓</>
                  ) : (
                    <>
                      Send message <Icon.Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-cream-300 bg-cream-50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-mid to-transparent opacity-40" />
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-cream-50 text-xs font-semibold">
            S
          </span>
          <p className="font-serif text-lg italic text-navy-900">
            Tammineni Saritha <span className="gradient-text">—</span>
          </p>
          <p className="text-sm text-navy-500">© {year}</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-navy-500">
          <a href="#home" className="hover:text-navy-900 transition">Home</a>
          <a href="#projects" className="hover:text-navy-900 transition">Work</a>
          <a href="#contact" className="hover:text-navy-900 transition">Contact</a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full border border-cream-300 bg-cream-100 px-4 py-2 text-sm text-navy-700 hover:bg-navy-900 hover:text-cream-50 transition"
        >
          Back to top <Icon.ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100 text-navy-900 overflow-x-hidden">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
