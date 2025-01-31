function startWithUpperCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function cutString(str, limit) {
  if (str.length <= limit) return str;

  let cutStr = str.slice(0, limit-3)
  let lastValidIndex = cutStr.search(/[\s,.!?:;][^\s,.!?:;]*$/);
  if (lastValidIndex === -1) lastValidIndex = limit - 3;
  return cutStr.slice(0, lastValidIndex) + "...";
}

function includeString(str1, str2) {
   return str1.includes(str2) ? true : str2.includes(str1);
}
