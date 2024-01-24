let text = document.getElementById("text");
let button = document.getElementById("button");
let answer = document.getElementById("answer")

button.addEventListener("click", return_message);

const answers_array = [
    "Getting Run Over By a Train!",
    "Contemplating the Meaning of Life in a Bathtub Filled With Lava.",
    "Sneezing Too Hard. Don't hold your sneeze!",
    "Asking the Oracle for a Refund.",
    "Drinking Cyanide Tea With Rasputin. PS: He's still alive.",
    "Falling In Love To Hard. :(( </3",
    "Choking on Waffle With Honey",
];

//Find a smart way to fill the messages by analizing the verbs used.
function return_message() {
    let x = 0
    x = Math.floor(Math.random() * answers_array.length);
    let random_answer = answers_array[x];
    let message = "Die " + random_answer;

    return answer.innerHTML = message;
}

