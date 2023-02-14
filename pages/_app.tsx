import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";

function MyApp({ Component, pageProps, router }: AppProps) {
  const last = useRef(Component);
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    const handler = () => {
      setTransitioning(true);
      setTimeout(() => {
        last.current = Component;
        setTransitioning(false);
      }, 300);
    };
    router.events.on("routeChangeComplete", handler);

    return () => {
      router.events.off("routeChangeComplete", handler);
    };
  }, [Component, router.events]);

  const Screen = transitioning ? last.current : Component;
  return (
    <div>
      <div className="bg-slate-700 text-slate-50 py-4 ">
        <div className="container mx-auto flex gap-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div
        className={cn({
          "animate-slideUpEnter": !transitioning,
          "animate-slideUpLeave": transitioning,
        })}
        key={router.route}
      >
        <Screen {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
