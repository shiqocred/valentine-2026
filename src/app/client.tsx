"use client";

import { Button } from "@/components/ui/button";
import ColourfulText from "@/components/ui/colourful-text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import ReactLenis from "lenis/react";
import { Heart, Mail, MailOpen } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const foto_hero = [
  {
    title: "First Modus",
    thumbnail: "/img_modus.jpeg",
  },
  {
    title: "First Jalan",
    thumbnail: "/img_first_jalan.jpeg",
  },
  {
    title: "First Date",
    thumbnail: "/img_first_date.jpeg",
  },
  {
    title: "First Gacoan",
    thumbnail: "/img_first_gacoan.jpeg",
  },
  {
    title: "First PS",
    thumbnail: "/ps.jpeg",
  },
  {
    title: "Zoo Date",
    thumbnail: "/img_zoo_date.jpeg",
  },
  {
    title: "Scooter Date",
    thumbnail: "/img_scooter_date.jpeg",
  },
  {
    title: "First Nonton",
    thumbnail: "/img_first_nonton.jpeg",
  },
  {
    title: "First PS",
    thumbnail: "/img_first_ps.jpeg",
  },
  {
    title: "First Gacoan",
    thumbnail: "/img_first_gacoan.jpeg",
  },
  {
    title: "First Jalan",
    thumbnail: "/img_first_jalan.jpeg",
  },
  {
    title: "Ndandong",
    thumbnail: "/img_ngandong.jpeg",
  },
  {
    title: "Confess Day",
    thumbnail: "/img_confess_day.jpeg",
  },
  {
    title: "Second PS",
    thumbnail: "/img_second_ps.jpeg",
  },
  {
    title: "First Gacoan",
    thumbnail: "/img_first_gacoan.jpeg",
  },
];

const sticky_timeline = [
  {
    title: "PDKT - Awal yang Tak Terduga",
    description:
      "Awalnya cuma modus saat KKN, dimulai dari berboncengan denganmu setiap hari sampai bercanda setiap kita bertemu, dengan tidak melihat respon yang negatif, aku mulai merasa mungkin aku bisa melanjutkan ke tahap berikutnya",
    content: "/img_modus.jpeg",
    color: "bg-linear-to-br from-rose-300 to-rose-500",
  },
  {
    title: "Jadian - Resmi Menjadi Kita",
    description:
      "Dimulai dari menyakinkanmu agar aku bisa mengantarkanmu pulang KKN sampai rumah, dalam perjalanan giliran aku menyakinkan diriku untuk mengungkapkan perasaanku padamu pada sampai aku mengucapkannya dan kamu menjawab butuh waktu untuk menjawab perasaanku, dan selama penantian sampai kamu menjawab 'IYA' di tanggal 28 November 2024 di waduk sermo",
    content: "/img_confess_day.jpeg",
    color: "bg-linear-to-br from-pink-300 to-pink-500",
  },
  {
    title: "Sekarang - Bertumbuh Bersama",
    description:
      "Kita sudah melewati tawa, perbedaan, pelukan, dan mungkin sedikit drama kecil. Meskipun aku sedikit menyebalkan tapi kamu masih mau bertahan bersamaku, maaf aku sering buat kamu kesal tapi curigalah kalo aku sudah tidak pernah membuatmu kesal. terima kasih kamu sudah menjadi support sistemku selama ini",
    content: "/img_pb_4.png",
    color: "bg-linear-to-br from-fuchsia-300 to-fuchsia-500",
  },
];

const items = [
  {
    image: "/img_pb_2.jpeg",
    className: "absolute top-48 left-[20%] rotate-[-5deg]",
  },
  {
    image: "/img_pb_3.jpeg",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
  },
  {
    image: "/img_scooter_date.jpeg",
    className: "absolute top-18 left-[40%] rotate-[8deg]",
  },
  {
    image: "/img_scooter_date_2.jpg",
    className: "absolute top-42 left-[55%] rotate-[10deg]",
  },
  {
    image: "/img_second_ps.jpeg",
    className: "absolute top-52 right-[35%] rotate-[2deg]",
  },
  {
    image: "/img_ngandong.jpeg",
    className: "absolute top-32 left-[45%] rotate-[-7deg]",
  },
  {
    image: "/img_zoo_date.jpeg",
    className: "absolute top-20 left-[30%] rotate-[4deg]",
  },
];

