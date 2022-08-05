function watch() {

   this.start = function() {
      return new Date()
   }
   this.stop = function() {
      return new Date()
   }
   let time = function () {
      const t = this.stop() - this.start
      return t
   }
   this.t = function () {
      console.log(time)
   }
   Object.defineProperty(
      this, "diff", {
         get: function() {
            console.log(time)
         }
      })
}

const t = new watch()
t.start()
t.stop()
t.t()