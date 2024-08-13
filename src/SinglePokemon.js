import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';


function SinglePokemon (){
    const [pokemonDetails, setpokemonDetails] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        const fetchSingleDetails = async () => {
            try{
                const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
                setpokemonDetails(data);
            }catch (err){
                console.log('Error fetching single pokemon data', err)
                console.log(err)
            }
        
        };
        fetchSingleDetails()
    },[id])

    return(
        <div  className="mt-4">
<div class=" p-4 mb-4">
            <h2 className="card-title"> Pokemon Details</h2>
            {pokemonDetails ? (
                <div className="card" style={{width: "18rem"}}>
            <h3>{pokemonDetails.name}</h3>
            <img
                src={pokemonDetails.sprites.front_default}
                className="card-img-top"
                alt={pokemonDetails.name}
            />
        <p className="card-text">Height: {pokemonDetails.height}</p>
        <p className="card-text">Weight: {pokemonDetails.weight}</p>
        <p className="card-text">Base Experience: {pokemonDetails.base_experience}</p>
        <p className="card-text">Abilities {' '}{pokemonDetails.abilities
            .map((ability)=> ability.ability.name)
            .join (',')}
            </p>
        </div>
        ) : <p>Loading Pokemon Details...</p> }
          </div>  
          </div>
        )}

export default SinglePokemon