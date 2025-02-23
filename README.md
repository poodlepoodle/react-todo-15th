> [https://react-todo-15th-47y241e55-poodlepoodle.vercel.app](https://react-todo-15th-47y241e55-poodlepoodle.vercel.app)

# 🔥 개요

안녕하세요. CEOS 15기 프론트 최어진입니다.  
프론트 스터디 2주차 과제는
<**1주차에 만든 To-do List를 React로 리팩토링하기**> 였습니다.  
HTML + CSS + Vanilla JS로만 구현한 To-do List의 기능들을
React로 리팩토링하는 과정에서 React를 사용한 개발 방식의 차이점과 편리성을
피부로 체감할 수 있어 좋겠다고 생각했습니다.  
뿐만 아니라, 1주차 과제에서는 구상한 모든 기능을 전부 구현하지 못했기 때문에
To-do List에 대한 아쉬움을 털 수 있는 기회라고 생각하고 참여했습니다.  

# ✨ 콘셉트

저번 주에 이어서 **일상 생활에서 자주 사용하는 To-do List 애플리케이션**를
메인 디자인 콘셉트로 정했습니다.  
근데 곰곰히 생각해보니 제 일상에서 IOS의 메모 앱보다도
많이 사용하는 To-do List가 있다는 사실을 깨달았는데요,  
바로 **카카오톡의 <나와의 대화>** 기능입니다.  
일상 속에서 적지 않은 사람들이 당장 뭔가를 적어놓을 공간이 필요하거나
혹은 파일을 급하게 여기서 저기서 옮겨야 할 때 클립보드처럼 활용합니다.  

따라서 실제 카카오톡 <나와의 대화> 채팅방의 UX를 전체적으로 가져오면서
아직 실행 예정인 일정들을 **내가 보낸 말풍선**,
실행 완료한 일정들을 **상대방이 보낸 말풍선**으로 표현하면 재밌겠다 싶어서
이번 주에 구현할 디자인 콘셉트로 차용했습니다.  

![wireframe](https://user-images.githubusercontent.com/6462456/160066065-4a400c28-07e1-4ba4-b7a2-3f321fff9f57.jpg)
_wireframe_

![style_guide](https://user-images.githubusercontent.com/6462456/160102817-b8077fcf-bd83-4dcd-a3f0-27b9138ac457.jpg)
_style guideline design_

콘셉트 구상이 끝난 뒤 간단히 와이어프레임을 제작했고,
이어서 스타일 가이드라인 디자인까지 마친 뒤 개발을 시작했습니다.  

# 🧭 개발 순서

이러한 순서로 개발 순서를 구성했습니다.

1. JSX를 이용한 To-do List 기본 레이아웃 구성
2. To-do List 기본 고려사항 구현
3. To-do List 추가 고려사항 구현
4. Vercel을 이용한 배포

# ✍🏻 개발 고려사항

> 기본 고려사항
- 1주차 미션의 결과물을 그대로 **React**로 구현합니다.
- **React Hooks**에 대한 기초와 React를 통한 **어플리케이션 상태 관리 방법**을 이해합니다.
- **Functional Components**를 사용합니다.
- **Styled-Components**를 통한 CSS-in-JS 및 CSS Preprocessor의 사용법을 익힙니다.
- **VSCode**, **Prettier**를 이용하여 개발환경을 관리합니다.
- **Gitmoji** 및 **Commit Convention**을 사용한 Commit Message를 작성합니다.

> 추가 고려사항 (편집 중)
1. 1주차 미션 때 구현하지 못한 **localStorage를 이용한 저장 및 불러오기**를 구현합니다.
2. **라이트 모드/다크 모드**를 선택할 수 있는 기능을 구현합니다.  

# 🧐 씽킹 모먼트

> (1) React의 컴포넌트 기반 설계

React로 개발하면서 가장 많이 생각했던 점은 앱의 전체 구조가
작은 여러 개의 컴포넌트로 조립되어 있는 것 같다는 느낌이었습니다.
To-do List의 컴포넌트 구조를 맨 처음 설계했을 때는
`input`이 들어 있는 `form` 자체를 아예 분리해서 생각했고
파일을 나눠서 작업했는데 각 컴포넌트 간의 `props` 전달이 어떻게
이루어지는지 잘 이해를 하지 못하고 결국은 `form` 부분만
합친 채로 마무리하게 됐네요.. 사실 그래서 지금까지의 과제에서는
레이아웃을 먼저 다 구성해 놓고 그 다음 구현할 기능을 차례대로
조립해 가는 방식으로 작업했는데, 제가 작업한 방법이 좋은 방법인지
이번에 의문이 들었습니다.

> (2) Styled-Components를 통한 Css-in-JS Styling

이번 주 미션을 처음 시작했을 때에는 Styled-Components를
보고 굉장히 낯설다고 생각했는데, 어느 순간 빠른 시간 내에
익숙해져서 개발했던 것 같습니다. 아무래도 Style Sheet를 
따로 파일로 분리하지 않고 Javascript 파일 내에서
스타일 - 기능 구현이 하나의 컴포넌트 단위마다 정리할 수 있어서
편하게 느끼지 않았나 싶습니다.  
Styled-Components에서 props를 통한 Conditional Styling 방식 또한
처음 보고 바로 이해되지는 않았지만, 다크 모드 기능을 구현하면서
이 부분을 조금이나마 더 이해하고 미션을 마무리하는 것 같아 개인적으로
추가 선택사항 구현을 결심하기 잘했다고 생각합니다.  

# 📎 KEY QUESTIONS

> Virtual-DOM은 무엇이고, 이를 사용함으로서 얻는 이점은 무엇인가요?

저번 주에도 짚고 넘어갔던 내용으로는 DOM(Document Object Model)은
Javascript가 HTML 문서에 접근하기 위한 인터페이스 역할을 한다고
이해했습니다. 다만, 실제 DOM은 브라우저가 화면을 렌더링하는 데 필요한
많은 것들이 들어 있어서 조작하기에 굉장히 무겁고, 이를 개선하기 위해
React에서 실제 DOM의 변경 사항을 빠르게 추적하고 반영하기 위해서
사용하는 관리 방법이 Virtual-DOM이라고 합니다.  

> 미션을 진행하면서 느낀, React를 사용함으로서 얻을수 있는 장점은 무엇이었나요?

스타일을 입히는 작업과 기능 구현을 하나의 파일에서 작업하는 경우가 많았다는 점,
그리고 컴포넌트 단위로 개발을 진행하다 보니 전체적인 파일 구조를 잡기에는
더 수월했다는 점이 와닿았습니다.  

> React에서 상태란 무엇이고 어떻게 관리할 수 있을까요?

**Plain Javascript Object hold information influences the output of render**  
(제가 적은 말은 아니고 React Documentation에 있는 말이라고 합니다.)  
React를 통한 개발을 진행한다고 생각하면 이는 단순히 웹 페이지를 보여주기보다는
사용자와 지속적인 상호작용을 가져가는 웹 애플리케이션 형태의 결과물이 될 것이라고
생각할 수 있습니다. 이러한 과정 속에서 애플리케이션을 렌더링하는 데 영향을
미칠 수 있는 값들을 **상태(State)** 라고 부른다고 합니다.
이번 주 미션에서 굉장히 많이 사용했던 `useState`가 대표적인 예시인데,
useState를 통해 관리하는 값들은 렌더링에 직접적으로 반영되어야 하는
경우가 많으며 이렇게 프레임워크가 제공하는 기능들을 이용해
애플리케이션이 가지는 여러 상태 값들의 흐름을 예측 가능한 수준으로
조절하는 게 상태 관리의 개념이라고 생각합니다.

> Styled-Components 사용 후기 (CSS와 비교)

저번 주에는 CSS 파일에 대한 속성들에 대한 Naming Convention을 찾아보고
차례대로 나름 정리해가면서 작성했다고 생각했는데,
실제로는 CSS 파일이 굉장히 길어져서 어떤 스타일 속성들을 수정하기 위해
찾아 다녔던 데에 적지 않은 Overhead가 소요되었다고 느꼈습니다.  
그에 반해서 Styled-Components는 적어도 하나의 컴포넌트에 대한 속성은
당연히 이 파일에 있겠구나 싶어서 그런 부분에 대해서는 굉장히
편한 개발 환경이었다고 생각합니다.  

# 🥲 마치며

사실 운영진과 멘토 분들께서 내 주신 이번 주차 미션의 의의는
저번 주차의 Vanilla Javascript를 통한 구현에서 그대로 UI/UX를 가져오면서
기능만 React 및 React Hooks를 통해 이해해 보라는 의도셨다고 생각하는데,
개인적으로 지나치게 UI를 바꾸려다가 다소 과제 의도에서 벗어난 결과물
(+ 다소 제출 시간에서 벗어난 풀리퀘)를 제출한 것 같아서 마음이 약간은 무겁습니다.  
최근 시간을 낭비했다 싶은 순간은 딱히 없었던 것 같지만서도 앞으로 다가올 미션이라던지
팀빌딩 이후에 이어질 프로젝트를 위해서는 다른 뭔가를 더 포기하고
정말 중요하다고 생각되는 일에 집중할 필요가 있다는 사실을 느낀 이번 주 미션이었습니다.  