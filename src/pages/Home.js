import React , { useEffect, useState } from 'react';
import '../Components/MovieRow/index.css';
import Tmdb from '../Tmdb/index.js';
import "../App.css";
import ListMovie from '../Components/MovieRow/ListMovie.js';
import Featuread from '../Components/FeatureadMovie/index.js';

function Home() {

    const [ movieList, setMovieList ] = useState([]);
    const [ featureadData, setFeatureadData ] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            const list = await Tmdb.homeList();
            setMovieList(list);

            const originals = list.filter(i=>i.slug === 'originals');
            const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            const chosen = originals[0].items.results[randomChosen];
            const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeatureadData(chosenInfo);

        }

        loadAll();
    }, []);

    return (
        <div className='page'>

            { featureadData &&
                <Featuread item={featureadData} />
            }

            <section className='lists'>
                {movieList.map((item, key) => (
                    <ListMovie key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>
    );
}

export default Home;