import * as React from "react"
import type { HeadFC} from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage: React.FC = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home Page" />
