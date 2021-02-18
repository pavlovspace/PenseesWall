import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'



const Profile  = ()=>{
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setPics(result.mypost)
        })
    },[])

   return (
       <div>
           <div style={{
               display:"flex",
               justifyContent:"space-around",    
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1612831455546-a87cb4d6b276?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>
                <div>
                    <div>
                        <h4>{state?state.name:"loading"}</h4>
                        <h5>{state?state.email:"loading"}</h5>
                        <div style={{display: 'flex',}}>
                            <h6>posts</h6>
                            <h6>posts</h6>
                            <h6>posts</h6>
                        </div>
                    </div>
                    <h4>Pavlo Pavlov</h4>
                </div>
           </div>
           <div className="galerry">
           {
               // Getting user post and showing it on profile page
               // Отоброжение публикации на странице профиль
                mypics.map(item=>{
                    return(
                        <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
                    )
                })
            }
           </div>
       </div>
   )
}


export default Profile