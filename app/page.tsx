// "use client";

// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, Gift } from "lucide-react";
// import confetti from "canvas-confetti";

// export default function AnniversarySite() {
//   const yourName = "Adarsh";
//   const partnerName = "Sagar";   // ← CHANGE THIS
//   const anniversaryDate = "25 March 2024 - 25 March 2026";

//   const memories = [
//     { date: "25 Mar 2024", text: "The day we made it official(uss din ka pic ni hai isliye hmlog ka first couple photo daal diye ) ❤️", img: "/images/first-photo.jpeg" },
//     { date: "Jan 2025", text: "Our first trip to Puri 🏖️", img: "/images/first-puri.jpeg" },
//     { date: "Sept 2025", text: "Our radhashtami trip to barsana and your harinam Shyam Mohan Das", img: "/images/mathura-bus.jpeg" },
//     { date: "March 2026", text: "Our 2nd anniversary on gaur purmina in nabadwip", img: "/images/ganga-snan.jpeg" },
//   ];

//   const photos = [
//     "/images/ferry.jpeg",
//     "/images/barsana.jpeg",
//     "/images/dakshineshwar.jpeg",
//     "/images/mayapur.jpeg",
//     "/images/kolkata-metro.jpeg",
//   ];

//   const quotes = [
//     "Every love story is beautiful, but ours is my favorite.",
//     "2 years down, forever to go ❤️",
//     "You + Me = My favorite love story.",
//   ];

//   const triggerConfetti = () => {
//     confetti({
//       particleCount: 180,
//       spread: 90,
//       origin: { y: 0.6 },
//       colors: ["#ec4899", "#e11d48", "#f43f5e"],
//     });
//   };

//   // Floating hearts (lighter on mobile)
//   useEffect(() => {
//     const createHeart = () => {
//       const heart = document.createElement("div");
//       heart.className = "heart";
//       heart.innerHTML = "❤️";
//       heart.style.left = `${Math.random() * 100}vw`;
//       heart.style.animationDuration = `${Math.random() * 8 + 10}s`;
//       document.body.appendChild(heart);
//       setTimeout(() => heart.remove(), 20000);
//     };

//     const interval = setInterval(createHeart, 500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-dvh overflow-x-hidden">
//       {/* HERO SECTION - Fixed for mobile */}
//       <div className="min-h-dvh flex items-center justify-center relative px-5 py-12 bg-linear-to-br from-pink-100 via-red-50 to-pink-200">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="text-center max-w-lg md:max-w-2xl z-20"
//         >
//           <div className="flex justify-center gap-4 text-6xl md:text-7xl mb-6">
//             <Heart className="text-red-500" />
//             <Heart className="text-pink-500" />
//             <Heart className="text-red-500" />
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-pink-950 leading-tight">
//             {yourName} &amp; {partnerName}
//           </h1>
//           <p className="text-2xl md:text-3xl mt-4 text-pink-700">2 Years of Pure Magic</p>
//           <p className="mt-2 text-lg md:text-xl text-pink-600">{anniversaryDate}</p>

//           <motion.img
//             src="/images/hero.jpg"
//             alt="Our love"
//             className="mx-auto mt-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-8 border-white"
//             whileHover={{ scale: 1.05 }}
//           />

//           <button
//             onClick={triggerConfetti}
//             className="mt-12 px-8 py-4 md:px-10 md:py-5 bg-red-500 hover:bg-red-600 text-white text-lg md:text-xl font-semibold rounded-2xl flex items-center gap-3 mx-auto shadow-lg transition-all"
//           >
//             <Gift className="w-5 h-5" /> Surprise for you, baby ❤️
//           </button>
//         </motion.div>
//       </div>

//       {/* OUR JOURNEY / TIMELINE */}
//       <div className="py-16 md:py-20 bg-white/80">
//         <div className="max-w-4xl mx-auto px-5">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-950">Our Beautiful Journey</h2>
//           <div className="space-y-12 md:space-y-16">
//             {memories.map((mem, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center"
//               >
//                 <div className="w-full md:w-32 text-left md:text-right font-mono text-pink-600 shrink-0">{mem.date}</div>
//                 <div className="w-5 h-5 bg-red-500 rounded-full relative shrink-0 mx-auto md:mx-0" />
//                 <div className="flex-1 bg-white rounded-3xl p-5 md:p-6 shadow w-full">
//                   <img src={mem.img} alt="" className="w-full h-48 md:h-56 object-cover rounded-2xl mb-4" />
//                   <p className="text-base md:text-lg leading-relaxed">{mem.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* PHOTO GALLERY */}
//       <div className="py-16 md:py-20 bg-linear-to-br from-pink-50 to-rose-100">
//         <div className="max-w-6xl mx-auto px-5">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-pink-950">Our Cutest Moments</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
//             {photos.map((photo, i) => (
//               <motion.img
//                 key={i}
//                 src={photo}
//                 alt="memory"
//                 whileHover={{ scale: 1.06 }}
//                 className="w-full aspect-square object-cover rounded-3xl shadow-xl cursor-pointer"
//                 onClick={() => window.open(photo, "_blank")}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Quotes & Final Message */}
//       <div className="py-16 md:py-24 bg-white text-center px-5">
//         <div className="max-w-xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">Words from my heart</h2>
//           <p className="text-2xl md:text-3xl italic text-pink-700 leading-relaxed">
//             "{quotes[0]}"
//           </p>
//         </div>
//       </div>

