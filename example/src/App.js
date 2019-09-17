import React from 'react';

import { ApiSection, AuthorsSection, ExampleSection } from "./Home";

const App = () => {
  return (
    <>
      <section className="hero is-dark is-bold is-fullheight">
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a href='/' className="navbar-item">
                  <img src="icon_200x200.png" alt="Logo" width="60px" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item" href="#apiSection">
                    Docs
                  </a>
                  <span className="navbar-item">
                    <a className="button is-dark is-inverted" href="https://github.com/GeDiez/react-use-formless">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Github</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
              <img src="logo-useformless.png" alt="Logo" width="230px" />
            </p>
            <div className="subtitle">
              <div className="columns is-centered is-8">
                <div className="column is-one-fifth">
                  <img src="https://badgen.net/bundlephobia/minzip/react-useformless?color=red" alt="npm version"/>
                </div>
                <div className="column is-one-fifth">
                  <img src="https://badgen.net/npm/v/react-useformless" alt="npm version"/>
                </div>
                <div className="column is-one-fifth">
                  <img src="https://travis-ci.org/GeDiez/react-use-formless.svg?branch=master" alt="npm version"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <div className="content has-text-centered">
            <p className="title is-6">
              Show me how
            </p>
            <p className="title is-3">
              <a href="#first-section">
                <span className="icon">
                  <i className="fas fa-angle-double-down" />
                </span>
              </a>
            </p>
            <p />
          </div>
        </div>
      </section>
      <ExampleSection/>
      <ApiSection id="apiSection"/>
      <AuthorsSection/>
      <footer className="footer has-background-grey-darker has-text-white">
        <div className="content has-text-centered">
          <p>
            <strong className="has-text-grey-lighter">useFormless</strong>. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;