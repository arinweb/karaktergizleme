function repeat(param1 = "*", param2 = 1) {
  x = 0,charter = "";
  while (x < param2) {
    charter += param1;
    x++;
  }
  return charter;
}

function edit(parameter,visibilityCount = 1) {
  parlen = parameter.length-visibilityCount;
  parfirst = parameter.substr(0,visibilityCount);
  repeatout = repeat("*",parlen);
  out = parfirst+repeatout;
  return out;
}

console.log(edit("Murat"));
// M****

console.log(edit("Muhammet",3));
// Muh*****

console.log(edit("05555555555",4));
// 0555******
