export default function (text) {
  const lowerText = text.toLowerCase();
  const arr = lowerText.split(" ");

  //loop through each element of the array and capitalize the first letter.
  const arr2 = arr.map(
    (palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)
  );

  //Join all the elements of the array back into a string
  //using a blankspace as a separator
  const str2 = arr2.join(" ");
  return str2;
}
