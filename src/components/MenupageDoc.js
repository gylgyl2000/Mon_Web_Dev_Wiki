import React from 'react';
import clsx from 'clsx';
import styles from './MenupageDoc.module.css';

const DocList = [
  {
    title: 'freeCodeCamp',
    Svg: require('../../static/img/sites/freeCodeCamp.svg').default,
    Url: '../docs/freeCodeCamp/menu',
  },
  {
    title: 'OpenClassrooms',
    Svg: require('../../static/img/sites/OpenClassrooms.svg').default,
    Url: '../docs/OpenClassrooms/menu',
  },
  {
    title: 'Codecademy',
    Svg: require('../../static/img/sites/Codecademy.svg').default,
    Url: '../docs/Codecademy/menu',
  },
  {
    title: 'Udemy',
    Svg: require('../../static/img/sites/udemy.svg').default,
    Url: '*',
  },
  {
    title: 'MDNWebDoc',
    Svg: require('../../static/img/sites/MDNWebDoc.svg').default,
    Url: '*',
  },
  {
    title: 'Codewars',
    Svg: require('../../static/img/sites/codewars.svg').default,
    Url: '../docs/Codewars/menu',
  },
  {
    title: 'CSS-Tricks',
    Svg: require('../../static/img/sites/css-tricks.svg').default,
    Url: '*',
  },
  {
    title: 'Exercism',
    Svg: require('../../static/img/sites/Exercism.svg').default,
    Url: '*',
  },
  {
    title: 'France IOI',
    Svg: require('../../static/img/sites/france-ioi.svg').default,
    Url: '*',
  },
];

function Doc({Svg, title, Url}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <a href={Url}>
          <Svg className={styles.docSvg} alt={title} />
        </a>
      </div>
      
    </div>
  );
}

export default function MenupageDoc() {
  return (
    <section className={styles.doc}>
      <div className="container">
        <div className={styles.docRow}>
          {DocList.map((props, idx) => (
            <Doc key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
