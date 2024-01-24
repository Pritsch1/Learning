
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]//f
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]//f
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]//f
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

//cards from https://www.freeformatter.com/credit-card-number-generator-validator.html
const visa1 = "4916665988802968";
const visa2 = "4916267290173624";
const visa3 = "4606271111286108383";

const mastercard1 = "5446444094932119";
const mastercard2 = "5466521551673701";
const mastercard3 = "5168751917428091";

const amex1 = "374872970616025";
const amex2 = "341076472410628";
const amex3 = "346061394579242";

const discover1 = "6011226649191413";
const discover2 = "6011194885784806";
const discover3 = "6011905213376662231";

const JCB1 = "3545528601439462";
const JCB2 = "3533677528396968";
const JCB3 = "3533394273639375843";

const dinersclubNA1 = "5599174068624070";
const dinersclubNA2 = "5444543183496332";

const dinersclunCB1 = "30138338713250";
const dinersclunCB2 = "30598837685673";
const dinersclunCB3 = "30399306436718";

const dinersclubINT1 = "36575767225336";
const dinersclubINT2 = "36990887002723";
const dinersclubINT3 = "36311430950260";

const maestro1 = "6762890203273908";
const maestro2 = "6304481337297206";
const maestro3 = "6763026966457516";

const visaelectron1 = "4508886849607891";
const visaelectron2 = "4844158586504456";
const visaelectron3 = "4175004661772445";

const instapayment1 = "6398833037710697";
const instapayment2 = "6391461845482650";
const instapayment3 = "6398126967683269";

// Codecademy batch
const batch = [
    valid1, valid2, valid3, valid4, valid5,
    invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5
];

//free formater batch
const batch2 = [
    visa1, visa2, visa3,
    mastercard1, mastercard2, mastercard3,
    amex1, amex2, amex3,
    discover1, discover2, discover3,
    JCB1, JCB2, JCB3,
    dinersclubNA1, dinersclubNA2,
    dinersclunCB1, dinersclunCB2, dinersclunCB3,
    dinersclubINT1, dinersclubINT2, dinersclubINT3,
    maestro1, maestro2, maestro3,
    visaelectron1, visaelectron2, visaelectron3,
    instapayment1, instapayment2, instapayment3
];

//------------------------- testing functions
/* add or subtract 1 from last digit to make cards from batch2 invalid */
function invalidate(arr) {
    let tempArr = [];
    let i, j;
    i = j = 0;

    for (i = 0; i < arr.length; i++) {
        tempArr = arr[i].split("");
        for (j = 0; j < tempArr.length; j++) {
            tempArr[j] = parseInt(tempArr[j]);
        }
        if (tempArr[tempArr.length - 1] < 9) {
            tempArr[tempArr.length - 1] += 1;
        } else {
            tempArr[tempArr.length - 1] -= 1;
        }
        arr[i] = tempArr;
    }
    return arr;
}
const invalidatedBatch = invalidate(batch2);
//------------------------- testing functions

// Add your functions below:

// turn a CC string into an array
function stringToint(x) {
    let arr = x;

    if (typeof arr === "string") {
        arr = arr.split("");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
        }
    }
    return arr;
}

// checks single cards
function validateCred(arr) {
    let i, doubleIt, sum, temp;
    i = doubleIt = sum = temp = 0;
    let arrCopy = arr;
    arrCopy = stringToint(arrCopy);

    for (i = arrCopy.length - 1; i >= 0; i--) {
        if (doubleIt === 1) {
            temp = arrCopy[i];
            temp *= 2;
            if (arrCopy[i] > 4) {
                temp -= 9;
            }
            sum += temp;
            temp = 0;
            doubleIt = 0;
        } else {
            sum += arrCopy[i];
            doubleIt = 1;
        }
    }
    if (sum % 10 == 0) { return true; }
    return false;
}

// checks the nested array for invalid cards. Returns another array
function findInvalidCards(arr) {
    let i = 0;
    let falseArr = [];

    for (i = 0; i < arr.length; i++) {
        if (validateCred(arr[i]) === false) {
            let arrCopy = arr[i];
            arrCopy = stringToint(arrCopy);
            falseArr.push(arrCopy);
        }
    }

    return falseArr;
}

// returns companies that mailed invalid numbers
function idInvalidCardCompanies(arr) {
    let company = ["Amex (American Express)", "Visa", "Mastercard", "Discover"];
    let companyDigit = [3, 4, 5, 6];
    let returnArr = [];
    let i = 0;

    for (i = 0; i < arr.length; i++) {
        switch (arr[i][0]) {
            case 3:
                companyDigit[0] = 1;
                break;
            case 4:
                companyDigit[1] = 1;
                break;
            case 5:
                companyDigit[2] = 1;
                break;
            case 6:
                companyDigit[3] = 1;
                break;
            default:
                return "error 468!"
                break;
        }
    }
    for (i = 0; i < companyDigit.length; i++) {
        if (companyDigit[i] === 1) { returnArr.push(company[i]); }
    }

    return returnArr;
}

/* Turn invalid batch into valid */
function turnValid(arr) {
    let i, j, k, doubleIt, sum, temp, rest, sub;
    i = j = k = doubleIt = sum = temp = rest = sub = 0;
    let sumArr = [];
    let validCardsArr = [];
    let arrCopy = [];

    for (i = 0; i < arr.length; i++) {
        arrCopy = arr[i];
        arrCopy = stringToint(arrCopy);
        sum = doubleIt = 0;
        for (j = arrCopy.length - 1; j >= 0; j--) {
            if (doubleIt === 1) {
                temp = arrCopy[j];
                temp *= 2;
                if (arrCopy[j] > 4) {
                    temp -= 9;
                }
                sum += temp;
                temp = 0;
                doubleIt = 0;
            } else {
                sum += arrCopy[j];
                doubleIt = 1;
            }
        }
        sumArr[i] = sum % 10;
    }
    for (i = 0; i < arr.length; i++) {
        validCardsArr[i] = arr[i];
    }

    for (i = 0; i < sumArr.length; i++) {
        sub = sumArr[i];
        for (j = validCardsArr[i].length - 1; j >= 0; j -= 2) {
            if (sumArr[i] > 0 && sumArr[i] < 6) {
                for (k = validCardsArr[i][j]; k > 0; k--) { //sumArr[i] > 0
                    validCardsArr[i][j]--;
                    sumArr[i]--;
                    if (sumArr[i] === 0) { k = 0; }
                }
            }
            if (sumArr[i] > 5 && sumArr[i] < 10) {
                for (k = validCardsArr[i][j]; k < 10; k++) { //sumArr[i] < 10
                    validCardsArr[i][j]++;
                    sumArr[i]++;
                    if (sumArr[i] === 10) { k = 10; }
                }
            }
        }
    }
    return validCardsArr;
}

/* checks that have been done */
/*
validateCred() correctly checks all codecademy's cards
findInvalidCards() correctly checks all codecademy's cards
findInvalidCards() correctly checks all outside source cards, thus validateCred() works also.
idInvalidCardCompanies(findInvalidCards()) correctly IDs all codecademy's cards "has to id invalid cards first to work"
invalidate() correctly invalidates outside source cards. Add or Sub 1 from last digit
turnValid() correctly returns a new array with invalid cards turned valid
*/

//console.log(invalidatedBatch);
let invalidCardsBatch = findInvalidCards(batch2);
console.log("Invalid cards: ");
console.log(invalidCardsBatch);
turnValid(invalidCardsBatch);
console.log("Invalid cards after: ");
console.log(invalidCardsBatch);
console.log("Checking cards");
console.log(findInvalidCards(invalidCardsBatch));