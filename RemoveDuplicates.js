function removeDuplicates(arg) {
    let seen = new Set()
    const word = String(arg)
    let res = ""
    for(let i = 0; i < word.length; i++) {
        if(!seen.has(word[i])) {
            res += word[i]
            seen.add(word[i])
        }
    }
    return res
}

//few checks
console.log(removeDuplicates("banana"))
console.log(removeDuplicates("aabbccddee"))
console.log(removeDuplicates("aaaaaaaaaaaa"))
