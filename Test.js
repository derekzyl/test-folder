// function abb(a) {
//     console.log(a.x, a.y);
// }
// abb({ x: "hello", y: 78 });
const x = 5;
const y = 7;

function test() {
  const x = 2, y = 4; plus = "+"
  // Direct call, uses local scope
  console.log(eval('x' + plus + 'y')); // Result is 6
  console.log(eval?.('x + y')); // Uses global scope, throws because x is undefined
  
  

   
   console.log(encodeURI("https://www.gmail.com/d-@gmail.$jj"))
   
   const a = {
      a:2, b:4, c:6
   }
   const b = {
      a:3, b:5, c:7
   }
   const ss = Object.assign(b, a)
   const dd = Object.assign(
      a, {
         b:78}
   )
   
   
   
   console.log(dd)
   
   console.log(ss)
}
test();


function derek (name , value){
   this.name= name
   this.value = value
   return(this.name, this.value)
}
function andd (name, val ){
  return ( derek.call(this, name, val))
}
 
const bbd= andd("don", "art")
console.log(bbd)