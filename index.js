let arr=[1,2,3,4,5,6];
console.log(arr);
for(let x of arr){
    console.log(x);
}

let obj={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50,
}

console.log(Object.keys(obj));
for(let x in obj){
    console.log(x,obj[x]);
}
arr.push(10);
console.log(arr);

arr.pop();
console.log(arr);
console.log(arr);
// arr.splice(0,3,true)
// arr.splice(0,4,2,3,4,5)
let arr1=arr.slice(0,2);
console.log(arr1)
delete obj.b;
console.log(obj);