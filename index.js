//If statement

var age=23;
    if(age>18){
    //console.log('You are adult')
}


//if else statement
var age=11;
if(age>18){
    //console.log('You are adult')
}
else{
    //console.log('You are Child')
}

//if else and else if statement
var mark=97;
if(mark>=80 && mark<=100){
    console.log('You got A+')
}
else if(mark<80 && mark>=70){
    console.log('You got A')
}
else if(mark<70 && mark>=60){
    console.log('You got A-')
}
else if(mark<60 && mark>=50){
    console.log('You got B')
}
else if(mark<50 && mark>=40){
    console.log('You got C')
}
else if(mark<40 && mark>=33){
    console.log('You got D')
}
else{
   console.log('You fail')
}