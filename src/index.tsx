import App from './App.js';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error(`Cannot find #root`);
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
