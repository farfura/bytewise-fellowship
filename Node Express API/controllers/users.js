import { v4 as uuidv4 } from 'uuid';

let users = []
export const createUser=(req,res)=>{
    

    const user= req.body;
    const userid= uuidv4(); 
    const userwithid= { ...user, id: userid}
    users.push(userwithid);
    res.send(`User with the username ${user.firstname} added to the database`);
} /* to get data from users */

export const getUsers =(req, res) => {
    res.send(users);  
};


export const getUser= (req,res) =>{

    const {id}=req.params;
 
    const founduser=users.find((user)=> user.id==id);
     res.send(founduser);
 }
 
 export const deleteUser=(req,res) =>{
    const {id}=req.params;
    users= users.filter((user)=> user.id!=id);
    res.send(`User with  the id ${id} deleted from database`);
}

export const updateUser=(req,res)=>{
    const {id}=req.params;
    const{firstname,lastname,age}=req.body;
    const user= users.find((user)=>user.id==id);
    
    if(firstname)
    {
        user.firstname = firstname;
    
    }
    if(lastname)
        {
            user.lastname = lastname;
            
        }
        if(age)
            {
                user.age = age;
                
            }
    res.send(`User with the id ${id} has been updated`);
    }
