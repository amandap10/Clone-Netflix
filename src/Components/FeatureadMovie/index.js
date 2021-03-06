import React from 'react';
import './index.css';

function featuread ({item}) {

    const firstDate = new Date(item.first_air_date);
    const genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    }

    const description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

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
                           {item.vote_average} pontos
                       </div>
                       <div className="featured-year">
                           {firstDate.getFullYear()}
                       </div>
                       <div className="featured-seasons">
                           {item.number_of_seasons} Temporada
                           {item.number_of_seasons !== 1 ? 's' : ''}
                       </div>
                   </div>
                   <div className="featured-description">
                       {description}
                   </div>
                   <div className="featured-buttons">
                        <a href="" className="featured-watch">Assistir</a>
                        <a href="" className="featured-mylist"> + Minha Lista</a>
                   </div>
                   <div className="featured-genres">
                       <strong>Gêneros</strong> {genres.join(', ')}
                   </div>
               </div>
            </div>
       </section>
    )
}

export default featuread;
