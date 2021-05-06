const initialstate ={
    status: null
}

const responseStatusReducer = (state = initialstate, action) =>{
    switch(action.type){
        case 'RESPONSE_STATUS':
            return{
                status: action.payload
            }
        default:
            return state;
    }
}

export default responseStatusReducer;