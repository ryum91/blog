import React from 'react';
import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';

import { Meta } from 'src/components/meta';
import { Layout } from 'src/components/layout';
import { Icon } from 'src/components/icon';
import { ProfilePageQueryQuery } from 'src/types/graphql-types';

import { siteMetadata } from '../../gatsby-config';

interface Props {
  data: ProfilePageQueryQuery;
  location: Location;
}

const Profile = ({ location, data }: Props) => {
  const profile = data.profile?.childImageSharp?.fixed;

  return (
    <Layout isFooter={false} location={location}>
      <Meta site={siteMetadata} title="Profile" />
      <div className="article">
        <section className="text-center">
          <div className="container">
            <Img fixed={profile as FixedObject} className="rounded-circle" />
            <h1>Charyum Park</h1>
            <p className="lead text-muted">Front-end developer capable of server development</p>
            <div className="profile-link-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
                href="mailto:ryum91@gmail.com"
              >
                <div className="icon" title="Mail">
                  <svg viewBox="0 0 24 24" className="svg-inline--fa fa-w-16">
                    <path
                      fill="currentColor"
                      d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                    />
                  </svg>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
                href="https://github.com/ryum91"
              >
                <Icon title="Github" name="github" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
                href="https://www.linkedin.com/in/charyum-park/"
              >
                <Icon title="Linkedin" name="linkedin" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
                href="https://twitter.com/ryum91"
              >
                <Icon title="Twitter" name="twitter" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">SKILL</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <Icon title="React.js" name="react" />
              </div>
              <div className="col-lg-3 col-6">
                <Icon title="Vue.js" name="vuejs" />
              </div>
              <div className="col-lg-3 col-6">
                <Icon title="JavaScript" name="js-square" />
              </div>
              <div className="col-lg-3 col-6">
                <div className="icon">
                  <svg viewBox="0 0 22 22" className="svg-inline--fa">
                    <path
                      fill="currentColor"
                      d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <Icon title="HTML" name="html5" />
              </div>
              <div className="col-lg-3 col-6">
                <Icon title="CSS3" name="css3-alt" />
              </div>
              <div className="col-lg-3 col-6">
                <Icon title="Node.js" name="node" />
              </div>
              <div className="col-lg-3 col-6 ">
                <Icon title="Java" name="java" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Profile;

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
