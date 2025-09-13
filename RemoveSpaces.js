function removeSpaces(arg) {
    const sentence = String(arg)
    let res = ""
    for(let i = 0; i < sentence.length; i++) {
        if(sentence[i] != " ") res += sentence[i]
    }
    return res
}

//few checks
console.log(removeSpaces("a b c d e"))
console.log(removeSpaces("  Hello   "))
console.log(removeSpaces("  x   y   z   "))
console.log(removeSpaces("              "))