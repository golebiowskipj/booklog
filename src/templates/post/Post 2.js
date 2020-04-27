import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from "../../components/Layout";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { ReadLink } from "../../components/PostPreview";

const PostLayout = styled.article`
    width: 100%;
    max-width: 600px;
    margin: 2rem auto 0;
`;

const PostHeaderImage = styled(Image)`
    width: 100%;
    margin: 2rem 0;
`;

const BookTitle = styled.h2`
    display: block;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: normal;
`;

const BookAuthor = styled.h3`
    display: block;
    width: 100%;
    text-align: center;
    font-size: .75rem;
    color: grey;
    font-weight: normal;
    font-style: italic;
`;

const PostTitle = styled.h4`
    margin-top: 2rem;
    width: 100%;
    display: block;
    text-align: center;
    font-size: .9rem;
    font-weight: normal;
`;

const GoBackButton = styled(ReadLink)`
    margin: 3rem auto 1rem;
    display: block;
    width: fit-content;
`;

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
                posttitle
                booktitle
                bookauthor
                wouldrecommend
                wouldreadagain
                image {
                    sharp: childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
            }
            body
        }
    }
`;

const Post = ({ data: { mdx: post } }) => {
    console.log(post);
    return (
        <Layout>
            <PostLayout>
                <BookTitle>{post.frontmatter.booktitle}</BookTitle>
                <BookAuthor>{post.frontmatter.bookauthor}</BookAuthor>
                <PostTitle>{post.frontmatter.posttitle}</PostTitle>
                <PostHeaderImage fluid={post.frontmatter.image.sharp.fluid} alt={post.frontmatter.booktitle} />
                <MDXRenderer>
                    {post.body}
                </MDXRenderer>
                <GoBackButton to="/">Wszystkie wpisy</GoBackButton>
            </PostLayout>
        </Layout>
    )
}

export default Post;
