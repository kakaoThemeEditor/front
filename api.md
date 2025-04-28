1. 테마 관련 API
   | 엔드포인트 | 메소드 | 설명 |
   |-----------|--------|------|
   | /api/my-creations | GET | 내가 만든 테마 리스트 조회 |
   | /api/editor/image-upload | POST | 테마 제작 중 필요한 이미지 업로드 |
   | /api/editor/preview | GET | 테마 미리보기 데이터 조회 |
   | /api/editor/save | POST | 테마 제작 중 저장 |
   | /api/editor/load | GET | 저장된 테마 불러오기 |
2. 인증 관련 API
   | 엔드포인트 | 메소드 | 설명 |
   |-----------|--------|------|
   | /api/auth/register | POST | 회원가입 |
   | /api/auth/login | POST | 로그인 (토큰 발급) |
   | /api/auth/logout | POST | 로그아웃 (토큰 무효화) |
   | /api/auth/refresh-token | POST | 액세스 토큰 재발급 |
   | /api/auth/forgot-password | POST | 비밀번호 재설정 링크 요청 |
   | /api/auth/reset-password | POST | 새 비밀번호 설정 |
   | /api/auth/verify-email | POST | 이메일 인증 완료 |
   | /api/auth/send-verification-email | POST | 이메일 인증 메일 재발송 |
