import React , { useEffect, useState } from 'react';
import '../Components/MovieRow/index.css';
import Tmdb from '../Tmdb/index.js';
import "../App.css";
import ListMovie from '../Components/MovieRow/ListMovie.js';
import Featuread from '../Components/FeatureadMovie/index.js';
import Header from '../Components/Header/index.js';
import Gif from './Gif/gif.gif';


function Home() {

    const [ movieList, setMovieList ] = useState([]);
    const [ featureadData, setFeatureadData ] = useState(null);
    const [ blackHeader, setBlackHeader ] = useState(false);

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

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);
        
        return() => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <div className='page'>

            <Header black={blackHeader} />

            { featureadData &&
                <Featuread item={featureadData} />
            }

            <section className='lists'>
                {movieList.map((item, key) => (
                    <ListMovie key={key} title={item.title} items={item.items}/>
                ))}
            </section>

            <footer>
                Direitos de imagem para Netflix <br />
                Dados pegos do site Themoviedb.org
            </footer>

            {movieList.length <= 0 && 
                <div className="loading">
                    <img src={Gif} alt="loading" />
                </div>
            }
        </div>
    );
}

export default Home;