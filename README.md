
# Holland & Barrett Technical Test - Siobhan McKenzie

## Overview

In this technical test, I've considered various aspects including accessibility, performance, and compliance with the brief. Here are some key points:

- **Accessibility**: Ensured aria-labels were available, and best-practises were followed. I did check the page with the Wave Accessibility tool, and made some contrast adjustments to the design. It is still not perfect - for example it is missing a title attribute.
- **Performance**: Focused on optimising the React performance, however I haven't implemented certain production-ready features such as caching. I de-scoped an input field that would allow you to input your location and then send it - this is the sort of area that would particularly need optimising for performance - users would expect autocomplete for L to pop up with a list containing London / las Vegas / Lisbon etc, which would need to be managed efficiently.
- **Design Compliance**: Crated a Canva design to frame my approach and keep scope focused. it's not pixel perfect as i'd expect from a Figma handover, however it is a quick and easy way for me to mock things up (this took me minutes to put together)

https://www.canva.com/design/DAGKcUFkSl0/atfY8W3ZrpLLUv-jUITcbA/view?mode=prototype


## Learning

This technical test was used as an opportunity to learn more about the browsers default Geolocation interface https://developer.mozilla.org/en-US/docs/Web/API/Geolocation

## Commits and Code Management

- **Conventional Commits**: Followed conventional commit messages to make the commit history clear and structured.
- **Rewindable Commits**: Ensured that commits are small and focused, making it easier for reviewers to go through the pull request commit by commit if desired.

## Test Setup and coverage

I have implemented react-testing library, however I have implemented minimal tests in order to ensure that tests are demonstrated, but the amount of time assigned to this test is not exceeded.

## Comments

I left a small number of inline comments to ease the review process. Typically, such comments would not be included.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
