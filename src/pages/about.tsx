import React from 'react';
import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiEmail } from '@mdi/js';

import { Meta } from 'src/components/meta';
import { Layout } from 'src/components/layout';
import { ProfilePageQueryQuery } from 'src/types/graphql-types';

import { siteMetadata } from '../../gatsby-config';
import './about.scss';

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
        <hr className="page-hr" />
        <section className="text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="sub-title">Experiences</h1>
                <br />
                <h3 className="sub2-title">KakaoPay</h3>
                <ul className="sub-list">
                  <li>2020.06 ~ current</li>
                  <li>Personal Finance Management Team</li>
                  <li>Front-End Developer</li>
                </ul>
                <h4>웹 서비스 개발</h4>
                <ul>
                  <li>Lerna, React, Redux, Redux-Saga, Storybook</li>
                </ul>
                <br />
                <h3 className="sub2-title">PNPSECURE</h3>
                <ul className="sub-list">
                  <li>2015.10 ~ 2020.06</li>
                  <li>Web Platform Team</li>
                  <li>Full-Stack Developer</li>
                </ul>
                <h4>웹 솔루션 서비스 개발</h4>
                <ul>
                  <li>
                    기획부터 설계 및 문서(SRS, SDS) 작성, 서버 및 프론트엔드 개발까지 모두 진행
                  </li>
                  <li>차트 라이브러리(D3, Chart.js)를 이용한 대시보드 개발</li>
                  <li>서버에서 별개로 구동되는 Third Party 모듈 개발</li>
                  <li>JNI를 이용해 Native Application과 연동 작업 개발</li>
                  <li>개발 및 유지보수한 웹 솔루션 서비스만 다섯가지 이상</li>
                  <li>Java8+, Spring Framework, MySQL, ECMAScript6+, Vue, TypeScript, jQuery</li>
                </ul>
                <h4>솔루션 서비스 운용</h4>
                <ul>
                  <li>RPM과 같은 커스텀 패키지 툴 개발, 직접 파일 구조까지 설계</li>
                  <li>Linux 서버 운용 및 각종 Trouble Shooting 진행</li>
                  <li>Shell Script를 이용해 자동화 된 설치 스크립트 작성</li>
                  <li>Linux(CentOS), Shell Script</li>
                </ul>
                <h4>사내 웹 UI 공통 컴포넌트 개발</h4>
                <ul>
                  <li>사내 서비스에서 공통으로 사용하는 웹 컴포넌트 개발</li>
                  <li>Nexus를 이용한 사내 npm 서버 직접 구축, 패키지 배포 및 관리</li>
                  <li>Vue, CSS3, npm</li>
                </ul>
                <h4>Front-End 개발 환경 개편</h4>
                <ul>
                  <li>Legacy Front-End 개발 환경(JSP+jQuery)을 전면적으로 개편</li>
                  <li>Vue와 TypeScript 도입, Legacy 소스 코드를 SPA로 Migration</li>
                  <li>서버와 프론트엔드가 한 번에 빌드 될 수 있도록 통합 빌드 프로세스 도입</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <hr className="page-hr" />
        <section className="text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="sub-title">OpenSource</h1>
                <br />
                <h3
                  className="sub2-title"
                  onClick={() => {
                    window.location.href = 'https://github.com/nhn/tui.grid';
                  }}
                >
                  Toast-UI Grid
                </h3>
                <ul className="sub-list">
                  <li>2019.09 ~ current</li>
                  <li>Contributor</li>
                  <li>React, Storybook, Cypress</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
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
