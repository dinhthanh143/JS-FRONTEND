let i =100

for (i= 100 ; i<1000 ; i++){
    i = String(i)
    if(  Math.pow(i[0], 3)+ Math.pow(i[1], 3)+ Math.pow(i[2], 3)  == i ){
        console.log(Number(i))
    }
    i = Number(i)
}