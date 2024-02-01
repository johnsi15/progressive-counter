interface Props {
  initialValue: number | (() => number);
  finalValue: number;
  duration?: number;
  decimals?: number;
  delay?: number;
  class: string;
}

export function progressiveCounter({
  initialValue,
  duration = 1500,
  decimals = 0,
  delay = 5,
  finalValue,
  class: myClass,
}: Props) {
  let target = finalValue;
  let current = initialValue;
  let currentStep = 1;
  let timeoutId: any;

  const initial =
    typeof initialValue === 'function' ? initialValue() : initialValue;

  const lerp = (a: number, b: number, alpha: number) => {
    return a + alpha * (b - a);
  };

  const easeOutCubic = (value: number) => {
    return 1 - Math.pow(1 - value, 3);
  };

  const steps = Math.max(Math.floor(duration / delay), 1);

  const setTimeoutHandler = () => {
    const progress = currentStep / steps;

    if (progress === 1) {
      current = target;
      clearTimeout(timeoutId);
    } else {
      current = lerp(initial, target, easeOutCubic(progress));
      currentStep = currentStep + 1;
      timeoutId = setTimeout(setTimeoutHandler, delay);
    }

    const el = document.querySelector<HTMLElement>(`.${myClass}`);

    if (el) {
      el.innerText = current.toFixed(decimals);
    }
  };

  timeoutId = setTimeout(setTimeoutHandler, delay);
}
