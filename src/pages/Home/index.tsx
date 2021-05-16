import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

import s from './Home.module.scss';

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
          <Button onClick={() => console.log('Button pushed')} width={false} size={false} color={false}>
            See Pokemons
          </Button>
        </div>
        <div>
          <Parallax />
        </div>
      </Layout>
      <Heading size={null} tag="h1">
        Heading
      </Heading>
    </div>
  );
};

export default HomePage;
