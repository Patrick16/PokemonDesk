import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import req from '../../utils/request';
import { IApiPokemons, IPokemon } from '../../utils/interfaces';

import s from './Pokedex.module.scss';

interface IUsePokemons {
  data: IApiPokemons | null;
  isLoading: boolean;
  isException: boolean;
}

const usePokemons = (): IUsePokemons => {
  const [data, setData] = useState<IApiPokemons | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isException, setException] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true);
      try {
        const result: IApiPokemons = await req('getPokemons');
        setData(result);
      } catch (e) {
        setException(true);
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isException,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isException } = usePokemons();
  if (isLoading) {
    return <Heading className="none">Loading...</Heading>;
  }
  if (isException) {
    return <Heading className="none">Error has occurred while loading.</Heading>;
  }
  return (
    <>
      <Heading className="root" tag="h2" size={40}>
        {data && data.count} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <Layout className={s.root}>
        <div className={s.root}>
          {data &&
            data.pokemons.map((item: IPokemon) => {
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
      </Layout>
    </>
  );
};

export default PokedexPage;
