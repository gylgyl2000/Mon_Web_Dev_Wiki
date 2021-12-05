import React from 'react';
import clsx from 'clsx';
import styles from './MenupageAidememoire.module.css';

const AideMemoireList = [
  {
    title: 'JavaScript',
    Svg: require('../../static/img/JavaScript.svg').default,
    Url: './JavaScript/accueil',
  },
];

function AideMemoire({Svg, title, Url}) {
  return (
    <div className={clsx('col')}>
      <div>
        <a href={Url}>
          <Svg className={styles.aidememoireSvg} alt={title} />
        </a>
      </div>
      
    </div>
  );
}

export default function MenupageAidememoire() {
  return (
    <section className={styles.aidememoire}>
      <div className="container">
        <div className={styles.aidememoireRow}>
          {AideMemoireList.map((props, idx) => (
            <AideMemoire key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
