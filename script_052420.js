    const display = document.getElementById("display");


    function a(value){
  
        if (value === "="){

            calculate();

        } else{

            display.textContent += value;

        }

    }


    function clearAll(){

        display.textContent = "";

    }


    function del(){

        display.textContent = display.textContent.slice(0, -1);
        
    }


    function calculate(){

        try{

            let result = eval(display.textContent);
            display.textContent = result;

        } catch{

            display.textContent = "Error";
            
        }
    }


    function toggleTheme(){

        document.body.classList.toggle("light")
        
    }