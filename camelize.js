function camelize(stmnt) {
    let splitArry = stmnt.split("-");
    if (splitArry[0] == '') {
        splitArry.shift();
    }
    const camelArry = splitArry.map(row => [row[0].toUpperCase(), ...row.slice(1)]);
    let joinedArry = camelArry.join("");
    return joinedArry.split(",").join("");
}
