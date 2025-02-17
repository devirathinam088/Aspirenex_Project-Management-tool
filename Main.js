const TableData = [
    { category: "Hardware", sub_category: "IoT", duration: "August 1, 2024", task: "Hardware IoT Task" },
    { category: "Software", sub_category: "MERN", duration: "July 26, 2024", task: "Software MERN Task" },
    { category: "Software", sub_category: "MEAN", duration: "November 2, 2024", task: "Software MEAN Task" },
    { category: "Software", sub_category: "JAVA", duration: "December 1, 2024", task: "Software JAVA Task" },
    { category: "Software", sub_category: "MEAN", duration: "October 5, 2024", task: "Software MEAN Task" },
    { category: "Hardware", sub_category: "Embedded", duration: "July 6, 2024", task: "Hardware Embedded Task" },
    { category: "Software", sub_category: "DSA", duration: "August 6, 2024", task: "Software DSA Task" },
    { category: "Hardware", sub_category: "Autocad", duration: "September 5, 2024", task: "Hardware Autocad Task" },
    { category: "Software", sub_category: "DSA", duration: "October 9, 2025", task: "Software DSA Task" },
];

const tableBody = document.querySelector('#dataTable tbody');
const select=document.getElementById('sort');
function table(category){
tableBody.innerHTML='';
    TableData.forEach((data,index) => {
        if(data.category===category){
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${data.category}</td>
                <td>${data.sub_category}</td>
                <td>${data.duration}</td>
                <td>${data.task}</td>
            `;
            const updateBtn = document.createElement('button');
            updateBtn.textContent = 'UPDATE';
            updateBtn.classList.add('update-btn'); 
            updateBtn.addEventListener('click', () => handleUpdate(index)); 
        
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'DELETE';
            deleteBtn.classList.add('delete-btn'); 
            deleteBtn.addEventListener('click', () => handleDelete(index));
        
            row.appendChild(updateBtn);
            row.appendChild(deleteBtn);
            tableBody.appendChild(row);
         }
         if(category==='-'){
            const row = document.createElement('tr');
          
            row.innerHTML = `
                <td>${data.category}</td>
                <td>${data.sub_category}</td>
                <td>${data.duration}</td>
                <td>${data.task}</td>
                `;

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'UPDATE';
    updateBtn.classList.add('update-btn'); 
    updateBtn.addEventListener('click', () => handleUpdate(index)); 

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.classList.add('delete-btn'); 
    deleteBtn.addEventListener('click', () => handleDelete(index));

    row.appendChild(updateBtn);
    row.appendChild(deleteBtn);


            tableBody.appendChild(row);
         
         }
        }
    );
}


function addTask() {
    // Get form inputs

    const category = document.forms["form1"]["category"].value;
    const subCategory = document.forms["form1"]["subCategory"].value;
    const duration = document.forms["form1"]["duration"].value;
    const task = document.forms["form1"]["tasks"].value;
    
    // Create a new task object
    const newTask = { 
        category: category,
        sub_category: subCategory,
        duration: duration,
        task: task 
    };
if(newTask.category!=null&&newTask.sub_category!=null&&newTask.duration!=null&&newTask.task!=null){
// Push the new task object into the TableData array
TableData.push(newTask);
}
    
    
    // Update the table display
    table(select.value);
    select.addEventListener('change',function(){
        const selectedValue=this.value;
        table(selectedValue);
    });
}
function handleUpdate(index) {
    const newData = { 
        category: prompt("Enter new category") || TableData[index].category,
        sub_category: prompt("Enter new sub category") || TableData[index].sub_category,
        duration: prompt("Enter new duration") || TableData[index].duration,
        task: prompt("Enter new task") || TableData[index].task
    };
    TableData.splice(index, 1, newData);
   table(select.value);
}

function handleDelete(index) {
    TableData.splice(index, 1);
    table(select.value);
}

table(select.value);

select.addEventListener('change', function () {
    const selectedValue = this.value;
    createTable(selectedValue);
});

table(select.value);
select.addEventListener('change',function(){
    const selectedValue=this.value;
    table(selectedValue);
});



//TIME
seconds=0;
minutes=0;
hour=0;
isRunning=false;
function startstopwatch(){
if(!isRunning){
  
    interval=setInterval(()=>{
        seconds++;
        if(seconds>=60){
            seconds=0;
            minutes++;
            if(minutes>=60){
                minutes=0;
                hour++;
            }
        }
        document.getElementById('button').innerHTML='Stop';
        let formattedTime=`${hour.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
        document.querySelector(".stopwatch").innerHTML=formattedTime;
        isRunning=true;
    },1000)
  
}
else{
isRunning=false;
clearInterval(interval);
document.getElementById('button').innerHTML='Start';
    // Get the current stopwatch time
    const stopwatchTime = document.querySelector(".stopwatch").textContent;

    // Set the stopwatch time into the duration input field
    document.forms["form1"]["duration"].value = stopwatchTime;
}
}                                            

const resetwatch=()=>{
    clearInterval(interval);
    seconds=0;
    minutes=0;
    hour=0;
    document.getElementById('button').innerHTML='Start';
    let formattedTime=`${hour.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    document.querySelector(".stopwatch").innerHTML=formattedTime;
}





