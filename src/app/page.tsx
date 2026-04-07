"use client"
// pages/index.js
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import animationData from '@/app/animations/contact.json';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaAws, 
  FaGithub, 
  FaFigma 
} from 'react-icons/fa';
import { RiNextjsFill, RiServerLine } from 'react-icons/ri';
import { 
  SiTailwindcss, 
  SiMui, 
  SiBootstrap, 
  SiTypescript, 
  SiReactquery, 
  SiApollographql, 
  SiFirebase, 
  SiLeaflet,
  SiMapbox,
  SiRedux,
  SiShadcnui,
  SiStripe
} from 'react-icons/si';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

type MotionGalleryFrame = { readonly src: string; readonly caption: string };

const TEXT_REVEAL_PROPS = {
  initial: { opacity: 0, y: 18, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.88, ease: [0.22, 1, 0.36, 1] as const },
} as const;

const MOTION_GALLERY_ACCENTS = {
  orange: {
    eyebrow: 'text-orange-400/90',
    thumbActive: 'border-orange-400 ring-2 ring-orange-400/40',
    stripActive: 'ring-2 ring-orange-400',
    cta: 'border-orange-500/50 bg-orange-500/10 text-orange-300 hover:bg-orange-500/20',
  },
  cyan: {
    eyebrow: 'text-cyan-400/90',
    thumbActive: 'border-cyan-400 ring-2 ring-cyan-400/40',
    stripActive: 'ring-2 ring-cyan-400',
    cta: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20',
  },
  lime: {
    eyebrow: 'text-lime-400/90',
    thumbActive: 'border-lime-400 ring-2 ring-lime-400/40',
    stripActive: 'ring-2 ring-lime-400',
    cta: 'border-lime-500/50 bg-lime-500/10 text-lime-200 hover:bg-lime-500/20',
  },
  blue: {
    eyebrow: 'text-blue-400/90',
    thumbActive: 'border-blue-400 ring-2 ring-blue-400/40',
    stripActive: 'ring-2 ring-blue-400',
    cta: 'border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20',
  },
  violet: {
    eyebrow: 'text-violet-400/90',
    thumbActive: 'border-violet-400 ring-2 ring-violet-400/40',
    stripActive: 'ring-2 ring-violet-400',
    cta: 'border-violet-500/50 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20',
  },
  teal: {
    eyebrow: 'text-teal-400/90',
    thumbActive: 'border-teal-400 ring-2 ring-teal-400/40',
    stripActive: 'ring-2 ring-teal-400',
    cta: 'border-teal-500/50 bg-teal-500/10 text-teal-300 hover:bg-teal-500/20',
  },
} as const;

const CASE_STUDY_TAB_ACTIVE: Record<keyof typeof MOTION_GALLERY_ACCENTS, string> = {
  orange: 'bg-orange-500/20 text-orange-100 ring-2 ring-orange-400/60',
  cyan: 'bg-cyan-500/20 text-cyan-100 ring-2 ring-cyan-400/60',
  lime: 'bg-lime-500/20 text-lime-100 ring-2 ring-lime-400/60',
  blue: 'bg-blue-500/20 text-blue-100 ring-2 ring-blue-400/60',
  violet: 'bg-violet-500/20 text-violet-100 ring-2 ring-violet-400/60',
  teal: 'bg-teal-500/20 text-teal-100 ring-2 ring-teal-400/60',
};

const NINETYNINEK_MOTION_FRAMES = [
  { src: '/99k-africa.png', caption: 'Marketplace' },
  { src: '/99k-africa-2.png', caption: 'Product detail' },
  { src: '/99k-africa-3.png', caption: 'Shop & search' },
  { src: '/99k-africa-4.png', caption: 'Vendor products' },
  { src: '/99k-africa-5.png', caption: 'Create product' },
] as const;

const CWTIX_MOTION_FRAMES = [
  { src: '/cwtix.png', caption: 'Explore events' },
  { src: '/cwtix-3.png', caption: 'About CWTix' },
  { src: '/cwtix-4.png', caption: 'Contact' },
  { src: '/cwtix-5.png', caption: 'Organizer dashboard' },
  { src: '/cwtix-6.png', caption: 'Dashboard overview' },
  { src: '/cwtix-7.png', caption: 'Events management' },
  { src: '/cwtix-8.png', caption: 'Finance' },
] as const;

