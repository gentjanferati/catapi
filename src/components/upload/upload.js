import React, {useState}from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {responseStatus} from '../../redux/actions'

const Upload = () =>{
    const [file2, setFile] = useState();
    const dispatch = useDispatch();
    const stat = useSelector(state => state.responseStatus.status)
    console.log(stat)
    console.log(file2)
    const onSubmitHandler = e =>{
        e.preventDefault()
        const headers = {
            'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
        const data = new FormData();
        console.log(file2.name)
        data.set('file', file2, file2.name);
        console.log(data)
        console.log(data.get('file'))
        axios.post('https://api.thecatapi.com/v1/images/upload',  data, {headers})
        .then(res => {
            console.log(res);
            dispatch(responseStatus(res.status))
        }).catch(error =>{
            console.log(error)
        })
    }
    const handleChange = e =>{
        
            const image = e.target.files[0];
            console.log(image)
            if(image){
                setFile(image);
            }
            else {
                setFile(null);
            }
        
    }
     return(
        <div>
            upload page
            <form onSubmit={onSubmitHandler}>
            <input type="file" name="file" accept ="image/*" onChange={handleChange}/>
            <input type="submit" name="submit"/>
            </form>
        </div>
     )
 }

 export default Upload;