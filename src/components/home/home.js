import React, {useEffect, useState} from 'react'
import Card from '../card/card';
import './home.styles.css';
const Home = ()=>{
    const [images, setImages] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        async function fetchData(){
            const headers = {
                
            'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        

            }
        const response = await fetch(`https://api.thecatapi.com/v1/images/?limit=10`, {headers})
        const result = await response.json();
        console.log(result);
        setImages(result);
        setIsLoaded(true);
        }
        fetchData();

    }, [])
    console.log(images);
    if(!isLoaded){
        return (
            <div>Loading ...</div>
        )
    } 
    else {
    return (<div>
        <h1>Your Lovely Cats</h1>
        <div className="container">
        <div className="row">
            {images.map(({...otherProps}) => (
                <Card key={Math.round(Math.random() * 50000)} {...otherProps}/>
            ))}
        </div>
        </div>
        </div>
    )}
}


export default Home;
