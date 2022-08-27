const todos = async() => 
{
   try
   {
        const res = await  fetch("https://my-json-server.typicode.com/samirm00/todolist");
        
        if (res.status === 200)
        {
            const data =  await  res.json();
            console.log(data);
        }
        else
        {
            throw new Error(`Error while fetching todos with status ${res.status}`);
        }   
   }
   catch(err)
   {
    console.error(err);
   }

}

todos();