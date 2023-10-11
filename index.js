
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
    


