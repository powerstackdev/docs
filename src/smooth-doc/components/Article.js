import styled, { css, down } from '@xstyled/styled-components'

export const Article = styled.article`
  .anchor {
    margin-left: calc(-1em - 4px);
    > svg {
      fill: on-background;
      width: 1em;
      height: 1em;
      vertical-align: -15%;
    }
  }
  
  .vertical-timeline-element-icon svg {
    top: 40%;
    ${down(
      'lg',
      css`
        top: 34%;
      `,
    )}  
  }

  code {
    background-color: background-light;
    color: on-background-primary;
    border-radius: base;
    padding: 1;
    font-size: 85%;
  }

  mark {
    background-color: background-mark;
  }

  > p {
    margin: 3 0;
    font-size: 16;
    line-height: 1.6;
  }

  /* Intro */
  > h1 + p {
    a,
    strong {
      font-weight: 400;
    }
  }

  > hr {
    margin: 0;
    height: 0;
    border: 0;
    border-top: 1;
    border-color: layout-border;
    margin: 4 0;

    &:first-child {
      margin-top: 0;
    }
  }

  > h1 {
    font-size: 32;
    line-height: 1.1;
    font-weight: 800;
    margin: 40 0 2;
  }

  > h2 {
    font-size: 24px;
    line-height: 1.2;
    font-weight: bold;
    margin: 4 0;
    padding-top: 3;
    border-top: 1;
    border-color: layout-border;
  }

  > h1 + h2,
  > h2:first-child {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }

  > h3 {
    font-size: 18;
    line-height: 1.2;
    font-weight: 800;
    margin: 4 0 3;
    padding-top: 3;

    ${down(
      'sm',
      css`
        overflow-wrap: break-word;
        word-break: break-word;
      `,
    )}
  }

  > h4 {
    font-weight: 900;
    font-size: 18;
    line-height: 1.2;
    margin: 3 0;
    padding-top: 3;
  }

  > h4 + p {
    margin-top: 3;
  }

  > ul + p {
    margin-top: 2;
  }

  .editor {
    background-color: editor-background;
    color: editor-text;
    padding: 3 4;
    margin: 4 -3;
    overflow: auto;
    font-size: 14;
    line-height: 1.45;
    border-radius: base;

    ${down(
      'sm',
      css`
        margin-left: -4;
        margin-right: -4;
        border-radius: 0;
      `,
    )}
  }

  > code {
    background-color: editor-background;
    border-radius: base;
    color: inherit;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
      Courier New, monospace;
    font-size: 85%;
    padding: 1 2;
  }

  img {
    max-width: 100%;
  }

  ol,
  ul {
    margin-top: 4;
    font-size: 16;
    padding-left: 4;

    p,
    p:first-of-type {
      font-size: 16;
      margin-top: 0;
      line-height: 1.2;
    }

    li {
      margin-top: 2;
    }

    ol,
    ul {
      margin-left: 4;
      margin-top: 2;
    }
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
  }

  > blockquote {
    font-size: 16;
    background-color: blockquote-background;
    border-left: 8;
    border-color: blockquote-border;
    padding: 3;
    margin: 3 -2;
    border-radius: blockquote;

    code {
      background-color: rgba(255, 255, 255, 0.1);
      background-blend-mode: color;
      color: on-background;
      border-radius: base;
      padding: 0 1;
    }

    p {
      margin-top: 3;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      transition: fast;
      color: blockquote-link;
      text-decoration: underline;

      &:hover {
        color: on-background;
      }
    }
  }

  a {
    transition: fast;
    color: on-background-primary-dark;

    &:hover {
      color: on-background-primary-dark;
      text-decoration: underline;
    }
  }
  
  svg {
    display: inline;
    max-width: 100%;
    &.feature-image {
      display: block;
      position: relative;
      z-index: 2;
      top: -123px;
      left: calc(50% - 24px);
      height: 48px;
      width: 48px;
      margin-bottom: -48px;
    }
  }
`
