function addStudent(){

    var firstName = document.getElementById("sfn").value;
    var lastName = document.getElementById("sln").value;
    var grade = document.getElementById("sgd").value;
    if((firstName === "") ||(lastName === "") || (grade === "")) {
        notification("Invalid Input for Student");
    }else {
        allStudents.push(new Student(firstName, lastName, grade));
        notification("Student " + firstName + " " + lastName + " Added");
    }
    clearBoxes();

}
function addSection(){
    var name = document.getElementById("secName").value;
    var maxSize = document.getElementById("secSize").value;
    if((name === "") ||(maxSize === "")) {
        notification("Invalid Input for Section");
    }else {
        allSections.push(new Section(name, maxSize));
        notification("Section " + name + " Added");
    }
    clearBoxes();
}


function addTeacher(){
    var firstName = document.getElementById("tfn").value;
    var lastName = document.getElementById("tln").value;
    var subject = document.getElementById("tsj").value;
    if((firstName === "") ||(lastName === "") || (subject === "")) {
        notification("Invalid Input for Teacher");
    }else {
        allTeachers.push(new Teacher(firstName, lastName, subject));
        notification("Teacher " + firstName + " " + lastName + " Added");
    }
    clearBoxes();
}

function subList(a){
    var list = allObjects[a];
    var result = "";
    if(a === 0){
        var sections = "";
        for(var i = 0; i < list.length; i++)
            if(list[i].sections.length > 0) {
                for(var v = 0; v < list[i].sections.length; v++) {
                    sections += (list[i].sections[v] + ", ")
                }
                result += (list[i].firstName + " " + list[i].lastName + ", Grade " + list[i].grade + ", Sections: " +"<br>");
            }else {
                result += (list[i].firstName + " " + list[i].lastName + ", Grade " + list[i].grade + " " + "<br>");
            }
    }else{
        if(a === 1){
            for(var b = 0; b < list.length; b++) {
                result += (list[b].firstName + " " + list[b].lastName + " " + list[b].subject + " " +"<br>");
            }
        }else{
            for(var c = 0; c < list.length; c++) {
                var students = "";
                if(list[c].students.length > 0) {
                    for (var d = 0; d < list[c].students.length; d++) {
                        students += ( list[c].students[d].firstName + ", ");
                    }
                }
                result += (list[c].name + " " + list[c].maxSize + " Students: " + students +"<br>");
            }
        }
    }
    return result;
}

function list() {
    var loc = parseInt(document.getElementById("selectList").value);
    document.getElementById("displayList").innerHTML = subList(loc);
}


function clearBoxes() {
    var elements = document.getElementsByTagName("input");
    for (var i=0; i<elements.length; i++) {
        if (elements[i].type === "option") {
            elements[i].value = "";
        }
    }
}

function notification(x){
    document.getElementById("notification").innerHTML = x;
}

function populateStudentToSection(){
    document.getElementById("stus").innerHTML = "";
    for(var i = 0; i < allStudents.length; i++){
        document.getElementById("stus").innerHTML += ("<option value=" + i + ">" + allStudents[i].firstName + "</option>");
    }
}

function populateTeacherToSection(){
    document.getElementById("teach").innerHTML = "";
    for(var i = 0; i < allTeachers.length; i++){
        document.getElementById("teach").innerHTML += ("<option value=" + i + ">" + allTeachers[i].firstName + "</option>");
    }
}

function populateSectionToSection(){
    document.getElementById("sec").innerHTML = "";
    for(var i = 0; i < allSections.length; i++){
        document.getElementById("sec").innerHTML += ("<option value=" + i + ">" + allSections[i].name + "</option>");
    }
}

function populateLists(){
    populateSectionToSection();
    populateStudentToSection();
    populateTeacherToSection();
}

function addToSection(){
    var temp = parseInt(document.getElementById("tOrS").value);
    var itemID = 0;
    var secID = allSections[parseInt(document.getElementById("sec").value)].id;
    var itemName = "";
    if(temp === 0){

        itemID = allStudents[parseInt(document.getElementById("stus").value)].id;
        for(var i = 0; i < allStudents.length; i++){
            if(allStudents[i].id === itemID){
                allSections[secID].addStudent(allStudents[i]);
                console.log(allStudents[i].firstName);
                itemName = allStudents[i].firstName;
                console.log(allSections[secID].students[0])
            }
        }
        notification("Added " + itemName + " to section " + allSections[secID].name + "as a student");
    }else{
        itemID = allTeachers[parseInt(document.getElementById("teach").value)].id;
        for(var b = 0; b < allTeachers.length; b++){
            if(allTeachers[b].id === itemID){
                console.log(allTeachers[b].firstName);
                allSections[secID].addTeacher(allTeachers[b]);
                itemName = allTeachers[b].firstName;
            }
        }
        notification("Added " + itemName + " to section " + allSections[secID].name + " as a teacher");
    }
}