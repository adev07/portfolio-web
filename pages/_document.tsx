import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          /> */}
          {/* <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          /> */}
          {/* <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          /> */}
          {/* <link rel="manifest" href="/static/favicon/site.webmanifest" /> */}
        </Head>
        <body>
          <Main />
          <div id="chat-widget" data-key="6744c6df0c46a3c1ab2168e2"></div><script src="https://cdn.jsdelivr.net/gh/helio-ai/widget@latest/main.js"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
