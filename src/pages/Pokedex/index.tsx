import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {navigate} from 'hookrouter';
import { IPokemon, IQuery} from '../../utils/interfaces';
import {LinkEnum} from '../../linkEnum';
import {
    getPokemons,
    getPokemonsAction,
    getPokemonsLoading,
    getPokemonTypes,
    getTypesAction,
    getTypesLoading
} from '../../store/pokemons';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import useDebounce from '../../hooks/useDebounce';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
    const dispatch = useDispatch();
    const types = useSelector(getPokemonTypes);
    const isTypesLoading = useSelector(getTypesLoading);
    const data = useSelector(getPokemons);
    const isLoading = useSelector(getPokemonsLoading);
    const [searchValue, setSearchValue] = useState('');
    // const [query, setQuery] = useState<IQuery>({});
    // const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        dispatch(getTypesAction());
        dispatch(getPokemonsAction());
    }, []);

    // const {data, isLoading, isException} = useData<IApiPokemons>(configEndpoint.getPokemons, query, [debouncedValue]);

    if (isLoading) {
        return <Heading className="none">Loading...</Heading>;
    }
    // if (isException) {
    //     return <Heading className="none">Error has occurred while loading.</Heading>;
    // }

    const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
        setQuery((state: IQuery) => ({
            ...state,
            name: searchValue
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
                    {
                        isTypesLoading ? <Heading className="none">Loading...</Heading> : types?.map(item=><div>{item}</div>)
                    }
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
