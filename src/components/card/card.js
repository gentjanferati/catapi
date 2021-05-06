import React, {useState} from 'react';
import './card.styles.css';
import axios from 'axios';

function Card( props ){
    const [favourite , setFavourite] = useState(false);
    const [favId, setFavId] = useState();
    const headers = {
        'x-api-key': '17d94b92-754f-46eb-99a0-65be65b5d18f',
        'Content-Type': 'application/json'
    }
    const handleFavourite = () => {
        console.log(props.id)
        setFavourite(!favourite)
        
        axios.post('https://api.thecatapi.com/v1/favourites',{image_id: props.id},{headers})
        .then(res => {
            if(res){
                const id = res;
                setFavId(id.data.id)
            }
            console.log(res)
            
        })
        .catch(error =>{
            console.log(error)
        })
        console.log(favId)
    }
    const handleUnFavourite = () => {
        console.log(props.id)
        setFavourite(!favourite)
        
        axios.delete(`https://api.thecatapi.com/v1/favourites/${favId}`,{headers})
        .then(res => {
            console.log(res)
        }).catch(error =>{
            console.log(error)
        })
    }

    const handleVoteUp =() =>{
        console.log(props.id)
        axios.post('https://api.thecatapi.com/v1/votes',{image_id: props.id},{headers})
        .then(res => {
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div  className="col-sm-12 col-md-3 col-lg-3 mt-5 " >
            
            <div className="card-container">
            <div className="img-cont">
                <img width="250" height="250" alt="#" src={props.url}/>
            </div>
            
            {favourite ? 
            <div className="fav" onClick={handleUnFavourite}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            </div>
            :
            <div className="unfav" onClick={handleFavourite}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
            </div>
            }

            <div>
            <span onClick={handleVoteUp}>Vote Up</span><span>Vote Down</span>
            </div>
           
           
            
            
            </div>
            
        </div>
    )
}

export default Card;