import React, { useState, useEffect } from 'react';
import ListMercados from '../components/ListMercados';
import Filtros from '../components/Filtros';
import {getMarkets} from '../api/markets';
import {getAccessTokenApi} from '../api/auth';

const Home = (props) => {
    const [reloadMarkets,setReloadMarkets] = useState(false);
    const [listMarkets,setListMarkets] = useState([]);
    const [markets, setMarkets]=useState([]);

    const accesToken = getAccessTokenApi();


    const [count,setCount]=useState(0);
    const [page,setPage]=useState(1);
    const [perPage,setPerPage]=useState(10);

    const [nextUrl,setNextUrl]=useState(null);
    const [prevUrl,setPrevUrl]=useState(null);



    useEffect(()=>{
        getMarkets(accesToken).then(response=>{
            setMarkets(response["results"]);
            setNextUrl(response["next"]);
            setPrevUrl(response["previous"]);
            setCount(response["count"]);

        })
    },[])





    return(
        <div className="container">
            <div className="card" style={{marginBottom:10}}>
                <div className="card-body">
                    <Filtros setMarkets={setMarkets}  />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                        <ListMercados markets={markets}  />
                </div>

                {/* <div className="card-body">
                    <ListMercados markets={markets} MarketsListFilter={listMarkets} setReloadMarkets={setReloadMarkets} />
                </div> */}
            </div>
        </div>
    )
}

export default Home;