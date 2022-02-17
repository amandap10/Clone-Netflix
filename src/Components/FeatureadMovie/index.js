import React from 'react';
import './index.css';

function featuread ({item}) {

    const firstDate = new Date(item.first_air_date);

    return (
       <section className="featured" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
           <div className="featured-vertical">
               <div className="featured-horizontal">
                   <div className="featured-name">
                       {item.original_name}
                   </div>
                   <div className="featured-info">
                       <div className="featured-points">
                           {item.vote_average}
                       </div>
                       <div className="featured-yar">
                           {firstDate.getFullYear()}
                       </div>
                       <div className="featured-seasons">
                           {item.number_of_seasons} Temporada
                           {item.number_of_seasons !== 1 ? 's' : ''}
                       </div>
                   </div>
                   <div className="featured-description">
                       {item.overview}
                   </div>
                   <div className="featured-buttons">

                   </div>
                   <div className="featured-genres">
                       <strong>Gêneros</strong> ...
                   </div>
               </div>
            </div>
       </section>
    )
}

export default featuread;
