const Index = React.lazy(() => import('./pages/index.js'));
const Demo = React.lazy(() => import('./pages/demo.js'));

const App = () => (
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
);

export default App;
