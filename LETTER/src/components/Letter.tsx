import { Heart } from "lucide-react";

export const Letter = () => {
  return (
    <div className="w-80 sm:w-96 md:w-[450px] bg-paper rounded-sm paper-shadow paper-texture p-6 sm:p-8 relative">
      {/* Paper fold effect */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-background/50" />
      
      {/* Decorative header */}
      <div className="flex justify-center mb-4 animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-px bg-primary/40" />
          <Heart className="w-5 h-5 text-primary" fill="currentColor" />
          <div className="w-8 h-px bg-primary/40" />
        </div>
      </div>

      {/* Date */}
      <p 
        className="text-right text-sm text-muted-foreground font-elegant italic mb-6 animate-fade-in-up"
        style={{ animationDelay: "0.4s", opacity: 0 }}
      >
        January 21st, 2026
      </p>

      {/* Greeting */}
      <h2 
        className="font-handwritten text-3xl sm:text-4xl text-ink mb-4 animate-fade-in-up"
        style={{ animationDelay: "0.5s", opacity: 0 }}
      >
        My Dearest Friend,
      </h2>

      {/* Letter content */}
      <div className="space-y-4 font-elegant text-ink/90 leading-relaxed">
        <p 
          className="animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          I hope this letter finds you in the best of spirits and health. It has been far too long since we last exchanged words, and I find myself thinking of you more often than you might imagine.
        </p>

        <p 
          className="animate-fade-in-up"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          Do you remember those warm summer evenings we spent together, watching the sun paint the sky in shades of gold and crimson? Those memories have become treasures I hold close to my heart, especially during quiet moments when the world seems to slow down just enough for reflection.
        </p>

        <p 
          className="animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          Life has a curious way of carrying us along its currents, sometimes gently and other times with great force. Through all of its twists and turns, I have come to realize that the connections we nurture are what truly give our days meaning and purpose.
        </p>

        <p 
          className="animate-fade-in-up"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          I want you to know that no matter where this journey takes us, you hold a special place in my thoughts. Your kindness, your laughter, and the warmth of your presence have left an indelible mark on my soul.
        </p>

        <p 
          className="animate-fade-in-up"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          Until we meet again, please take care of yourself and know that somewhere out there, someone is wishing you nothing but happiness and peace.
        </p>
      </div>

      {/* Closing */}
      <div 
        className="mt-8 animate-fade-in-up"
        style={{ animationDelay: "1.1s", opacity: 0 }}
      >
        <p className="font-handwritten text-2xl text-ink">
          With all my love,
        </p>
        <p className="font-handwritten text-3xl text-primary mt-2">
          ♡ Forever Yours
        </p>
      </div>

      {/* Decorative footer */}
      <div 
        className="flex justify-center mt-6 animate-fade-in-up"
        style={{ animationDelay: "1.2s", opacity: 0 }}
      >
        <div className="flex items-center gap-1">
          <Heart className="w-3 h-3 text-primary/50" fill="currentColor" />
          <Heart className="w-4 h-4 text-primary/70" fill="currentColor" />
          <Heart className="w-3 h-3 text-primary/50" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};
