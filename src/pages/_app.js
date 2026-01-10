import "@/styles/globals.css";
import Layout from "@/components/templates/layout";
import { ttCommons, gtAlpina } from "@/fonts/fonts";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${ttCommons.variable} ${gtAlpina.variable}`}>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </div>
  );
}
