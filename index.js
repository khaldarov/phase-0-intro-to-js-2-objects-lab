// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}
// console.log(employee.name, employee.streetAddress)
//
function updateEmployeeWithKeyAndValue(object, key, value) {
    // const employeeCopy0 = {...employee}
    // object[key] = value
    // return employeeCopy0
    return { ...object, [key]:value }
}
console.log(employee)
console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"))
updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
//
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "Z District"))
//
function deleteFromEmployeeByKey(object, key) {
    // const employeeCopy1 = {...employee}
    delete {...object[key]}
    return {...object[key]}
}
deleteFromEmployeeByKey(employee, "name");
//
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"))