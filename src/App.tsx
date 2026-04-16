import { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    // Countdown timer (IST = UTC+5:30)
    function updateCountdown() {
      const wedding = new Date('2026-08-20T11:00:00+05:30');
      const now = new Date();
      const diff = wedding.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }
      
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      
      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0')
      });
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    // Scroll reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Background decor */}
      <div className="bg-decor">
        <div className="bg-petal" style={{ width: '300px', height: '300px', background: '#f9a0b8', top: '-80px', left: '-80px', transform: 'rotate(25deg)' }}></div>
        <div className="bg-petal" style={{ width: '240px', height: '240px', background: '#f9a0b8', bottom: '-60px', right: '-60px', transform: 'rotate(-20deg)' }}></div>
        <div className="bg-petal" style={{ width: '160px', height: '160px', background: '#f2b8c6', top: '40%', right: '-30px', transform: 'rotate(40deg)' }}></div>
        <div className="bg-petal" style={{ width: '130px', height: '130px', background: '#f2b8c6', top: '25%', left: '-20px', transform: 'rotate(-30deg)' }}></div>
        <div className="bg-petal" style={{ width: '200px', height: '200px', background: '#f9c0d0', top: '65%', left: '-40px', transform: 'rotate(15deg)' }}></div>
      </div>

      {/* Floating petals */}
      <div className="float-petal" style={{ left: '8%', width: '14px', height: '14px', background: '#f2b8c6', animationDuration: '9s', animationDelay: '0s' }}></div>
      <div className="float-petal" style={{ left: '22%', width: '10px', height: '10px', background: '#f9a0b8', animationDuration: '12s', animationDelay: '2s' }}></div>
      <div className="float-petal" style={{ left: '55%', width: '16px', height: '16px', background: '#f2b8c6', animationDuration: '8s', animationDelay: '1s' }}></div>
      <div className="float-petal" style={{ left: '72%', width: '12px', height: '12px', background: '#f9a0b8', animationDuration: '11s', animationDelay: '3.5s' }}></div>
      <div className="float-petal" style={{ left: '88%', width: '9px', height: '9px', background: '#f2b8c6', animationDuration: '10s', animationDelay: '0.5s' }}></div>
      <div className="float-petal" style={{ left: '40%', width: '11px', height: '11px', background: '#f9c0d0', animationDuration: '13s', animationDelay: '4s' }}></div>

      <div className="page">
        {/* ===== HERO ===== */}
        <div className="hero">
          <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
          <div className="bismillah-transliteration">In the name of Allah, the Most Gracious, the Most Merciful</div>

          <div className="tag-line">— Wedding Invitation —</div>

          <div className="flex justify-center my-6">
  <img 
    src="wedding-logo.png" 
    alt="Wedding Logo" 
     className="w-24 h-24 md:w-28 md:h-28 object-contain mix-blend-multiply opacity-90" 
  />
</div>
          
          <div className="together-line">Together with their families</div>

          <div className="groom-name">Jumail Ahammed</div>
          <span className="amp">&amp;</span>
          <div className="bride-name">Hanunath Jausia</div>

          <p className="invite-prose">joyfully invite you to witness the beginning of their forever</p>
          <p className="presence-line">✦ &nbsp; Your presence means the world to us &nbsp; ✦</p>
        </div>

        {/* ===== GOLD DIVIDER ===== */}
        <div className="gold-divider"><div className="gold-diamond"></div></div>

        {/* ===== QURANIC QUOTE ===== */}
        <div className="quran-card reveal">
          <div className="quran-glow"></div>
          <div className="arabic-text">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</div>
          <div className="quran-translation">"And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."</div>
          <div className="quran-ref">— Surah Ar-Rum, 30:21 —</div>
        </div>

        {/* ===== DATE & VENUE ===== */}
        <div className="info-card reveal">
          <div className="section-label">— Save the Date —</div>

          <div className="date-row">
            <div className="date-col">
              <div className="date-big">20</div>
              <div className="date-lbl">Day</div>
            </div>
            <div className="date-sep-line"></div>
            <div className="date-col">
              <div className="date-small">August</div>
              <div className="date-lbl">Month</div>
            </div>
            <div className="date-sep-line"></div>
            <div className="date-col">
              <div className="date-small">2026</div>
              <div className="date-lbl">Year</div>
            </div>
          </div>

          <div className="time-badge">Thursday &nbsp;·&nbsp; 11:00 AM IST</div>
          
