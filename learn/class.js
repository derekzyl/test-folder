class hello{
   constructor(acode, termux){
      this.acode = acode
      this.termux=termux
   }
    coder(){
      console.log(this.acode, this.termux)
   }
}
const a = new hello("acode editor", "termux god")
a.coder()