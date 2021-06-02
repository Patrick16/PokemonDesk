import React, {useState} from 'react';
import {navigate} from 'hookrouter';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import {IApiPokemons, IPokemon, IQuery} from '../../utils/interfaces';
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import {LinkEnum} from '../../linkEnum';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
  const [searchValue,setSearchValue] = useState('');
  const [query,setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue,500);
  const { data, isLoading, isException } = useData<IApiPokemons>('getPokemons',query,[debouncedValue]);
  if (isLoading) {
    return <Heading className="none">Loading...</Heading>;
  }
  if (isException) {
    return <Heading className="none">Error has occurred while loading.</Heading>;
  }

  const handleSearchValue=(event:React.ChangeEvent<HTMLInputElement>)=> {
    console.log('e',event.target.value);
    setSearchValue(event.target.value)
    setQuery((state:IQuery)=>({
        ...state,
      name:searchValue
    }));
  }

  return (
    <>
      <Layout className={s.root}>
      <Heading className="root" tag="h2" size={40}>
        {!isLoading && data && data.count} <b>Pokemons</b> for you to choose your favorite
      </Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchValue}/>
        </div>
        <div>
          {!isLoading && data &&
            data.pokemons.map((item: IPokemon) => {
              return (
                <PokemonCard
                  key={item.id}
                  name={item.name}
                  attack={item.stats.attack}
                  defence={item.stats.defense}
                  types={item.types}
                  img={item.img}
                  onClick={() =>
                    navigate(LinkEnum.POKEMON)}
                />
              );
            })}
        </div>
      </Layout>
    </>
  );
};

export default PokedexPage;
