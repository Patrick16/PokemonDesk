import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

import s from './Home.module.scss';
import Parallax from '../../components/Parallax';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b> all your favourite <b>Pokemon</b>
          </h1>
          <p>You can know the type of your Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => console.log('Button pushed')}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