<div className="flex justify-center mt-12 mb-14 px-4">
  <div className="relative group p-[1px] rounded-full bg-gradient-to-r from-transparent via-[#b5354f]/20 to-transparent">
    <a 
      href="https://www.google.com/calendar/render?action=TEMPLATE&text=Jumail+%26+Wedding&dates=20260820T110000/20260820T160000&details=We+joyfully+invite+you+to+celebrate+our+wedding+at+Wind+Valley+Resort.&location=Wind+Valley+Resort,+Cherkala,+Kerala&sf=true&output=xml"
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-4 px-10 py-4 bg-white/80 backdrop-blur-sm border border-[#b5354f]/30 rounded-full text-[#b5354f] text-[13px] font-bold uppercase tracking-[3px] transition-all duration-500 hover:bg-[#b5354f] hover:text-white shadow-[0_10px_30px_-10px_rgba(181,53,79,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(181,53,79,0.5)] active:scale-95"
    >
      <span className="text-xl">📅</span>
      <span className="relative">
        Save the Date
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-500 group-hover:w-full"></span>
      </span>
    </a>
    
    {/* Decorative Sparkles (Design element) */}
    <div className="absolute -top-2 -right-2 text-[#b5354f]/40 text-xs animate-pulse">✦</div>
  </div>
</div>
          <div className="venue-sep"></div>

          <div className="section-label">— Venue —</div>
          <div className="venue-name">Wind Valley</div>
          <div className="venue-location">Pady Road, Cherkala</div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '2rem' }}>
  
  {/* QR Code Container */}
  <div style={{ padding: '12px', backgroundColor: 'white', border: '1px solid #f3e5f5', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '1rem' }}>
              <QRCodeCanvas 
                value="https://www.google.com/maps/search/?api=1&query=Wind+valley+resort+Cherkala+Kerala&query_place_id=ChIJ2RXmOwCDpDsRB02XSYO9ekY" 
                size={120}
                level="H"
                includeMargin={false}
                fgColor="#b5354f"
              />
            </div>

           {/* Maps Link Container */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Wind+valley+resort+Cherkala+Kerala&query_place_id=ChIJ2RXmOwCDpDsRB02XSYO9ekY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 text-[10px] sans uppercase tracking-[0.2em] text-rose-mid hover:text-rose transition-colors flex items-center gap-2"
            >
              <span>✦ View on Google Maps ✦</span>
            </a>
          </div>
        </div>

        {/* ===== COUNTDOWN ===== */}
        <div className="countdown-wrap reveal">
          <div className="countdown-label">— Counting down to forever —</div>
          <div className="countdown">
            <div className="cd-unit"><span className="cd-num">{timeLeft.days}</span><span className="cd-lbl">Days</span></div>
            <div className="cd-unit"><span className="cd-num">{timeLeft.hours}</span><span className="cd-lbl">Hours</span></div>
            <div className="cd-unit"><span className="cd-num">{timeLeft.minutes}</span><span className="cd-lbl">Mins</span></div>
            <div className="cd-unit"><span className="cd-num">{timeLeft.seconds}</span><span className="cd-lbl">Secs</span></div>
          </div>
        </div>

        {/* ===== GOLD DIVIDER ===== */}
        <div className="gold-divider reveal"><div className="gold-diamond"></div></div>
<div className="flex flex-col items-center justify-center my-8 reveal">
  <span className="text-[#b5354f] text-3xl font-serif mb-2">إن شاء الله</span>
  <span className="text-[#b5354f]/70 text-[11px] uppercase tracking-[0.3em] font-light">Insha Allah</span>
</div>
        {/* ===== PRESENCE CARD ===== */}
        <div className="presence-card reveal">
          <p className="presence-main">
            We joyfully request the honour of your presence as we celebrate the union of our hearts.<br /><br />
            <strong>Your presence matters to us the most —</strong><br />
            it would make our special day truly complete.
          </p>
        </div>

        <div className="blessing-section" style={{ textAlign: 'center', margin: '20px 0', padding: '10px' }}>
  <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5d4037' }}>
    بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
  </h2>
  <p style={{ fontStyle: 'italic', fontSize: '1rem', color: '#795548' }}>
    May Allah bless both of you, shower His blessings upon you, and bring you together in goodness.
  </p>
</div>
        
        {/* ===== FOOTER ===== */}
        <div className="footer reveal">
          <div className="gold-divider" style={{ marginBottom: '1.2rem' }}><div className="gold-diamond"></div></div>
          <svg width="90" height="30" viewBox="0 0 90 30" fill="none" style={{ display: 'block', margin: '0 auto 0.8rem' }}>
            <ellipse cx="45" cy="15" rx="10" ry="12" fill="#e8849e" opacity="0.8" />
            <ellipse cx="37" cy="18" rx="8" ry="10" fill="#d4607e" opacity="0.75" transform="rotate(-20 37 18)" />
            <ellipse cx="53" cy="18" rx="8" ry="10" fill="#d4607e" opacity="0.75" transform="rotate(20 53 18)" />
            <circle cx="45" cy="14" r="5" fill="#c04568" />
            <circle cx="45" cy="14" r="3" fill="#e8849e" />
            <circle cx="45" cy="14" r="1.5" fill="#f9c0d0" />
            <ellipse cx="20" cy="20" rx="7" ry="5" fill="#f2b8c6" opacity="0.5" transform="rotate(-30 20 20)" />
            <ellipse cx="70" cy="20" rx="7" ry="5" fill="#f2b8c6" opacity="0.5" transform="rotate(30 70 20)" />
          </svg>
          <div className="footer-names">Jumail &nbsp;✦&nbsp; Jausia</div>
          <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#c9a84c', textTransform: 'uppercase', marginTop: '0.5rem', fontFamily: "'Lato',sans-serif", fontWeight: 300 }}>20 · August · 2026</div>
          
          <div className="mt-12">
            <button 
              onClick={() => {
                const text = encodeURIComponent("You are cordially invited to the wedding of Jumail & Hanunath! View the invitation here: " + window.location.href);
                window.open(`https://wa.me/?text=${text}`, '_blank');
              }}
              className="px-8 py-3 bg-[#25D366] text-white rounded-full text-[10px] sans uppercase tracking-[0.2em] hover:bg-[#128C7E] transition-all shadow-md flex items-center gap-2 mx-auto"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Share on WhatsApp</span>
            </button>
            <p className="mt-4 text-[8px] uppercase tracking-widest opacity-30">Click to share this invitation with your loved ones</p>
          </div>
        </div>
      </div>
    </>
  );
}
