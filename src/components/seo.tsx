import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface Title{
    title : any;
}
const Layout = (props: Title) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

  return (

    <title {...props.title}>{data.site.siteMetadata.title}</title>
  );
};

export default Layout;
