import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // 여기서 토큰이나 세션 체크 로직을 구현합니다
  }, []);

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
};
