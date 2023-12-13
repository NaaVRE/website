/* eslint-disable @typescript-eslint/no-var-requires */

import React from 'react'
import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

interface FeatureItem {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: React.ReactElement
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Turn Jupyter notebooks into reusable components',
    Svg: require('@site/static/img/undraw_order_delivered_re_v4ab.svg').default,
    description: (
      <>
        NaaVRE lets you containerize cells of Jupyter notebooks.
        Use these reusable components to build workflows.
      </>
    )
  },
  {
    title: 'Compose workflows and run them in the cloud',
    Svg: require('@site/static/img/undraw_abstract_re_l9xy.svg').default,
    description: (
      <>
        NaaVRE lets you compose workflows and run them into a cloud environment,
        with different parameters or input data.
      </>
    )
  },
  {
    title: 'Find, reuse and share research assets',
    Svg: require('@site/static/img/undraw_teamwork_hpdk.svg').default,
    description: (
      <>
        Find notebooks, containerized cells, workflows and datasets to run your own experiments in NaaVRE.
      </>
    )
  }
]

function Feature ({ title, Svg, description }: FeatureItem): React.ReactElement {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures (): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
