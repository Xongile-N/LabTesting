'use strict'
const course = {
  courseCode: 'ELEN4010'
}
const checkYear = function (courseToCheck) {
  const code = courseToCheck.courseCode.slice(0, -2)
  for (let i = 10; i < 70; i++) {
    if (code.includes(i)) { return `${courseToCheck.courseCode} is offered in year ${i / 10}` }
  }
}
console.log(checkYear(course))
