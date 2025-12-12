"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { DailyChallengeTimer } from "@/components/game/DailyChallengeTimer";


export const DailyChallengeCard = () => {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      month: "long", 
      day: "numeric", 
      year: "numeric" 
    };
    setDateStr(now.toLocaleDateString("en-US", options));
  }, []);

  return (
    <Link
      href="/onthisday"
      className="group relative overflow-hidden rounded-2xl border-4 border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8 hover:scale-105 transition-transform duration-200 ease-in-out shadow-lg hover:shadow-xl"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-5xl mb-4">📅</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-700 dark:text-blue-200">
          Daily Challenge
        </h2>
        <div className="text-white text-sm font-semibold mt-1">
          {dateStr}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Play with events that happened on this date in history
        </p>
        <DailyChallengeTimer />
      </div>
    </Link>
  );
};
