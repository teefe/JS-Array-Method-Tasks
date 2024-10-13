function camelize(stmnt) {
    let splitArry = stmnt.split("-");
    const camelArry = splitArry.map(row => [row[0].toUpperCase(), ...row.slice(1)]);
    let joinedArry = camelArry.join("");
    return joinedArry.split(",").join("");
}