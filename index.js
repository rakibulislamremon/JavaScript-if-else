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
    //console.log('You got A+')
}
else if(mark<80 && mark>=70){
    //console.log('You got A')
}
else if(mark<70 && mark>=60){
    //console.log('You got A-')
}
else if(mark<60 && mark>=50){
    //console.log('You got B')
}
else if(mark<50 && mark>=40){
    //console.log('You got C')
}
else if(mark<40 && mark>=33){
    //console.log('You got D')
}
else{
   //console.log('You fail')
}


//Switch Case statement 
var mark=31
switch(true){
case(mark<=100 && mark>=80):
    //console.log('You get A+');
break;
case(mark<=80 && mark>=70):
    //console.log('You get A');
break;
case(mark<=70 && mark>=60):
    //console.log('You get A-');
break;
case(mark<=60 && mark>=50):
    //console.log('You get B');
break;
case(mark<=50 && mark>=40):
    //console.log('You get C');
break;
case(mark<=40 && mark>=33):
    //console.log('You get D');
break;
            
default:
    //console.log('you are fail')
}

//for loop
var i;
for(i=0;i<10;i=i+1 ){
    //console.log(i+ "<button>Submit</button> </br>")
}   

//loop continue statement
var i;
for(i=0;i<10;i=i+1 ){
    if(i==5 || i==8){
        continue;
    }
    //console.log(i+ "<button>Submit</button> </br>")
}

//loop break statement
var i;
for(i=0;i<10;i=i+1 ){
    if(i==5){
        break;
    }
    //console.log(i+ "<button>Submit</button> </br>")
}

//while loop
var i=0;
while(i<7){
    //console.log(i+ "<button>Submit</button> </br>")
    i=i+1 
} 

// Do while loop
var y=0;
do{
    //console.log(y+"<button> Do while loop</button> <br>")
    y=y+1;
}
while(y<5)


//function
function addNum(){
    var num1=20;
    var num2=40;
    var num3=num1+num2
    //console.log(num3 )
}
addNum()
addNum()


//function perameter pass
function addNum(num1,num2){
    var num3=num1+num2
    //console.log(num3 + "<br>")
}
addNum(10,40)
addNum(50,60)

function name(name){
    //console.log(name+ "<br>")
}
name("Md Remon")
name("Rakibul islam Remon")

//function return
function add(n1,n2){
    return n1-n2;
}
var ne=add(51,19)+5;
//console.log(ne)

//for loop in array
var catagory=["Remon","Rakib","Sakib","Adil","Sayem","Rabbi"]
for(var item in catagory){
    //console.log(catagory[item]+"<br>")
}

//for in loop object
var person={
    name:"Remon",
    Age:"20",
    isBd:true,
    Height:"5.5"
}
for(var item in person){
    console.log(person[item]+"<br>")
}
