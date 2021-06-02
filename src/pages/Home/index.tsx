import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import { LinkEnum } from '../../linkEnum';
import Footer from '../../components/Footer';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b> all your favourite <b>Pokemon</b>
          </h1>
          <p>You can know the type of your Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See Pokemons</Button>
        </div>
        <div>
          <Parallax />
        </div>
      </Layout>
      <Footer>Made with love.</Footer>
    </div>
  );
};

export default HomePage;
