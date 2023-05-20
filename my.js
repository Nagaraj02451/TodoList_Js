let input = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let del = document.getElementById("del");
let empty = document.getElementById("empty");
let cont = document.getElementById("cont");

    btn.addEventListener("click" , ()=>{
        empty.hidden = true;
      
        let inVal = input.value;

        if(!inVal){
            alert(" Please enter a topics");
            return
        }

        let frag = document.createDocumentFragment();

        let main = document.createElement("div");
     
        let div = document.createElement("div");
        div.className = "divvalue"
        div.style.margin = "2px"
    
        let inputEl = document.createElement('input');
		    inputEl.className = "text";
		    inputEl.value = inVal;
		    inputEl.setAttribute('readonly', 'readonly');

        let listdiv = document.createElement("div");
        listdiv.className = "listdiv";

        let edit = document.createElement("h5");
        edit.className = "textedit"
        edit.innerText = "Edit"

        let h5 = document.createElement("h5");
         h5.innerHTML = "X";

         listdiv.append(edit , h5);

         div.append(inputEl );
         div.append(listdiv);
 
         main.append(div)
        frag.append(main);
        result.append(frag);

        h5.addEventListener("click" , ()=>{
         main.remove();

         })

          del.addEventListener("click" , ()=>{
          main.remove();
7766
          empty.hidden = false;

        })
        
     edit.addEventListener('click', () => {
         if (edit.innerText === "Edit") {
             edit.innerText = "Save";
             inputEl.removeAttribute("readonly");
             inputEl.focus();
         }
          else {
             edit.innerText = "Edit";
             inputEl.setAttribute("readonly", "readonly");
         }
     });

  
     
     })


     
   



   



    
    
