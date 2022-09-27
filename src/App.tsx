const Index = React.lazy(() => import('./pages/index.js'));
const Demo = React.lazy(() => import('./pages/demo.js'));

const App = () => (
	<>
		<ReactHelmet>
			<link rel="stylesheet" href="/assets/css/index.css" />
		</ReactHelmet>
		<ReactRouterDOM.BrowserRouter>
			<ReactRouterDOM.Routes>
				<ReactRouterDOM.Route
					element={
						<React.Suspense fallback="Loading...">
							<Index />
						</React.Suspense>
					}
					index
				/>
				<ReactRouterDOM.Route
					element={
						<React.Suspense fallback="Loading...">
							<Demo />
						</React.Suspense>
					}
					path="/demo.html"
				/>
			</ReactRouterDOM.Routes>
		</ReactRouterDOM.BrowserRouter>
	</>
);

export default App;
