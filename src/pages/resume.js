import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

export default function ResumePage() {
  const theme = useTheme()

  const classes = {
    docSvg: css`
      & svg {
        fill: ${theme.colors.link};
        height: 2rem;
      }
    `,
    experience: css`
      &:not(:last-of-type) {
        border-bottom: 1px solid ${theme.colors.bodyBackground};
        margin-bottom: 3rem;
        padding-bottom: 1rem;
      }
    `,
    experienceTitle: css`
      font-weight: bold;
    `,
    experienceLocation: css`
      margin-left: 6rem;
    `,
    projectTitle: css`
      font-weight: bold;
      margin-right: 2rem;
    `,
    skills: css`
      & li {
        font-size: 1.75rem;
      }
    `,
  }

  return (
    <Layout>
      <div className='container'>
        <h1>
          Résumé
          <a href='adam_oswalt-resume.pdf'>
            <ng-include
              css={classes.docSvg}
              src="'images/document.svg'"
            />
          </a>
        </h1>
        <section className='panel panel-default'>
          <div className='panel-heading'>
            <h2>Experience</h2>
          </div>
          <div className='panel-body'>
            <div css={classes.experience}>
              <h4 css={classes.experienceTitle}>Apprentice Software Developer</h4>
              <p>
                April 2016 – Present
                <span css={classes.experienceLocation}>
                  Nashville Software School, Nashville, TN
                </span>
              </p>
              <p>
                Full time bootcamp program focusing on full-stack web
                development and modern solution design with daily hands on
                application in individual and group projects.
              </p>
              <ul>
                <li>
                  Single-page web application development utilizing HTML5, CSS3,
                  JavaScript, AngularJS, Bootstrap, and SASS
                </li>
                <li>RESTful and direct database access with Firebase</li>
                <li>
                  Version Control with Git for individual and group project
                  organization
                </li>
                <li>
                  Test Driven Develpoment with Python's unittest framework
                </li>
                <li>
                  Development of RESTful APIs within in the Django rest
                  framework
                </li>
              </ul>
            </div>
            <div css={classes.experience}>
              <h4 css={classes.experienceTitle}>
                Programmer / Project Manager of Programming
              </h4>
              <p>
                January 2015 – Present
                <span css={classes.experienceLocation}>Varsity Spirit, Bartlett, TN</span>
              </p>
              <p>
                Managing and designing new software and designs for productivity
                and usability improvements.
              </p>
              <ul>
                <li>
                  Designed and implemented an ongoing automation system for
                  building artwork from SQL queried order data with C# and
                  CorelDraw VBA
                </li>
                <li>
                  Developed a C# application querying an AS400 database for easy
                  retrieval of order details and managing custom reports
                </li>
              </ul>
            </div>
            <div css={classes.experience}>
              <h4 css={classes.experienceTitle}>Senior Artist</h4>
              <p>
                July 2012 – December 2014
                <span css={classes.experienceLocation}>Varsity Spirit, Bartlett, TN</span>
              </p>
              <p>
                Lead production of artwork creation and find solutions to
                discovered problem points.
              </p>
              <ul>
                <li>
                  Created a configurable script in CorelDraw to automate the
                  conversion of files
                </li>
                <li>Wrote a VBA macro in Excel to organize emailed reports</li>
                <li>
                  Wrote isolated VBA macros for automating artwork construction
                </li>
                <li>Digitized artwork for production</li>
                <li>Developed new fonts from newly designed style alphabets</li>
                <li>Set up templates for new styles</li>
              </ul>
            </div>
            <div css={classes.experience}>
              <h4 css={classes.experienceTitle}>Customer Service Representative</h4>
              <p>
                July 2011 – June 2012
                <span css={classes.experienceLocation}>Asentinel, Memphis, TN</span>
              </p>
              <p>Provide to support for users of managed application.</p>
              <ul>
                <li>
                  Built a database in Access to automate a significant amount of
                  manual data tracking
                </li>
                <li>
                  Provided error checking and data entry for failed automatic
                  invoice balancing
                </li>
              </ul>
            </div>
            <div css={classes.experience}>
              <h4 css={classes.experienceTitle}>Graphic Artist</h4>
              <p>
                March 2009 – June 2011
                <span css={classes.experienceLocation}>Varsity Spirit, Bartlett, TN</span>
              </p>
              <p>
                Develop custom uniform and lettering designs from customer
                ideas.
              </p>
              <ul>
                <li>Designed uniforms and lettering based on customer input</li>
                <li>
                  Interpreted customer information into production desings
                </li>
                <li>
                  Wrote a tool for CorelDraw to calculate object area and
                  pricing
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='panel panel-default'>
          <div className='panel-heading'>
            <h2>Projects</h2>
          </div>
          <div className='panel-body'>
            <p>
              <span css={classes.projectTitle}>U-Shirt</span>A vector-based t-shirt
              designer web application focused on shareability
            </p>
            <p>
              <span css={classes.projectTitle}>Lettering Automation</span>
              Automation of the creation of artwork through templates based on
              order details
            </p>
            <p>
              <span css={classes.projectTitle}>Reporting Tool</span>A tool to easily
              get order information and manage custom reports
            </p>
            <p>
              <span css={classes.projectTitle}>Particle System</span>A simple
              particle system influenced by gravity built using only native Java
              libraries
            </p>
            <p>
              <span css={classes.projectTitle}>Path Builder</span>A configurable
              program to get file paths from inconsistent file structure based
              on order details
            </p>
            <p>
              <span css={classes.projectTitle}>Automated Exporter</span>
              Using CorelDraw VBA, automated the processing and exporting of
              inconsistent files
            </p>
            <p>
              <span css={classes.projectTitle}>Account Database</span>
              Built Access database to fit into office workflow and provide aid
              through automation
            </p>
          </div>
        </section>
        <section className='panel panel-default'>
          <div className='panel-heading'>
            <h2>Technologies</h2>
          </div>
          <div className='panel-body'>
            <h3>Languages</h3>
            <p>Proficient with: JavasScript, Python, SQL, HTML/CSS, C#</p>
            <p>Familiar with Regular Expressions, Git, VBA, Java</p>
            <p>Basic knowledge of Bash, C/C++, PHP</p>
            <h3>Frameworks</h3>
            <p>AngularJS, SASS, Bootstrap, Django, Django Rest Framework</p>
            <h3>Software</h3>
            <p>CorelDRAW, Excel</p>
          </div>
        </section>
        <section className='panel panel-default'>
          <div className='panel-heading'>
            <h2>Technical Skills</h2>
          </div>
          <div className='panel-body'>
            <ul css={classes.skills}>
              <li>Proficient with Windows</li>
              <li>Familiar with Linux</li>
              <li>Built multiple personal computers</li>
              <li>Performed basic laptop repair</li>
              <li>Proficient with Microsoft Office Suite</li>
              <li>Proficient with CorelDraw</li>
              <li>Familiar with Photoshop</li>
              <li>Basic knowledge of Illustrator</li>
              <li>Familiar with Blender</li>
            </ul>
          </div>
        </section>
        <section className='panel panel-default'>
          <div className='panel-heading'>
            <h2>Education</h2>
          </div>
          <div className='panel-body'>
            <div>
              <h4>Nashville Software School, Nashville, TN</h4>
              <p>Apprentice Software Developer</p>
            </div>
            <br />
            <div>
              <h4>ITT Technical Institute, Cordova, TN</h4>
              <p>
                Associate of Applied Science Degree in Information Technology –
                Multimedia
              </p>
              <p>Valedictorian GPA: 3.97</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
