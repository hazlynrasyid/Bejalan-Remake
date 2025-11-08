import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center text-white h-screen px-4">
      {/* Heading */}
      <h1 className="text-2xl md:text-2xl font-quicksand font-medium drop-shadow-xl leading-snug max-w-3xl">
        Jelajahi Pesona Tersembunyi Tanjung Pinang, Bersama Pemandu Lokal Terbaik
      </h1>

      {/* Button */}
      <button className="mt-8 flex items-center gap-2 bg-[#2C7DA0] hover:bg-[#256B8C] text-white px-6 py-3 rounded-full font-medium font-quicksand text-base transition-all shadow-md group">
        Get Started
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </section>
  );
}