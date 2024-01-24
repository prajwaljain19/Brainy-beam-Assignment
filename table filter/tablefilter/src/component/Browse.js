import { React, useState } from 'react';
// import { API_KEY } from '../utils/constants';
import { useEffect } from 'react';


const Browse = () => {

    const[listofuser, setlistofuser] = useState([]);
    const [usersearch, setusersearch] = useState('');
    const [filterlistofuser, setfilterlistofuser] = useState([]);

    
   
    const Currentalbum = () => {
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {setlistofuser(json);
             setfilterlistofuser(json)
            console.log(json)});
         
    };
    useEffect(() => {
        Currentalbum();
    },[]);
    

    
    return ( 
         <div>

<input 
    type='text' 
    placeholder='enter user'
    className='m-2 border border-black p-1' 
    onChange={(e) => {
        setusersearch(e.target.value);
        setfilterlistofuser(listofuser.filter(
            user => user.name.toLowerCase().includes(e.target.value.toLowerCase())
                || user.username.toLowerCase().includes(e.target.value.toLowerCase())
                || user.email.toLowerCase().includes(e.target.value.toLowerCase())
        ));
    }}
></input>


            <button className='p-2 m-2 border border-black' onClick={(e)=> {
                e.preventDefault();
                setfilterlistofuser(listofuser.filter(user => user.name.includes(usersearch)));
            }}>filter brainy</button>
        <table className='table-auto border-collapse border-slate-400 border-spacing-1 ' >
            <thead >
                <tr>
                    <th  className='border border-black p-2'>id</th>
                    <th  className='border border-black p-2'>name</th>
                    <th  className='border border-black p-2'>username</th>
                    <th  className='border border-black p-2'>email</th>
                </tr>
            </thead>
            <tbody>
            {filterlistofuser.length > 0 ?filterlistofuser.map((user) => 
                 (
                    <tr key={user.id}>
                        <td className='border border-black p-2'>{user.id}</td>
                        <td className='border border-black p-2'>{user.name}</td>
                        <td className='border border-black p-2'>{user.username}</td>
                        <td className='border border-black p-2'>{user.email}</td>
                    </tr>
                )):
                <div>
                    <tr>
                        <td className='text-2xl font-bold'>No User Exists</td>
                    </tr>
                </div>
                }
            </tbody>
        
        </table>
        </div>
    );
        }
    

export default Browse;