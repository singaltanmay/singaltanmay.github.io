import React from "react";

const Intro = () => {
  return (
    <div className="col-lg-6" id="intro-section">
      <h1 className="display-4">Tanmay Singal</h1>
      <h2 className="lead">Software Devloper</h2>
      <p className="my-4">
        I am a young self-taught software developer with a passion for
        technology. I am highly motivated, hardworking and love to work on
        solving complex problems by leveraging the power of computation. I am a
        collaborative team worker who is always looking for an opportunity to
        learn something new.
      </p>
      <a
        className="btn btn-outline-light btn-lg icon-button"
        href="https://github.com/singaltanmay/"
        role="button"
      >
        <i class="fab fa-github"></i>
        <span className="button-text">GitHub</span>
      </a>
    </div>
  );
};
export default Intro;
