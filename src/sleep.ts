/**
 * a function to sleep for a while
 * @param time need to sleep time
 */
export async function sleep(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
