let dis=document.querySelector("#dis");
let buttons=document.querySelectorAll("button");
// console.log(buttons);
let dis1="";
let abtn=Array.from(buttons);
// console.log(abtn);
abtn.forEach((val)=>{
    // console.log(val);
    val.addEventListener("click",(e)=>{
        // console.log(e);
        // console.log(e.target);
        if(e.target.innerHTML=="DEL"){
            dis1=dis1.substring(0,dis1.length-1);
            dis.value=dis1;

        }
        else if(e.target.innerHTML=="AC"){
            dis1="";
            dis.value=dis1;
        }
        else if(e.target.innerHTML=="="){
            dis1= eval(dis1);
                dis.value=dis1;
            
        }
        else{
             dis1 += e.target.innerHTML; 
            dis.value = dis1;
             
        console.log(e.target.innerHTML)

        }
       

    })

});
