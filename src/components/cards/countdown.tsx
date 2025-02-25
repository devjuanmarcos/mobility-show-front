"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate = undefined }) => {
  const calculateTimeLeft = (targetDate: string): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate || ""));

  useEffect(() => {
    if (targetDate) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [targetDate]);

  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <span className="top-title">TEMPO</span>
      <span className="title-card">Contagem Regressiva para a Mobility & Show </span>
      <span className="title-card">09 a 11 de maio de 2025 na Transaméria Expo Center - São Paulo</span>
    
      <div className="flex gap-6 max-md:gap-2 mt-5 w-full h-[6.125rem] max-w-[42.5625rem] items-center">
        <div className="h-full w-[7.875rem] bg-card-black  backdrop-blur-lg max-md:w-full flex flex-col items-center justify-center  rounded-lg">
          <span className="font-epilogue font-medium text-[2rem] max-md:text-lg -mb-2">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
          <span className="banner-card max-md:text-xs px-1">DIAS</span>
        </div>

        <span className="title-card max-sm:hidden">:</span>

        <div className="h-full w-[7.875rem] bg-card-black  backdrop-blur-lg max-md:w-full flex flex-col items-center justify-center  rounded-lg">
          <span className="font-epilogue font-medium text-[2rem] max-md:text-lg -mb-2">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="banner-card max-md:text-xs px-1">HORAS</span>
        </div>

        <span className="title-card max-sm:hidden">:</span>

        <div className="h-full w-[7.875rem] bg-card-black  backdrop-blur-lg max-md:w-full flex flex-col items-center justify-center  rounded-lg">
          <span className="font-epilogue font-medium text-[2rem] max-md:text-lg -mb-2">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="banner-card max-md:text-xs px-1">MINUTOS</span>
        </div>

        <span className="title-card max-sm:hidden">:</span>

        <div className="h-full w-[7.875rem] bg-card-black  backdrop-blur-lg max-md:w-full flex flex-col items-center justify-center  rounded-lg">
          <span className="font-epilogue font-medium text-[2rem] max-md:text-lg -mb-2">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="banner-card max-md:text-xs px-1">SEGUNDOS</span>
        </div>
      </div>
    </div>
  );
};
