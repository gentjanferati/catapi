import React, {useEffect, useState}from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {responseStatus} from '../../redux/actions'
import "./upload.styles.css"
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

const [preview, setpreview] = useState();

    useEffect(()=>{
        if(file2){
            const reader = new FileReader();
            reader.onloadend =()=>{
                setpreview(reader.result);
                console.log(preview)
            };
            reader.readAsDataURL(file2 );
        }
        else{
            setpreview(null);
        }
        // eslint-disable-next-line
    }, [file2])
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
    console.log(preview)
     return(
        <div className="upload">
            <h1>Upload a cat photo</h1>
            <form onSubmit={onSubmitHandler}>
            <div className="upload-wraper">
                
            <input className="input-file" type="file" name="file" accept ="image/*" onChange={handleChange}/>
            {preview ? <img alt="#" src={preview} width="200" height="200"/>: <div><h3>Click here to upload your cat pictures</h3>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
  <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
</svg>

</div> }
            
            {file2 ? 
                <input type="submit" name="submit"/>
            : ""}
                </div>
            
            </form>
        </div>
     )
 }

 export default Upload;

 