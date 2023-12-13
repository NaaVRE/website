import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageHeader from '@site/src/components/HomepageHeader'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
// @ts-expect-error ESLint complains about mdx imports
import About from '@site/docs/about.mdx'

export default function Home (): React.ReactElement {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={'container'}>
          <About />
        </div>
      </main>
    </Layout>
  )
}
