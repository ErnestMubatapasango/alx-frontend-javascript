import getListStudents from "./0-get_list_students";

function getStudentsByLocation(getListStudents, city){

    const students = getListStudents()
    return students.filter(student => {
        return student.location === city
    } )
}
console.log(getStudentsByLocation(getListStudents, "San Francisco"))