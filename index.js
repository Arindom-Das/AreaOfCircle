// let x;
// x=2;
// console.log(x+3);
// let username = window.prompt("Who's your daddy ? ");
// console.log(username);
// let usernme;
// document.getElementById("submt").onclick = function(){

//     usernme=document.getElementById("input").value;
//     console.log(usernme);
//     document.getElementById("lamel").innerHTML="Hello "+usernme; 
    
// }

// let x="34.23549"; //x=34.23549;
// console.log(typeof x);

// /* 

// Convert to String

// y=String(x);
// y=x.toString();

// console.log(typeof y);

// */

// //let y=parseFloat(x);

// y=x.toFixed(2);
// console.log(y);



document.getElementById("submt").onclick = function(){
        let area;
        let usernme=document.getElementById("input").value;
        // console.log(usernme);
        if(!usernme || usernme == 0){
        window.alert(" EMPTY OR ZERO IS NOT A VALID INPUT ");
        }else{
        area=Math.PI*usernme*usernme;
        area=area.toFixed(2);
        console.log(area);
        document.getElementById("lamel").innerHTML="Area of the Circle: "+area; 
        document.getElementById("submt").remove();
        document.getElementById("input").remove();
        }
    }
    