const GLYMPSE_MOTION_FRAMES = [
  { src: '/glypmse-1.png', caption: 'Sign in' },
  { src: '/glypmse-2.png', caption: 'Create account' },
  { src: '/glympse.png', caption: 'Employer dashboard' },
  { src: '/glympse-4.png', caption: 'My all jobs' },
 

  { src: '/glypmse-3.png', caption: 'Product views' },
  { src: '/glypmse-5.png', caption: 'Jobs workspace' },
  { src: '/glypmse-6.png', caption: 'Messages' },
  { src: '/glypmse-7.png', caption: 'Analytics' },
  { src: '/glypmse-8.png', caption: 'Settings & subscription' },
] as const;

const SIMPLY_ORTHO_MOTION_FRAMES = [
  { src: '/simplyortho.png', caption: 'Home & hero' },
  { src: '/simply-ortho-3.png', caption: 'Learning formats' },
  { src: '/simplyortho-2.png', caption: 'Login' },
  { src: '/simplorortho-1.png', caption: 'Create account' },
] as const;

const VET_YOUR_PEP_MOTION_FRAMES = [
  { src: '/vet-1.png', caption: 'Login' },
  { src: '/vet.png', caption: 'Register' },
  { src: '/vet-3.png', caption: 'Create Post' },
  { src: '/vet-2.png', caption: 'Feed & channels' },
  { src: '/vet-4.png', caption: 'Community' },
  { src: '/vet-5.png', caption: 'Account settings' },
  { src: '/vet-6.png', caption: 'Messages' },
  
] as const;

const SKYVIEWS_MOTION_FRAMES = [
  { src: '/skyviews.png', caption: 'Hero & island finder' },
  { src: '/sky-1.png', caption: 'Maps & guides' },
  { src: '/sky-5.png', caption: 'Island search & map' },
  { src: '/sky-4.png', caption: 'Events & festivals' },
  { src: '/sky-2.png', caption: 'About' },
  { src: '/sky-3.png', caption: 'Newsletter & chat' },
] as const;

type CaseStudyConfig = {
  key: string;
  label: string;
  description: string;
  frames: readonly MotionGalleryFrame[];
  ctaHref: string;
  ctaLabel: string;
  accent: keyof typeof MOTION_GALLERY_ACCENTS;
};

const CASE_STUDIES: CaseStudyConfig[] = [
  {
    key: '99k',
    label: '99k Africa',
    description:
      'Multivendor marketplace: storefront, product flows, and vendor tools. Use the arrows or thumbnails to move through screens.',
    frames: NINETYNINEK_MOTION_FRAMES,
    ctaHref: 'https://99kafrica.com/',
    ctaLabel: 'Visit 99k Africa',
    accent: 'orange',
  },
  {
    key: 'cwtix',
    label: 'CWTix',
    description:
      'Live event ticketing for fans and organizers — marketing site and organizer dashboard views.',
    frames: CWTIX_MOTION_FRAMES,
    ctaHref: 'https://www.getcwtix.com/',
    ctaLabel: 'Visit CWTix',
    accent: 'cyan',
  },
  {
    key: 'glympse',
    label: 'Glympse',
    description:
      'Job marketplace for employers and candidates — auth, recruiter dashboard, jobs, chat, analytics, and settings.',
    frames: GLYMPSE_MOTION_FRAMES,
    ctaHref: 'https://glympse-web-one.vercel.app/dashboard',
    ctaLabel: 'Visit Glympse',
    accent: 'lime',
  },
  {
    key: 'simply-ortho',
    label: 'Simply Ortho Academy',
    description:
      'Dental education platform — hero and learning paths, plus auth flows with branded illustration.',
    frames: SIMPLY_ORTHO_MOTION_FRAMES,
    ctaHref: 'https://simplyortho-academy.com/',
    ctaLabel: 'Visit Simply Ortho Academy',
    accent: 'blue',
  },
  {
    key: 'vet-your-pep',
    label: 'VetYourPep',
    description:
      'Community platform — split auth with disclaimers, feed and channels, post creation, member discovery, chat, and profile settings.',
    frames: VET_YOUR_PEP_MOTION_FRAMES,
    ctaHref: 'https://vetyourpep.com/',
    ctaLabel: 'Visit VetYourPep',
    accent: 'violet',
  },
  {
    key: 'skyviews',
    label: 'Skyviews',
    description:
      'Caribbean maps and travel — island discovery, business directory on a map, events, guides, about content, newsletter signup, and chat support.',
    frames: SKYVIEWS_MOTION_FRAMES,
    ctaHref: 'https://sky-views-dev.vercel.app/',
    ctaLabel: 'Visit Skyviews',
    accent: 'teal',
  },
];

