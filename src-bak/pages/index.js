import React from "react"
import Layout from "../components/Layout"
import Panel from "../components/Panel"
import { css } from "@emotion/react"
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby"
import SEO from '../components/SEO'

export default function AboutPage() {
  const data = useStaticQuery(graphql`{
  headshotImage: file(relativePath: {eq: "me_fb.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 300, height: 300, layout: FIXED)
    }
  }
}
`)

  return (
    <Layout>
      <SEO title='About Me' />
      <h1>About Me</h1>
      <Panel heading="The Short">
        <p>I am a guy who makes computer things and solves problems.</p>
      </Panel>
      <Panel heading="The Long">
        <GatsbyImage
          image={data.headshotImage.childImageSharp.gatsbyImageData}
          alt="My Headshot"
          css={css`
            margin-bottom: 1rem;
            margin-right: 1rem;
            max-height: 15rem;
            max-width: 15rem;
            float: left;
          `} />
        <p>
          Hello! My name is Adam Oswalt, and I love all things related to
          technology and computers. One of my greatest strengths is thinking
          through problems and finding solid solutions to them. I am continually
          full of ideas and strive to give them form.
        </p>
        <p>
          From a very young age, I have been engrossed in computers. I began
          with using DOS batch files to play games as well as playing around on
          an NES. Later on, I began to experiment with my own development
          through things like designing maps in Unreal Tournament and working
          through a book on Visual Basic 6. I tinkered around off and on, but
          the concepts continued to stay rooted and develop.
        </p>
        <p>
          My personal development projects tend to be focused around automation
          and quality of life improvements as I also spend time reading and
          researching to expand my knowledge and gain experience in an effort to
          strengthen my programming foundation.
        </p>
        <p>
          I am currently a student at Nashville Software School, a six-month
          full-stack development bootcap focused on complete mastery of the
          covered topics as well as understanding how to work with the dynamics
          of a software development team.
        </p>
        <p>
          Moving forward, my goal is to pursue my passions of computers and
          technology. I want to surround myself with knowledgeable colleagues to
          help me grow, and I am continuing to work on personal projects to
          learn and experiment with new ideas.
        </p>
      </Panel>
    </Layout>
  );
}