type p ={
   x:string,
   y:number
}

function abb(a:p){
   console.log(a.x, a.y)
}

abb({x:"hello", y:78})