import React from 'react';
import clsx from 'clsx';
import styles from './HomepageTechno.module.css';

const TechnoList = [
  {
    title: 'CSS',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/CSS3.svg'
  },
  {
    title: 'HTML',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/HTML5.svg'
  },
  {
    title: 'JavaScript',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/JavaScript.svg'
  },
  {
    title: 'Node.js',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/Nodejs.svg'
  },
  {
    title: 'React',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/react.svg'
  },
  {
    title: 'Vue.js',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/vuejs.svg'
  },
  {
    title: 'php',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/PHP.svg'
  },
  {
    title: 'Python',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/Python.svg'
  },
  {
    title: 'Bootstrap',
    Svg: 'https://monwikidevweb.la-loutre.fr/img/bootstrap.svg',
  },
];

function Techno({Svg, title}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img className={styles.technoSvg} alt={title} src={Svg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageTechno() {
  return (
    <section className={styles.techno}>
      <div className="container">
        <div className="row">
          {TechnoList.map((props, idx) => (
            <Techno key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
