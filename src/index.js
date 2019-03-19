module.exports = function check(str, bracketsConfig) {
  let i = 0,
  check = new Boolean;
while (i <= bracketsConfig.length - 1) {
  bracketsConfig[i] = String(bracketsConfig[i][0] + bracketsConfig[i][1]);
  i++;
}
i = 0;
while (i <= str.length) {
  if (bracketsConfig.indexOf(str[i] + str[i + 1]) == -1) {
    i++;
  } else {
    str = str.slice(0, i) + str.slice(i + 2, str.length);
    i--;
  }
}
if (str==="") {
  check = true;
} else {
  check = false;
}
return check;
}
