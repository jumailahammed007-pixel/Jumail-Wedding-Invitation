import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  // Target: August 20, 2026, 11:00 AM IST
  // IST is UTC+5:30. 11:00 AM IST = 05:30 AM UTC.
  const targetDate = new Date('2026-08-20T05:30:00Z').getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center px-4 md:px-8">
      <motion.span 
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-light serif text-accent"
      >
        {value.toString().padStart(2, '0')}
      </motion.span>
      <span className="text-[10px] md:text-xs sans uppercase tracking-[0.2em] mt-2 opacity-60">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center items-center py-12 border-y border-soft-border">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="h-12 w-[1px] bg-soft-border hidden md:block" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="h-12 w-[1px] bg-soft-border hidden md:block" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="h-12 w-[1px] bg-soft-border hidden md:block" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
