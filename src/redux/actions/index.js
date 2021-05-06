export const responseStatus = (status) =>{
    return {
        type: 'RESPONSE_STATUS',
        payload: status
    }
}