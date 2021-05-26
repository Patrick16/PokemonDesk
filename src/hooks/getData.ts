import {useEffect, useState} from "react";
import {IQuery} from "../utils/interfaces";
import req from "../utils/request";

export interface IUsePokemons<T> {
    data: T | null;
    isLoading: boolean;
    isException: boolean;
}

const useData = <T>(endpoint: string, query?: IQuery, deps:any[] = []): IUsePokemons<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [isException, setException] = useState<boolean>(false);

    useEffect(() => {
        const getData = async ():Promise<void> => {
            setLoading(true);
            try {
                const result: T = await req<T>(endpoint, query);
                setData(result);
            } catch (e) {
                setException(true);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, deps);

    return {
        data,
        isLoading,
        isException,
    };
};
export default useData;