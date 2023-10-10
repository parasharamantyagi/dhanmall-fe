import React from "react";
import { useCountdown } from "../../components/useCountdown";

const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <p>
      {("0" + hours).slice(-2)}:{("0" + minutes).slice(-2)}:
      {("0" + seconds).slice(-2)}
    </p>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return <ShowCounter days={0} hours={0} minutes={0} seconds={0} />;
  } else {
    return <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />;
  }
};

export default CountdownTimer;
