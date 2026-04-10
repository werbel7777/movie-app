export const debounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  time: number,
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: T) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback(...args);
    }, time);
  };
};
