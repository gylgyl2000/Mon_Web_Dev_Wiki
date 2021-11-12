import React from 'react';
import clsx from 'clsx';
import styles from './HomepageTopics.module.css';

const TopicsList = [
    {
        title: 'CSS',
        Svg: require('../../static/img/logos/CSS3.svg').default,
        siteUrl: 'https://www.w3.org/Style/CSS/Overview.fr.html',
    },
    {
        title: 'HTML',
        Svg: require('../../static/img/logos/HTML5.svg').default,
        siteUrl: 'https://html.spec.whatwg.org/',
    },
    {
        title: 'JavaScript',
        Svg: require('../../static/img/logos/JavaScript.svg').default,
        siteUrl: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
    },
    {
        title: 'nodejs',
        Svg: require('../../static/img/logos/NodeJS.svg').default,
        siteUrl: 'https://nodejs.org/fr/',
    },
    {
        title: 'reactjs',
        Svg: require('../../static/img/logos/react.svg').default,
        siteUrl: 'https://fr.reactjs.org/',
    },
    {
        title: 'php',
        Svg: require('../../static/img/logos/PHP.svg').default,
        siteUrl: 'https://www.php.net/',
    },
    {
        title: 'MySQL',
        Svg: require('../../static/img/logos/MySQL.svg').default,
        siteUrl: 'https://www.mysql.com/',
    },
    {
        title: 'WordPress',
        Svg: require('../../static/img/logos/WordPress.svg').default,
        siteUrl: 'https://fr.wordpress.org/',
    },
    {
        title: 'Python',
        Svg: require('../../static/img/logos/Python.svg').default,
        siteUrl: 'https://www.python.org/',
    },
    {
        title: 'Bootstrap',
        Svg: require('../../static/img/logos/Bootstrap.svg').default,
        siteUrl: 'https://getbootstrap.com/',
    },
    {
        title: 'jquery',
        Svg: require('../../static/img/logos/jquery.svg').default,
        siteUrl: 'https://jquery.com/',
    },
    {
        title: 'sass',
        Svg: require('../../static/img/logos/sass.svg').default,
        siteUrl: 'https://sass-lang.com/',
    },
    {
        title: 'redux',
        Svg: require('../../static/img/logos/redux.svg').default,
        siteUrl: 'https://redux.js.org/',
    },
    {
        title: 'git',
        Svg: require('../../static/img/logos/git.svg').default,
        siteUrl: 'https://git-scm.com/',
    },
    {
        title: 'github',
        Svg: require('../../static/img/logos/github.svg').default,
        siteUrl: 'https://github.com',
    },
    {
        title: 'gitlab',
        Svg: require('../../static/img/logos/gitlab.svg').default,
        siteUrl: 'https://gitlab.com',
    },
    {
        title: 'yarn',
        Svg: require('../../static/img/logos/yarn.svg').default,
        siteUrl: 'https://classic.yarnpkg.com/fr/',
    },
    {
        title: 'npm',
        Svg: require('../../static/img/logos/npm.svg').default,
        siteUrl: 'https://www.npmjs.com/',
    },
    {
        title: 'babel',
        Svg: require('../../static/img/logos/babel.svg').default,
        siteUrl: 'https://babeljs.io/',
    },
    {
        title: 'd3',
        Svg: require('../../static/img/logos/D3.svg').default,
        siteUrl: 'https://d3js.org/',
    },
    {
        title: 'Express',
        Svg: require('../../static/img/logos/expressjs.svg').default,
        siteUrl: 'https://expressjs.com/',
    },
    {
        title: 'docusaurus',
        Svg: require('../../static/img/logos/docusaurus.svg').default,
        siteUrl: 'https://docusaurus.io/',
    },
    {
        title: 'MongoDB',
        Svg: require('../../static/img/logos/mongodb.svg').default,
        siteUrl: 'https://www.mongodb.com/fr',
    },{
        title: 'Mongoose',
        Svg: require('../../static/img/logos/mongoose.svg').default,
        siteUrl: 'https://mongoosejs.com/',
    },
    {
        title: 'Postman',
        Svg: require('../../static/img/logos/postman.svg').default,
        siteUrl: 'https://www.postman.com/',
    },
];

function Topic({Svg, title, siteUrl}) {
    return (
        <div className={clsx('col')}>
            <div className="text--center">
                <a className="topic" href={siteUrl} target="_blank">
                    <Svg className={styles.topicSvg} alt={title} />
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
