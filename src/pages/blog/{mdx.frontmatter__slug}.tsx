import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from '../../components/seo'

interface FrontMatter {
  data: any;
  children: any;
}
const BlogPost = (props: FrontMatter) => {
  return (
    <Layout pageTitle={props.data.mdx.frontmatter.title}>
      <p>{props.data.mdx.frontmatter.date}</p>
      {props.children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
