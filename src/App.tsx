// src/App.tsx
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store'; 
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <div>Oops! Something went wrong on the login page.</div>, // Custom error element for the login route
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <div>Oops! Something went wrong on the dashboard page.</div>, // Custom error element for the dashboard route
  },
]);

function App() {
  return (
    <Provider store={store}> 
      <ErrorBoundary> {/* Wrap everything with ErrorBoundary */}
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
