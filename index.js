const employee = {
    name: "Baphomet", 
    streetAddress: "1122 Boogey Boogey Ave, 9th Circle, Hell, 00000"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
return {...employee, [key]: value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key]=value;
return employee;
}
function deleteFromEmployeeByKey(employee, key, value){
let newEmp = {...employee}
delete newEmp[key]; 
return newEmp;   
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
delete employee[key];
return employee;
}
