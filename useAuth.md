# useAuth 훅의 의존성 배열 비교

## 1. `[navigate]` 사용 시

### 장점

- `useNavigate` 훅에서 반환된 안정적인 함수 레퍼런스 사용
- React Router의 프로그래매틱 네비게이션 기능 활용
- 불필요한 리렌더링 최소화 (함수 레퍼런스가 거의 변경되지 않음)
- React Router의 모든 기능(히스토리 관리, 라우팅 상태 등) 정상 동작

### 사용 사례

- React Router를 사용하는 SPA 애플리케이션
- 프로그래매틱 네비게이션이 필요한 경우
- 라우팅 상태와 히스토리 관리가 중요한 경우

## 2. `[window.location.pathname]` 사용 시

### 특징

- 브라우저의 실제 URL 경로 변경 시마다 useEffect 실행
- 브라우저 API 직접 사용
- SPA의 라우팅 컨텍스트를 완전히 활용하지 못할 수 있음
- React Router의 기능과 완벽한 동기화가 어려울 수 있음

### 사용 사례

- React Router를 사용하지 않는 경우
- 브라우저의 실제 URL 변경에 직접 반응해야 하는 경우
- 서버 사이드 렌더링(SSR) 환경

## 현재 프로젝트에서의 선택

현재 프로젝트에서는 `[navigate]`를 사용하는 것이 더 적절합니다. 그 이유는:

1. React Router를 이미 사용 중인 애플리케이션이므로, 일관된 방식으로 라우팅 기능을 활용하는 것이 좋습니다.
2. `useAuth` 훅이 인증 상태 변경 시 라우팅을 처리하는데, React Router의 `navigate` 함수를 사용하면 라우팅 관련 기능들이 정상적으로 작동합니다.
3. SPA의 특성을 더 잘 살릴 수 있습니다.

## 결론

React Router를 사용하는 SPA 애플리케이션에서는 `[navigate]`를 의존성 배열에 사용하는 것이 더 바람직한 접근 방식입니다. 이는 React의 선언적 프로그래밍 패러다임과 더 잘 어울리며, 라우팅 관련 기능들을 더 효과적으로 활용할 수 있게 해줍니다.

```
  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = Cookies.get("kakao_access_token");
      const refreshToken = Cookies.get("kakao_refresh_token");

      if (!accessToken && !refreshToken) {
        setIsAuthenticated(false);
        return;
      }

      if (accessToken) {
        try {
          await APIClient.get("/auth/verify");
          setIsAuthenticated(true);
        } catch (error) {
          if (refreshToken) {
            await refreshMutation.mutateAsync(refreshToken);
          } else {
            setIsAuthenticated(false);
          }
        }
      }
    };
    console.log("페이지 바뀌었음");
    checkAuth();
  }, [navigate]);

```
