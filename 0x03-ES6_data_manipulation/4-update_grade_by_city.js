import getListStudents from "./0-get_list_students"

function updateStudentGradeByCity(getListStudents, city, newGrades){

    const students = getListStudents()

    const filteredStudents = students.filter(student => student.location === city);

    const upgradedStudents = filteredStudents.map(student => {
        const gradeObject = newGrades.find(grade => grade.studentId === student.id)

        if(gradeObject){
         student.grade = gradeObject.grade 
        }
        return student
    })
    return upgradedStudents
}
const newGrades = [
    { studentId: 1, grade: "A" },
    { studentId: 5, grade: "B" }
];

console.log(updateStudentGradeByCity(getListStudents, city, newGrades))