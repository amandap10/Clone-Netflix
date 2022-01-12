import React , { useEffect, useSate } from 'react';
import Tmdb from '../Tmdb/index.js';

export default () => {

    const [ movieList, setMovieList ] = useSate([]);


    useEffect(() => {
        const loadAll = async () => {
            const list = await Tmdb.homeList();
            setMovieList(list);
        }

        loadAll();
    }, []);

    return (
        <div className='page'>
            
        </div>
    );
}