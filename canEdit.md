# 제일 쉬운 PassCode 페이지로 프로토 타입 만들기 !

비밀번호 누르는 페이지

1. 배경색 (컬러, 이미지 둘다 가능)

   1. 컬러
      background-color:#;
   2. 이미지
      -ios-background-image:'passcodeBgImage.png';

2. 비밀번호 라는 문구

   1. 컬러
      ios-text-color:#;

3. 잠금화면 불릿 이미지 패스워드 누른것의 결과 부분

   1. 컬러
      -ios-bullet-first-image:'passcodeImgCode01.png
      -ios-bullet-second-image:'passcodeImgCode02.png
      -ios-bullet-third-image:'passcodeImgCode03.png
      -ios-bullet-fourth-image:'passcodeImgCode04.png

      -ios-bullet-selected-first-image:'passcodeImgCode01Selected.png;
      -ios-bullet-selected-second-image:'passcodeImgCode02Selected.png;
      -ios-bullet-selected-third-image:'passcodeImgCode03Selected.png;
      -ios-bullet-selected-fourth-image:'passcodeImgCode04Selected.png;

4. 키패드 이미지
   1. 키패드 배경 컬러
      -ios-keypad-background-color:#;
   2. 키패드 숫자 텍스트 컬러
      -ios-keypad-text-normal-color:#;
   3. 키패드 프레스 컬러
      -ios-keypad-number-highlighted-image:'passcodeKeypadPressed.png';
