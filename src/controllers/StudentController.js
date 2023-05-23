class StudentController {
    showViewStudent(req, res){
        res.render('viewStudent');
    }
}

export default new StudentController();