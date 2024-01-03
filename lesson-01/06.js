let str = "zzzzyzz";
function search(str){
  if (str.includes('y')){
    return 'нашел';
  } else {
    return 'заблудился';
  }
}
console.log(search(str));