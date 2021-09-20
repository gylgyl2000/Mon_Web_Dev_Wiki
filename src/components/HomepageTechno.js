import React from 'react';
import clsx from 'clsx';
import styles from './HomepageTechno.module.css';

const TechnoList = [
  {
    title: 'CSS',
    Svg: require('../../static/img/CSS3.svg').default,
  },
  {
    title: 'HTML',
    Svg: require('../../static/img/HTML5.svg').default,
  },
  {
    title: 'JavaScript',
    Svg: require('../../static/img/JavaScript.svg').default,
  },
  {
    title: 'Python',
    Svg: require('../../static/img/Python.svg').default,
  },
];

function Techno({Svg, title}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.technoSvg} alt={title} />
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