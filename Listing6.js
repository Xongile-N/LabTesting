'use strict'
const student = {
  name: 'Kwezi',
  studentNumber: 453528
}
console.log(student)
console.log(`${student.name}'s student number is ${student.studentNumber}`)

const addAge = function (theStudent, age) {
  theStudent.age = age
}
addAge(student, 20)
console.log(student)
