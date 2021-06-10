function parseCount(data) {
    let a = Number.parseInt(data);
    if (isNaN(a) === true) {
        throw ("Невалидное значение");
    } else {
        return a;
    }
}
 
function validateCount(data) {
     
  try { 
      parseCount(data);
      return parseCount(data);
      } catch {
         return "Невалидное значение";
     }
}

// Task 2

class Triangle{ 
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a+b) < c || (a+c) < b || (b+c) < a) 
        throw "Треугольник с такими сторонами несуществует";
    }

    getPerimeter() {
       return perimeter = this.a+this.b+this.c;
    }

    getArea() {
       let p = getPerimeter();
       return Area = Math.sqrt(p (p - a)(p -b)(p -c)).toFixed(3);

    }
}

function getTriangle (d, e, f) {
    let triangle1 = new Triangle(d, e, f);
    
    try {
        return triangle1;
    } catch {
        return ${triangle1.getArea()} + ${triangle1.getPerimenter()}; 
    }
}

