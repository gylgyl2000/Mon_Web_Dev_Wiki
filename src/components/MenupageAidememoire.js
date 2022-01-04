import React from 'react';
import clsx from 'clsx';
import styles from './MenupageAidememoire.module.css';

const AideMemoireList = [
  {
    title: 'Git',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/git.svg',
    Url: './Git/',
  },
  {
    title: 'JavaScript',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/JavaScript.svg',
    Url: './JavaScript/accueil',
  },
  {
    title: 'MySQL',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/MySQL.svg',
    Url: './MySQL/',
  },
  {
    title: 'Vue.js',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/vuejs.svg',
    Url: './Vuejs/',
  },
];

function AideMemoire({Svg, title, Url}) {
  return (
    <div className={clsx('col')}>
      <div>
        <a href={Url}>
          <img className={styles.aidememoireSvg} alt={title} src={Svg} />
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
