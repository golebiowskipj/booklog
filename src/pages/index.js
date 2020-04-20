import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Hero } from "../components/Hero";

const IndexPage = () => (
  <>
    <SEO />
    <Layout>
      <Hero />
      <h1>elo</h1>
      <p>a tutaj drugi element</p>
    </Layout>
  </>
)

export default IndexPage
