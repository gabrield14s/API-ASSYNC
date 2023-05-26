import database from '../database/database.js'

export class Student{
    name = '';
    dateOfBirth = '';
    code = 0;
    status = '';
    email = '';

    constructor(name, dateOfBirth, status, email){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.status = status;
        this.email = email;

        if (database.length > 0){
            let lastCode = database[database.length - 1].code;
            this.code = lastCode + 1;   
        } else {
            this.code = 0;
        }
        
        database.push(this);
    }

    static findAll(){
        const studentsInDatabase = database;
        return studentsInDatabase;
    }

}