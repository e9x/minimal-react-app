function App() {
	return (
		<>
			<ReactHelmet>
				<link rel="stylesheet" href="/assets/css/index.css" />
				<link rel="stylesheet" href="/assets/css/App.css" />
			</ReactHelmet>
			<div className="App">
				<header className="App-header">
					<img src="/assets/media/logo.svg" className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> then reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		</>
	);
}

export default App;
