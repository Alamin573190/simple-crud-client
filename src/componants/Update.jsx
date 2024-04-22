
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = e =>{
        e. preventDefault();
        const form = e.target;
        const name =form.name.value;
        const email =form.email.value;
        console.log(name,email);
        const updateUser = {name , email};

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCound > 0){
                alert('user updated successfully')
            }
        })
    }
    return (
        <div>
            <h3>Updated information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" /><br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" /><br />
                <input type="submit" value="Update" id="" />
            </form>
            
        </div>
    );
};

export default Update;