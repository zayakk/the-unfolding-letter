import { useState } from "react";

/* ================= DATA ================= */

const memories = [
  { image: "/images/1.jpeg", text: "Чамтай танилцсан тэр өдөр миний амьдрал аажмаар өөрчлөгдсөн." },
  { image: "/images/2.jpeg", text: "Чиний инээмсэглэл намайг хамгийн их тайвшруулдаг." },
  { image: "/images/3.jpeg", text: "Чамтай хамт байхад цаг хугацаа хурдан өнгөрдөг." },
  { image: "/images/4.jpeg", text: "Алдаа гаргасан ч чи намайг ойлгож хүлээж авдаг." },
  { image: "/images/5.jpeg", text: "Ирээдүйгээ чамтай хамт төсөөлөх хамгийн сайхан." },
  { image: "/images/6.jpeg", text: "Чиний дэргэд байхад би өөрөөрөө байж чаддаг." },
  { image: "/images/7.jpeg", text: "Чи миний өдөр бүрийн аз жаргал." },
  { image: "/images/8.jpeg", text: "Чамгүй ирээдүйг төсөөлөхөд хэцүү." },
];

/* ================= UI PARTS ================= */

function Progress({ step }: { step: string }) {
  const steps = ["intro", "gallery", "final"];
  const index = steps.indexOf(step);

  return (
    <div className="flex justify-center gap-2 mb-4">
      {steps.map((_, i) => (
        <div
          key={i}
          className={`h-2 w-8 rounded-full transition-all duration-300 ${
            i <= index ? "bg-rose-400" : "bg-rose-200"
          }`}
        />
      ))}
    </div>
  );
}

function MemoryModal({
  memory,
  onClose,
}: {
  memory: { image: string; text: string };
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center animate-fade-in">
      <div className="bg-white rounded-3xl max-w-sm w-full p-4 relative mx-4">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-rose-500 text-xl"
        >
          ✕
        </button>

        <img
          src={memory.image}
          className="w-full h-64 object-cover rounded-2xl"
        />

        <p className="mt-4 text-center text-rose-600 leading-relaxed">
          {memory.text}
        </p>
      </div>
    </div>
  );
}

/* ================= MAIN ================= */

export default function LoveForHer() {
  const [step, setStep] = useState<"intro" | "gallery" | "final">("intro");
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 p-4">
      <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl max-w-md w-full p-6 relative overflow-hidden">

        <Progress step={step} />

        {/* ================= INTRO ================= */}
        {step === "intro" && (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="text-5xl">💗</div>
            <h1 className="text-2xl font-bold text-rose-600">
              Би чамд хайртай.
            </h1>
            <p className="text-rose-500 leading-relaxed">
              Үгнээс илүүгээр хайраа
              <br />
              харуулахыг хүссэн юм.
            </p>
            <button
              onClick={() => setStep("gallery")}
              className="px-6 py-3 rounded-full bg-rose-400 text-white font-semibold hover:scale-105 transition"
            >
              Үргэлжлүүлье
            </button>
          </div>
        )}

        {/* ================= GALLERY ================= */}
        {step === "gallery" && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-center text-xl font-semibold text-rose-600">
              📸 Дурсамжууд
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {memories.map((m, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative cursor-pointer group overflow-hidden rounded-2xl shadow"
                >
                  <img
                    src={m.image}
                    alt=""
                    className="w-full h-40 object-cover transition duration-300 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <button
                onClick={() => setStep("final")}
                className="text-rose-500 underline"
              >
                Дараагийн хуудас →
              </button>
            </div>
          </div>
        )}

        {/* ================= FINAL ================= */}
        {step === "final" && (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="text-6xl">❤️</div>
            <h2 className="text-2xl font-bold text-rose-600">
              Зүгээр л…
            </h2>

            <p className="text-lg text-rose-500 leading-relaxed animate-fade-in delay-200">
              Чамдаа хайртай.
            </p>
            <p className="text-lg text-rose-500 leading-relaxed animate-fade-in delay-500">
              Өдөр бүр, бага багаар ч гэсэн.
            </p>

            <p className="font-semibold text-rose-600 text-sm leading-relaxed">
              Нэг жилийн ойн баярын мэнд ээ 💖  
              Чи миний амьдралын хамгийн нандин
              хүн болсон шүү.
            </p>
          </div>
        )}

        {/* ================= MODAL ================= */}
        {active !== null && (
          <MemoryModal
            memory={memories[active]}
            onClose={() => setActive(null)}
          />
        )}
      </div>
    </div>
  );
}
