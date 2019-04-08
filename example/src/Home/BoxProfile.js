import React from 'react';

export function BoxProfile({ profile }) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={profile.avatar} alt="avatar github user"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{profile.name}</strong> <small>{profile.username}</small>
              <br />
              {profile.bio}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item" aria-label="reply" href={profile.url}>
                <span className="icon is-small">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>)
}