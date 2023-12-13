import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'

export default function HomepageHeader (): React.ReactElement {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <ThemedImage
          alt="NaaVRE - Notebook as a Virtual Research Environment"
          sources={{
            light: useBaseUrl('/img/hero-light.svg'),
            dark: useBaseUrl('/img/hero-dark.svg')
          }}
          height='200px'
          width='auto'
        />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorials">
            Getting started
          </Link>
        </div>
      </div>
    </header>
  )
}
