import React from 'react';

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>

      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a
          href="https://www.udemy.com/course/modern-react-front-to-back/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          React Front To Back
          <span className="sr-only"> (opens in new tab)</span>
        </a>{' '}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com" target="_blank" rel="noreferrer">
            {' '}
            Brad Traversy
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </strong>
        .
      </p>

      <p className="text-lg opacity-60">
        Created by: &nbsp;
        <a
          className="text-base-content"
          href="https://www.instagram.com/tripple.l3/"
          target="_blank"
          rel="noreferrer"
        >
          llasszzll
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </p>
    </>
  );
}

export default About;
