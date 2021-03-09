//Declaration
//function showMessage() {
    //alert('I have declared this function. It has no parameters but has a function body. When I call it, this alert message shows in the DOM.');
    //or
//     console.log('I have declared this function. It has no parameters but has a function body. When I call it, this message shows in the console.');
// }
//     showMessage();

//Local variables
    // function showMessage() {
    // let message= "Hello, is this Javacsript?";  //local variable nb! all works with no let!!!
    //alert(message);   
//     console.log(message);                       //sees local variable
// }
//     showMessage();
    //alert(message);                           //doesn't see local variable
//    console.log(message);

//Outer variables
// let userName= 'Joshua';
// function showMessage() {
//     let message= 'Hello, ' + userName;
//     alert(message);
// }
//     showMessage();

//Outer and inner variables
//     let userName= 'Joshua';
// function showMessage() {
//     userName= "Benjamin";   //when does this change the  outer variable?
//     let message= 'Hello, ' + userName;
    //alert(message);
    //console.log(message);
//}
    //alert(userName);
    // console.log(userName); //shows Joshua when let or no let to userName= Benjamin
    // showMessage();          //shows Hello, Benjamin let or no let to userName= Benjamin
    //alert(userName);
    //console.log(userName); //shows Joshua when let to userName= Benjamin
                            //but shows Benjamin when NO let to userName= Benjamin

//and again using let with userName inside the function
//look for outer let being ignored! yes, watch where you declare a variable!!
//     let userName= 'BobOuter';    //global variable - not recommended
//     function showMessage() {
//         let userName= 'BobInner'; 
//         let message= "Hello, " + userName; //BobInner
//         console.log(message);
// }
//         showMessage();          //will Outer or Inner be used? guess- Inner
//         console.log(userName);  //will Outer or Inner be used? guess- Outer

//Parameters /function arguements
// function showMessage(from, text) {
//     console.log(from + ": " + text);
// }
// showMessage('Anne', 'Hello!');      //When the function is called, the given values are copied 
// showMessage('Anne', 'Wassup!');     //to local variables from and text. Then the function uses them.

// function showMessage(from, text) {
//     from= '**' + from + '**';       //decoration of from
//         console.log(from + ": " + text);
// }
//     let from= "Is this Anne?";
//     showMessage(from, "Hello!");    //result - function declaration
//     console.log(from, "Helloee");   //result - variable declaration

//Default values
        //showMessage('Anne');  //no text parameter so function above gives Anne + undefined

//A default text may be specified for when "text" parameter is not specified:
// function showMessage(from, text= "no text parameter") {    
//     console.log(from + ": " + text);    
// } 
//     showMessage('Anne', 'parameter some text ');
//     showMessage('Anne but no text parameter!');
//yes, I see what's happening - see note in DOM undder Default values

//Alternative default parameters. Setting defalt parameter later in function execution
// function showMessage(text) {
//     if(text=== undefined){
//         text= "empty message";
//     }
//         console.log(text);
// }
//         showMessage();
        //showMessage("Not empty");

//or use || to define parameter when empty
// if text parameter is omitted or "" is passed, set it to 'empty'
// function showMessage(text) {
//     text = text || 'empty';
//     ...
//   }
//or use the nullish coalescing operator ??, it’s better when falsy values, 
//such as 0, are considered regular:
// if there's no "count" parameter, show "unknown"
// function showCount(count) {
//     alert(count ?? "unknown");
//   }  
//   showCount(0); // 0
//   showCount(null); // unknown
//   showCount(); // unknown      

//Now for function return - Yeah!!
//A function can return a value back into the calling code as the result.
// function sum(a, b) {
//     return a + b;
// }
//     let result= 1 + 2;
//     console.log(result);

//The directive return can be in any place of the function
//There may be many occurrences of return
// function checkAge(age) {
//     if(age >= 18) {
//         return true;
//     }else{
//         return confirm("Do you have permission from your parents");  //confirm() boolean function
//     }   //false- access denied, true- accessgranted    
// }
    // let age= prompt("How old are you?", 18);    //creates function prompt() text box
    // if (checkAge(age)) {
    //     alert("Access granted. Woo hoo!!");     //true
    // }else{
    //     alert("Access denied. Oh Noooo!!");
    // }

//It is possible to use return without a value. That causes the function to exit immediately.
//if checkAge(age) returns false, then showMovie won’t proceed to the alert.
// function showMovie(age) {
//     if ( !checkAge(age)) {
//         return;
//     }
//         console.log("Showing you the movie...");
// }
//         showMovie();
    

