// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// function Loading() {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) => url === router.asPath && setLoading(false);
//     const handleError = (url) => url === router.asPath && setLoading(false);

//     router.events.on('routeChangeStart', handleStart);
//     router.events.on('routeChangeComplete', handleComplete);
//     router.events.on('routeChangeError', handleError);

//     return () => {
//       router.events.off('routeChangeStart', handleStart);
//       router.events.off('routeChangeComplete', handleComplete);
//       router.events.off('routeChangeError', handleError);
//     };
//   }, [router]);

//   return loading ? (
//     <div className="spinner-wrapper">
//       <div className="spinner" />
//     </div>
//   ) : null;
// }

// export default Loading;

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Loading() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true); // Set the loader to display
    const handleComplete = () => setLoading(false); // Set the loader to hide

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && (
        <div className='spinner-wrapper'>
          <div className='spinner' />
        </div>
      )}
    </>
  );
}

export default Loading;

export const LoadingAbsolute = () => {
  return (
    <div className='spinner-wrapper'>
      <div className='spinner' />
    </div>
  );
};
