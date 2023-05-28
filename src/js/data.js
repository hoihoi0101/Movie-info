// 영화 이름
var movies = {
    'galaxy':0,
    'fish':1,
    'crime':2,
    'speed':3,
    'mario':4,
    'robot':5,
    'gun':6,
    'kid':7,
    'hoi':8,
    '10year':9
};
// 영화 정보
var infoes = [
    {
        img: '가오갤 포스터.jpg',
        title: '가디언즈오브 갤럭시 : Volume 3',
        date: '2023.05.03',
        old: '12세 관람가',
        theme: '액션, 모험, SF',
        state: '미국',
        time: '150분',
        distributer: '월트 디즈니 컴퍼니 코리아',
        director: '제임스 건',
        actors: ['크리스 프랫', '조 샐다나', '데이브 바티스타'],
        ratings: [
        '메타스코어 64 / 100',
        '평점 8.3 / 10(IMDb Top 250 151위)',
        '신선도 82% 관객 점수 94%'
        ],
        intro: '‘가모라’를 잃고 슬픔에 빠져 있던 ‘피터 퀼’이 위기에 처한 은하계와 동료를 지키기 위해 다시 한번 가디언즈 팀과 힘을 모으고, 성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기'
    },
    {
        img: '인어공주포스터.jpg',
        title: '인어공주',
        date: '2023.05.24',
        old: '전체 관람가',
        theme: '뮤지컬, 가족, 판타지, 멜로/로맨스',
        state: '미국',
        time: '135분',
        distributer: '월트 디즈니 컴퍼니 코리아',
        director: '롭 마샬',
        actors: ['할리 베일리', '멜리사 멕카시', '하비에르 바르뎀'],
        ratings: [
        '메타스코어 59 / 100',
        '평점 7.0 / 10',
        '신선도 67% 관객 점수 95%'
        ],
        intro: '아틀란티카 바다의 왕 ‘트라이튼’의 사랑스러운 막내딸인 인어 ‘에리얼’은 늘 인간들이 사는 바다 너머 세상으로의 모험을 꿈꾼다. 어느 날, 우연히 바다 위로 올라갔다가 폭풍우 속 가라앉는 배에 탄 인간 ‘에릭 왕자’의 목숨을 구해준다. 갈망하던 꿈과 운명적인 사랑을 이루기 위해 용기를 낸 ‘에리얼’은 사악한 바다 마녀 ‘울슐라’와의 위험한 거래를 통해 다리를 얻게 된다. 드디어 바다를 벗어나 그토록 원하던 인간 세상으로 가게 되지만, 그 선택으로 ‘에리얼’과 아틀란티카 왕국 모두 위험에 처하게 되는데… 바닷속, 그리고 그 너머 아름다운 꿈과 사랑의 멜로디가 펼쳐진다!'
    },
    {
        img: '범죄도시3포스터.jpg',
        title: '범죄도시3',
        date: '2023.05.31',
        old: '15세 관람가',
        theme: '액션, 범죄',
        state: '대한민국',
        time: '105분',
        distributer: '에이비오엔터테이먼트',
        director: '이상용',
        actors: ['마동석', '이준혁', '아오키 무네타카'],
        ratings: [
        '메타스코어 X',
        '평점 X',
        '신선도 X 관객 점수 X'
        ],
        intro: '대체불가 괴물형사 마석도, 서울 광수대로 발탁! 베트남 납치 살해범 검거 후 7년 뒤, ‘마석도’(마동석)는 새로운 팀원들과 함께 살인사건을 조사한다. 사건 조사 중, ‘마석도’는 신종 마약 사건이 연루되었음을 알게 되고 수사를 확대한다. 한편, 마약 사건의 배후인 "주성철"(이준혁)은 계속해서 판을 키워가고 약을 유통하던 일본 조직과 "리키"(아오키 무네타카)까지 한국에 들어오며 사건의 규모는 점점 더 커져가는데... 나쁜 놈들 잡는 데 이유 없고 제한 없다. 커진 판도 시원하게 싹 쓸어버린다!'
    },
    {
        img: '분노의 질주 포스터.jpg',
        title: '분노의질주: 라이드 오어 다이',
        date: '2023.05.17',
        old: '15세 관람가',
        theme: '액션, 범죄',
        state: '미국',
        time: '141분',
        distributer: '유니버셜 픽쳐스',
        director: '루이 르테리에',
        actors: ['빈 디젤', '존 시나', '미셸 로드리게즈'],
        ratings: [
        '메타스코어 55 / 100',
        '평점 6.2 / 10',
        '신선도 54% 관객 점수 86%'
        ],
        intro: '돔(빈 디젤)과 그의 패밀리 앞에 나타난 운명의 적 단테(제이슨 모모아). 과거의 그림자는 돔의 모든 것을 파괴하기 위해 달려온다. 단테에 의해 산산히 흩어진 패밀리들은 모두 목숨을 걸고 맞서야 하는 함정에 빠지고 마는데.. 달리거나 죽거나, 그들의 마지막 질주가 시작된다'
    },
    {
        img: '슈퍼마리오 포스터.jpg',
        title: '슈퍼마리오 브라더스',
        date: '2023.04.26',
        old: '전체 관람가',
        theme: '애니메이션, 모험, 코미디',
        state: '미국',
        time: '92분',
        distributer: '유니버셜 픽쳐스',
        director: '아론 호바스',
        actors: ['크리스 프랫', '안야 테일러조이', '찰리 데이'],
        ratings: [
        '메타스코어 46 / 100',
        '평점 7.3 / 10',
        '신선도 59% 관객 점수 96%'
        ],
        intro: '따단-딴-따단-딴 전 세계를 열광시킬 올 타임 슈퍼 어드벤처의 등장! 뉴욕의 평범한 배관공 형제 "마리오"와 ‘루이지’는 배수관 고장으로 위기에 빠진 도시를 구하려다 미스터리한 초록색 파이프 안으로 빨려 들어가게 된다. 파이프를 통해 새로운 세상으로 차원 이동하게 된 형제. 형 "마리오"는 뛰어난 리더십을 지닌 "피치"가 통치하는 버섯왕국에 도착하지만 동생 "루이지"는 빌런 "쿠파"가 있는 다크랜드로 떨어지며 납치를 당하고 ‘마리오’는 동생을 구하기 위해 ‘피치’와 ‘키노피오’의 도움을 받아 "쿠파"에 맞서기로 결심한다. 그러나 슈퍼스타로 세상을 지배하려는 그의 강력한 힘 앞에 이들은 예기치 못한 위험에 빠지게 되는데...! 동생을 구하기 위해! 세상을 지키기 위해! "슈퍼 마리오"로 레벨업 하기 위한 "마리오"의 스펙터클한 스테이지가 시작된다!'
    },
    {
        img: '트랜스포머 비스트의 서막.jpg',
        title: '트랜스포머:비스트의 시작',
        date: '2023.06.06',
        old: '12세 관람가',
        theme: '액션, sf',
        state: '미국',
        time: '117분',
        distributer: '파라마운트 픽쳐스',
        director: '스티븐 케이플 주니어',
        actors: ['앤서니 라모스', '도미니크 피시백', '로런 발레스'],
        ratings: [
        '메타스코어 X',
        '평점 X',
        '신선도 X 관객 점수 X'
        ],
        intro: '전 우주의 행성을 집어삼키는 절대자, ‘유니크론’의 부하 ‘스커지’는 ‘테러콘’들을 이끌고 지구에 당도한다. 그에 맞서기 위해 지구에 정체를 숨기고 있던 트랜스포머 ‘오토봇’ 군단이 모습을 드러내고 또 다른 트랜스포머 진영인 ‘맥시멀’과 힘을 합친다. 옵티머스 프라임이 이끄는 ‘오토봇’과 옵티머스 프라이멀을 중심으로 한 ‘맥시멀’. 모두의 운명을 건 그들의 압도적 전투가 시작된다!'
    },
    {
        img: '존윅4 포스터.jpg',
        title: '존윅 4',
        date: '2023.04.12',
        old: '청소년 관람 불가',
        theme: '액션',
        state: '미국',
        time: '169분',
        distributer: '㈜레드아이스 엔터테인먼트',
        director: '채드 스타헬스키',
        actors: ['키아누 리브스', '견자단', '빌 스카스가드'],
        ratings: [
        '메타스코어 78 / 100',
        '평점 8.2 / 10',
        '신선도 94% 관객 점수 93%'
        ],
        intro: '죽을 위기에서 살아난 ‘존 윅’은 ‘최고 회의’를 쓰러트릴 방법을 찾아낸다. 비로소 완전한 자유의 희망을 보지만, NEW 빌런 ‘그라몽 후작’과 전 세계의 최강 연합은 ‘존 윅’의 오랜 친구까지 적으로 만들어 버리고, 새로운 위기에 놓인 ‘존 윅’은 최후의 반격을 준비하는데,, 레전드 액션 블록버스터 <존 윅>의 새로운 챕터가 열린다!'
    },
    {
        img: '짱구는 못말려 포스터.jpg',
        title: '극장판 짱구는 못말려: 동물소환 닌자 배꼽수비대',
        date: '2023.05.04',
        old: '전체 관람가',
        theme: '애니메이션',
        state: '일본',
        time: '100분',
        distributer: 'CJ ENM',
        director: '하시모토 마사카즈',
        actors: ['코바야시 유미코', '나라하시 미키', '모리카와 토시유키'],
        ratings: [
        '메타스코어 X',
        '평점 7.1 / 10',
        '신선도 82% 관객 점수 94%'
        ],
        intro: '‘가모라’를 잃고 슬픔에 빠져 있던 ‘피터 퀼’이 위기에 처한 은하계와 동료를 지키기 위해 다시 한번 가디언즈 팀과 힘을 모으고, 성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기'
    },
    {
        img: 'galaxy.jpg',
        title: '가디언즈오브 갤럭시',
        date: '2023.05.03',
        old: '12세 관람가',
        theme: '액션, 모험, sf',
        state: '미국',
        time: '150분',
        distributer: '월트 디즈니 컴퍼니 코리아',
        director: '제임스 건',
        actors: ['크리스 프랫', '조 샐다나', '데이브 바티스타'],
        ratings: [
        '메타스코어 64 / 100',
        '평점 8.3 / 10(imdb top 250 151위)',
        '신선도 82% 관객 점수 94%'
        ],
        intro: '‘가모라’를 잃고 슬픔에 빠져 있던 ‘피터 퀼’이 위기에 처한 은하계와 동료를 지키기 위해 다시 한번 가디언즈 팀과 힘을 모으고, 성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기'
    },
    {
        img: 'galaxy.jpg',
        title: '가디언즈오브 갤럭시',
        date: '2023.05.03',
        old: '12세 관람가',
        theme: '액션, 모험, sf',
        state: '미국',
        time: '150분',
        distributer: '월트 디즈니 컴퍼니 코리아',
        director: '제임스 건',
        actors: ['크리스 프랫', '조 샐다나', '데이브 바티스타'],
        ratings: [
        '메타스코어 64 / 100',
        '평점 8.3 / 10(imdb top 250 151위)',
        '신선도 82% 관객 점수 94%'
        ],
        intro: '‘가모라’를 잃고 슬픔에 빠져 있던 ‘피터 퀼’이 위기에 처한 은하계와 동료를 지키기 위해 다시 한번 가디언즈 팀과 힘을 모으고, 성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기'
    },
]

