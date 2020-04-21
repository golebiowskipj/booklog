import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { useImagePlaceholder } from '../hooks/useImagePlaceholder';

const PostPreviewContainer = styled.article`
    width: 20%;
    min-width: 250px;
    margin: .5rem;

    display: flex;
    flex-direction: column;
    align-items:center;
`;

const ImageLink = styled(Link)`
    width: 100%;
`;

const ReadLink = styled(Link)`
    text-align: center;
    margin-top: 1rem;
    padding-bottom: 5px;
    color: #000;
    text-decoration: none;
    position: relative;

    &:hover {
        color: #000000BB;
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }

    &:hover::before {
        visibility: visible;
        transform: scaleX(1);
    }
`;

export const PostPreview = ({ post }) => {
    const imagePlaceholder = useImagePlaceholder();
    return (
        <PostPreviewContainer>
            <ImageLink to={post.slug}>
                {post.image
                    ?
                    <Image fluid={post.image.sharp.fluid} alt={post.title} />
                    :
                    <Image fluid={imagePlaceholder.sharp.fluid} alt="placeholder" />
                }
            </ImageLink>
            <ReadLink to={post.slug}>
                {post.title}
            </ReadLink>
        </PostPreviewContainer>
    )
}


PostPreview.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        slug: PropTypes.string,
        image: PropTypes.any,
    })
}
