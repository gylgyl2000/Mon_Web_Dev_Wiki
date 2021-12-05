import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageTechno from '../components/HomepageTechno';
/* import HomepageFeatures from '../components/HomepageFeatures'; */
import HomepageTopics from '../components/HomepageTopics';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className="logo-index" src="../img/river-otter-silhouette.svg" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <HomepageTechno />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/menu">
            Menu
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Ma documentation de développeur web">
      <HomepageHeader />
      <main>
        <HomepageTopics />
      </main>
    </Layout>
  );
}
