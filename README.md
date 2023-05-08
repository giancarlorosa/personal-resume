# Personal Resume React Project

![GitHub package.json version](https://img.shields.io/github/package-json/v/giancarlorosa/personal-resume)
![CircleCI](https://img.shields.io/circleci/build/github/giancarlorosa/personal-resume)
![Codecov](https://img.shields.io/codecov/c/github/giancarlorosa/personal-resume)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

## Project objective

This is a personal project from the creator **Giancarlo Rosa** to be used as a resume to apply for job positions. Initially, the idea is to be a focused document for Drupal job positions and some front-end job positions too, but in the future, this resume will have the responsibility to apply to any position that the creator has knowledge about.

Although the project is aimed at Drupal technology, it was built using React with Next framework. This choice was made in order to practice the gained knowledge about the tech. With this project, it was possible to practice React components creation, state management, tailwindcss, continuous integration, and continuous delivery.

Even though it's a one-person project, the creator decided to implement Storybook with Chromatic and Codecov to check test coverage to practice these integrations and know more about how to manage a CI/CD. The creator decided to add Conventional Commits to experiment and test this convention.

As this is an open project, feel free to check my integrations and see how the work is being done. Any suggestions will be more than welcome!

- [Codecov Test Coverage](https://app.codecov.io/gh/giancarlorosa/personal-resume)
- [Chromatic Library](https://www.chromatic.com/library?appId=64543c658dbd3a5c3d684a21)
- [Storybook Library](https://64543c658dbd3a5c3d684a21-hudrjjecyp.chromatic.com)
- [Conventional Commits](https://www.conventionalcommits.org)

## About the project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It has **husky** configured to validate code updates before sending it to **github**. Code standards are being validated with **eslint** during the **pre-commit**, and **jest** checks for the tests too. In git **commit-msg** hook, the commit message is being validated based on the **conventional commits** definitions.

### Development server

This project is using **yarn**. For the first install, please run:

```bash
yarn
```

The project is following the **Conventional Commits** definitions. It's not mandatory to install the **commitizen** package if you know all the definitions, but as a **good practice**, run:

```bash
yarn install-cz
```

To commit your messages following the **Conventional Commits**, stop doing the default **git commit -m** command and start using **commitizen** instead. It will help you by showing a prompt with some questions where it determines the best commit format by applying some standards. So, instead of using the default **git commit -m**, run this command:

```bash
git cz
```

To run the development server as the project is using **yarn**, run:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Storybook server

This project is using **Storybook** front-end validation. Knowing that every new component **MUST** be developed first in **Storybook** and after being implemented into the project.

To run the **Storybook** server, run:

```bash
yarn storybook
```

A new window will automatically open. If not, you can open [http://localhost:6006](http://localhost:6006) to see the result. If this port is not available, a new one will be chosen.

> :warning: **NOTE**:
> If your computer does not have too many resources, we advise you to **stop** the **development server** before starting the **storybook server** as all the layout tests are done inside **Storybook**.

## Other commands

Execute **eslint** to test code standards:

```bash
yarn lint
```

Execute all the written tests:

```bash
yarn test
```

Check the project test coverage:

```bash
yarn test-coverage
```
