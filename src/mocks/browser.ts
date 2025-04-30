import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

// MSW 디버깅 로그 활성화
worker.start({
  onUnhandledRequest: "warn",
  serviceWorker: {
    url: "/mockServiceWorker.js",
  },
});
