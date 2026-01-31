import { Toaster } from "sonner";
import AnniversaryCard from "./AnniversaryCard";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* <header className="sticky top-0 z-10 bg-white/20 backdrop-blur-sm h-16 flex justify-center items-center border-b border-pink-200/30 shadow-sm px-4">
        <h2 className="text-xl font-semibold text-rose-600">
          💕 Anniversary Card
        </h2>
      </header> */}

      <main className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
        <FloatingHearts />
        <div className="w-full max-w-md mx-auto relative z-10">
          <AnniversaryCard />
        </div>
      </main>

      <Toaster />
    </div>
  );
}

function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-heart opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        >
          <span className="text-pink-400 text-xl">💖</span>
        </div>
      ))}
    </div>
  );
}
