let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

   ];
   filterAvg(students)
function filterAvg(obj){
    let newArr = []
    for(let i=0; i<obj.length; i++){
        let result = obj[i].scores.math + obj[i].scores.english + obj[i].scores.literature
        result = result/3
        if(result>=8){
        newArr.push(obj[i])
        }
    }
    console.log(newArr)
}