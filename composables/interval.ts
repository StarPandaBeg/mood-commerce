import type { WatchStopHandle } from "vue";

export function useInterval(
  callback: () => void,
  interval: Readonly<Ref<number>> | number
) {
  let intervalID: ReturnType<typeof setInterval> | null = null;
  let stopWatch: WatchStopHandle;

  const resetInterval = () => {
    if (intervalID) clearInterval(intervalID);
    intervalID = null;
  };
  const initInterval = () => {
    if (intervalID) resetInterval();
    const value = toValue(interval);
    if (value < 0) return;

    intervalID = setInterval(callback, value);
  };

  onMounted(() => {
    stopWatch = watchEffect(() => initInterval());
  });
  onBeforeUnmount(() => {
    stopWatch();
    resetInterval();
  });
}

export function useTimeout(
  callback: () => void,
  timeout: Readonly<Ref<number>> | number
) {
  let timeoutID: ReturnType<typeof setTimeout> | null = null;
  let stopWatch: WatchStopHandle;

  const resetTimeout = () => {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = null;
  };
  const initTimeout = () => {
    if (timeoutID) resetTimeout();
    const value = toValue(timeout);
    if (value < 0) return;

    timeoutID = setTimeout(() => {
      callback();
      timeoutID = null;
    }, value);
  };

  onMounted(() => {
    stopWatch = watchEffect(() => initTimeout());
  });
  onBeforeUnmount(() => {
    stopWatch();
    resetTimeout();
  });
}
