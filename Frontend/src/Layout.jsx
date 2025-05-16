import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import DisplayParagraph from './components/DisplayParagraph';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function Layout() {
  const {
    user,
    loginWithRedirect,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {isAuthenticated && (
        <>
          <NavBar />
          <div className='h-full flex items-center justify-center mt-10'>
            <div className='h-2/3 w-2/3'>
              <DisplayParagraph paragraph={"Make sure your compiled CSS is included in the <head> (your framework might handle this for you), then start using Tailwind’s utility classes to style your content."} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Layout;