export function Client() {
  const [run, setRun] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isDone: false,
  });

  const handleSideCannon = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
    const frame = () => {
      if (Date.now() > end) return;
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
      requestAnimationFrame(frame);
    };
    frame();
  };

  const handleFramework = () => {
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: "❤️", scalar });
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      shapes: [unicorn],
    };
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setRun(true);

    // stop setelah 5 detik
    setTimeout(() => {
      setRun(false);
    }, 5000);
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const valentineDate = new Date(2026, 1, 14, 0, 0, 0).getTime();
      const now = Date.now(); // ✅ ambil waktu terbaru tiap detik
      const difference = valentineDate - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isDone: false,
        });
      } else {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isDone: true,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleChange(); // initial check
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (!isDesktop) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-rose-200 to-pink-300 text-center p-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md">
          <h1 className="text-3xl font-bold text-rose-500 mb-4">
            Hanya untuk dekstop
          </h1>
          <p className="text-gray-600">
            Website ini dibuat khusus untuk tampilan desktop agar pengalaman
            romantisnya maksimal ✨
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Silakan buka menggunakan laptop ya ❤️
          </p>
        </div>
      </div>
    );
  }

  if (!isOpen)
    return (
      <div className="min-h-screen bg-linear-to-br from-rose-200 via-rose-300 to-rose-200 flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Main content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 animate-pulse">
            💕
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Hari Valentine
          </h2>
          <p className="text-xl text-foreground/70 mb-12">
            Waktu menghitung mundur menuju hari cinta yang penuh makna
          </p>

          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-xl mx-auto mb-8">
              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
                  Jam
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
                  Menit
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
                  Detik
                </div>
              </div>
            </div>
            <div className="text-sm text-foreground/60 font-medium tracking-wider">
              14 FEBRUARI 2026
            </div>
            {timeLeft.isDone && (
              <Button
                onClick={handleOpen}
                className="bg-rose-100 text-red-500 hover:bg-rose-200 mt-6"
              >
                <MailOpen className="text-red-500" />
                Buka Ucapan
              </Button>
            )}
          </div>
        </div>
      </div>
    );

  return (
    <ReactLenis root>
      {run && (
        <ReactConfetti
          recycle={true} // supaya terus spawn selama run=true
          numberOfPieces={300} // jumlah confetti aktif
          gravity={0.3} // efek jatuh
        />
      )}
      <HeroParallax products={foto_hero} />
      <div className="relative w-screen">
        {sticky_timeline.map((item) => (
          <div
            key={item.title}
            className="sticky top-0 h-screen w-full flex items-center justify-center p-10 xl:p-20 z-10"
          >
            <div
              className={cn(
                "size-full grid grid-cols-3 p-5 xl:p-10 rounded-xl shadow",
                item.color,
              )}
            >
              <div className="flex justify-center flex-col gap-2 m-5 xl:m-10">
                <p className="text-lg md:text-xl xl:text-2xl font-bold">
                  {item.title}
                </p>
                <p className="leading-relaxed text-xs md:text-sm xl:text-base">
                  {item.description}
                </p>
              </div>
              <div className="relative flex items-center rounded-lg overflow-hidden my-10 mx-10 xl:mx-20 col-span-2 shadow-md">
                <Image
                  src={item.content}
                  fill
                  alt={item.title}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-screen h-screen p-20">
        <DraggableCardContainer className="relative flex size-full items-center justify-center overflow-clip rounded-xl bg-pink-300 shadow-md">
          <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800 -mt-10 xl:-mt-20">
            <ColourfulText text="I Love You" />
          </p>
          {items.map((item) => (
            <DraggableCardBody
              key={item.image}
              className={cn(
                "relative min-h-60 xl:min-h-96 size-50 xl:size-80",
                item.className,
              )}
            >
              <Image
                src={item.image}
                alt={item.image}
                className="pointer-events-none relative z-10 object-cover"
                fill
              />
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
      <div className="h-[25vh] bg-linear-to-br from-rose-300 to-rose-400 flex items-center justify-center flex-col gap-4 xl:gap-10">
        <p className="text-xl xl:text-3xl text-rose-900 font-bold">
          Surat dari penggemarmu
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={handleSideCannon}
              className="rounded-full bg-rose-100 text-red-500 hover:bg-rose-200"
            >
              <Mail />
              Buka surat ini
            </Button>
          </DialogTrigger>
          <DialogContent showCloseButton={false} className="gap-0">
            <DialogHeader>
              <DialogTitle>Surat Untukmu</DialogTitle>
            </DialogHeader>
            <p className="leading-relaxed text-xs xl:text-sm mt-4">
              Aku nggak pernah nyangka perjalanan yang awalnya biasa saja bisa
              jadi sepenting ini buatku. Dari modus KKN sampai sekarang. rasanya
              semuanya tumbuh pelan-pelan tapi pasti. Kadang beda pendapat,
              kadang sama-sama keras kepala.
            </p>
            <p className="leading-relaxed text-xs xl:text-sm mt-2">
              Terima kasih sudah tetap ada, bahkan di saat sangat menyebalkan.
              Terima kasih sudah sabar, sudah mau dengerin, dan sudah bertahan
              bareng-bareng. Kita mungkin nggak selalu sempurna.
            </p>
            <p className="leading-relaxed text-xs xl:text-sm mt-2">
              Tapi justru itu yang bikin hubungan ini terasa nyata dan hidup.
              Aku cuma mau kamu tahu, aku menghargai kamu lebih dari yang sering
              aku ucapkan. Dan selama kamu masih mau jalan bareng, aku juga akan
              tetap di sini.
            </p>
            <p className="leading-relaxed text-xs xl:text-sm mt-2">
              Selamat Hari Valentine.
            </p>
            <p className="leading-relaxed text-xs xl:text-sm mt-2">
              Terima kasih sudah jadi bagian penting dalam hidupku.
            </p>
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button
                  onClick={handleFramework}
                  className="bg-rose-100 text-red-500 hover:bg-rose-200"
                >
                  <Heart className="fill-red-500" />
                  Love You Moree
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="h-[50vh] flex items-center justify-center flex-col">
        <p className="text-xl xl:text-3xl font-bold">
          Mungkin dunia merayakan cinta hari ini.
        </p>
        <p className="text-xl xl:text-3xl font-bold text-rose-400 mt-2">
          Tapi bagiku, mencintaimu adalah perayaan yang tak pernah usai.
        </p>
        <p className="text-base xl:text-xl mt-10">
          - Happy Valentine&apos;s Day -
        </p>
      </div>
    </ReactLenis>
  );
}
