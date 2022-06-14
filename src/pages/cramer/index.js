// import module
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';

// import components
import Content from '../../components/Content';
import Form from '../../components/Form';
import HasilCramer from '../../components/HasilCramer';
import TableCramer from '../../components/TableCramer';
// import config
import Data, { CramerContext } from '../../config';
import variants from '../../config/variants';

// export component Cramer
export default function Cramer() {
  // state untuk persamaan dan hasil
  const [persamaan1, setPersamaan1] = useState({
    x: 0,
    y: 0,
    z: 0,
    hasil: 0,
  });
  const [persamaan2, setPersamaan2] = useState({
    x: 0,
    y: 0,
    z: 0,
    hasil: 0,
  });
  const [persamaan3, setPersamaan3] = useState({
    x: 0,
    y: 0,
    z: 0,
    hasil: 0,
  });
  const [result, setResult] = useState();

  // variabel form
  const form = (
    <div>
      <div>
        <p className='mb-3 text-left font-semibold text-gray-600'>
          Masukkan 3 persamaan:
        </p>
      </div>
      {/* panggil component TableCramer */}
      <TableCramer />
    </div>
  );

  // variabel content
  const content = (
    // pass state ke context
    <CramerContext.Provider
      value={{
        persamaan1,
        setPersamaan1,
        persamaan2,
        setPersamaan2,
        persamaan3,
        setPersamaan3,
        result,
        setResult,
      }}
    >
      {/* panggil component Form dengan variabel form sebagai props */}
      <Form content={form} />
      {/* panggil component HasilCramer jika state result memiliki nilai */}
      {result ? <HasilCramer /> : null}
    </CramerContext.Provider>
  );

  // tampilan halaman cramer
  return (
    <div>
      <Head>
        {/* judul halaman */}
        <title>
          {Data.menu[2]} | {Data.judul}
        </title>
      </Head>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'linear' }}
        className='container mx-auto p-6 lg:px-24'
      >
        <span className='text-2xl font-semibold'>{Data.menu[2]}</span>
        <div className='mt-6'>
          {/* panggil component Content dengan variabel content sebagai props */}
          <Content content={content} />
        </div>
      </motion.main>
    </div>
  );
}
