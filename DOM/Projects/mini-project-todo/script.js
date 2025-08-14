function addTask() {
  const taskInput = document.querySelector('#inputTask');
  const taskList = document.querySelector('#taskList');

   const task = taskInput.value ;
   if(task.trim() === '') return ;

   const li = document.createElement('li');
   li.innerText = task;
   li.style.padding = '10px';

    const deletBtn = document.createElement('button');
    deletBtn.innerText = "❌" 
    deletBtn.style.marginLeft = '10px';
    deletBtn.style.backgroundColor ='white';
    deletBtn.style.border = 'none';
    
    const completeBtn = document.createElement('button');
    completeBtn.innerText = "✅" 
    completeBtn.style.marginLeft = '40px';
   completeBtn.style.backgroundColor ='white';
    completeBtn.style.border = 'none';

   completeBtn.onclick = () =>{
    li.style.textDecoration = 'Line-Through';
   }


    deletBtn.onclick = ()=>{
      li.remove();
    }
    li.appendChild(completeBtn);
    li.appendChild(deletBtn);


   taskList.appendChild(li);

   taskInput.value = '';
};