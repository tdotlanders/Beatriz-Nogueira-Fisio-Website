import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="https://media.licdn.com/dms/image/D4D03AQHXAAbyWl8j4w/profile-displayphoto-shrink_400_400/0/1678101760452?e=1726099200&v=beta&t=OKiVQtsoIexg0pbHExkkwvPALXBurR59LVzBwIudHp0"
            alt="Beatriz Nogueira"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
          <span className="absolute bottom-5 right-0 text-4xl">👋</span>
        </div>
      </div>
    </section>
  );
}
