import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Hero } from "../components/Hero";
import { PostsList } from "../components/PostsList";

const IndexPage = () => {

  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <PostsList />
      </Layout>
    </>
  )
}

export default IndexPage
