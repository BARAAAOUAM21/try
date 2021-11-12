import React from "react";


const Trailler=({movies,match})=>{
      const movie = movies.find((el) => el.id == match.params.id ) 
    return (
      <div>
     <iframe width="900" height="506" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
  
}
export default Trailler