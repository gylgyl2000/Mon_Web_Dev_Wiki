import React from 'react';
import clsx from 'clsx';
import styles from './MenupageAlgorithmes.module.css';

const AlgorithmesList = [
  {
    title: 'JavaScript',
    Svg: require('../../static/img/JavaScript.svg').default,
    Url: './JavaScript/menu',
  },
];

function Algorithmes({Svg, title, Url}) {
  return (
    <div className={clsx('col')}>
      <div>
        <a href={Url}>
          <Svg className={styles.algorithmesSvg} alt={title} />
        </a>
      </div>
      
    </div>
  );
}

export default function MenupageAlgorithmes() {
  return (
    <section className={styles.algorithmes}>
      <div className="container">
        <div className={styles.algorithmesRow}>
          {AlgorithmesList.map((props, idx) => (
            <Algorithmes key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
