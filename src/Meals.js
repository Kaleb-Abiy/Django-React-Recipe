import React from 'react'


//this function takes props
function Meals({title, image, link}) {
    return ( 
        <div className="col-md-4">
            <div class="card">
            <img src={image} className="card-img-top img-fluid"/>
            <div class="card-body">
            <p className="card-text">{title}</p>
            <a href={link} className="btn btn-primary">More</a>  
            </div>
            </div>  
        </div>
    )
}

export default Meals
