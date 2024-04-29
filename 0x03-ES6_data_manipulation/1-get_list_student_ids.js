
import getListStudents from "./0-get_list_students";

function getListStudentIds(array){
    
 return array.map(student => {
        return student.id
    })
}

console.log(getListStudentIds(getListStudents()))