function CaseStudiesMotionSection() {
  const [studyIndex, setStudyIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const mainViewerScrollRef = useRef<HTMLDivElement>(null);

  const study = CASE_STUDIES[studyIndex];
  const a = MOTION_GALLERY_ACCENTS[study.accent];
  const frames = study.frames;
  const n = frames.length;
  const activeSlideIndex = n > 0 ? Math.min(slideIndex, n - 1) : 0;

  useEffect(() => {
    setSlideIndex(0);
  }, [studyIndex]);

  useEffect(() => {
    mainViewerScrollRef.current?.scrollTo(0, 0);
  }, [slideIndex, studyIndex]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % n);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused, n, studyIndex]);

  const go = (delta: number) => {
    setSlideIndex((i) => (i + delta + n) % n);
  };

  const goStudy = (delta: number) => {
    setStudyIndex((i) => (i + delta + CASE_STUDIES.length) % CASE_STUDIES.length);
    setSlideIndex(0);
  };

  const markLoaded = (src: string) => {
    setLoadedImages((prev) => (prev[src] ? prev : { ...prev, [src]: true }));
  };

  return (
    <section id="case-studies" className="border-t border-white/5 bg-black py-6">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center lg:text-left">
          <motion.p {...TEXT_REVEAL_PROPS} className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">Portfolio</motion.p>
          <motion.h2
            {...TEXT_REVEAL_PROPS}
            transition={{ ...TEXT_REVEAL_PROPS.transition, delay: 0.05 }}
            className="mt-2 text-3xl font-bold text-white sm:text-4xl"
          >
            Case studies
          </motion.h2>
          <motion.p
            {...TEXT_REVEAL_PROPS}
            transition={{ ...TEXT_REVEAL_PROPS.transition, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-gray-400 lg:mx-0"
          >
          Explore a complete visual showcase of my projects—select any project to experience its design and user interface. If you’d like to see more in detail, click the link below.
          </motion.p>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start" role="tablist" aria-label="Case study">
            {CASE_STUDIES.map((s, i) => (
              <button
                key={s.key}
                type="button"
                role="tab"
                aria-selected={i === studyIndex}
                onClick={() => {
                  setStudyIndex(i);
                  setSlideIndex(0);
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  i === studyIndex
                    ? CASE_STUDY_TAB_ACTIVE[s.accent]
                    : 'bg-white text-gray-600 hover:bg-white/10 hover:text-white'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          {/* <div className="flex shrink-0 items-center justify-center gap-2 sm:justify-end">
            <button
              type="button"
              onClick={() => goStudy(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Previous project"
            >
              <IoChevronBack className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => goStudy(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Next project"
            >
              <IoChevronForward className="h-6 w-6" />
            </button>
          </div> */}
        </div>

        <p className="mb-6  text-sm text-gray-300 sm:text-base">{study.description}</p>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {frames.map((frame, i) => (
              <button
                key={frame.src}
                type="button"
                onClick={() => setSlideIndex(i)}
                className={`relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 bg-zinc-950 transition-all lg:h-[4.5rem] lg:w-full ${
                  i === activeSlideIndex ? a.thumbActive : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={frame.src}
                  alt=""
                  className={`max-h-full max-w-full object-contain transition-opacity duration-300 ${
                    loadedImages[frame.src] ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => markLoaded(frame.src)}
                />
                {!loadedImages[frame.src] && (
                  <span className="absolute inset-0 animate-pulse bg-white/10" aria-hidden />
                )}
              </button>
            ))}
          </div>

          <div
            className="min-w-0 flex-1 space-y-4"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-xl">
              <div
                ref={mainViewerScrollRef}
                className="aspect-[16/10] w-full overflow-hidden sm:aspect-auto sm:min-h-[400px] lg:min-h-[520px]"
              >
                <div className="overflow-x-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                    style={{
                      width: `${n * 100}%`,
                      transform: `translateX(-${(100 / n) * activeSlideIndex}%)`,
                    }}
                  >
                    {frames.map((frame) => (
                      <div
                        key={frame.src}
                        className="box-border flex h-full shrink-0 justify-center px-1.5 py-2.5 sm:px-4 sm:py-5"
                        style={{ width: `${100 / n}%` }}
                      >
                        <div className="relative flex h-full w-full items-center justify-center">
                          {!loadedImages[frame.src] && (
                            <span className="absolute inset-0 animate-pulse rounded-xl bg-white/10" aria-hidden />
                          )}
                          <img
                            src={frame.src}
                            alt={frame.caption}
                            className={`h-auto max-h-[52vh] w-full max-w-full object-contain object-center transition-opacity duration-500 sm:max-h-[min(82vh,1100px)] ${
                              loadedImages[frame.src] ? 'opacity-100' : 'opacity-0'
                            }`}
                            loading={frame.src === frames[activeSlideIndex].src ? 'eager' : 'lazy'}
                            onLoad={() => markLoaded(frame.src)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md transition hover:bg-white md:left-4"
                aria-label="Previous"
              >
                <IoChevronBack className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md transition hover:bg-white md:right-4"
                aria-label="Next"
              >
                <IoChevronForward className="h-5 w-5" />
              </button>
              <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm md:block">
                {activeSlideIndex + 1} / {n} · {frames[activeSlideIndex].caption}
              </div>
            </div>

            <div className="hidden h-32 w-full gap-2 md:flex lg:h-36">
              {frames.map((frame, i) => (
                <button
                  key={`strip-${frame.src}`}
                  type="button"
                  onClick={() => setSlideIndex(i)}
                  className={`group/strip relative flex min-h-0 min-w-0 flex-1 basis-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-[flex-grow] duration-500 ease-out hover:flex-[2] ${
                    i === activeSlideIndex ? a.stripActive : ''
                  }`}
                >
                  <img
                    src={frame.src}
                    alt=""
                    className={`max-h-full max-w-full object-contain transition-transform duration-500 group-hover/strip:scale-[1.02] ${
                      loadedImages[frame.src] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onLoad={() => markLoaded(frame.src)}
                  />
                  {!loadedImages[frame.src] && (
                    <span className="absolute inset-0 animate-pulse bg-white/10" aria-hidden />
                  )}
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-2 text-left text-[10px] font-semibold uppercase tracking-wide text-white opacity-0 transition-opacity group-hover/strip:opacity-100 lg:text-xs">
                    {frame.caption}
                  </span>
                </button>
              ))}
            </div>

            <p className="text-center w-full text-sm leading-tight text-gray-500 md:hidden">
              {activeSlideIndex + 1} / {n} — {frames[activeSlideIndex].caption}
            </p>

            <div className="flex justify-center">
              <a
                href={study.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold transition ${a.cta}`}
              >
                {study.ctaLabel}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURED_PROJECTS = [
  {
    label: 'Cwtix',
    title: 'Cwtix - Modern Ticketing for Live Events',
    description:
      'Cwtix is a modern event ticketing platform with two primary user roles: Attendees and Organizers. Organizers can create, manage, and promote events while selling tickets seamlessly. Attendees can explore events, purchase tickets, and manage their bookings through an intuitive interface. The platform supports a multivendor marketplace structure with secure payments, real-time updates, and REST API integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'PostgreSQL'],
    icon: '🎟️',
    link: 'https://www.getcwtix.com/',
    gradient: 'from-violet-600 via-fuchsia-600 to-indigo-900',
    image: '/projects/cwtix.svg',
  },
  {
    label: '99k Africa',
    title: '99k Africa',
    description:
      'Multivendor e-commerce platform with full marketplace modules and REST API integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'PostgreSQL'],
    icon: '🛒',
    link: 'https://99kafrica.com/',
    gradient: 'from-amber-500 via-orange-500 to-rose-700',
    image: '/projects/99k-africa.svg',
  },
  {
    label: 'Glympse',
    title: 'Glympse - Job Marketplace Dashboard',
    description:
      'Glympse is a job marketplace platform that connects employers and candidates through an intuitive dashboard. Employers can post jobs, manage applications, and track hiring performance, while candidates can browse opportunities and apply easily. The system includes analytics such as job views, applicant tracking, and hiring success rates to streamline recruitment.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    icon: '💼',
    link: 'https://glympse-web-one.vercel.app/dashboard',
    gradient: 'from-sky-500 via-blue-600 to-slate-900',
    image: '/projects/glympse.svg',
  },
  {
    label: 'Simply Ortho',
    title: 'Simply Ortho Academy',
    description:
      'Dental LMS and SaaS platform with courses, subscriptions, and real-time chat.',
    tech: ['Next.js', 'TypeScript', 'GraphQL', 'Sendbird', 'PostgreSQL', 'React Query'],
    icon: '🎓',
    link: 'https://simplyortho-academy.com/',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-900',
    image: '/projects/simply-ortho.svg',
  },
  {
    label: 'Vet Your Pep',
    title: 'Vet Your Pep',
    description:
      'Community social platform with free/paid channels and real-time engagement features.',
    tech: ['Next.js', 'TypeScript', 'GraphQL', 'Sendbird', 'PostgreSQL', 'React Query'],
    icon: '👥',
    link: 'https://www.vetyourpep.com/',
    gradient: 'from-pink-500 via-purple-600 to-violet-900',
    image: '/projects/vet-your-pep.svg',
  },
  {
    label: 'Skyviews',
    title: 'Skyviews Caribbean Maps',
    description:
      'Interactive travel platform for discovering and planning Caribbean island experiences.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Mapbox', 'PostgreSQL', 'GraphQL', 'React Query'],
    icon: '🗺️',
    link: 'https://sky-views-dev.vercel.app/',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-900',
    image: '/projects/skyviews.svg',
  },
  {
    label: 'B&B Event',
    title: 'B&B Event Smart',
    description:
      'Event management platform for salons and beauty professionals to create and manage events.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'GraphQL', 'React Query'],
    icon: '💄',
    link: 'https://www.bbeventsmart.com/',
    gradient: 'from-rose-500 via-fuchsia-600 to-purple-900',
    image: '/projects/bb-event-smart.svg',
  },
] as const;

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Force dark mode always
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const redirectToEmailClient = (recipientEmail: string) => {
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`;
    window.open(gmailURL, "_blank");
  };

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const technologies = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#f16529]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#2965f1]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#f7df1e]" /> },
    { name: 'React JS', icon: <FaReact className="text-[#61dafb]" /> },
    { name: 'Next JS', icon: <RiNextjsFill className="text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38bdf8]" /> },
    { name: 'Material UI', icon: <SiMui className="text-[#007fff]" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952b3]" /> },
    { name: 'Shadcn/Ui', icon: <SiShadcnui className="text-gray-300" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178c6]" /> },
    { name: 'AWS (S3)', icon: <FaAws className="text-[#ff9900]" /> },
    { name: 'React Query', icon: <SiReactquery className="text-[#ff4154]" /> },
    { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
    { name: 'Rest API', icon: <RiServerLine className="text-[#5a31f4]" /> },
    { name: 'Graphql', icon: <SiApollographql className="text-[#5a31f4]" /> },
    { name: 'Stripe', icon: <SiStripe className="text-[#5a31f4]" /> },
    { name: 'Mapbox', icon: <SiMapbox className="text-gray-300" /> },
    { name: 'Git', icon: <FaGithub className="text-gray-200" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-[#ffca28]" /> },
    { name: 'Figma', icon: <FaFigma className="text-[#f24e1e]" /> }
  ];


  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Rimsha Asif - Frontend Developer</title>
        <meta name="description" content="Frontend Developer with 3+ years of experience building responsive web applications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm shadow-gray-800/50">
        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between gap-6">
            <div className="text-2xl font-bold text-blue-400">Rimsha Asif<span className="text-gray-300 text-sm"> ~ Portfolio</span> </div>
            <div className="hidden md:flex flex-1 justify-end space-x-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 md:hidden">
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="p-2 rounded-lg bg-gray-800 text-gray-300"
                aria-label="Toggle navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl border border-gray-700 bg-gray-900 shadow-lg p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={`block text-lg font-medium ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-gray-200'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-14 pb-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                {...TEXT_REVEAL_PROPS}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Available for new projects
              </motion.div>
              <motion.h1
                {...TEXT_REVEAL_PROPS}
                transition={{ ...TEXT_REVEAL_PROPS.transition, delay: 0.08 }}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Frontend
                <span className="text-blue-400 block">Developer</span>
              </motion.h1>
              <motion.p
                {...TEXT_REVEAL_PROPS}
                transition={{ ...TEXT_REVEAL_PROPS.transition, delay: 0.14 }}
                className="text-xl text-gray-300 max-w-lg"
              >
                I build responsive, scalable, and user-centric web applications using modern technologies like Next.js, React, and TypeScript.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#projects" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg text-center">
                  View My Work
                </a>
              </div>
            </div>
            <div className="relative">
            <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-2xl border border-gray-800">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold">3+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-sm opacity-90">Projects Completed</div>
                  </div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm mt-4">
                  <div className="text-3xl font-bold">3+</div>
                  <div className="text-sm opacity-90">Dashboards Completed</div>
                </div>
                <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Fast Performance</div>
                      <div className="text-sm opacity-90">Optimized for speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-black">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <motion.span
                {...TEXT_REVEAL_PROPS}
                className="inline-flex items-center rounded-full bg-blue-900/30 px-4 py-1 text-sm font-medium text-blue-400"
              >
                About Me
              </motion.span>
              <motion.h2
                {...TEXT_REVEAL_PROPS}
                transition={{ ...TEXT_REVEAL_PROPS.transition, delay: 0.05 }}
                className="text-4xl font-bold leading-tight text-white"
              >
                Building polished,<br/> human-friendly  products <br/> with a frontend lens
              </motion.h2>
              <motion.p
                {...TEXT_REVEAL_PROPS}
                transition={{ ...TEXT_REVEAL_PROPS.transition, delay: 0.1 }}
                className="text-lg leading-relaxed text-gray-300"
              >
                I'm Rimsha Asif, a frontend engineer focused on translating ambitious product ideas
                into resilient UI systems. I specialize in admin portals, SaaS platforms, and immersive
                marketing experiences that balance performance with personality. My workflow blends
                rapid prototyping, accessibility best practices, and thoughtful micro-interactions.
              </motion.p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: 'Product mindset',
                    description:
                      'Take Figma explorations to production with scalable components, design tokens, and polished handoffs.'
                  },
                  {
                    title: 'Collaboration first',
                    description:
                      'Partner with designers, PMs, and backend engineers to keep roadmaps unblocked and quality high.'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-blue-300 bg-gray-800/80 p-5 shadow-sm shadow-gray-800/50"
                  >
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {[
                { label: 'Education', value: 'Bachelor in Computer Science · 2022', accent: 'from-sky-500 to-cyan-500' },
                { label: 'Principles', value: 'Performance, accessibility, empathy', accent: 'from-amber-500 to-orange-500' },
                { label: 'Interests', value: 'UI polish, real-time UX, scalable design systems', accent: 'from-blue-500 to-indigo-500' },
                { label: 'Languages', value: 'English, Urdu, Punjabi', accent: 'from-purple-500 to-pink-500' },
              ].map((card, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-[1px] bg-black border border-blue-300 shadow-[0_18px_40px_rgba(0,0,0,0.3)]"
                >
                  <div className="h-full rounded-2xl bg-gray-800 px-6 py-6">
                    <p className="text-xs uppercase tracking-wide text-gray-400">{card.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            {...TEXT_REVEAL_PROPS}
            className="mb-16 text-center text-4xl font-bold text-white"
          >
            Technologies I Work With
          </motion.h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-black p-[1px] border border-gray-800 shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
              >
                <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-blue-300 bg-gray-900 px-6 py-8 text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-gray-900/50">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900/30 text-4xl text-blue-400 group-hover:bg-blue-900/50 group-hover:text-blue-300">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-200">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            {...TEXT_REVEAL_PROPS}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Work Experience
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                company: 'Bytevia Solutions',
                position: 'Frontend Developer',
                period: 'March 2024 - Present',
                description: 'Developed responsive web interfaces from Figma designs. Implemented dynamic data integrations with REST and GraphQL APIs, and built real-time chat modules using Sendbird.'
              },
              {
                company: 'Chirp Technologies',
                position: 'Frontend Developer',
                period: 'March 2024 - November 2024',
                description: 'Collaborated on responsive web interfaces with map integrations. Implemented Firebase services including authentication, real-time database, and cloud storage.'
              },
              {
                company: 'Apps Genii Technologies',
                position: 'Junior Mern Stack Developer',
                period: 'April 2023 - November 2023',
                description: 'Developed responsive web interfaces using React.js and Material UI. Worked on admin panel features and gained backend experience with Node.js and Express.js.'
              }
            ].map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-400">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="bg-gray-800 p-6 rounded-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.position}</h3>
                      <p className="text-blue-400 font-medium">{job.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 sm:mt-0">{job.period}</span>
                  </div>
                  <p className="text-gray-300">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section — Freepik-style expanding cards (desktop) */}
      <section id="projects" className="py-16 bg-black">
        <div className="mx-auto w-full max-w-[100rem] px-4 sm:px-6">
          <motion.h2
            {...TEXT_REVEAL_PROPS}
            className="text-4xl font-bold text-center text-white mb-10"
          >
            Featured Projects
          </motion.h2>
         

          {/* Mobile / small tablets: stacked cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {FEATURED_PROJECTS.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-950 text-white shadow-lg transition-transform active:scale-[0.99]"
              >
                <div className="relative hidden aspect-[4/3] w-full shrink-0 overflow-hidden bg-black/40">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 h-full w-full object-contain p-3 sm:p-4"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="relative p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl shrink-0" aria-hidden>
                      {project.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-300/90">
                        {project.label}
                      </p>
                      <h3 className="mb-2 text-xl font-bold leading-tight">{project.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-gray-300">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 5).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-400">
                        View project
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Desktop: horizontal row, hovered panel grows (flex-grow) */}
          <div className="hidden md:flex h-[min(32rem,70vh)] min-h-[22rem] w-full gap-2 lg:gap-3">
            {FEATURED_PROJECTS.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/card relative flex min-h-0 min-w-0 flex-1 basis-0 overflow-hidden rounded-3xl border border-white/10 shadow-xl outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:flex-[3] focus-visible:flex-[3] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/card:scale-105"
                  />
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-45`}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15 opacity-95 transition-opacity duration-500 group-hover/card:opacity-65"
                  aria-hidden
                />
                <div className="relative z-10 flex h-full min-w-0 flex-1 flex-col p-4 lg:p-5">
                  <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 drop-shadow-sm">
                    <span className="block truncate group-hover/card:whitespace-normal">
                      {project.label}
                    </span>
                  </p>

                  <div className="flex min-h-0 flex-1 flex-col items-center justify-center py-2 pointer-events-none">
                    <span
                      className="text-3xl opacity-90 drop-shadow-md transition-all duration-500 ease-out group-hover/card:scale-110 md:text-4xl lg:text-5xl"
                      aria-hidden
                    >
                      {project.icon}
                    </span>
                  </div>

                  <div className="shrink-0 space-y-2 border-t border-white/10 pt-3 mt-auto">
                    <h3 className="text-sm font-bold leading-snug text-white opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover/card:opacity-100 group-hover/card:max-h-40 lg:text-base">
                      {project.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-white/80 opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover/card:opacity-100 group-hover/card:max-h-96 lg:text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 opacity-0 max-h-0 overflow-hidden transition-all duration-500 delay-75 group-hover/card:opacity-100 group-hover/card:max-h-20">
                      {project.tech.slice(0, 5).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full border border-white/25 bg-black/35 px-2 py-0.5 text-[10px] font-medium text-white/95 lg:text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 lg:text-sm">
                      View project
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesMotionSection />

      {/* Admin Portals Section */}
      <section id="admin-portals" className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            {...TEXT_REVEAL_PROPS}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Admin Portals
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Simply Ortho Academy',
                description: 'Learning management system admin panel for course management, student progress tracking, and content management.',
                features: ['Course Management', 'Student Analytics', 'Content Upload', 'Progress Tracking'],
                status: 'Completed'
              },
              {
                title: 'Vet Your Pep',
                description: 'Admin dashboard for community platform with user moderation, content management, and engagement analytics.',
                features: ['User Moderation', 'Content Management', 'Analytics', 'Channel Management'],
                status: 'Completed'
              },
              {
                title: 'Mythfit',
                description: 'A centralized admin dashboard for managing customers, products, categories, locations, rewards, and internal admins.',
                features: ['Customers', 'Product & Category', 'Location Management', 'Rewards Control'],
                status: 'Completed'
              },
              {
                title: 'Food-for-Thought',
                description: 'Admin dashboard for managing products, categories, customers, orders, reviews, and marketing features for a food-delivery platform.',
                features: ['Customers Management', 'Categories & Products Management', 'Orders', 'Reviews', 'Newsletter', 'Notifications', 'Support', 'Promotional Banner'],
                status: 'Completed'
              },
              {
                title: 'Klub Admin Panel',
                description: 'Complete admin dashboard for managing jobs, users, orders, reports, and refunds for a multivendor marketplace.',
                features: ['Jobs Management', 'Users', 'Orders', 'Reports', 'Refunds Handling'],
                status: 'Completed'
              },
              {
                title: 'Mami Plan',
                description: 'Admin dashboard for managing nutritionists, customers, orders, and product categories for a health & wellness platform focused on mothers.',
                features: ['Admins Management', 'Customer Management', 'Nutritionist Profiles Management'],
                status: 'Completed'
              }
            ].map((portal, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-black rounded-2xl border border-blue-500 opacity-40 group-hover:opacity-90 transition duration-300"></div>
                <div className="relative bg-black rounded-2xl p-6 h-full border border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{portal.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      portal.status === 'Completed' ? 'bg-green-900/30 text-green-300' :
                      portal.status === 'In Progress' ? 'bg-yellow-900/30 text-yellow-300' :
                      'bg-blue-900/30 text-blue-300'
                    }`}>
                      {portal.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">{portal.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {portal.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <motion.h2
              {...TEXT_REVEAL_PROPS}
              className="text-4xl font-bold text-white mb-4"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              {...TEXT_REVEAL_PROPS}
              transition={{ ...TEXT_REVEAL_PROPS.transition, delay: 0.08 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </motion.p>
          </div>

          <div className="bg-black rounded-2xl shadow-lg shadow-black/70 overflow-hidden border border-gray-800">
            <div className="grid md:grid-cols-3">
              {/* Contact Info Sidebar */}
              <div className="bg-black text-white p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-blue-100">rimshaasif873@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-blue-100">Lahore, Punjab</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <h4 className="font-semibold mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/rimsha-asif-093786264/" 
                      className="w-60 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="md:col-span-2 mb-10">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full max-w-md">
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <button
                    onClick={() => redirectToEmailClient("rimshaasif873@gmail.com")}
                    className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Contact via Email</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-6 text-center text-sm text-gray-400">
                  <p>I typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-3">Frontend Developer crafting digital experiences</p>
          <div className="text-gray-500 text-sm">
            &copy; 2026 Rimsha Asif. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}