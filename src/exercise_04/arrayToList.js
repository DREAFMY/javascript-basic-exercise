export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  const myLink = {};

  function toLink(a, l) {
    l.value = a[0];
    if (a[1]) {
      a.shift();
      l.next = {};
      toLink(a, l.next);
    } else {
      l.next = null;
    }
    return l;
  }

  if (!array) { throw new Error('Creating list from undefined array'); }
  else if (array.length === 0) { throw new Error('Creating list from empty array'); }
  else {
    return toLink(array, myLink);
  }
}
