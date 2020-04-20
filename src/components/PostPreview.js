import React from 'react';
import { Link } from 'gatsby';
import  Image  from 'gatsby-image';

export const PostPreview = ({ post }) => {
    return (
        <article>
            <Image fluid={post.image.sharp.fluid} alt="elo" />
            <p>{post.title}</p>
            <Link to={post.slug}>czytaj</Link>
        </article>
    )
}
