const calculateTimeLeft = () => {
  const date = new Date(2024, 7, 2, 11, 30, 0);
  const today = new Date();
  const difference = date - today;

  const millisecondsInSecond = 1000;
  const millisecondsInMinute = millisecondsInSecond * 60;
  const millisecondsInHour = millisecondsInMinute * 60;
  const millisecondsInDay = millisecondsInHour * 24;

  const days = Math.floor(difference / millisecondsInDay);
  const hours = Math.floor(
    (difference % millisecondsInDay) / millisecondsInHour
  );
  const minutes = Math.floor(
    (difference % millisecondsInHour) / millisecondsInMinute
  );
  const seconds = Math.floor(
    (difference % millisecondsInMinute) / millisecondsInSecond
  );

  console.log(
    `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
  );
  return { days, hours, minutes, seconds };
};

