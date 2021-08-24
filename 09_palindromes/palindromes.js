const palindromes = function(txt) {
    txt = txt.toLowerCase();
    let charArray = txt.split("");
    //defines an array of specialCharacters to be filtered
    let specialCharacters = [',', '.', '!', ':', ';', '?', '"', '\'', '¡', '¿', ' '];
    //filters specialCharacters
    let justLetters = charArray.filter(character => !(specialCharacters.includes(character)));
    //reverses a copy of the array of letters 
    let reversedJustLetters = [...justLetters].reverse();
    for (let i=0; i < justLetters.length; i++){
        //if only one word is different, then it isn't a palindrome
        if (justLetters[i] !== reversedJustLetters[i]){
            return false;
        }
    }
    return true;
};


module.exports = palindromes;
