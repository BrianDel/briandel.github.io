import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { rgba, darken, lighten, borderStyle } from 'polished';
import { Layout, Wrapper, Button, Article } from '../components';
import PageProps from '../models/PageProps';
import { Helmet } from 'react-helmet';
import config from '../../config/SiteConfig';
import { media } from '../utils/media';

const Homepage = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: row;
  animation: 1.5s ease-in-out 0.2s both slide;
  @media ${media.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${media.phone} {
    height: 100%;
    flex-direction: column;
  }
`;

const GridRow: any = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) =>
    props.background
      ? `linear-gradient(
      -185deg,
      ${rgba(darken(0.1, props.theme.colors.primary), 0.7)}, 
      ${rgba(lighten(0.1, props.theme.colors.black), 0.9)}), url(${config.defaultBg}) no-repeat`
      : null};
  background-size: cover;
  padding: 2rem 4rem;
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  h1 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  }
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const HomepageContent = styled.div<{ center?: boolean }>`
  max-width: 30rem;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  animation: 1.5s ease-in-out 0.6s both fadeIn;
`;

export default ({ data }: PageProps) => {
  const { edges, totalCount } = data.allMarkdownRemark;
  return (
    <Layout>
      <Wrapper fullWidth={true}>
        <Helmet title={`Homepage | ${config.siteTitle}`} />
        <Homepage>
          <GridRow background={true}>
            <HomepageContent center={true}>
              {/* <img src={config.siteLogo} alt={config.siteTitle} /> */}
              <h1>
              <br />
              <br />
              <br />
                Kates <br />
                12th Birthday <br/>
                Quiz Party
              </h1>
            </HomepageContent>
          </GridRow>
          <GridRow>
            <HomepageContent>
              <h3>Kate's Birthday Quiz</h3>
              <h3>Saturday 23rd Jan @ 1pm</h3>
              <p>
                The party will be a quiz<br/>
                It will take about 90 mins and be lots of fun<br/>
                <b><u>You will need 2 devices.</u></b><br/>
                1 for Zoom - Ideally larger screen like Tablet or Laptop<br/>
                1 for Kahoot! answers - Ideally Phone, but you can use anything<br/>
              </p>
              <hr />
              <p>
                <h3>Zoom Video</h3>
                Join Zoom party on your first device<br/>
                You will receive the PIN with the text you received.<br/>
                <a href="https://zoom.us/join" target="_blank">Click here to join Zoom</a>
                <br/>
              </p>
              <p>
                <h3>Kahoot quiz</h3>
                Join Kahoot! quiz on your second device<br/>
                We will share the PIN code on the day.<br/>
                Enter your real name so we know who is winning<br/>
                <a href="https://kahoot.it" target="_blank">Click here to join Kahoot quiz</a><br/>
                <br/>
              </p>

            </HomepageContent>
          </GridRow>
        </Homepage>
      </Wrapper>
    </Layout>
  );
};
export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`;
