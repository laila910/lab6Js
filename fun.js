function login(){
  if(document.readyState){
    console.log('hello');
   
     myForm=document.getElementsByTagName('form');


         // $("#myform").submit(function (e) {
         //     loadAjax();
         //  return false;
         //  });
         var UserName=document.getElementsByTagName('input')[0];
         var Pass=document.getElementsByTagName('input')[1];
         // console.log(UserName);
         // console.log(Pass);
         // console.log(UserName.value);
         // console.log(Pass.value);
    
     var message=document.createElement('div');
    
     
        if((UserName.value =='admin')&&(Pass.value =='123')){
         console.log('Welcome');
       
         message.innerHTML='<h1 style="text-align:center"> WELCOME </h1>';
       
        }else{
         message.innerHTML='<h1 style="text-align:center"> not registered</h1>';
        }
        
     
        document.body.appendChild(message);
       
     }
 }
    
 function push(){
    var newtask=document.querySelector('#newtask input');
    var message=document.createElement('div');
    var tasks=document.querySelector('#tasks');
    if(newtask.value.length == 0){
        console.log('Welcome');
       
        message.innerHTML='<h1 style="text-align:center"> enter your task name </h1>';
        document.body.appendChild(message);
        
    }

    else{
       tasks.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${newtask.value}
                </span>
                <button class="add">
                <i class="fa fa-check" aria-hidden="true"></i>
                </button>
                <button class="delete">
                <i class="fa fa-window-close" aria-hidden="true"></i>
                </button>

            </div>
        `;

        var currentTasks = document.querySelectorAll(".delete");
        for(var i=0; i<currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            };
        }
        
       var currenttasks =document.querySelectorAll('.add');
         for(var y=0;y<currenttasks.length;y++){
            currenttasks[y].onclick=function(){
                var status=document.createElement('p');
                status.innerHTML='<p>Done</p>';
                this.parentNode.appendChild(status);
                document.body.appendChild(this.parentNode);
            };
         }
        

    }
 }

