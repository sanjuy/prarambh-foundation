import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "cover", label: "Home" },
  { id: "about", label: "About" },
  { id: "mission", label: "Mission & Vision" },
  { id: "team", label: "Our Team" },
  { id: "works", label: "Our Works" },
  { id: "connect", label: "Connect" },
];

const TEAM = [
  { name: "Yogesh Kumar", role: "President" },
  { name: "Ramakant Bajaj", role: "Advisor" },
  { name: "Harikant Gupta", role: "Vice-President" },
  { name: "Gunjan Tomar", role: "Treasurer" },
  { name: "Sunny Tomar", role: "Secretary" },
  { name: "Raju Tomar", role: "Vice-Secretary" },
  { name: "Vishnu Gupta", role: "Member" },
  { name: "Shivani Kumari", role: "Member" },
];

const WORKS = [
  "Health and Nutrition",
  "Gender, DEI And Social Norms, Education",
  "Economic Empowerment and Livelihoods",
  "Social and Environmental Protection",
  "Emergency Response",
  "Skilling and Employability",
];

const DEMO_AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1528763216501-761e2d52cfe4?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  );
}

type Theme = "dark" | "light";

interface ThemeColors {
  bg: string;
  bgAlt: string;
  nav: string;
  navBorder: string;
  text: string;
  textMuted: string;
  textFaint: string;
  cardBg: string;
  cardBorder: string;
  workRow: string;
  contactCard: string;
  dotInactive: string;
  dotHover: string;
  sectionLabel: string;
  pillBorder: string;
  pillText: string;
}

const themes: Record<Theme, ThemeColors> = {
  dark: {
    bg: "bg-[#0f1624]",
    bgAlt: "bg-[#111827]",
    nav: "bg-[#0f1624]/90",
    navBorder: "border-white/5",
    text: "text-white",
    textMuted: "text-white/70",
    textFaint: "text-white/40",
    cardBg: "bg-[#111827]",
    cardBorder: "border-white/5",
    workRow: "bg-[#111827]/70 border-white/5",
    contactCard: "bg-[#0f1624] border-white/5",
    dotInactive: "bg-white/25",
    dotHover: "hover:bg-white/50",
    sectionLabel: "text-orange-400",
    pillBorder: "border-white/10",
    pillText: "text-white/60",
  },
  light: {
    bg: "bg-[#fdf8f3]",
    bgAlt: "bg-[#fff8f0]",
    nav: "bg-[#fdf8f3]/95",
    navBorder: "border-orange-100",
    text: "text-[#1a1a2e]",
    textMuted: "text-[#1a1a2e]/70",
    textFaint: "text-[#1a1a2e]/40",
    cardBg: "bg-white",
    cardBorder: "border-orange-100",
    workRow: "bg-white border-orange-100",
    contactCard: "bg-[#fdf8f3] border-orange-100",
    dotInactive: "bg-[#1a1a2e]/20",
    dotHover: "hover:bg-[#1a1a2e]/40",
    sectionLabel: "text-orange-500",
    pillBorder: "border-orange-200",
    pillText: "text-[#1a1a2e]/60",
  },
};

