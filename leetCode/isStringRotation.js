const isStringRotation = (stringOne, stringTwo) => {
    let i = 0; 
    let j = 0;
    let foundIdx = null;
    let isFound = false; 
    while (i < stringTwo.length) {
        if (stringOne[j] !== stringTwo[i]) {
            i++;
            foundIdx = null; 
            isFound = false;
        } else {
            if (!isFound) {
                isFound = true;
                foundIdx = i;
            }
            i++;
            j++;
        }
    }

    if (!foundIdx) return false;
    return stringOne.includes(stringTwo.slice(0,foundIdx));
}

console.log(isStringRotation('waterbottle', 'erbottlewat'));
console.log(isStringRotation('waterbottle', 'eratbottlew'));
console.log(isStringRotation('waterbottle', 'aterbottlew'));
