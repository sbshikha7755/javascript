// const student = {
//     Name : "Shikha Bhardwaj",
//     Std : "12",
//     Subject : "maths",
//     Roll  : "12634373635",
//     Address : "C33/128 Chandua Chittupur Varanasi"
// }
// console.log(student);
// document.getElementById("para").innerHTML="My Name is " + student.Name + "  " + "I study class in" + " " + student.Std
// document.getElementById("para").innerHTML=student
 

const resume = {
    Name : "Shikha",
    Eduaction : "BCA",
    Skills : ["Web Develpoer","Full Stack", "Fronted Devloper"]

}
resume.Name = "Ram";
resume.Age = 20;

delete resume [ 'Age'];
console.log(resume.Skills);
document.getElementById("para").innerHTML="I am" + " " + resume.Name + " " + "and" + " " + "I am " + resume.Age;

