/**
 * UMD react-dom exports react-dom/client, however the typedefs can't reflect this.
 * ReactDOM.createRoot exists in the browser
 */

/* eslint-disable @typescript-eslint/consistent-type-imports */

declare var React: typeof import('react');
declare var ReactDOM: typeof import('react-dom');
declare var ReactDOMClient: typeof import('react-dom/client');
declare var ReactHelmet: typeof import('react-helmet').default;
