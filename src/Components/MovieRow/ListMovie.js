import React from "react";
import "./index.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default ({title, items}) => {
    return (
        <div className="movieRow">
           <h2>{title}</h2>
            <div className="movieRow-left">
                <ArrowBackIosNewIcon/>
            </div>
            <div className="movieRow-right">
                <ArrowForwardIosIcon />
            </div>

           <div className="movieRow-listarea">
               <div className="movieRow-list">
                    {items.results.length > 0 &&  items.results.map((item, key) => (
                        <div key={key} className="movieRow-item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
               </div>
            </div>
        </div>
    );
}
