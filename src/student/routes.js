const {Router} = require("express");

const studentController = require("./controller")
const router = Router();



router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudentsByID);
router.post('/', studentController.addStudent);
//post --- Postman
// localhost :300/


module.exports = router;

//--------------------------------------------------------------------------------------------


