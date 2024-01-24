/* ---code--- */
function count(string) {
    const start = performance.now();
    if (string === "") { return {}; }

    let i, k, single_chars, new_char, obj;
    i = k = 0;
    new_char = true;
    obj = {};
    single_chars = [string[0], 1];

    for (i = 1; i < string.length; i++) {
        for (k = 0; k < single_chars.length; k += 2) {
            if (string[i] === single_chars[k]) {
                single_chars[k + 1]++;
                new_char = false;
            }
        }
        if (new_char === true) {
            single_chars.push(string[i]);
            single_chars.push(1);
        }
        new_char = true;
    }

    for (i = 0; i < single_chars.length; i += 2) {
        obj[`${single_chars[i]}`] = single_chars[i + 1];
    }
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
    return obj;
}

/* ---test cases--- */
//console.log(count(''));//{}
//console.log(count('a'));//{ 'a': 1 }
//console.log(count('ab'));//{ 'a': 1, 'b': 1 }
//console.log(count('aba'));//{ 'a': 2, 'b': 1 }
count('ABCaaaBAcAchgiogioGFADSIOGiGHighiasfhgioGHAFIGifgoiAFGHIOAGFiASFIUgasfuagfpiagfiaGFISGAISOFGIAgfafgiaghfiaugfpiagfpHASFPUIOHGSPIFGaipfuiagufgUIAGSFUIUAFGaufpagfagfioagfiogaoifgaoigfOIUYAFGOGOIF');