import React, { useEffect, useState } from "react";


export const useDelayUnmount=(isMounted: boolean, delayTime:any)=> {
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
      let timeoutId:any;
      if (isMounted && !showDiv) {
        setShowDiv(true);
      } else if (!isMounted && showDiv) {
        timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
      }
      return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
    }, [isMounted, delayTime, showDiv]);
    return showDiv;
  }

  export const unmountedStyle = {
    animation: "outAnimation 70ms ease-out",
    animationFillMode: "forwards"
  };

  export const mountedStyle = { animation: "inAnimation 550ms ease-in" };