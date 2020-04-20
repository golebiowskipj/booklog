import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Hero } from "../components/Hero";
import { usePosts } from "../hooks/usePosts";
import {PostPreview} from "../components/PostPreview";

const IndexPage = () => {
  const posts = usePosts();

  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <div>
          {posts.map(post => {
            return <PostPreview key={post.slug} post={post}></PostPreview>
          })}
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
