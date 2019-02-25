function rot13(str) { // LBH QVQ VG!
  let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let s = a.indexOf(str[i]);
    //console.log(s);
    if (s == -1) ans += str[i];
    else {
        if (s < 13) {
            ans += a[(s+26)-13];
        } else {
            ans += a[s-13];
        }
    }      
  }
  console.log(ans);
  return ans;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
