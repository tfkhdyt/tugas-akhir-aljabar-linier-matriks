// import module
// import styling
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { Slide, ToastContainer } from 'react-toastify';

// import komponen
import Layout from '../components/Layout';

// export component App
export default function App({ Component, pageProps }) {
  // buat variabel untuk router
  const _router = useRouter();
  return (
    <div>
      {/* panggil komponen Layout */}
      <Layout>
        {/*<motion.div
          key={router.route}
          initial='initial'
          animate='animate'
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >*/}
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
        {/*</motion.div>*/}
      </Layout>
      {/* panggil komponen ToastContainer */}
      <ToastContainer
        position='top-right'
        transition={Slide}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={_router.pathname !== '/404'}
        rtl={false}
        pauseOnFocusLoss={_router.pathname !== '/404'}
        draggable={_router.pathname !== '/404'}
        pauseOnHover={_router.pathname !== '/404'}
        bodyClassName='font-semibold'
      />
    </div>
  );
}
