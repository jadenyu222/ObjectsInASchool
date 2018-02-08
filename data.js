var allStudents = [];
var allTeachers = [];
var allSections = [];
var allObjects = [allStudents, allTeachers, allSections];

allStudents.push(new Student("john", "doe", "11"));
allStudents.push(new Student("Frank", "johnson", "12"));
allStudents.push(new Student("leeroy", "goldberg", "10"));
allStudents.push(new Student("joseph", "eternal", "9"));

allTeachers.push(new Teacher("lena", "Jimenez", "english"));
allTeachers.push(new Teacher("jeff", "johnson", "math"));
allTeachers.push(new Teacher("Horton", "young", "history"));
allTeachers.push(new Teacher("jackson", "mcdonald", "science"));

allSections.push(new Section("Advanced Math", 35));
allSections.push(new Section("english Year 2", 20));
allSections.push(new Section("biology", 30));
allSections.push(new Section("U.S History", 16));

