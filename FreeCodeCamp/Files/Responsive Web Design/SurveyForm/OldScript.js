let name = document.getElementById('name'), nameCheck = document.getElementById('nameAssist');
let email = document.getElementById('email'), emailCheck = document.getElementById('emailAssist');
let number = document.getElementById('number'), numberCheck = document.getElementById('numberAssist');

name.oninput = checkName;
email.addEventListener('blur', (email) => {
    checkEmail(email)
}, true);
number.addEventListener('blur', (number) => {
    checkNumber(number)
}, true);
//number.oninput = numberFormat;

function checkName(x)
{
    const ref = x.target.value;
    nameCheck.textContent = `${onlyLetters(ref)}${spaces(ref)}`;
    error(name, nameCheck);
}

function checkEmail(x)
{
    const ref = x.target.value;
    emailCheck.textContent = `${emailFormat(ref)}`;
    error(email, emailCheck);
}

function checkNumber(x) {
    const ref = x.target.value;
    numberCheck.textContent = `${numberFormat(ref)}`;
    error(number, numberCheck);
}
//Try to delete worng inputed chars
/*function numberFormat(ref)
{
    const x = ref.target.value;
    if (/[0-9]/g.test(x[x.length - 1]) !== true) return number = number.slice(0, x.length - 1);
    return number;
}*/

function numberFormat(x)
{
    for (let i = 0; i < x.length; i++)
    {
        if (/[0-9]/g.test(x[i]) !== true || x.length > 12 || x.length < 10) return "Wrong Format!";
    }
    return "";
}
function emailFormat(x)
{
    let skip = -2;
    for (let i = 0; i < x.length; i++)
    {
        if (x[i] === "@") skip++;
        if (x[i] === "." && skip > -2) skip++;
    }
    return skip === 0 ? "" : "Wrong Format!"
}

function error(x ,y)
{
    let num = y.innerText.length;
    if (num > 0) x.style.background = "#FF6443";
    if (num === 0) x.style.background = "white";
}

function onlyLetters(x)
{
    let invalidChar = false;
    for (let i = 0; i < x.length; i++) {
        if (/([A-Za-z]|\s)/g.test(x[i]) !== true) invalidChar = true;
    }
    return invalidChar === true ? "Text Only! " : "";
}

function spaces(x) {
    let space = 0, spacePos = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === " ") { space++; spacePos = i+1;}
    }
    if (space > 1 || x[0] === " ") return "Too Many Spaces!";
    if (x[spacePos] === undefined || x[spacePos+1] === undefined || space === 0) return "Last Name Needed";
    return "";
}