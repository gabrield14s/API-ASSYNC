import { Student } from "../model/Student.js"; 

class StudentController {
    showAll(req, res){
        const studentsByFindAll = Student.findAll(); 
        res.render('allStudents', {Student: studentsByFindAll});
    }

    form(req, res){
        res.render('viewStudent');
    }

    post(req, res){
       return new Student(req.body.name, req.body.dateOfBirth, req.body.status, req.body.email);
    }
    
}

export default new StudentController();