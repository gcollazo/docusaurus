/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';

import classnames from 'classnames';

import styles from './styles.module.css';

const QUOTES = [
  {
    thumbnail: require('../data/quotes/christopher-chedeau.jpg'),
    name: 'Christopher "vjeux" Chedeau',
    title: 'Lead Prettier Developer',
    text: (
      <>
        I&apos;ve helped open source many projects at Facebook and every one
        needed a website. They all had very similar constraints: the
        documentation should be written in markdown and be deployed via GitHub
        pages. I’m so glad that Docusaurus now exists so that I don’t have to
        spend a week each time spinning up a new one.
      </>
    ),
  },
  {
    thumbnail: require('../data/quotes/hector-ramos.png'),
    name: 'Hector Ramos',
    title: 'Lead React Native Advocate',
    text: (
      <>
        Open source contributions to the React Native docs have skyrocketed
        after our move to Docusaurus. The docs are now hosted on a small repo in
        plain markdown, with none of the clutter that a typical static site
        generator would require. Thanks Slash!
      </>
    ),
  },
  {
    thumbnail: require('../data/quotes/ricky-vetter.jpg'),
    name: 'Ricky Vetter',
    title: 'ReasonReact Developer',
    text: (
      <>
        Docusaurus has been a great choice for the ReasonML family of projects.
        It makes our documentation consistent, i18n-friendly, easy to maintain,
        and friendly for new contributors.
      </>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout permalink="/" description={siteConfig.tagline}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Docusaurus with Keytar"
              className={styles.heroLogo}
              src={useBaseUrl('img/docusaurus_keytar.svg')}
            />
            Build <span className={styles.heroProjectKeywords}>optimized</span>{' '}
            websites <span className={styles.heroProjectKeywords}>quickly</span>
            , focus on your{' '}
            <span className={styles.heroProjectKeywords}>content</span>
          </h1>
          <div className={styles.indexCtas}>
            <Link
              className={styles.indexCtasGetStartedButton}
              to={useBaseUrl('docs/introduction')}>
              Get Started
            </Link>
            <span className={styles.indexCtasGitHubButtonWrapper}>
              <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=facebook&amp;repo=docusaurus&amp;type=star&amp;count=true&amp;size=large"
                width={160}
                height={30}
                title="GitHub Stars"
              />
            </span>
          </div>
        </div>
      </div>
      <div className={classnames(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          We're working on{' '}
          <a href="https://github.com/facebook/docusaurus/issues/789">
            Docusaurus 2
          </a>
          , contribute to its roadmap by suggesting features or{' '}
          <Link to={useBaseUrl('/feedback')}>giving feedback</Link>!
        </div>
      </div>
      <div
        className={classnames(styles.announcement, styles.announcementPrimary)}>
        <div className={styles.announcementInner}>
          Coming from v1? Check out our{' '}
          <Link to={useBaseUrl('/docs/migrating-from-v1-to-v2')}>
            v1 to v2 migration guide
          </Link>
          .
        </div>
      </div>
      <div className={styles.section}>
        <div className="container text--center margin-bottom--xl">
          <div className="row">
            <div className="col">
              <img
                className={styles.featureImage}
                alt="Powered by MDX"
                src={useBaseUrl('img/undraw_typewriter.svg')}
              />
              <h3 className="padding-top--md">Powered by Markdown</h3>
              <p className="padding-horiz--md">
                Save time and focus on your project's documentation. Simply
                write docs and blog posts with Markdown/MDX and Docusaurus will
                publish a set of static HTML files ready to serve. You can even
                embed JSX components into your Markdown thanks to MDX.
              </p>
            </div>
            <div className="col">
              <img
                alt="Built Using React"
                className={styles.featureImage}
                src={useBaseUrl('img/undraw_react.svg')}
              />
              <h3 className="padding-top--md">Built Using React</h3>
              <p className="padding-horiz--md">
                Extend or customize your project's layout by reusing React.
                Docusaurus can be extended while reusing the same header and
                footer.
              </p>
            </div>
            <div className="col">
              <img
                alt="Ready for Translations"
                className={styles.featureImage}
                src={useBaseUrl('img/undraw_around_the_world.svg')}
              />
              <h3 className="padding-top--md">Ready for Translations</h3>
              <p className="padding-horiz--md">
                Localization comes pre-configured. Use Crowdin to translate your
                docs into over 70 languages.
              </p>
            </div>
          </div>
        </div>
        <div className="container text--center">
          <div className="row">
            <div className="col col--4 col--offset-2">
              <img
                alt="Document Versioning"
                className={styles.featureImage}
                src={useBaseUrl('img/undraw_version_control.svg')}
              />
              <h3 className="padding-top--md">Document Versioning</h3>
              <p className="padding-horiz--md">
                Support users on all versions of your project. Document
                versioning helps you keep documentation in sync with project
                releases.
              </p>
            </div>
            <div className="col col--4">
              <img
                alt="Document Search"
                className={styles.featureImage}
                src={useBaseUrl('img/undraw_algolia.svg')}
              />
              <h3 className="padding-top--md">Content Search</h3>
              <p className="padding-horiz--md">
                Make it easy for your community to find what they need in your
                documentation. We proudly support Algolia documentation search.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classnames(
          styles.section,
          styles.sectionAlt,
          styles.quotes,
        )}>
        <div className="container">
          <div className="row">
            {QUOTES.map(quote => (
              <div className="col" key={quote.name}>
                <div className="avatar avatar--vertical margin-bottom--sm">
                  <Image
                    alt={quote.name}
                    className="avatar__photo avatar__photo--xl"
                    img={quote.thumbnail}
                    style={{overflow: 'hidden'}}
                  />
                  <div className="avatar__intro padding-top--sm">
                    <h4 className="avatar__name">{quote.name}</h4>
                    <small className="avatar__subtitle">{quote.title}</small>
                  </div>
                </div>
                <p className="text--center text--italic padding-horiz--md">
                  {quote.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
