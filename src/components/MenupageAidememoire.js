import React from 'react';
import styles from './MenupageAidememoire.module.css';

const AideMemoireList = [
  {
    title: 'Git',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/git.svg',
    Url: './Git/accueil',
  },
  {
    title: 'GitHub',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/fa-github.svg',
    Url: './GitHub/accueil',
  },
  {
    title: 'JavaScript',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/JavaScript.svg',
    Url: './JavaScript/accueil',
  },
  {
    title: 'MySQL',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/MySQL.svg',
    Url: './MySQL/accueil',
  },
  {
    title: 'Vue.js',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/vuejs.svg',
    Url: './Vuejs/accueil',
  },
  {
    title: 'npm',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/npm.svg',
    Url: './npm/accueil',
  },
  {
    title: 'css',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/CSS3.svg',
    Url: './css/accueil',
  },
  {
    title: 'html',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/HTML5.svg',
    Url: './html/accueil',
  },
  {
    title: 'NodeJS',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/NodeJS.svg',
    Url: './NodeJS/accueil',
  },
];

function AideMemoire({Svg, title, Url}) {
  return (
    <div className={styles.col}>
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
