import { useState, useRef, useEffect } from "react";
import SimpleBar from "simplebar-react";
import { ParallaxProvider } from "react-scroll-parallax";
import { AppViewmodel } from "../../AppViewModel";
export const ScrollWrapper = ({ children }) => {
  const [app] = useState(new AppViewmodel());
  const [scrollWrap, setScrollWrap] = useState(undefined);
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  useEffect(() => {
    const parent = parentRef.current;
    if (
      (parent === null || parent === void 0 ? void 0 : parent.clientHeight) &&
      scrollRef
    ) {
      const bar =
        scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
      const wrapper =
        bar === null || bar === void 0 ? void 0 : bar.getScrollElement();
      setScrollWrap(wrapper);
      app.rewriteDefaultScrolling(wrapper, parent);
    }
  }, []);
  const parallaxProviderProps = {
    scrollContainer: scrollWrap,
    scrollAxis: "vertical",
  };

  return (
    <div className="flex flex-1 overflow-hidden" ref={parentRef}>
      <SimpleBar className="flex w-full" ref={scrollRef}>
        {scrollWrap && (
          <>
            <ParallaxProvider {...parallaxProviderProps}>
              {children(app)}
            </ParallaxProvider>
          </>
        )}
      </SimpleBar>
    </div>
  );
};
