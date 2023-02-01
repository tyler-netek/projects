let arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
let v = [];
for (let x = 0; x < arr.length; x++) {
    v.push(arr[x].concat(arr[x]));
}
console.log(v.join(''));