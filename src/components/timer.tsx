import React, { useState, useEffect } from "react";
import NewSticker from "../assets/new_sticker.png";
import { motion } from "framer-motion";
import "./component.css";

const Sticker = NewSticker;

const Timer: React.FC = () => {
  const countdownStartDate = new Date("2024-01-23T00:00:00Z").getTime();
  const countdownDuration = 15 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [startTime] = useState<number>(performance.now());
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();

      const timePassed = currentTime - countdownStartDate;
      setElapsedTime(timePassed);
    }, 10); // Update every 10 milliseconds

    return () => clearInterval(interval);
  }, [countdownStartDate]);

  const timeRemaining = countdownDuration - elapsedTime;

  const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);
  const milliseconds = Math.floor(timeRemaining % 1000);
  const paddedMilliseconds = milliseconds.toString().padStart(3, "0");

  return (
    <motion.div
      initial={{ opacity: 0, x: -400, scale: 0 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        type: "spring",
        duration: 1.25,
      }}
      className="text-rose-200  flex flex-col justify-center items-center"
      suppressHydrationWarning
      style={{
        fontFamily: "SilkScreen",
        userSelect: "none",
        margin: 0,
        padding: 0,
      }}
    >
      <motion.img
        src={Sticker}
        className="-mt-20 mb-5 w-56 z-[-10]"
        alt="Sticker"
        initial={{ opacity: 0, y: 300, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotate: 720 }}
        transition={{
          type: "spring",
          duration: 2.25,
        }}
      ></motion.img>

      <p className="text-5xl">
        {" "}
        {days}
        <a className="text-emerald-200" style={{ fontFamily: "Inter" }}>
          d
        </a>{" "}
        {hours}
        <a className="text-emerald-200" style={{ fontFamily: "Inter" }}>
          h
        </a>{" "}
        {minutes}
        <a className="text-emerald-200" style={{ fontFamily: "Inter" }}>
          m
        </a>{" "}
        {seconds}
        <a className="text-emerald-200" style={{ fontFamily: "Inter" }}>
          s{" "}
        </a>{" "}
        {paddedMilliseconds}
        <a className="text-emerald-200" style={{ fontFamily: "Inter" }}>
          ms
        </a>
      </p>
      <a
        className="group rounded-sm border-transparent px-6 transition-colors hover-bg-center hover:drop-shadow-glow dombui pt-10"
        rel="noopener noreferrer"
      >
        <motion.h2
          className={`mb-3 text-sm font-semibold text-emerald-50 hover:text-rose-200 hover:drop-shadow-glow`}
          whileHover={{
            scale: 1.0,
          }}
          style={{ fontFamily: "Inter" }}
          initial={{ opacity: 0, y: -150, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            duration: 4.25,
          }}
        >
          © 2024{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            dom
          </span>
          <span className="inline-block transition-transform group-hover:translate-x-2.5 motion-reduce:transform-none">
            bui
          </span>
        </motion.h2>
      </a>
    </motion.div>
  );
};

export default Timer;
