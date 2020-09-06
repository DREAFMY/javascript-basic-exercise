export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (!array) { throw new Error('Flatten undefined or null array'); }
  else if (array.length === 0) { return []; }
  else {
    let a = [];
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] instanceof Array) {
        array[i].map(it => {
          a.push(it);
        });
      } else {
        a.push(array[i]);
      }
    }
    return a;
  }
}
