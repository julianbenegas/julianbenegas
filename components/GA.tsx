import Head from 'next/head'

const GA = () => {
  return (
    <Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-144836817-2"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-144836817-2');`
        }}
      ></script>
    </Head>
  )
};

export default GA;
