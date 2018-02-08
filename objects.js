var studentIdCount = 0;
var teacherIdCount = 0;
var subjectIdCount = 0;

function Student(firstName, lastName, grade){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.sections = [];
    this.id = studentIdCount;
    studentIdCount++;
}

function Teacher(firstName, lastName, subject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id = teacherIdCount;
    teacherIdCount++;
}


function Section(name, maxSize){
    this.name = name;
    this.maxSize = maxSize;
    this.students = [];
    this.currentSize = this.students.length;

    this.addTeacher = function(teacher){
      this.teacher = teacher;
    };
    this.removeStudent = function(id){
        for(var prop in this.students){
            if(this.students[prop].id === id){
                this.students -= this.students[prop];
            }
        }
    };
    this.id = subjectIdCount;
    subjectIdCount++;

    this.addStudent = function(student) {
        if(this.currentSize < this.maxSize ){
            this.students.push(student);
            student.sections += this.id;
        }else{
            notification("The " + this.name + " section is full")
        }
    };
    this.sectionSeatsRemaining = function(){
        return (this.maxSize - (this.students.length - 1));
    }


}