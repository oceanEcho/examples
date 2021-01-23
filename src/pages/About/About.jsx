import React from 'react';

import styles from './styles.module.scss';

export const About = () => {
  return (
    <section className={styles.About}>
      <h1>About</h1>
      <p>
        This is a simple to do application that will help you demonstrate a simple transition from JavaScript to
        TypeScript.
      </p>
      <p>
        The main idea is not to translate the application all at once, but gradually. This will distribute the work on
        the migration and keep the application running.
      </p>
      <p>
        TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding
        static type definitions.
      </p>
      <p>
        Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript
        to validate that your code is working correctly.
      </p>
      <p>
        Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without
        writing additional code.
      </p>
    </section>
  );
};
