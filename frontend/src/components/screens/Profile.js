import React from 'react';

const Profile  = ()=>{
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
               <div style={{display: 'flex',}}>
                   <h5>posts</h5>
                   <h5>posts</h5>
                   <h5>posts</h5>
               </div>
           </div>
               <h4>Pavlo Pavlov</h4>
           </div>
           </div>
           <div className="galerry">
           <img src="https://images.unsplash.com/photo-1612831455546-a87cb4d6b276?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
           <img src="https://images.unsplash.com/photo-1612831455546-a87cb4d6b276?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
           <img src="https://images.unsplash.com/photo-1612831455546-a87cb4d6b276?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
           </div>
       </div>
   )
}


export default Profile