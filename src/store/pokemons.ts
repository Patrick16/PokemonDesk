import {Dispatch} from "react";
import {IApiPokemons, IQuery, IStateRequest, ITypesRequest} from "../utils/interfaces";
import {configEndpoint} from "../config";
import {IInitialState} from "./index";
import req from "../utils/request";

export enum PokemonsActionTypes {
    FETCH_TYPES = 'FETCH_TYPES',
    FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
    FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT'
}

export enum PokemonsAction {
    FETCH_POKEMONS = 'FETCH_POKEMONS',
    FETCH_POKEMONS_RESOLVE = 'FETCH_POKEMONS_RESOLVE',
    FETCH_POKEMONS_REJECT = 'FETCH_POKEMONS_REJECT'
}

interface ITypesAction {
    type: PokemonsActionTypes,
    payload?: string[]
}

interface IPokemonsAction {
    type: PokemonsAction,
    payload?: IApiPokemons
}

type ActionTypes = ITypesAction | IPokemonsAction;

export interface IPokemonsInitialState {
    types: IStateRequest<string>
    pokemons: IStateRequest<IApiPokemons>
}

const initialState: IPokemonsInitialState = {
    types: {
        isLoading: false,
        data: null,
        error: null
    },
    pokemons: {
        isLoading:false,
        data: null,
        error: null
    }
}
const pokemons = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PokemonsActionTypes.FETCH_TYPES:
            return {
                ...state,
                types: {
                    isLoading: true,
                    data: null,
                    error: null
                }
            };
        case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
            return {
                ...state,
                types: {
                    isLoading: false,
                    data: action.payload,
                    error: null
                }
            };
        case PokemonsActionTypes.FETCH_TYPES_REJECT:
            return {
                ...state,
                types: {
                    isLoading: false,
                    data: null,
                    error: action.payload
                }
            };
        case PokemonsAction.FETCH_POKEMONS:
            return {
                ...state,
                pokemons: {
                    isLoading: true,
                    data: null,
                    error: null
                }
            };
        case PokemonsAction.FETCH_POKEMONS_RESOLVE:
            return {
                ...state,
                pokemons: {
                    isLoading: false,
                    data: action.payload,
                    error: null
                }
            };
        case PokemonsAction.FETCH_POKEMONS_REJECT:
            return {
                ...state,
                pokemons: {
                    isLoading: false,
                    data: null,
                    error: action.payload
                }
            };
        default:
            return state;
    }
}

export const getPokemonTypes = (state: IInitialState) => state.pokemons.types.data as string[];
export const getTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading;
export const getPokemons = (state: IInitialState) => state.pokemons.pokemons.data as IApiPokemons;
export const getPokemonsLoading = (state: IInitialState) => state.pokemons.pokemons.isLoading;
export const getPokemonsError = (state: IInitialState) => state.pokemons.pokemons.error;


export const getTypesAction = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch({type: PokemonsActionTypes.FETCH_TYPES_REJECT});
        try {
            const response = await req<ITypesRequest>(configEndpoint.getPokemonTypes);
            dispatch({type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response});
        } catch (error) {
            dispatch({type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: error});
        }
    }
}

export const getPokemonsAction = (endpoint: string, query?: IQuery, deps:any[] = []) => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch({type: PokemonsAction.FETCH_POKEMONS});
        try {
            const response = await req<IApiPokemons>(configEndpoint.getPokemons);
            dispatch({type: PokemonsAction.FETCH_POKEMONS_RESOLVE, payload: response});
        } catch (error) {
            dispatch({type: PokemonsAction.FETCH_POKEMONS_REJECT, payload: error});
        }
    }
}

export default pokemons;