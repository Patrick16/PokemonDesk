import React from 'react';
import { Pokemons } from '../../pokemons';
import PokemonCard from '../../components/PokemonCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import s from './Pokedex.module.scss';

const PokedexPage = () => {
  return (
    <div>
      <Header />
      <div className={s.root}>
        {Pokemons.map((item) => {
          return (
            <PokemonCard
              key={item.id}
              name={item.name}
              attack={item.stats.attack}
              defence={item.stats.defense}
              types={item.types}
              img={item.img}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default PokedexPage;
