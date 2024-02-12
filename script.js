let c1= document.getElementById("c1"),
    c2=document.getElementById("c2"),
    c3=document.getElementById("c3"),
    c4=document.getElementById("c4"),
    cuento1=document.getElementById("cuento1"),
    cuento2=document.getElementById("cuento2"),
    cuento3=document.getElementById("cuento3"),
    cuento4=document.getElementById("cuento4");





    function mostrar1(){
        cuento1.style.display="flex"
        cuento2.style.display="none"
        cuento3. style.display="none"
        cuento4. style.display="none" 
    }

    function mostrar2(){
        cuento2.style.display="flex"
        cuento1.style.display="none"
        cuento3.style.display="none"
        cuento4.style.display="none"
    }

    function mostrar3(){
        cuento2.style.display="none"
        cuento1.style.display="none"
        cuento3.style.display="flex"
        cuento4.style.display="none"
    } 

    function mostrar4(){
        cuento2.style.display="none"
        cuento1.style.display="none"
        cuento4.style.display="flex"
        cuento3.style.display="none"
    } 
    




    c1.addEventListener("click" , mostrar1);
    c2.addEventListener("click", mostrar2);
    c3.addEventListener("click" , mostrar3);
    c4.addEventListener("click", mostrar4);
