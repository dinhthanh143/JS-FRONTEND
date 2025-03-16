let rectangle ={
width: 10,
height: 5,
getArea : function() { 
    return rectangle.width * rectangle.height;
}
}

let area = rectangle.getArea();

console.log(`Dien tich hinh chu nhat: ${area}`)

