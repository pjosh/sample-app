import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PostsProvider } from 'store/posts';
import { UsersProvider } from 'store/users';
import Router from 'router';
import 'styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PostsProvider>
        <UsersProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UsersProvider>
      </PostsProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