export default function Home() {
  const [active, setActive] = useState("cover");
  const [theme, setTheme] = useState<Theme>("dark");
  const t = themes[theme];
  const isDark = theme === "dark";

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className={`${t.bg} ${t.text} font-sans transition-colors duration-500`}>

      {/* ── Sticky Nav ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-2 ${t.nav} backdrop-blur border-b ${t.navBorder} transition-colors duration-500`}>
        <button onClick={() => scrollTo("cover")} className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}logo-transparent.png`} alt="Prarambh Foundation Logo" className="h-12 w-12 object-contain" />
          <div className="text-left hidden sm:block">
            <div className={`${t.text} font-bold text-base leading-none transition-colors duration-500`}>Prarambh Foundation</div>
            <div className="text-orange-400 text-[10px] tracking-widest uppercase mt-0.5">Ek Nayi Shuruaat</div>
          </div>
        </button>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {SECTIONS.slice(1).map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`text-sm font-medium transition-colors duration-200 ${active === id ? "text-orange-400" : `${t.pillText} hover:text-orange-400`}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`relative flex items-center w-14 h-7 rounded-full transition-colors duration-500 focus:outline-none ${isDark ? "bg-[#1e2d45]" : "bg-orange-100"} border ${isDark ? "border-white/10" : "border-orange-200"}`}
            aria-label="Toggle theme"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
              className={`absolute w-5 h-5 rounded-full flex items-center justify-center shadow-sm ${isDark ? "left-1 bg-[#0f1624] text-white/60" : "left-8 bg-orange-400 text-white"}`}
            >
              {isDark ? <MoonIcon /> : <SunIcon />}
            </motion.div>
            <span className={`absolute ${isDark ? "right-1.5 text-white/30" : "left-1.5 text-orange-300"} transition-colors duration-300`}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>
        </div>
      </nav>

      {/* Dot Nav */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {SECTIONS.map(({ id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${active === id ? "bg-orange-400 scale-125" : `${t.dotInactive} ${t.dotHover}`}`}
          />
        ))}
      </div>

      {/* ─── COVER ─── */}
      <section id="cover" className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16 ${t.bg} transition-colors duration-500`}>
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className={`w-[600px] h-[600px] rounded-full blur-[120px] ${isDark ? "bg-orange-500/5" : "bg-orange-300/20"}`} />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-8"
          >
              <img
               src={`${import.meta.env.BASE_URL}logo-transparent.png`}
               alt="Prarambh Foundation Logo"
               className="w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-2xl mx-auto"
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-2">Prarambh</h1>
            <h2 className={`text-2xl md:text-3xl font-light tracking-[0.3em] uppercase ${t.textFaint} mb-6 transition-colors duration-500`}>Foundation</h2>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px w-16 bg-orange-400/50" />
              <span className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase">Ek Nayi Shuruaat</span>
              <div className="h-px w-16 bg-orange-400/50" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {SECTIONS.slice(1).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-5 py-2 text-sm font-medium border ${t.pillBorder} rounded-full ${t.pillText} hover:border-orange-400/60 hover:text-orange-400 transition-all duration-200`}
              >
                {label}
              </button>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className={`${t.textFaint} text-xs tracking-widest uppercase transition-colors duration-500`}
          >
            Reg. FIR/06491/2023-2024 &nbsp;·&nbsp; Est. 26 December 2023
          </motion.p>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
          <div className="flex gap-8">
            {SECTIONS.slice(1).map(({ id, label }, i) => (
              <button key={id} onClick={() => scrollTo(id)} className={`text-xs ${t.textFaint} hover:text-orange-400 transition-colors`}>
                <span className={t.textFaint}>{String(i + 1).padStart(2, "0")}</span>{" "}{label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className={`min-h-screen flex items-center relative overflow-hidden ${t.bgAlt} transition-colors duration-500`}>
        <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&h=900&fit=crop"
            alt="Community"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? "from-[#111827]" : "from-[#fff8f0]"} to-transparent`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <span className={`text-xs font-bold tracking-[0.25em] uppercase ${t.sectionLabel} mb-2 block`}>About the NGO</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">
              About <br /><span className="text-orange-400">Prarambh</span><br />Foundation
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} viewport={{ once: true }} className="space-y-6">
            {[
              "Prarambh Foundation is a non-profit organisation.",
              "Prarambh Foundation is registered under Society Act.",
              "Registration No: FIR/06491/2023-2024",
              "Registered on: 26 December 2023",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-400/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-orange-400 block" />
                </span>
                <p className={`${t.textMuted} text-lg leading-relaxed transition-colors duration-500`}>{item}</p>
              </div>
            ))}

            <div className={`mt-10 rounded-2xl overflow-hidden border ${t.cardBorder}`}>
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&h=400&fit=crop"
                alt="NGO Community Work"
                className="w-full h-56 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section id="mission" className={`min-h-screen flex items-center ${t.bg} relative overflow-hidden transition-colors duration-500`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? "from-orange-900/10" : "from-orange-100/40"} via-transparent to-transparent`} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-28">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
            <span className={`text-xs font-bold tracking-[0.25em] uppercase ${t.sectionLabel} mb-2 block`}>Our Purpose</span>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Mission <span className="text-orange-400">&</span> Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}
              className={`${t.cardBg} border ${t.cardBorder} rounded-3xl p-10 flex flex-col justify-between transition-colors duration-500`}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className={`${t.textMuted} text-xl leading-relaxed transition-colors duration-500`}>
                  Rooted in community realities, we co-create and scale sustainable solutions to complex development problems.
                </p>
              </div>
              <div className="mt-10">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=300&fit=crop" alt="Mission" className="w-full h-40 object-cover rounded-2xl opacity-60" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} viewport={{ once: true }}
              className="bg-orange-400 rounded-3xl p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e]">Our Vision</h3>
                </div>
                <p className="text-[#1a1a2e]/90 text-xl leading-relaxed font-medium">
                  A happy, healthy, safe and sustainable world for all.
                </p>
              </div>
              <div className="mt-10">
                <img src="https://images.unsplash.com/photo-1530099486328-e021101a494a?w=600&h=300&fit=crop" alt="Vision" className="w-full h-40 object-cover rounded-2xl opacity-70" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MANAGEMENT TEAM ─── */}
      <section id="team" className={`min-h-screen flex items-center ${t.bgAlt} relative overflow-hidden transition-colors duration-500`}>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-28">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
            <span className={`text-xs font-bold tracking-[0.25em] uppercase ${t.sectionLabel} mb-2 block`}>Leadership</span>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Our Management <br /><span className="text-orange-400">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((member, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.07 }} viewport={{ once: true }}
                className="group flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className={`w-24 h-24 rounded-full overflow-hidden border-2 ${isDark ? "border-white/10" : "border-orange-100"} group-hover:border-orange-400/50 transition-colors duration-300`}>
                    <img src={DEMO_AVATARS[idx]} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <h4 className="font-bold text-base mb-1">{member.name}</h4>
                <p className="text-orange-400 text-xs font-semibold tracking-wide uppercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR WORKS ─── */}
      <section id="works" className={`min-h-screen flex items-center ${t.bg} relative overflow-hidden transition-colors duration-500`}>
        <div className="absolute top-0 left-0 w-1/3 h-full z-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1560252829-804f1aedf1be?w=700&h=1000&fit=crop" alt="Works" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-l ${isDark ? "from-[#0f1624]" : "from-[#fdf8f3]"} to-transparent`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <span className={`text-xs font-bold tracking-[0.25em] uppercase ${t.sectionLabel} mb-2 block`}>What We Do</span>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Our <br /><span className="text-orange-400">Works</span>
            </h2>
            <p className={`${t.textFaint} text-lg leading-relaxed transition-colors duration-500`}>
              We operate across six critical domains to build a holistic foundation for lasting community development.
            </p>
          </motion.div>

          <div className="space-y-4">
            {WORKS.map((work, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.08 }} viewport={{ once: true }}
                className={`flex items-center gap-5 ${t.workRow} border rounded-2xl px-6 py-5 hover:border-orange-400/30 transition-colors duration-300 group`}>
                <span className="text-orange-400 font-bold text-sm w-6 flex-shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                <div className={`w-px h-6 ${isDark ? "bg-white/10" : "bg-orange-200"}`} />
                <p className={`${t.textMuted} font-medium text-base group-hover:text-orange-400 transition-colors duration-200`}>{work}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONNECT ─── */}
      <section id="connect" className={`min-h-screen flex items-center ${t.bgAlt} relative overflow-hidden transition-colors duration-500`}>
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop" alt="Connect" className="w-full h-full object-cover opacity-10" />
          <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-[#111827] via-[#111827]/80" : "from-[#fff8f0] via-[#fff8f0]/80"} to-transparent`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <span className={`text-xs font-bold tracking-[0.25em] uppercase ${t.sectionLabel} mb-2 block`}>Get In Touch</span>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Connect<br />with <span className="text-orange-400">us.</span>
            </h2>
            <p className={`${t.textFaint} text-lg leading-relaxed transition-colors duration-500`}>
              Be a part of the change. Partner with us, volunteer, or simply spread the word about our work.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} viewport={{ once: true }} className="space-y-6">
            {[
              {
                label: "Email",
                value: "prarambhfoundation2023@gmail.com",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                ),
                href: "mailto:prarambhfoundation2023@gmail.com",
              },
              {
                label: "Social Media",
                value: "@prarambhfoundation",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                ),
                href: "https://twitter.com/prarambhfoundation",
              },
              {
                label: "Call Us",
                value: "+91 88265 47301",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                ),
                href: "tel:+918826547301",
              },
            ].map((item, i) => (
              <a key={i} href={item.href}
                className={`flex items-center gap-5 ${t.contactCard} border rounded-2xl px-6 py-5 hover:border-orange-400/40 transition-all duration-300 group`}>
                <div className="w-11 h-11 rounded-full bg-orange-400/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-400 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className={`${t.textFaint} text-xs font-bold tracking-widest uppercase mb-0.5 transition-colors duration-500`}>{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <p className={`${t.textFaint} text-xs text-center transition-colors duration-500`}>
            Prarambh Foundation &nbsp;&bull;&nbsp; Reg. FIR/06491/2023-2024 &nbsp;&bull;&nbsp; Registered 26 December 2023
          </p>
        </div>
      </section>
    </div>
  );
}