// 현재 URL에서 쿼리 파라미터 값을 읽어옴
var urlParams = new URLSearchParams(window.location.search);
var value = urlParams.get('value');

// 요소 정의
var movieRatings = document.getElementsByClassName('movie-rating');
var movieImage = document.getElementById('movie-image');
var movieTitle = document.getElementById('movie-title');
var movieReleaseDate = document.getElementById('movie-release-date');
var movieOld = document.getElementById('movie-old');
var movieGenre = document.getElementById('movie-genre');
var movieState = document.getElementById('movie-state');
var movieRunningTime = document.getElementById('movie-running-time');
var movieDistributer = document.getElementById('movie-distributer');
var movieDirector = document.getElementById('movie-director');
var movieIntro = document.getElementById('movie-intro');
var movieRatings = document.getElementsByClassName('movie-rating');

// info 선택
const info = infoes[movies[value.toString()]];

// value 값을 이용하여 이미지 src 및 기타 정보를 업데이트
movieImage.src = "../../img/poster/" + info.img;
movieTitle.textContent = info.title;
movieReleaseDate.textContent = info.date;
movieOld.textContent = info.old;
movieGenre.textContent = info.theme;
movieState.textContent = info.state;
movieRunningTime.textContent = info.time;
movieDistributer.textContent = info.distributer;
movieDirector.textContent = info.director;
movieIntro.textContent = info.intro;

