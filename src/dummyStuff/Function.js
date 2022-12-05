import React,{useEffect} from 'react'

const Function = ({number}) => {
    useEffect(() =>{

        // console.log("component did mount")

        console.log("componet did update")


        return()=>{
            console.log("component will unamout")
        };

    },[number])
  return (
    <div>{number}</div>
  )
}

export default Function