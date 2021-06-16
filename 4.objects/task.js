function Student(name, gender, age) {
  this.name = name; 
  this.gender = gender;
  this.age = age; 
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  this.marks.push(mark); 
}

Student.prototype.addMarks = function(...mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  this.marks.push(...mark)
} 

Student.prototype.getAverage = function() {
  let sum = 0;
  for (let i = 0; i < marks.length; i++){
    sum += this.marks[i];
  }
  this.averageGrade = sum / marks.length;
} 

Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}

// ваш код для остальных методов