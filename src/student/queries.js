
// students query
const getAllStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1"
const addStudent = "INSERT INTO students (name, age) VALUES ($1, $2) RETURNING *";

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent
}