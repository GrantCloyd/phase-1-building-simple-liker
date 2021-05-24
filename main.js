// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡"
const FULL_HEART = "♥"

// Your JavaScript code goes here!

const buttons = document.querySelectorAll(".like-glyph")
const modal = document.querySelector("#modal")

buttons.forEach(button => button.addEventListener("click", heartMaker))

function heartMaker(obj) {
   obj.classList.toggle("activated-heart")
   obj.textContent = FULL_HEART
}

function heartMaker() {
   mimicServerCall()
      .then(this.classList.toggle("activated-heart"))
      .then((this.textContent = FULL_HEART))
      .catch(e => {
         modal.textContent = e
         modal.classList.toggle("hidden")
         setTimeout(() => modal.classList.add("hidden"), 3000)
      })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         let isRandomFailure = Math.random() < 0.2
         if (isRandomFailure) {
            reject("Random server error. Try again.")
         } else {
            resolve("Pretend remote server notified of action!")
         }
      }, 300)
   })
}
