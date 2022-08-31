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
         
