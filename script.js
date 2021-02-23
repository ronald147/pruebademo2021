document.querySelector("#push").onclick = function(){
    var texto_ingreso = parseInt(document.querySelector("#newtask input").value);
    if(texto_ingreso.length == 0){
        alert("Ingresa un valor");
    }else{
        document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `; 
        var curren_tasks = document.querySelectorAll(".delete");
        for(var i = 0; i<curren_tasks.length; i++){
            curren_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".task")
        for(var i = 0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#newtask input").value = "";
    }
}