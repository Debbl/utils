/**
 * insert a value between each value in an array
 * @param arr array to join
 * @param betweenValue a value to join between each value in the array
 * @returns a new array with the betweenValue between each value in the original array
 */
export function joinArr(arr: any[], betweenValue: any): any[] {
  return arr
    .reduce((acc, value) => acc.concat(value, betweenValue), [])
    .slice(0, -1);
}
