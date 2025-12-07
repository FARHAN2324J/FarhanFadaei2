import { useEffect, useState } from "react";

export default function TimeDifference() {
  const [iranTime, setIranTime] = useState("");
  const [difference, setDifference] = useState("");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      const iran = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Tehran",
      });

      setIranTime(iran);

      const iranDate = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Tehran" })
      );
      iranDate.setSeconds(0, 0);
      now.setSeconds(0, 0);

      const diffMinutes = (iranDate.getTime() - now.getTime()) / (1000 * 60);
      const rounded = Math.round(diffMinutes);

      if (rounded === 0) {
        setDifference("");
      } else {
        const hours = Math.floor(Math.abs(rounded) / 60);
        const minutes = Math.abs(rounded) % 60;
        const aheadOrBehind = rounded > 0 ? "ahead" : "behind";
        setDifference(
          minutes === 0
            ? `${hours}h ${aheadOrBehind}`
            : `${hours}h ${minutes}m ${aheadOrBehind}`
        );
      }
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex font-sans items-center pt-2 px-6 ">
      <div className="flex gap-1 items-center">
        <svg
          fill="#8d8d8d"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z"></path>
        </svg>
        <span className="text-(--white) ml-1">{iranTime}</span>
        <span className="text-(--gray)">(UTC+03:30) </span>
      </div>
      {difference && (
        <div className="flex justify-between">
          <span className="text-(--gray) ml-1"> - {difference}</span>
        </div>
      )}
    </div>
  );
}
