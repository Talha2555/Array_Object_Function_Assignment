// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?
;
var students = [
    { name: "Talha khan", seniorStatus: false, isAssignmentDone: true },
    { name: "Areesha", seniorStatus: true, isAssignmentDone: true },
    { name: "haider", seniorStatus: true, isAssignmentDone: false },
    { name: "wajid", seniorStatus: true, isAssignmentDone: true },
    { name: "huzaifa", seniorStatus: false, isAssignmentDone: false },
    { name: "ahmed", seniorStatus: true, isAssignmentDone: true }
];
// console.log(students);
// students who have completed thier assignments and are seniors==============
function completedAssignment() {
    var completedAssignment = students.filter(function (students) {
        return students.isAssignmentDone === true && students.seniorStatus === true;
    });
    console.log(completedAssignment);
    console.log("\n These students hava completed thier Assignment");
}
completedAssignment();
//students who hava not completed thier assignment 
function notCompletedAssignment() {
    var notCompletedAssignment = students.filter(function (students) {
        return students.isAssignmentDone === false && students.seniorStatus === true;
    });
    console.log(notCompletedAssignment);
    console.log("These students hava not completed thier assignment");
}
notCompletedAssignment();
//students who are not seniors but have completed thier assignment
function notSeniorStudents() {
    var notSeniorStudents = students.filter(function (students) {
        return students.seniorStatus === false && students.isAssignmentDone === true;
    });
    console.log(notSeniorStudents);
    console.log(" These students are not seniors but have completed thier assignment");
}
notSeniorStudents();
