function getAbbr(arg) {
    const name = String(arg)
    let res = ""
    const splitted = name.split(" ")
    for(let i = 0; i < splitted.length - 1; i++) {
        res += splitted[i][0].toUpperCase() + "."
    }
    res += splitted[splitted.length - 1][0].toUpperCase()
    return res
}

//few checks
console.log(getAbbr("John Franklin Kennedy"))
console.log(getAbbr("Walter White"))
console.log(getAbbr("Ertaoz Mizanas Dze Bregvadze"))