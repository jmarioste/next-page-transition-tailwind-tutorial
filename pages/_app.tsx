import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import PageWithTransition from "../components/PageWithTransition";
function MyApp(props: AppProps) {
  return (
    <div>
      <div className="bg-slate-700 text-slate-50 py-4 ">
        <div className="container mx-auto flex gap-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <PageWithTransition {...props} />
    </div>
  );
}
export default MyApp;
