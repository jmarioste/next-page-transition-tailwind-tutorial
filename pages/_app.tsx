import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import PageWithTransition from "../components/transitions/WithTransition";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <div className="bg-slate-700 text-slate-50 py-4 ">
        <div className="container mx-auto flex gap-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <PageWithTransition
        Component={Component}
        pageProps={pageProps}
        router={router}
      />
    </div>
  );
}

export default MyApp;
