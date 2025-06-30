import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Holborn Properties - Curating exceptional properties for discerning investors. Luxury international real estate opportunities for high-net-worth individuals." />
        <meta name="keywords" content="luxury real estate, international property, high-net-worth, investment properties, London, New York, Monaco" />
        <meta name="author" content="Holborn Properties" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Holborn Properties | Luxury International Real Estate" />
        <meta property="og:description" content="Curating exceptional properties for discerning investors. Exclusive access to premium international real estate opportunities." />
        <meta property="og:url" content="https://holbornproperties.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Holborn Properties | Luxury International Real Estate" />
        <meta name="twitter:description" content="Curating exceptional properties for discerning investors." />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

