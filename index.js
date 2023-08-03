// Write your solution in this file!
const employee = {
    name: "Roger Waters",
    streetAddress: "237 Washer Avenue",
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}

const luisObject = {
    name: "Luis",
    favoriteMovie: "Star Wars",
}


console.log(destructivelyUpdateEmployeeWithKeyAndValue(luisObject, "favoriteMovie", "Shrek"))
console.log(luisObject)


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}