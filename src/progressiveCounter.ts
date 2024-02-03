interface Props {
  initialValue: number | (() => number);
  finalValue: number;
  duration?: number;
  decimals?: number;
  delay?: number;
  class: string;
}

const lerp = (a: number, b: number, alpha: number) => {
  return a + alpha * (b - a);
};

const easeOutCubic = (value: number) => {
  return 1 - Math.pow(1 - value, 3);
};

export function progressiveCounter({
  initialValue,
  duration = 1500,
  decimals = 0,
  delay = 5,
  finalValue,
  class: myClass = 'counter',
}: Props) {
  let target = finalValue;
  let current = initialValue;

  const initial =
    typeof initialValue === 'function' ? initialValue() : initialValue;

  const nextTarget = finalValue;
  const steps = Math.max(Math.floor(duration / delay), 1);

  current = lerp(initial, nextTarget, easeOutCubic(1 / steps));

  let startTime: number | null = null;
  let requestId: number;

  const updateCounter = () => {
    if (startTime === null) {
      startTime = Date.now() + delay;
    }

    const elapsed = Date.now() - startTime;
    const progress = elapsed / duration;

    if (progress >= 1) {
      current = target;
      cancelAnimationFrame(requestId);
    } else {
      const value = lerp(initial, target, easeOutCubic(progress));
      current = value;
      requestId = requestAnimationFrame(updateCounter);
    }
    const el = document.querySelector<HTMLElement>(`.${myClass}`);

    if (el) {
      el.innerText = current.toFixed(decimals);
    }
  };

  requestId = requestAnimationFrame(updateCounter);
}
