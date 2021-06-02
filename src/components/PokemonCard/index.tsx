import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCardProps {
  name: string;
  attack: number;
  defence: number;
  types: string[];
  img: string;
  onClick: ()=>void;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ name, attack, defence, types, img, onClick}) => {
  return (
    <div className={s.root} onClick={onClick} onKeyPress={onClick}>
      <div className={s.infoWrap}>
        <Heading size={12} className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defence}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((x, index) => {
            return (
              <span className={s.label} key={index}>
                {x}
              </span>
            );
          })}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
