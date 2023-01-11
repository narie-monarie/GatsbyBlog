import React from "react";
import { HeadFC } from "gatsby";
import Layout from "../components/layout";
import Seo from '../components/seo'

const about: React.FC = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <hr />
        <p>I code in: Java | Typescript | Go && C++ [for Data Structures]</p>
        <p>Currently learning ML in python</p>
        <h5>Contact me on</h5>
        <p>Email: jobmonari7@gmail.com</p>
        <p>WhatsApp: 0776379667</p>
        <p>Github: <a href="github.com/narie-monarie">click here</a></p>
      </Layout>
    </main>
  );
};

export default about;

export const Head: HeadFC = () => <Seo title="About Page" />
