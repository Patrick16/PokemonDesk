import React from 'react';

export interface IPokemonPageProps {
    id:string|number
}

const PokemonPage :React.FC<IPokemonPageProps>= ({id}) => {
    return (
        <div>
            This is pokemon {id}
        </div>
    );
};

export default PokemonPage;