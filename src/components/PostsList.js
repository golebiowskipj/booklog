import React from 'react';
import { usePosts } from "../hooks/usePosts";
import { PostPreview } from "../components/PostPreview";
import styled from 'styled-components';

const PostsListContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const PostsList = () => {
    const posts = usePosts();

    return (
        <PostsListContainer>
            {posts.map(post => {
                return <PostPreview key={post.slug} post={post} />
            })}
        </PostsListContainer>
    )
}
