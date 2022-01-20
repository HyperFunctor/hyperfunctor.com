import { polishPlurals } from "polish-plurals";
import { useEffect, useState } from "react";

const dni = polishPlurals.bind(null, "dzień", "dni", "dni");
const godzin = polishPlurals.bind(null, "godzina", "godziny", "godzin");

export const useCountdown = (until: Date) => {
  const [now, setNow] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(formatUntil(until, new Date()));
    }, 100);
    return () => {
      clearInterval(interval);
    };
  });

  return now;
};

const formatUntil = (until: Date, now: Date) => {
  const SECOND_MS = 1000;
  const MINUTE_MS = SECOND_MS * 60;
  const HOUR_MS = MINUTE_MS * 60;
  const DAY_MS = HOUR_MS * 24;

  const diff = until.getTime() - now.getTime();

  if (diff <= 0) {
    return null;
  }

  const days = Math.floor(diff / DAY_MS);
  const hours = Math.floor((diff - days * DAY_MS) / HOUR_MS);
  const minutes = Math.floor(
    (diff - days * DAY_MS - hours * HOUR_MS) / MINUTE_MS
  );
  const seconds = Math.floor(
    (diff - days * DAY_MS - hours * HOUR_MS - minutes * MINUTE_MS) / SECOND_MS
  );

  return (
    <span className="tabular-nums whitespace-nowrap">
      {days > 0 && `${days} ${dni(days)}`}{" "}
      {hours > 0 && `${hours} ${godzin(hours)}`} {minutes} min {seconds} sek
    </span>
  );
};
