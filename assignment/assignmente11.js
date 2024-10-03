function validate1(){
    
    var a=document.getElementById("vala").value;
    var b=document.getElementById("valb").value;
    
    var c=Number(a)+Number(b);
    // if(a===Number and b====Number){
    //     var c=Number(a)+Number(b);
        
    // }else{
    //     var c="please enter numbers"
    // }
    // alert(c);
    
    // if(c=="Naan"){
    //     var c="please"
        
    // }else{
    //     var c=Number(a)+Number(b);
    // }
    document.getElementById("res").value=c;

    
}
function validate2(){
    var a=document.getElementById("vala").value;
    var b=document.getElementById("valb").value;
    var c=Number(a)*Number(b);
    document.getElementById("res").value=c;
}
function validate3(){
    var a=document.getElementById("vala").value;
    var b=document.getElementById("valb").value;
    var c=Number(a)/Number(b);
    document.getElementById("res").value=c;
    
}
function validate4(){

    var a=document.getElementById("vala").value;
    var b=document.getElementById("valb").value;
    var c=Number(a)-Number(b);
    document.getElementById("res").value=c;
}
function validate5(){
    var a=document.getElementById("vala").value;
    var b=document.getElementById("valb").value;
    var c=Number(a);
    var d=Number(b);
    if(c===Number && d===Number){
        alert()
    }
    // console.log(typeof(c));
//     if(c>d){
        
//         document.getElementById("res").value="Value1 is greater";

//     }else{
//         document.getElementById("res").value="Value2 is greater";
        
//     }
// }