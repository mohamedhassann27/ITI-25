// [x] Task 1
// var userName;
// do {
//     userName= prompt("Enter your name")
// } while (userName==null || userName=="" || isFinite(userName));

// userName= userName.toLocaleLowerCase()
// var count=0;
// for(var i=0; i<userName.length; i++){
//     userName[i]=='e'? count++: count;
// }
// alert('count of e is: '+ count)


console.log('----------');


// [x] Task 2
// var arr=[];
// for(var i=0; i<3; i++){
//     do {
//         var num= prompt('Enter a valid number')
//     } while (!isFinite(num));
//     arr.push(num)    
// }

// function add(){
//     var res=0;
//     for(var i=0; i<arguments.length; i++){
//         // console.log(arguments[i]); (is string)
//         res+= +(arguments[i])
//     }
//     document.writeln('The Addition of numbers is: ', res, '</br>');
// }
// add(arr[0],arr[1],arr[2])
// // add(...arr)

// function multi(){
//     var res=1;
//     for(var i=0; i<arguments.length; i++){
//         res*= +(arguments[i])
//     }
//     document.writeln('The Multiplication of numbers is: ', res, '</br>');
// }
// multi(...arr)

// function divi(){
//     var res= arguments[0];
//     for(var i=1; i<arguments.length; i++){
//         if(res/arguments[i] == Infinity){
//             document.writeln('Invalid result: Infinity')
//             return
//         }else{
//             res/= arguments[i]
//         }
//     }
//     res=Math.round(res)
//     document.writeln('The division of numbers is: ', res)
// }
// divi(...arr)


console.log('------------');


// [x] Task 3
// var arr=[];
// var x=1;
// do {
//     var num= prompt('Enter the valid number')
//     arr.push(parseInt(num))
//     x++;
// } while (x<=5 || num==null || num=="" || isNaN(num));

// document.writeln("Sorted in ascending order: ", arr.sort((a,b)=> a-b), '</br>')
// document.writeln("Sorted in descending order: ", arr.sort((a,b)=> b-a), '</br>')


console.log('-----------');


// [x] Task 4
// var nameReg= /^[a-zA-Z\s]+$/
// var mobileReg= /^(010|011|012)[0-9]{8}$/
// var emailReg= /\w*@[a-z]{2,7}\.[a-z]{2,5}/
// // var nam= 'Mohamed'
// // var mobile= '01235334532'
// // var email= 'sdfsf2@gmail.com'
// var nam= prompt("Enter your name")
// var mobile= prompt("Enter your mobile number")
// var email= prompt("Enter your email")

// function nameValidate(){
//     return nameReg.test(nam)
// }
// function mobileValidate(){
//     return mobileReg.test(mobile)
// }
// function emailValidate(){
//     return emailReg.test(email)
// }

// if(nameValidate() && mobileValidate() && emailValidate()){
//     document.writeln('Welcome, ', nam, ' your mobile number is ', mobile, ', and your email is ', email)
// }else{
//     !nameValidate()? nam= prompt('Enter a valid name:'): null
//     !mobileValidate()? mobile= prompt('Enter a valid mobile:'): null
//     !emailValidate()? email= prompt('Enter a valid email:'): null
// }


console.log('------------');

// [x] Task 5
// var calulator= function(){
//     var res=0;
//     for(var i=0; i<arguments.length; i++){
//         if(isNaN(arguments[i])){
//             alert("String values are not allowed")
//             return
//         }else{
//             res+= arguments[i]
//         }
//     }
//     document.writeln("The total of numbers is: ", res);
// }

// calulator(2,4,3)
// calulator(2,"mo",3)