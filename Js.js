function school (examScore) {
   if (examScore <= 40) {
      console.log(` your score: ${
         examScore
      } did not meet cut off mark`)
   } else if (examScore <= 50 && examScore > 40) {
      console.log(` you scored: ${
         examScore
      } and try harder next time `)
   } else if (examScore <= 60 && examScore > 50) {
      console.log(` you scored: ${
         examScore
      } you got a c`)
   } else if (examScore < 70 && examScore > 60) {
      console.log(` you scored: ${
         examScore
      } and you got a B`)
   } else {
      console.log(` you scored: ${
         examScore
      } and you got an A`)
   }
}
const g = prompt("input your score")
const h = Number(g)

school(h)



// function a() {
//    return `$ {
//       this.name.toUpperCase()} i love you and $ {
//       this.girl
//    }`
// }


// function b () {
//    console.log("hello" + a.call(c))
// }
// const c = {
//    name: "derek",
//    girl: "Favour"
// }

// function d (val) {
//    console.log("number: "+ val)
//    console.log("count: ", this.count++)
// }

// const e = {
//    count: 0
// }

// for (let i = 0; i <= 9; i++) {
//    d.call(e, i)
// }

// var g = 6066
// function h () {
//    console.log(this.g)
// }


// h()


// function i (age) {
//    console.log("this is j ", this.j, " and i'm ", age, "years old")
// }

// const k = {
//    j: "call me baby",
//    i: i
// }

// const l = {
//    j: "call me adult",
//    i: i
// }

// k.i.call(k, 25)
// l.i.call(l, 30)



// function m (n, o) {
//    console.log(n, " this is ", o)
//    return (r)=> {
//       console.log(this.r)
//    }
// }
// const s = {
//    r: "rr"
// }
// const p = m.bind(s, "game")


// p("goal")