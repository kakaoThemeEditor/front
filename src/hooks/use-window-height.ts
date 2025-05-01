import { useState, useEffect } from "react";

interface WindowHeightState {
  windowHeight: number;
  windowWidth: number;
  shouldAddPadding: boolean;
  paddingValue: number;
}

export function useWindowHeight() {
  const [state, setState] = useState<WindowHeightState>({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    shouldAddPadding: false,
    paddingValue: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const baseHeight = 600;
      const baseWidth = 1280;
      // xl breakpoint (1280px) 이상이고 높이가 너무 작을 때
      const shouldAddPadding = windowWidth >= baseWidth && windowHeight < baseHeight;
      const paddingValue = shouldAddPadding ? getPaddingValue() : 0;

      function getPaddingValue() {
        const paddingValue = Math.max(0, baseHeight - windowHeight) / 2;
        if (windowHeight > 300) {
          return paddingValue + 100;
        }
        if (windowHeight < 300) {
          return paddingValue + 20;
        }
        return paddingValue;
      }
      setState({
        windowHeight,
        windowWidth,
        shouldAddPadding,
        paddingValue,
      });
    };

    // 초기 실행
    handleResize();

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return state;
}
