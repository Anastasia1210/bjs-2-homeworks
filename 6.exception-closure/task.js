function parseCount(data) {
    let newData = Number.parseInt(data);
    if (isNaN(newData)){ 
      const parseError = new Error("Невалидное значение");
      throw parseError;
    };
    return newData;
}

function validateCount(data2) {
     
  try { 
      return parseCount(data2);
      } catch (e){
        return e;
        }
}

// Task 2

class Triangle{ 
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a+this.b) < this.c || (this.a+this.c) < this.b || (this.b+this.c) < this.a) 
        throw new Error ("Треугольник с такими сторонами несуществует");
    }

    getPerimeter() {
      return this.a + this.b + this.c;
    }

    getArea() {
       let p = (this.getPerimeter() / 2);
       let area = Math.sqrt(p (p - this.a)(p -this.b)(p -this.c)).toFixed(3);
       let area1 = Number(area);
       return area1;
    }
}

function getTriangle (sideD, sideE, sideF) {
    
    try {
        return new Triangle(sideD, sideE, sideF);
    } catch (e){
        let errorArr = {
            perimeter: triangle1.getPerimeter(),
            area: triangle1.getArea(),
        }
        return errorArr(); 
    }
}

