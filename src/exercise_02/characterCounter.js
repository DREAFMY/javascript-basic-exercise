export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  let i = 0;
  if (!string) {
    i = 0;
  } else if (prediction) {
    for (let j = 0; j < string.length; j += 1) {
      if (prediction(string[j])) { i += 1; }
    }
  } else {
    i = string.length;
  }
  return i;
}
