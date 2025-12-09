import { useEffect, useState } from "react";

export default function TimeDifference() {
  const [iranTime, setIranTime] = useState("--:--");
  const [difference, setDifference] = useState("");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      const iranFormatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Tehran",
      });
      setIranTime(iranFormatter.format(now));

      const iranDate = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Tehran" })
      );

      const nowRounded = new Date(now);
      const iranRounded = new Date(iranDate);

      nowRounded.setSeconds(0, 0);
      iranRounded.setSeconds(0, 0);

      const diffMs = iranRounded.getTime() - nowRounded.getTime();
      const diffMinutes = Math.round(diffMs / (1000 * 60));

      if (diffMinutes === 0) {
        setDifference("");
        return;
      }

      const absDiff = Math.abs(diffMinutes);
      const hours = Math.floor(absDiff / 60);
      const minutes = absDiff % 60;

      const aheadOrBehind = diffMinutes > 0 ? "ahead" : "behind";

      let diffText = "";
      if (hours > 0 && minutes > 0) {
        diffText = `${hours}h ${minutes}m ${aheadOrBehind}`;
      } else if (hours > 0) {
        diffText = `${hours}h ${aheadOrBehind}`;
      } else {
        diffText = `${minutes}m ${aheadOrBehind}`;
      }

      setDifference(diffText);
    };

    updateTimes();

    const interval = setInterval(updateTimes, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex font-sans items-center pt-2 px-6">
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
        <span className="text-(--gray) text-sm">(UTC+03:30)</span>
      </div>

      {difference && (
        <div className="flex justify-between">
          <span className="text-(--gray) ml-1"> - {difference}</span>
        </div>
      )}
    </div>
  );
}
