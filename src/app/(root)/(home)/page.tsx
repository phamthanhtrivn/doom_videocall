"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

const Home = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setDate(
        new Intl.DateTimeFormat("en-US", {
          dateStyle: "full",
        }).format(now)
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col gap-5 text-white size-full">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex flex-col justify-between h-full max-md:px-5 max-md:py-8 lg:p-11 md:p-7">
          <h2 className="flex justify-center gap-2 glassmorphism max-w-[290px] rounded py-2 text-base font-normal">
            Upcoming Meeting at: 12:30 PM{" "}
            <Bell stroke="#FF3300" fill="#FF3300" />
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
