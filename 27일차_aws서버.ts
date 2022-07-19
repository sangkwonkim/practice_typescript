// 입사 후 중간에 투입된 프로젝트의 관리자 페이지 배포가 진행되었습니다.
// 이제 한 달 뒤에 서비스 페이지까지 배포를 진행할 예정이어서 팀원들과 어떻게 배포할지에 대해 이야길 나누어봤습니다.
// 저희가 계속해서 서비스를 운영하는 것이 아니기 때문에 로드 밸런싱과 서버 구축할 때 사용자가 몰릴 때 클라이언트가 불편함을 겪지 않도록, 사용자가 적을 때는 낮은 요금이 부과될 수 있도록
// 여러 방면에 대해서 고민을 해야되다 보니 쉽지 않았습니다.

// CI/CD 툴과 ec2, 로드 밸런싱 등 이야길 주고 받았는데, 규모가 있는 프로젝트 배포는 처음이라 더 공부하려고 합니다.

// 스타트업 ec2
// 상황 별 CI/CD 툴 선택
// 로드 밸런싱

// 오늘을 시작으로 이번 주는 위의 순서대로 학습해보고 숙지할 수 있는 시간을 가져보겠습니다.

// 먼저 스타트업 ec2의 경우에는, 인터넷에서 좋은 게시물을 찾아서 이를 토대로 알아봤습니다.

// url : https://velog.io/@dochis/%EC%B4%88%EA%B8%B0-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%84%9C%EB%B2%84%EC%84%A0%ED%83%9D-%EA%B0%80%EC%9D%B4%EB%93%9C

// 학습하기 좋은 자료 : https://www.slideshare.net/awskorea/aws-cloud-architecture-evolution-for-one-thousand-users-changsu-lee

// 위의 게시물은 월 사용자를 기준으로 호스팅과 클라우드, RDS 등 서버 구축에 관한 가이드를 제시하고 있습니다.

// 월 사용자 수 1천 명 이상일 경우, ec2와 db 서버 분리, 
// 월 사용자가 1만명 이상일 경우, small급 서버로 올리고, 로드밸런싱 사용과 RDS 멀티 AZ로 이원화,
// 더 이상일 경우 cdn 등 사용을 이야기하고 있습니다.

// 이번 기회를 시작으로 서버 구축과 운영, 모니터링 등 다양한 방면으로 학습해보고 클라이언트 별 최선의 서버를 구축할 수 있는 개발자가 되겠습니다.