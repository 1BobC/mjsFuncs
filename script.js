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
