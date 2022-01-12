import React , { useEffect, useState } from 'react';
import Tmdb from '../Tmdb/index.js';
import ListMovie from '../Components/MovieRow/ListMovie';

function Home() {

    const [ movieList, setMovieList ] = useState([]);


    useEffect(() => {
        const loadAll = async () => {
            const list = await Tmdb.homeList();
            setMovieList(list);
        }

        loadAll();
    }, []);

    return (
        <div className='page'>
            <section className='lists'>
                {movieList.map((item, key) => (
                    <ListMovie key={key}/>
                ))}
            </section>
        </div>
    );
}

export default Home();