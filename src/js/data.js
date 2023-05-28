// 영화 이름
var movies = {
    'galaxy':0,
    '1':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9
};
// 영화 정보
var infoes = [
    {
        img: 'galaxy.jpg',
        title: '가디언즈오브 갤럭시',
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
movieImage.src = "../../img/" + info.img;
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
    addPeopleCard(info.actors[i]);
}

// 배우 추가 함수
function addPeopleCard(actor) {
    // people_card 요소 생성
    var peopleCard = document.createElement('div');
    peopleCard.classList.add('people_card');
  
    // thumb 요소 생성
    var thumb = document.createElement('div');
    thumb.classList.add('thumb');
    var img = document.createElement('img');
    img.src = '../../img/human_default.png';
    img.alt = '사진';
    thumb.appendChild(img);
  
    // title_box 요소 생성
    var titleBox = document.createElement('div');
    titleBox.classList.add('title_box');
    var subName = document.createElement('span');
    subName.classList.add('sub_name');
    subName.textContent = '배우';
    var peopleName = document.createElement('strong');
    peopleName.classList.add('people_name');
    peopleName.textContent = actor;
    titleBox.appendChild(subName);
    titleBox.appendChild(peopleName);
  
    // movie-info-content 요소 선택
    var movieInfoContent = document.querySelector('.movie-info-content');
  
    // people_card 요소를 movie-info-content 요소 바로 아래에 추가
    movieInfoContent.appendChild(peopleCard);
  
    // people_card 요소에 thumb와 title_box 추가
    peopleCard.appendChild(thumb);
    peopleCard.appendChild(titleBox);
}
  