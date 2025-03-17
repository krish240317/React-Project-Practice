import React from 'react'
import { useState, useEffect } from 'react';
import './Pokemon.css'

export const Pokemon = () => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
     const [iserror,setIserror]=useState("");

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setApiData(data)
            setLoading(false);
        }
        catch(error) {
                console.log(error);
                setIserror(error);
                setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    if (loading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }
    if (apiData) {
        return (
            <section className='container'>
                <header> <h1>Catch Pokemon</h1></header>
                <ul className='card-demo'>
                    <li className='pokemon-card'>
                        <figure>
                            <img src={apiData.sprites.other.dream_world.front_default} alt={apiData.name} className='pokemon-image' />
                        </figure>
                    </li>
                </ul>

            </section>
        )
    }
}

