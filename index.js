// function  Student(name,grade){
//     this.name = name;
//     this.grade = grade;
// }

// let Saby = Student("sabina", "5")


class Student{
    #name
    #age
    #grade
    #gpa
    #courses

    constructor(name,grade,gpa,age,courses){
        this.#name = name,
        this.#grade = grade,
        this.#gpa = gpa,
        this.#age = age,
        this.#courses = [];
        
    }
    setname(value){
        if (value.length<20){
            this.name = value;
        }else{
            console.log("Your Name cannot be more than 20 characters")
        }
    }
    setage(value){
      if (value>0){
          this.age = value;
      }else{
          alert("Invalid Age")
      }
    }
    setgrade(value){
        if (value > 0){
            this.grade = value;
        }else{
            alert("Invalid grade")
        }
    }
    setgpa(value){
        if (value > 1){
            this.gpa = value;
        }else{
            alert(" We cannot admit you, sorry")
        }
    }
    setcourses(value){
        if( value.length>5){
            this.courses = value;
        }else{
            alert("subjects cannot be more than 5.")
        }
    }

    getname(){
        return this.#name 
    }

   getage(){
       return this.#age
   }

   getgrade(){
    return this.#grade
   }
 
    getgpa(){
        return this.#gpa
    }
    getcourses(){
        return this.#courses
    }

    sayHello(){
        console.log(` Welcome, ${this.#name}. It is a pleasure to admit a ${this.#age} years old with ${this.#gpa} gpa into ${this.#grade}th grade.`)
    }
    printCourses(courses){
        for (i=0; i<courses.length;i++){
            console.log(i);
        }
    }
    // calculateGpa(){

    // }
}
let student1 = new Student();
student1.courses = ["French","English","Mathematics"]