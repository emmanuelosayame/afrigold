import '../styles/globals.css';
import '../components/carousel.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CopyRightFooter from '../components/CopyRightFooter';
import Loading from '../components/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import font from 'next/font/local';
import { SWRConfig } from 'swr';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/hooks/auth';

const DownloadAppsModal = dynamic(
  () => import('../components/DownloadAppsModal'),
  { ssr: false }
);

const roboto = font({
  src: [
    { path: '../public/fonts/Roboto-Regular.ttf', weight: '400' },
    { path: '../public/fonts/Roboto-Medium.ttf', weight: '500' },
    { path: '../public/fonts/Roboto-Bold.ttf', weight: '600' },
  ],
  variable: '--font-roboto',
});

function shouldRenderLayout(route: string): boolean {
  // Add logic here to determine whether to render the layout based on the route
  const excludedRoutes = [
    '/admin/admin-signup',
    '/admin/admin-login',
    '/admin/statistics',
    '/admin/test-components',
    '/admin/profile/profile',
    '/admin/admin-success-message',
    `/admin/dashboard/dashboard`,
    `/admin/faq/faq`,
    `/admin/orders/orders`,
    `/admin/menu/menu`,
    `/admin/payment/payment`,
    `/admin/admin-settings/settings`,
    `/admin/contact/contact`,
    `/feedback`,
    `/cart`,
    `/checkout`,
    `/order-history`,
    '/login',
    '/register',
    '/create-profile/customer',
    '/create-profile/vendor',
    '/contact',
    '/admin',
  ];

  return !excludedRoutes.some((excludedRoute) =>
    route.startsWith(excludedRoute)
  );
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const shouldRender = shouldRenderLayout(router.route);

  const [loading, setLoading] = useState(false);

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
      {shouldRender && <Navbar />}
      {loading && <Loading />}
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          shouldRetryOnError: false,
          revalidateOnFocus: false,
          refreshWhenHidden: false,
          revalidateIfStale: false,
        }}>
        <main className={`${roboto.variable} font-roboto min-h-screen w-full`}>
          <EnsureCreateProfile />
          <DownloadAppsModal />
          <Component {...pageProps} />
        </main>
      </SWRConfig>
      {shouldRender && <Footer />}
      {shouldRender && <CopyRightFooter />}
      <ToastContainer />
    </>
  );
}

const EnsureCreateProfile = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    // if(user)
  }, [user, loading]);

  return <></>;
};

export default MyApp;
