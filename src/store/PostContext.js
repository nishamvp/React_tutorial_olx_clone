import {createContext, useState} from "react";

export const PostContext=createContext(null);


function Post({children}){
    console.log(props ,'this is props');
    const [postDetails,setPostDetails]=useState()

    return(
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}

export default Post