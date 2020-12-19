import React from 'react';
import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiEmail } from '@mdi/js';

import { Meta } from 'src/components/meta';
import { Layout } from 'src/components/layout';
import { ProfilePageQueryQuery } from 'src/types/graphql-types';

import { siteMetadata } from '../../gatsby-config';

interface Props {
  data: ProfilePageQueryQuery;
  location: Location;
}

const About = ({ location, data }: Props) => {
  const profile = data.profile?.childImageSharp?.fixed;

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="About" />
      <div className="article">
        <section className="text-white">
          <div className="container">
            <Img fixed={profile as FixedObject} className="rounded-circle" />
            <h1>Charyum Park</h1>
            <p className="lead text-muted">Front-end developer capable of server development</p>
            <div className="profile-link-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link mr5"
                href="https://github.com/ryum91"
              >
                <Icon
                  path={mdiGithub}
                  title="GitHub"
                  color="white"
                  size="25px"
                  className="hover-zoom clickable"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link mr5"
                href="https://www.linkedin.com/in/charyum-park/"
              >
                <Icon
                  path={mdiLinkedin}
                  title="Linkedin"
                  color="white"
                  size="25px"
                  className="hover-zoom clickable"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link mr5"
                href="https://twitter.com/ryum91"
              >
                <Icon
                  path={mdiTwitter}
                  title="Twitter"
                  color="white"
                  size="25px"
                  className="hover-zoom clickable"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
                href="mailto:ryum91@gmail.com"
              >
                <Icon
                  path={mdiEmail}
                  title="Email"
                  color="white"
                  size="25px"
                  className="hover-zoom clickable"
                />
              </a>
            </div>
          </div>
        </section>

        {/* <section className="text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Experiences</h1>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query ProfilePageQuery {
    profile: file(name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
