import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage: React.FC = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <hr />
        <h2>Hello welcome to my blog where i write down all my ideas</h2>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://media.cheggcdn.com/media/ec4/ec4fb5ed-7b44-4214-900e-7a701d9b9fb4/phpHmcJZf.png"
        />
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home Page" />
