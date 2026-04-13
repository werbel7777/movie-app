export const debounce = (
  callback: (value: string) => void,
  time: number,
): ((value: string) => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return (value: string) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(value);
    }, time);
  };
};
