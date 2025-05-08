import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
  className?: string;
}

const EventCountdown: React.FC<CountdownProps> = ({ targetDate, className }) => {
  const calculateTimeLeft = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <p className="text-gray-600 mb-2 text-center">До начала:</p>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="flex flex-col">
          <div className="bg-[#AE4A84] text-white rounded-md p-2 font-bold text-xl w-16">
            {timeLeft.days}
          </div>
          <span className="text-xs mt-1 text-gray-600">дней</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#AE4A84] text-white rounded-md p-2 font-bold text-xl w-16">
            {timeLeft.hours}
          </div>
          <span className="text-xs mt-1 text-gray-600">часов</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#AE4A84] text-white rounded-md p-2 font-bold text-xl w-16">
            {timeLeft.minutes}
          </div>
          <span className="text-xs mt-1 text-gray-600">минут</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#AE4A84] text-white rounded-md p-2 font-bold text-xl w-16">
            {timeLeft.seconds}
          </div>
          <span className="text-xs mt-1 text-gray-600">секунд</span>
        </div>
      </div>
    </div>
  );
};

export default EventCountdown;
