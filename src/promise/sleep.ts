/**
 * a function to delay the execution of the next line of code
 * this is a promise based function
 * @param ms need to sleep number of milliseconds
 */
export async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
