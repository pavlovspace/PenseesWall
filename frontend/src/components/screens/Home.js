import React from 'react';

const Home =()=>{
    return(
        <div className="home">
            <div className="cars home-card">
                <h5>pavlo</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1612831455546-a87cb4d6b276?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color: "red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
        </div>
    )
}

export default Home;