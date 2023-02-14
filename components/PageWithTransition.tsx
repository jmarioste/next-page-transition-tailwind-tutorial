import { useState, useEffect, useRef } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import cn from "classnames";
const PageWithTransition = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const prevScreen = useRef(Component);
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    // this handler will create a transition effect between route changes,
    // so that it doesn't automatically display the next screen.
    const handler = () => {
      setTransitioning(true);
      // save the current screen as the previous screen.

      setTimeout(() => {
        prevScreen.current = Component;
        setTransitioning(false);
      }, 280);
    };
    router.events.on("routeChangeComplete", handler);
    return () => {
      router.events.off("routeChangeComplete", handler);
    };
  }, [Component, router.events]);

  // determine what screen to display when transitioning
  const Screen = !transitioning ? Component : prevScreen.current;

  return (
    <div
      className={cn({
        //use enter animation when showing the current screen
        "animate-slideUpEnter": !transitioning,
        //use an exit animation when showing the previous screen
        "animate-slideUpLeave": transitioning,
      })}
    >
      <Screen {...pageProps} />
    </div>
  );
};
export default PageWithTransition;