// 평점 변경
for(var i=0; i<3; i++){
    movieRatings[i].innerText += info.ratings[i];
}

// 배우 추가
console.log(info.actors);
for(var i=0; i<info.actors.length; i++){
    addActor(info.actors[i]);
}

// 배우 추가 함수
function addActor(actor) {
    // Outer div with class "people_card"
    var outerDiv = document.createElement("div");
    outerDiv.classList.add("people_card");
  
    // Div with class "thumb" and inner image
    var thumbDiv = document.createElement("div");
    thumbDiv.classList.add("thumb");
    var image = document.createElement("img");
    image.src = "../../img/human_default.png";
    image.alt = "사진";
    thumbDiv.appendChild(image);
  
    // Div with class "title_box"
    var titleDiv = document.createElement("div");
    titleDiv.classList.add("title_box");
  
    // Span with class "sub_name"
    var subNameSpan = document.createElement("span");
    subNameSpan.classList.add("sub_name");
    subNameSpan.style.maxHeight = "4rem";
    subNameSpan.innerText = "배우";
  
    // Strong element with class "people_name"
    var strongElement = document.createElement("strong");
    strongElement.classList.add("people_name");
    strongElement.style.maxHeight = "4rem";
    strongElement.innerText = actor;
  
    // Append elements to their respective parents
    titleDiv.appendChild(subNameSpan);
    titleDiv.appendChild(strongElement);
    outerDiv.appendChild(thumbDiv);
    outerDiv.appendChild(titleDiv);
  
    // Get the target element and append the created card
    var targetElement = document.querySelector(".movie-actor");
    targetElement.appendChild(outerDiv);
  }
