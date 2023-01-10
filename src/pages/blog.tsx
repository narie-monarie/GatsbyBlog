import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";

interface Data {
  data: any;
}
const BlogPage = (props: Data) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {props.data.allMdx.nodes.map((node: any) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted At: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
