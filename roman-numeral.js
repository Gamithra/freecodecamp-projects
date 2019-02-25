function convertToRoman(num) {
  let t = {
    1: 	"I",
    4: 	"IV",
    5: 	"V",
    9: 	"IX",
    10: 	"X",
    40:	"XL",
    50: 	"L",
    90: 	"XC",
    100: 	"C",
    400: 	"CD",
    500: 	"D",
    900: 	"CM",
    1000: "M",
  }

  let c = Object.keys(t).sort(function(a,b){return b-a});
  let ans = '';
  let temp = num;
  while (temp > 0) {
    for (let i in c) {
      if (temp >= c[i]) {
        console.log(temp, c[i], temp);
        for (let j = 0; j < Math.floor(temp/c[i]); j++) {
          ans += t[c[i]];
        }
        temp -= c[i]*(Math.floor(temp/c[i]));
      }
    }
  }
  console.log(ans);
  return ans;
}

convertToRoman(36);
