const lerp = (a, b, alpha) => {
  return a + alpha * (b - a);
};

const easeOutCubic = (value) => {
  return 1 - Math.pow(1 - value, 3);
};

export function progressiveCounter({
  initialValue,
  duration = 1500,
  decimals = 0,
  delay = 5,
  finalValue,
  class: myClass = 'counter',
}) {
  let target = finalValue;
  let current = initialValue;

  const initial =
    typeof initialValue === 'function' ? initialValue() : initialValue;

  const nextTarget = finalValue;
  const steps = Math.max(Math.floor(duration / delay), 1);

  current = lerp(initial, nextTarget, easeOutCubic(1 / steps));

  let startTime = null;
  let requestId;

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
    const el = document.querySelector(`.${myClass}`);

    if (el) {
      el.innerText = current.toFixed(decimals);
    }
  };

  requestId = requestAnimationFrame(updateCounter);
}
