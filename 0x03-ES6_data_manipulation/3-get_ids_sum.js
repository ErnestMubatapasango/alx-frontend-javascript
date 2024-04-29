
import getListStudents from "./0-get_list_students"

function getStudentIdsSum(getListStudents){

    const students = getListStudents();
    return students.reduce((total, students) => total + students.id, 0)
    
}
console.log(getStudentIdsSum(getListStudents));