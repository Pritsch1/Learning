//required fields(passing test only)
//document.getElementById('name').required = true; document.getElementById('email').required = true; document.getElementById('number').required = true;

//--------------------------------DO NOT MOVE
//ID assingments
const name = document.getElementById('name'), lastName = document.getElementById('lastName'), email = document.getElementById('email'), number = document.getElementById('number'), submit = document.getElementById('survey-form'), dropdown = document.getElementById("dropdown");
let warningTimeout, warningBox = document.createElement("div");
warningBox.className = "warning";
let timer = 3000;
//Event Listeners
number.addEventListener('blur', (number) => {
    numberLength(number)
}, true);
email.addEventListener('blur', (email) => {
    checkEmail(email)
}, true);

name.addEventListener('keypress', checkName, false);
lastName.addEventListener('keypress', checkNameL, false);
number.addEventListener('keypress', checkNumber, false);
submit.addEventListener('submit', formChecker);
//--------------------------------DO NOT MOVE


//On submit checks
const nameMsg = "First Name Required!", lastNameMsg = "Last Name Required!", emailMsg = "Wrong Format!", numberMsg = "Insert a Valid Phone Number!", dropdownMsg = "Select an Option!";
function formChecker(x) {
    classChanger(name, "error", "label-forms");
    classChanger(lastName, "error", "label-forms");
    classChanger(email, "error", "label-forms");
    classChanger(number, "error", "label-forms");
    if (runCheck(name, nameMsg) === false) return x.preventDefault();
    if (runCheck(lastName, lastNameMsg) === false) return x.preventDefault();
    if (runCheck(email, emailMsg) === false) return x.preventDefault();
    if (runCheck(number, numberMsg) === false) return x.preventDefault();
    if (runCheck(dropdown, dropdownMsg) === false) return x.preventDefault();
}

function runCheck(target, msg) {
    if (cond(target) === true) {
        timer = 800;
        displayWarning(msg, target);
        timer = 3000;
        target.focus()
        target.scrollIntoView({ block: "center" });
        classChanger(target, "label-forms", "error")
        return false;
    }
}

let emailCondition = true;
function cond(x) {
    if (x === name) {
        if (name.value.length < 2) return true;
    }
    if (x === lastName) {
        if (lastName.value.length < 2) return true;
    }
    if (x === email) {
        if (emailCondition === true) return true;
    }
    if (x === number) {
        if (number.value.length < 10 || number.value.length > 12) return true;
    }
    if (x === dropdown) {
        if (dropdown.value === "select") return true;
    }
}

//Flash error
function classChanger(x, remove, add) {
    x.classList.remove(remove);
    x.classList.add(add);
}

//On input checks/prevents
function checkName(x)
{
    let charCode = x.charCode;
    if (charCode != 0) {
        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122))
        {
            x.preventDefault();
            displayWarning("Please use letters only.", name);
        }
    }
}

function checkNameL(x) {
    let charCode = x.charCode;
    if (charCode != 0) {
        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && charCode !== 32) {
            x.preventDefault();
            displayWarning("Please use letters only.", lastName);
        }
    }
}

function checkEmail(ref)
{
    const x = ref.target.value;
    let at = 0, atPos = -1, dotPos = 0, skip = 0, dotCount = 0, dotPos2 = 0;
    for (let i = 0; i < x.length; i++)
    {
        if (x[i] === "@" && at < 2) { ++at; atPos = i };
        if (at === 1 && x[i] === "." && skip === 0) { dotPos = i; ++skip; };
        if (at === 1 && x[i] === "." && skip === 1 && dotPos !== i) { dotPos2 = i; ++skip; };
        if (at === 1 && x[i] === ".") ++dotCount;
    }
    emailCondition = false;
    if (at !== 1 || atPos === 0 || x[atPos + 1] === "." || x[dotPos - 1] === "@" || x[dotPos + 1] === undefined || dotCount === 0 || x[dotPos2 + 1] === undefined) {
        emailCondition = true;
        return displayWarning("Is the format correct? e.g (JachTheNickleSon@mail.com)", email);
    }
}

function checkNumber(x)
{
    const l = x.target.value.length;
    let charCode = x.charCode;
    if (charCode != 0) {
        if (charCode < 48 || charCode > 57) {
            x.preventDefault();
            return displayWarning("Please use numbers only.", number);
        }
        if (l > 10)
        {
            x.preventDefault();
            return displayWarning("Phone Number Can't be Larger then 11 digits.", number);
        }
    }
}

function numberLength(ref) {
    const x = ref.target.value;
    for (let i = 0; i < x.length; i++) {
        if (x.length < 10) displayWarning("Too Short!", number);
    }
}

//Aid display
function displayWarning(msg, target)
{
    warningBox.innerHTML = msg;

    if (document.body.contains(warningBox)) {
        window.clearTimeout(warningTimeout);
    } else {
        // insert warningBox after myTextbox
        target.parentNode.insertBefore(warningBox, target.nextSibling);
    }

    warningTimeout = window.setTimeout(function ()
    {
        warningBox.parentNode.removeChild(warningBox);
        warningTimeout = -1;
    }, timer);
}