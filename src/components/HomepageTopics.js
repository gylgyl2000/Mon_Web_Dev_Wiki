import React from 'react';
import clsx from 'clsx';
import styles from './HomepageTopics.module.css';

const TopicsList = [
    {
        title: 'CSS',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/CSS3.svg',
        siteUrl: 'https://www.w3.org/Style/CSS/Overview.fr.html',
    },
    {
        title: 'HTML',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/HTML5.svg',
        siteUrl: 'https://html.spec.whatwg.org/',
    },
    {
        title: 'JavaScript',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/JavaScript.svg',
        siteUrl: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
    },
    {
        title: 'nodejs',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/NodeJS.svg',
        siteUrl: 'https://nodejs.org/fr/',
    },
    {
        title: 'reactjs',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/react.svg',
        siteUrl: 'https://fr.reactjs.org/',
    },
    {
        title: 'vuejs',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/vuejs.svg',
        siteUrl: 'https://fr.vuejs.org/',
    },
    {
        title: 'php',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/PHP.svg',
        siteUrl: 'https://www.php.net/',
    },
    {
        title: 'MySQL',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/MySQL.svg',
        siteUrl: 'https://www.mysql.com/',
    },
    {
        title: 'WordPress',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/WordPress.svg',
        siteUrl: 'https://fr.wordpress.org/',
    },
    {
        title: 'Python',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/Python.svg',
        siteUrl: 'https://www.python.org/',
    },
    {
        title: 'Bootstrap',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/Bootstrap.svg',
        siteUrl: 'https://getbootstrap.com/',
    },
    {
        title: 'jquery',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/jquery.svg',
        siteUrl: 'https://jquery.com/',
    },
    {
        title: 'sass',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/sass.svg',
        siteUrl: 'https://sass-lang.com/',
    },
    {
        title: 'redux',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/redux.svg',
        siteUrl: 'https://redux.js.org/',
    },
    {
        title: 'git',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/git.svg',
        siteUrl: 'https://git-scm.com/',
    },
    {
        title: 'github',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/github.svg',
        siteUrl: 'https://github.com',
    },
    {
        title: 'gitlab',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/gitlab.svg',
        siteUrl: 'https://gitlab.com',
    },
    {
        title: 'yarn',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/yarn.svg',
        siteUrl: 'https://classic.yarnpkg.com/fr/',
    },
    {
        title: 'npm',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/npm.svg',
        siteUrl: 'https://www.npmjs.com/',
    },
    {
        title: 'babel',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/babel.svg',
        siteUrl: 'https://babeljs.io/',
    },
    {
        title: 'd3',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/D3.svg',
        siteUrl: 'https://d3js.org/',
    },
    {
        title: 'Express',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/expressjs.svg',
        siteUrl: 'https://expressjs.com/',
    },
    {
        title: 'docusaurus',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/docusaurus.svg',
        siteUrl: 'https://docusaurus.io/',
    },
    {
        title: 'MongoDB',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/mongodb.svg',
        siteUrl: 'https://www.mongodb.com/fr',
    },{
        title: 'Mongoose',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/mongoose.svg',
        siteUrl: 'https://mongoosejs.com/',
    },
    {
        title: 'Postman',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/postman.svg',
        siteUrl: 'https://www.postman.com/',
    },
    {
        title: 'Firebase',
        Svg: 'https://monwikidevweb.la-loutre.fr/img/logos/firebase.svg',
        siteUrl: 'https://firebase.google.com/',
    },
];

function Topic({Svg, title, siteUrl}) {
    return (
        <div className={clsx('col')}>
            <div className="text--center">
                <a className="topic" href={siteUrl} target="_blank">
                    <img className={styles.topicSvg} alt={title} src={Svg} />
                </a>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default function HomepageTopics() {
  return (
    <section className={styles.topics}>
        <div className="container">
            <div className="row">
                {TopicsList.map((props, idx) => (
                    <Topic key={idx} {...props} />
                ))}
            </div>
        </div>
    </section>
  );
}
