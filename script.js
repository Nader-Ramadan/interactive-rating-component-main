let rates = document.querySelectorAll(".num");
let ans = document.querySelector(".ans");
let submit = document.querySelector("button");
let rating = document.querySelector(".rating");
let msg = document.querySelector(".msg");
let answer = 0;

rates.forEach(
    (rate, index) => {
        rate.addEventListener("click", () => {
            rates.forEach(
                r => r.classList.remove("selected"))
            rate.classList.add("selected");
            answer = index + 1;
            ans.innerHTML = "You selected " + answer + " out of 5"
            submit.onclick = () => {
                if (answer > 0) {
                    rating.classList.add("hide");
                    msg.classList.add("show");
                }
            }
        })
    }
)