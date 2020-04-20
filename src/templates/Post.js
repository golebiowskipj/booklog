import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from "../components/Layout";
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
                title
            }
            body
        }
    }
`;

const Post = ({ data: { mdx: post } }) => {
    return (
        <Layout>
            <p>{post.frontmatter.title}</p>
            <MDXRenderer>
                {post.body}
            </MDXRenderer>
        </Layout>
    )
}

export default Post;
