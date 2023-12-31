import { AnimatePresence, motion } from 'framer-motion';
import './globals.css';
import type { AppProps } from 'next/app';
import Layout from './layout'; 

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          },
        }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
