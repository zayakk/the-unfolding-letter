import { useState } from "react";

type Step = "welcome" | "roses" | "letter";

type RoseMessage = {
  title: string;
  text: string[];
};

const roseMessages: RoseMessage[] = [
  {
    title: "Улаан сарнай 🌹",
    text: [
      "Чи бол миний зүрхний хамгийн гүн хайр.",
      "Чиний инээмсэглэл миний өдрийг гэрэлтүүлдэг.",
      "Насны турш чинийхээ гарыг тавилгүй хамт байна.",
    ],
  },
  {
    title: "Сарнай цэцэг 🌺",
    text: [
      "Чиний халуун дулаан сэтгэл намайг үргэлж тайвшруулдаг.",
      "Чамтай хамт байх бүрт амьдрал илүү утгатай болдог.",
      "Би чинийхээ дэргэд хамгийн аз жаргалтай.",
    ],
  },
  {
    title: "Алтанзул 🌷",
    text: [
      "Чи миний амьдралын хамгийн сайхан бэлэг.",
      "Чиний хайр намайг илүү сайн хүн болгосон.",
      "Ирээдүйгээ чамтай хамт төсөөлөх хамгийн сайхан.",
    ],
  },
];

export function AnniversaryCard() {
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [selectedRose, setSelectedRose] = useState<number | null>(null);

  const handleRoseSelect = (index: number) => {
    setSelectedRose(index);
    setTimeout(() => {
      setCurrentStep("letter");
    }, 700);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200/50 min-h-[600px] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-rose-100/30 rounded-3xl"></div>

      <div className="relative z-10 w-full text-center">
        {currentStep === "welcome" && (
          <WelcomeStep onNext={() => setCurrentStep("roses")} />
        )}

        {currentStep === "roses" && (
          <RoseStep
            onRoseSelect={handleRoseSelect}
            selectedRose={selectedRose}
          />
        )}

        {currentStep === "letter" && selectedRose !== null && (
          <LetterStep
            message={roseMessages[selectedRose]}
            onBack={() => {
              setSelectedRose(null);
              setCurrentStep("welcome");
            }}
          />
        )}
      </div>
    </div>
  );
}

/* ---------------- WELCOME ---------------- */

function WelcomeStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-6xl">💕</div>

      <h1 className="text-3xl font-bold text-rose-600 leading-tight">
        Happy Anniversary
        <br />
        <span className="text-pink-500">My Love</span>
      </h1>

      <p className="text-rose-500 text-lg">
        One year of memories, love, and us 💖
      </p>

      <button
        onClick={onNext}
        className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-all"
      >
        Continue 💝
      </button>
    </div>
  );
}

/* ---------------- ROSES ---------------- */

function RoseStep({
  onRoseSelect,
  selectedRose,
}: {
  onRoseSelect: (index: number) => void;
  selectedRose: number | null;
}) {
  const roses = ["🌹", "🌺", "🌷"];

  return (
    <div className="animate-fade-in space-y-8">
      <h2 className="text-3xl font-bold text-rose-600">
        Choose a Flower 🌸
      </h2>

      <div className="flex justify-center gap-10">
        {roses.map((rose, index) => (
          <button
            key={index}
            onClick={() => onRoseSelect(index)}
            disabled={selectedRose !== null}
            className={`text-6xl transition-all duration-500 ${
              selectedRose === index
                ? "scale-125 animate-pulse"
                : selectedRose !== null
                ? "opacity-30"
                : "hover:scale-110 hover:rotate-12"
            }`}
          >
            {rose}
          </button>
        ))}
      </div>

      <p className="text-rose-500">
        Pick the one that feels like us 💞
      </p>
    </div>
  );
}

/* ---------------- LETTER ---------------- */

function LetterStep({
  message,
  onBack,
}: {
  message: RoseMessage;
  onBack: () => void;
}) {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-4xl">💌</div>

      <h2 className="text-2xl font-bold text-rose-600">
        {message.title}
      </h2>

      <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl border-2 border-pink-200 shadow-inner space-y-4 text-rose-700">
        <p className="font-medium text-lg">Миний хайрт минь,</p>

        {message.text.map((line, i) => (
          <p key={i}>{line}</p>
        ))}

        <p className="text-center font-semibold text-rose-600">
          Үргэлж чинийхээ ❤️
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={onBack}
          className="bg-pink-200 text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-300"
        >
          ← Back
        </button>

        <button
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all"
        >
          Start Over 💕
        </button>
      </div>
    </div>
  );

  
}
