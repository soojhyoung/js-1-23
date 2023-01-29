const quotes = [
  {
    quote: " 한번의 실패와 영원한 실패를 혼동하지 마라 ",
    author: "F.스콧 핏제랄드.",
  },
  {
    quote: "행복은 습관이다,그것을 몸에 지니라",
    author: "허버드",
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
    author: "제임스 딘",
  },
  {
    quote:
      "네 믿음은 네 생각이 된다 . 네 생각은 네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다",
    author: "간디",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
    author: "괴테",
  },
  {
    quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오",
    author: "헬렌 켈러",
  },
  {
    quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다",
    author: " 헨리 포드",
  },
  {
    quote:
      "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한계단 한계단씩",
    author: " 조 지라드",
  },
  {
    quote:
      "만족할 줄 아는 사람은진정한 부자이고, 탐욕스러운 사람은진실로 가난한 사람이다",
    author: "솔론",
  },
  {
    quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라",
    author: "호라티우스",
  },
];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = randomQuote.quote;
author.innerHTML = randomQuote.author;
