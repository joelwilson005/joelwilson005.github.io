import React from "react";
import Marquee from "react-marquee-slider";

import java from "../img/tech-stack/java.svg";
import javascript from "../img/tech-stack/javascript.svg";
import csharp from "../img/tech-stack/c-sharp.svg";
import css from "../img/tech-stack/css-3.svg";
import html from "../img/tech-stack/html-5.svg";
import axios from "../img/tech-stack/axios.svg";
import framer from "../img/tech-stack/framer.svg";
import hibernate from "../img/tech-stack/hibernate.svg";
import openAPI from "../img/tech-stack/openapi-icon.svg";
import reactQuery from "../img/tech-stack/react-query-icon.svg";
import reactIcon from "../img/tech-stack/react.svg";
import reduxIcon from "../img/tech-stack/redux.svg";
import spring from "../img/tech-stack/spring.svg";
import tailwindIcon from "../img/tech-stack/tailwindcss-icon.svg";

import visualStudio from "../img/tech-stack/visual-studio.svg";
import visualStudioCode from "../img/tech-stack/visual-studio-code.svg";
import intelliJIdea from "../img/tech-stack/intellij-idea.svg";
import dataGrip from "../img/tech-stack/datagrip.svg";
import postman from "../img/tech-stack/postman-icon.svg";
import git from "../img/tech-stack/git-icon.svg";
import gitHub from "../img/tech-stack/github-icon.svg";
import gitkraken from "../img/tech-stack/gitkraken.svg";
import heroku from "../img/tech-stack/heroku-icon.svg";
import googleCloud from "../img/tech-stack/google-cloud.svg";
import netlify from "../img/tech-stack/netlify-icon.svg";
import postgres from "../img/tech-stack/postgresql.svg";
import swagger from "../img/tech-stack/swagger.svg";

export const Ticker1 = () => (
  <Marquee velocity={10} direction="rtl">
    <img className="object-contain w-32 h-32 mx-10" src={java} alt="Java" />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={javascript}
      alt="JavaScript"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={csharp}
      alt="C Sharp"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={css}
      alt="Cascading Style Sheets"
    />
    <img className="object-contain w-32 h-32 mx-10" src={html} alt="HTML" />
    <img className="object-contain w-32 h-32 mx-10" src={axios} alt="axios" />
    <img className="object-contain w-32 h-32 mx-10" src={framer} alt="framer" />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={hibernate}
      alt="hibernate"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={openAPI}
      alt="open API"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={reactIcon}
      alt="react"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={reactQuery}
      alt="tanstack query"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={reduxIcon}
      alt="redux"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={spring}
      alt="spring framework"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={tailwindIcon}
      alt="tailwind css"
    />
  </Marquee>
);

export const Ticker2 = () => (
  <Marquee velocity={10} direction="ltr">
    <img
      className="object-contain w-32 h-32 mx-10"
      src={visualStudio}
      alt="visual studio"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={dataGrip}
      alt="data grip"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={intelliJIdea}
      alt="IntelliJ Idea"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={visualStudioCode}
      alt="visual studio code"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={postman}
      alt="postman"
    />
    <img className="object-contain w-32 h-32 mx-10" src={git} alt="git" />
    <img className="object-contain w-32 h-32 mx-10" src={gitHub} alt="github" />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={gitkraken}
      alt="git kraken"
    />
    <img className="object-contain w-32 h-32 mx-10" src={heroku} alt="heroku" />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={googleCloud}
      alt="GCP"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={netlify}
      alt="netlify"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={postgres}
      alt="postgresql"
    />
    <img
      className="object-contain w-32 h-32 mx-10"
      src={swagger}
      alt="swagger UI"
    />
  </Marquee>
);
