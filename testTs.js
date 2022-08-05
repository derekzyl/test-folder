function abb(a) {
   console.table(a.x, a.y);
}
abb({
   x: "hello", y: 78
});

function gejj(strings) {
   const as = Array.isArray(strings)
   const d = strings.toString().split(",").length
   const f = strings.toString().split(",")[2]
   const str = strings.toString().split(":")[0]
   const st = strings.toString().split(":")[1]
   let ad = []
   for (let i = 0; i >= d; i++) {
      ad.push (strings.toString().split(",")[i]
      )
      return ad;
   }
   strings.forEach((e) =>e.split(":")
      .forEach((f)=>ad.push(f)))

   return `  ${ad}  annsnsjsjs ${as}`
}
const table = gejj`
hello: bill,
fabian: pastor,
david:edojobs`

console.table(table)


const nawa = (str, name, cool)=> {
   return `${str[0]} ${[name]} ${str[1]} ${cool}`
}
let Derek = "Derek"
let gee = "gee"
const nadaa = nawa`hello my  ${Derek} ${gee}`

console.log(nadaa)
console.log(Number.isInteger(nadaa))


//json placeholder
const jsonplaceholder ="https: //jsonplaceholder.typicode.com/users"
function url(url) {
   return new Promise(function(resolve, reject) {
      ajax(url, resolve)
   })
}
url(jsonplaceholder)

