# V-log_project_design

- [설계](https://github.com/linason-esc/V-log_project_design/blob/main/README.md#설계)
- [기능](https://github.com/linason-esc/V-log_project_design/blob/main/README.md#기능)
- [구현](https://github.com/linason-esc/V-log_project_design/blob/main/README.md#구현)
- [트러블 슈팅](https://github.com/linason-esc/V-log_project_design/blob/main/README.md#트러블-슈팅)

## 설계

### 목표

- React와 Typescript를 이용해 "5단어 일기장" 만들기 (프로젝트 이름이 V-log인 이유 : '5단어로 일기를 쓴다'는 것이 컨셉이므로, 그리스 로마 숫자 5를 나타내는 'Ⅴ'와 일기를 뜻하는 Vlog를 합쳤다!)

### 사용 (예정)

| 👩🏻‍💻             | 🔥          |
| -------------- | ----------- |
| 언어           | Typescript  |
| 라이브러리     | React (CRA) |
| CSS 프레임워크 | Tailwind    |

- 글로벌 스테이트가 필요한 경우 Redux로 사용 예정
- ESLint, prettier 사용✅ (6/27~)

### 공부 필요

- Typescipt와 친숙해지기...! (Typescipt로 플젝하는 게 처음이라..!) (6/27~ 강의 듣는 중)
- React와 Redux에 대한 공부가 조금 부족한 것 같아 공부 더 필요 (6/27~ 플젝하면서 공부)
- Tailwind 사용법 (6/27~ 플젝하면서 공부)
- 이미지 저장 어떻게 할 것인가..! (로컬 스토리지 vs 서버리스) (6/27에 추가됨)

### 조사 필요

- tailwind 적용 방법 (6/27✅)
- ESLint, prettier 설정 방법 (6/27✅)
- 로컬 스토리지 / 서버리스 공부 (6/27에 추가됨)
- TBD (To Be Determined)

### 레이아웃

1. 시작화면
   ![1](https://user-images.githubusercontent.com/67824465/174514205-779a8b2c-254e-4abf-964e-a58ca09d335b.jpg)
   오른쪽 하단의 '책갈피 버튼' 누르면 책장이 넘어가게!

2. 일기장 작성화면
   ![2](https://user-images.githubusercontent.com/67824465/174514233-aff85f27-aa24-48a0-ad96-7a24ec1f3912.jpg)
   오른쪽 하단의 '연필 버튼'을 누르면 모달이 뜨게!

3. 모달창
   ![3](https://user-images.githubusercontent.com/67824465/174514239-3de5f8ee-6a05-478c-8d26-c474cb8e5777.jpg)
   일기 내용을 저장할 '저장 버튼' 추가

4. 날짜 리스트
   ![4](https://user-images.githubusercontent.com/67824465/174514246-759e7fd1-a12e-4b19-b38a-acd2256a6a94.jpg)
   왼쪽 상단의 목록 버튼을 누르면 최근에 쓴 일기 날짜들이 뜨게!

## 기능

- 책장 페이지 넘어가는 모션 CSS로 구현 (만약 구현 안되면 그냥 일기장 작성화면부터 구현하기)
- 일기 등록, 읽기, 수정, 삭제 (CRUD)
- 일기 안에 날짜, 사진, 5단어(단어의 최대 길이는 10글자)가 기록될 수 있게!
- 날짜 내림차순 정렬 (가장 최근 일기 -> 가장 지난 일기 순서로!)

## 구현

- TBD

## (기간 안에 못할 것 같지만) 앞으로 더 추가해보고 싶은 것

- 북마크 기능 (다시 보고 싶은 일기들만 추려서!)
- 비밀번호 설정
- 추가하는 사진 개수 다양하게
- 언어 교환 (English)

## 트러블 슈팅

- (6/25) 전체적인 작업환경 설정 : 아예 처음부터 React+Typescript으로 새로운 프로젝트를 생성하고 싶었음. 그런데 구글링을 해서 나오는 명령문들로 해봤더니 계속 js파일로만 떴음. 알고보니 -를 두개 써줘야해서 그런 거였음. ' npx create-react-app my-app(앱이름) --template typescript '으로 하면 React+Typescript으로 처음부터 프로젝트를 시작할 수 있다!
- (6/26) tailwind css 작업환경 설정 : tailwind css를 다 설치했는데, Unknown at rule @tailwind 뭐시기 경고가 뜸. vscode에서 'postcss language support'을 설치했더니 해결!
- (6/27) ESLint와 Prettier 설정 완⭐료!! 근데...진짜 험난했다... 몇시간을 매달린 끝에 겨우겨우 다했다...
