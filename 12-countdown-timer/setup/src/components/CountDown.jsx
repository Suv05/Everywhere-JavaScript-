import { useEffect, useState } from "react";
import gift from "../assets/gift.jpeg";

function CountDown({}) {
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

  const [state, setState] = useState(calculateTimeLeft());

  useEffect(() => {
    setInterval(() => {
      setState(calculateTimeLeft());
    }, 1000);
  }, [calculateTimeLeft()]);
  return (
    <>
      <section class="section-center">
        {/* <!-- image --> */}
        <article class="gift-img">
          <img src={gift} alt="gift" />
        </article>
        {/* <!-- info --> */}
        <article class="gift-info">
          <h3>old iphone giveaway</h3>
          <h4 class="giveaway">
            giveaway ends on Friday, 2 August 2024, 11:00am
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit molestiae cum libero atque ut voluptate qui
            consectetur aliquid incidunt voluptatem quos, dolore, non commodi
            quaerat aliquam eligendi, quisquam totam blanditiis.
          </p>
          <div class="deadline">
            {/* <!-- days --> */}
            <div class="deadline-format">
              <div>
                <h4 class="days">{state.days}</h4>
                <span>days</span>
              </div>
            </div>
            {/* <!-- end of days --> */}
            {/* <!-- days --> */}
            <div class="deadline-format">
              <div>
                <h4 class="hours">{state.hours}</h4>
                <span>hours</span>
              </div>
            </div>
            {/* <!-- end of days --> */}
            {/* <!-- minutes --> */}
            <div class="deadline-format">
              <div>
                <h4 class="minutes">{state.minutes}</h4>
                <span>mins</span>
              </div>
            </div>
            {/* <!-- end of days --> */}
            {/* <!-- minutes --> */}
            <div class="deadline-format">
              <div>
                <h4 class="seconds">{state.seconds}</h4>
                <span>secs</span>
              </div>
            </div>
            {/* <!-- end of days --> */}
          </div>
        </article>
      </section>
    </>
  );
}

export default CountDown;
