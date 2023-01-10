import React from "react";
import { HeadFC } from "gatsby";
import Layout from "../components/layout";
import Seo from '../components/seo'

const about: React.FC = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    </main>
  );
};

export default about;

export const Head: HeadFC = () => <Seo title="About Page" />
