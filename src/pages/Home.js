import React, { useEffect } from 'react';
import Tmdb from '../Tmdb/index.js';

function Home() {

    useEffect(() => {
        const loadAll = async () =>{
            const list = await Tmdb.homeList();
            console.log(list);
        }

        loadAll();
    }, []);

    return (
        <div>
            <h1>Olá mundo!</h1>
        </div>
    )
}

export default Home;