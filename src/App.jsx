import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [show404, setShow404] = useState(false);
  const containerRef = useRef(null);

  // EmailJS handler
  const handleYes = async () => {
    try {
      await emailjs.send(
        "service_wxo830h",
        "template_khm0sfd",
        {
          to_name: "Yuvraj",
          message: "She clicked YES 💖🥹",
        },
        "JQNV6Ferj49SgT3iz",
      );

      alert(
        "Yayyy!! 💖 You just made me the happiest person ever 🥹✨\n\n(Email sent successfully 💌)",
      );
    } catch (err) {
      console.error(err);
      alert("Yes clicked 💖 but email failed 😅 Check console");
    }
  };
  {
    const [noPos, setNoPos] = useState({ x: 0, y: 0 });
    const [show404, setShow404] = useState(false);
    const containerRef = useRef(null);

    const moveNo = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const padding = 80;

      const x =
        Math.random() * (rect.width - padding * 2) - rect.width / 2 + padding;
      const y =
        Math.random() * (rect.height - padding * 2) - rect.height / 2 + padding;

      setNoPos({ x, y });
    };

    // Move continuously every 500ms (works on mobile)
    useEffect(() => {
      moveNo();
      const interval = setInterval(moveNo, 500);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 flex items-center justify-center overflow-hidden">
        <div
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto p-6 sm:p-10"
        >
          {/* Floating hearts */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(14)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: -300, opacity: [0, 1, 0] }}
                transition={{
                  duration: 6 + Math.random() * 6,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
                style={{ left: `${Math.random() * 100}%` }}
              >
                ❤️
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 text-center"
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold text-rose-600 mb-4">
              Hey Love 💕
            </h1>
            <p className="text-lg sm:text-2xl text-gray-700 mb-8">
              Will you be my Valentine?
            </p>

            {/* Cute images */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400"
                alt="cute"
                className="w-28 h-28 object-cover rounded-2xl shadow"
              />
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400"
                alt="romantic"
                className="w-28 h-28 object-cover rounded-2xl shadow"
              />
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400"
                alt="love"
                className="w-28 h-28 object-cover rounded-2xl shadow"
              />
            </div>

            {/* Buttons */}
            <div className="relative h-48 flex items-center justify-center">
              <button
                onClick={handleYes} //("Yayyy!! 💖 You just made me the happiest person ever 🥹✨")}
                className="z-10 px-8 py-3 rounded-full bg-rose-500 text-black text-lg font-semibold shadow-lg hover:scale-105 active:scale-95 transition"
              >
                Yes 💘
              </button>

              <motion.button
                onClick={() => setShow404(true)}
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 600, damping: 18 }}
                className="absolute px-6 py-3 rounded-full bg-gray-400 text-black text-lg font-semibold shadow-lg"
              >
                No 🙈
              </motion.button>
            </div>

            <AnimatePresence>
              {show404 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-6 text-red-600 font-semibold"
                >
                  404 Error — Wrong input 😜 Try again!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    );
  }
}

/*
HOW TO RUN:

1. npm create vite@latest valentine-app -- --template react
2. cd valentine-app
3. npm install
4. npm install framer-motion
5. Setup Tailwind → https://tailwindcss.com/docs/guides/vite
6. Replace src/App.jsx with this file
7. npm run dev

Deploy → Vercel / Netlify ❤️
*/
