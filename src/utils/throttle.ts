export function throttle(callee: Function, delay: number) {
  let timer: NodeJS.Timeout | null = null;

  return function perform(...args: any) {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      callee(...args);
      timer = null;
    }, delay);
  };
}
