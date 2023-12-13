import React from 'react'
import Layout from '@theme/Layout'
import HomepageHeader from '@site/src/components/HomepageHeader'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
// @ts-expect-error ESLint complains about mdx imports
import About from '@site/docs/about.mdx'

export default function Home (): React.ReactElement {
  return (
    <Layout
      description="Notebook as a Virtual Research Environment">
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
