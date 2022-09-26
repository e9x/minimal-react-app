/**
 * UMD react-dom exports react-dom/client, however the typedefs can't reflect this.
 * ReactDOM.createRoot exists in the browser
 */

/* eslint-disable @typescript-eslint/consistent-type-imports */

declare var React: typeof import('react');
declare var ReactDOM: typeof import('react-dom');

declare module 'react-dom' {
	var createRoot: typeof import('react-dom/client').createRoot;
	var hydrateRoot: typeof import('react-dom/client').hydrateRoot;
}