//       <div className="py-12 md:py-20 bg-red-500 text-white text-center px-5">
//         <p className="text-3xl md:text-4xl font-medium">Happy 2nd Anniversary, my love my "BUBUUU" ❤️</p>
//         <p className="mt-4 text-lg md:text-2xl">Thank you for making these 2 years the best of my life.</p>
//         <p className="mt-8 text-xs md:text-sm opacity-80">Made with endless love by Adarsh</p>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift, Frown } from "lucide-react";
import * as confetti from "canvas-confetti";

export default function AnniversarySite() {
  const yourName = "Adarsh";
  const partnerName = "Sagar";
  const anniversaryDate = "25 March 2024 - 25 March 2026";

  const memories = [
    { 
      date: "25 Mar 2024", 
      text: "The day we made it official (uss din ka pic nahi hai isliye first couple photo daal diye) ❤️", 
      img: "/images/first-photo.jpeg" 
    },
    { 
      date: "Jan 2025", 
      text: "Our first trip to Puri 🏖️", 
      img: "/images/first-puri.jpeg" 
    },
    { 
      date: "Sept 2025", 
      text: "Our radhashtami trip to barsana and your harinam Shyam Mohan Das", 
      img: "/images/mathura-bus.jpeg" 
    },
    { 
      date: "March 2026", 
      text: "Our 2nd anniversary on gaur purnima in nabadwip", 
      img: "/images/ganga-snan.jpeg" 
    },
  ];

  const photos = [
    "/images/ferry.jpeg",
    "/images/barsana.jpeg",
    "/images/dakshineshwar.jpeg",
    "/images/mayapur.jpeg",
    "/images/kolkata-metro.jpeg",
  ];

  const [noCount, setNoCount] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [sadMessage, setSadMessage] = useState("");
  const [messagePos, setMessagePos] = useState({ x: 0, y: 0 });
  const [showLovePopup, setShowLovePopup] = useState(false);

  const sadMessages = [
    "Arre bubu... 😢",
    "Dil toot gaya mera... 💔",
    "Seriously no? 🥺",
    "Itna bura hoon kya main? 😭",
    "Ek baar haan bol do na... ❤️",
    "Phir se soch lo please... 🥹",
    "Ab toh bohot ho gaya... 😔"
  ];

  const triggerHappyConfetti = () => {
    confetti({
      particleCount: 250,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ec4899", "#e11d48", "#f43f5e", "#ff9ec8"],
    });
  };

  const handleSurpriseClick = () => {
    triggerHappyConfetti();
    setShowLovePopup(true);
    
    // Auto hide popup after 3 seconds
    setTimeout(() => {
      setShowLovePopup(false);
    }, 3000);
  };

  const handleNoClick = () => {
    if (noCount >= 6) {
      setShowFinal(true);
      return;
    }

    const newCount = noCount + 1;
    setNoCount(newCount);
    setYesScale(Math.min(1 + newCount * 0.45, 5.5));

    const message = sadMessages[newCount - 1];
    setSadMessage(message);

    const randomX = (Math.random() - 0.5) * 200;
    const randomY = -90 - Math.random() * 70;
    setMessagePos({ x: randomX, y: randomY });

    setTimeout(() => setSadMessage(""), 3000);
  };

  const handleYesClick = () => {
    triggerHappyConfetti();
    setTimeout(() => {
      alert(`❤️ Haan bol diya! Ab tu mera hai hamesha ke liye my BUBUU ❤️`);
    }, 300);
  };

  // Floating hearts
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "❤️";
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${Math.random() * 8 + 10}s`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 20000);
    };

    const interval = setInterval(createHeart, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-dvh overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="min-h-dvh flex items-center justify-center relative px-5 py-12 bg-gradient-to-br from-pink-100 via-red-50 to-pink-200">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-lg md:max-w-2xl z-20"
        >
          <div className="flex justify-center gap-4 text-6xl md:text-7xl mb-6">
            <Heart className="text-red-500" />
            <Heart className="text-pink-500" />
            <Heart className="text-red-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-pink-950 leading-tight">
            {yourName} &amp; {partnerName}
          </h1>
          <p className="text-2xl md:text-3xl mt-4 text-pink-700">2 Years of Pure Magic</p>
          <p className="mt-2 text-lg md:text-xl text-pink-600">{anniversaryDate}</p>

          <motion.img
            src="/images/hero.jpg"
            alt="Our love"
            className="mx-auto mt-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-8 border-white"
            whileHover={{ scale: 1.05 }}
          />

          <button
            onClick={handleSurpriseClick}
            className="mt-12 px-8 py-4 md:px-10 md:py-5 bg-red-500 hover:bg-red-600 text-white text-lg md:text-xl font-semibold rounded-2xl flex items-center gap-3 mx-auto shadow-lg transition-all"
          >
            <Gift className="w-5 h-5" /> Surprise for you, baby ❤️
          </button>
        </motion.div>
      </div>

      {/* OUR JOURNEY */}
      <div className="py-16 md:py-20 bg-white/80">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-950">Our Beautiful Journey</h2>
          <div className="space-y-12 md:space-y-16">
            {memories.map((mem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center"
              >
                <div className="w-full md:w-32 text-left md:text-right font-mono text-pink-600 shrink-0">{mem.date}</div>
                <div className="w-5 h-5 bg-red-500 rounded-full relative shrink-0 mx-auto md:mx-0" />
                <div className="flex-1 bg-white rounded-3xl p-5 md:p-6 shadow w-full">
                  <img src={mem.img} alt="" className="w-full h-48 md:h-56 object-cover rounded-2xl mb-4" />
                  <p className="text-base md:text-lg leading-relaxed">{mem.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PHOTO GALLERY */}
      <div className="py-16 md:py-20 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-pink-950">Our Cutest Moments</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {photos.map((photo, i) => (
              <motion.img
                key={i}
                src={photo}
                alt="memory"
                whileHover={{ scale: 1.06 }}
                className="w-full aspect-square object-cover rounded-3xl shadow-xl cursor-pointer"
                onClick={() => window.open(photo, "_blank")}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PROPOSAL SECTION */}
      <div className="py-24 bg-gradient-to-br from-red-50 to-pink-100 relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-5 text-center">
          

          <div className="relative h-[420px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!showFinal ? (
                <div className="flex flex-col items-center gap-12">
                  <p className="text-2xl text-pink-700 font-medium">Bubuu... ek chhota sa sawal hai ❤️</p>

<motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-pink-950 mb-12"
          >
            Will You Be Mine Forever, My Love? ❤️
          </motion.h2>
                  <AnimatePresence>
                    {sadMessage && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6, y: 40 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1.1, 
                          x: messagePos.x, 
                          y: messagePos.y 
                        }}
                        exit={{ opacity: 0, scale: 0.7, y: -30 }}
                        transition={{ duration: 0.4 }}
                        className="absolute bg-white/95 backdrop-blur-sm px-8 py-5 rounded-2xl shadow-2xl border-2 border-rose-400 text-3xl font-bold text-rose-600 flex items-center gap-3 z-50"
                        style={{ top: "28%" }}
                      >
                        <Frown className="w-10 h-10 text-rose-500" /> 
                        {sadMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex gap-10 items-center">
                    <motion.button
                      onClick={handleYesClick}
                      style={{ transform: `scale(${yesScale})` }}
                      whileHover={{ scale: yesScale + 0.2 }}
                      whileTap={{ scale: Math.max(yesScale - 0.2, 1) }}
                      className="px-16 py-8 bg-red-500 hover:bg-red-600 text-white text-3xl font-bold rounded-3xl shadow-2xl transition-all"
                    >
                      YES ❤️
                    </motion.button>

                    <motion.button
                      onClick={handleNoClick}
                      whileHover={{ scale: 1.25 }}
                      className="px-12 py-7 bg-gray-300 hover:bg-gray-400 text-gray-800 text-2xl font-semibold rounded-3xl shadow-xl transition-all"
                    >
                      No
                    </motion.button>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center px-4"
                >
                  <div className="text-[110px] mb-6">❤️</div>
                  <h3 className="text-5xl font-bold text-pink-950 leading-tight mb-4">
                    Bach ke nahi jaa sakte bubu!<br />
                    Ab yahi rehna hai hamesha ❤️
                  </h3>
                  <p className="text-3xl text-red-600 mt-6">No ka option ab permanently band ho gaya 😂</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* QUOTES & FOOTER */}
      <div className="py-16 md:py-24 bg-white text-center px-5">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Words from my heart</h2>
          <p className="text-2xl md:text-3xl italic text-pink-700 leading-relaxed">
            "Every love story is beautiful, but ours is my favorite."
          </p>
        </div>
      </div>

      <div className="py-12 md:py-20 bg-red-500 text-white text-center px-5">
        <p className="text-3xl md:text-4xl font-medium">Happy 2nd Anniversary, my love my "BUBUUU" ❤️</p>
        <p className="mt-4 text-lg md:text-2xl">Thank you for making these 2 years the best of my life.</p>
        <p className="mt-8 text-xs md:text-sm opacity-80">Made with endless love by Adarsh</p>
      </div>

      {/* LOVE POPUP */}
      <AnimatePresence>
        {showLovePopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 30 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none"
          >
            <div className="bg-white/95 backdrop-blur-lg px-16 py-12 rounded-3xl shadow-2xl border-4 border-red-400 text-center">
              <div className="text-7xl mb-6">❤️</div>
              <h2 className="text-5xl font-bold text-pink-600 tracking-tight">
                I LOVE YOU<br />BUBUUUU ❤️
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
