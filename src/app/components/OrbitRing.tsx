"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';

type OrbitItem = { name: string; icon: React.ReactNode };

const STAGE = 480;

function OrbitRing({
    items,
    radius,
    duration,
    reverse = false,
  }: {
    items: OrbitItem[];
    radius: number;
    duration: number;
    reverse?: boolean;
  }) {
    const angle = useMotionValue(0);
    const counter = useTransform(angle, (v) => -v); // always exactly opposite
  
    useAnimationFrame((t) => {
      const deg = ((t / 1000) / duration) * 360;
      angle.set(reverse ? -deg : deg);
    });
  
    return (
      <>
        {/* dashed orbit line */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-blue-400/25"
          style={{
            width: radius * 2,
            height: radius * 2,
            transform: 'translate(-50%, -50%)',
          }}
        />
        {/* rotating ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-0 w-0"
          style={{ rotate: angle }}
        >
          {items.map((item, i) => {
            const rad = ((360 / items.length) * i * Math.PI) / 180;
            const x = +(Math.cos(rad) * radius).toFixed(2);
            const y = +(Math.sin(rad) * radius).toFixed(2);
            return (
              <div
                key={item.name}
                className="absolute"
                style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
              >
                {/* counter-rotate using the same value, so icons stay upright */}
                <motion.div
                  style={{ rotate: counter }}
                  title={item.name}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/40 bg-gray-900/90 text-2xl shadow-lg shadow-blue-500/20 backdrop-blur-sm"
                >
                  {item.icon}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </>
    );
  }

function HeroOrbit({ technologies }: { technologies: OrbitItem[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / STAGE));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const pick = (names: string[]) =>
    names
      .map((n) => technologies.find((t) => t.name === n))
      .filter(Boolean) as OrbitItem[];

  const inner = pick(['React JS', 'Next JS', 'TypeScript', 'Node JS', 'Tailwind CSS']);
  const outer = pick([
    'JavaScript', 'MongoDb', 'PostgreSQL', 'Graphql', 'Redux',
    'AWS (S3)', 'Stripe', 'Firebase', 'Figma',
  ]);

  return (
    // real layout box: full width (max 480), height follows the scale
    <div
      ref={wrapRef}
      className="relative mx-auto w-full min-w-0 max-w-[480px] overflow-hidden"
      style={{ height: STAGE * scale }}
    >
      {/* fixed 480px stage, scaled from its top-left corner */}
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: STAGE, height: STAGE, transform: `scale(${scale})` }}
      >
        {/* glow */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-3xl" />

        <OrbitRing items={inner} radius={140} duration={22} />
        <OrbitRing items={outer} radius={215} duration={34} reverse />

        {/* center photo */}
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-[3px] shadow-2xl shadow-blue-500/40">
          <img
            src="/pfp.png"
            alt="Rimsha Asif"
            className="h-full w-full rounded-full bg-gray-900 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroOrbit;