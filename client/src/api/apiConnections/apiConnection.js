import baseURL from "../axios";

export const allBooksApi=async()=>{
    const response=await baseURL.get('/getAllBooks')
    return response.data
}

export const totalBooksApi=async()=>{
    const response=await baseURL.get('/getTotalBooks')
    console.log(response);
    return response.data
}


export const totalMembersApi=async()=>{
    const response=await baseURL.get('/getTotalMembers')
    return response.data
}


export const eventApi=async(currevent,id)=>{
    const data={currevent,id}
    const response=await baseURL.put('/changeEvent',data)
    return response.data
}