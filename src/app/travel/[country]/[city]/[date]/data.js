const titleData = {
  canada: {
    vancouver: {
      20190621: {
        title: '밴쿠버 훈제 연어는 생각만해도 침이 고인다',
      },
    },
  },
  japan: {
    fukuoka: {
      20180814: {
        title: '무계획 여행은 J에게 조금 힘들었다',
      },
    },
    tokyo: {
      20170617: {
        title: 'TOKYO',
      },
    },
    osaka: {
      20181201: {
        title: 'OSAKA',
      },
    },
  },
  taiwan: {
    taipei: {
      20191213: {
        title: '이 여행을 계기로 중국어를 배우게 됐다',
      },
      20221129: {
        title: '혼여행의 단점은 다양한 음식을 맛보지 못한다는 것이다',
      },
    },
    kaohsiung: {
      20230612: {
        title: 'KAOHSIUNG',
      },
    },
    taichung: {
      20240216: {
        title: '엄마는 대만에서 살고 싶다고 했다',
      },
    },
  },
  vietnam: {
    hochiminh: {
      20220605: {
        title: '모든 순간이 편하고 좋았던 호치민',
      },
    },
    nhatrang: {
      20230709: {
        title: '가족 여행은 심사숙고 하는 게 좋다',
      },
    },
  },
  thailand: {
    bangkok: {
      20240614: {
        title: '이로써 세 명만 아는 비밀이 더 늘어났다',
      },
    },
  },
  usa: {
    lasvegas: {
      20190422: {
        title: '자연의 숭고함에 압도 당한 날',
      },
    },
    losangeles: {
      20190224: {
        title: 'LA',
      },
      20190609: {
        title: '엄마와 함께한 가장 좋았던 드라이브',
      },
    },
    newyork: {
      20190626: {
        title: '여름 뉴욕은 지하철 악취가 심하다',
      },
    },
    sandiego: {
      20190110: {
        title: '샌디에고를 통해 맛본 캘리포니아의 첫인상은 따뜻하고 여유로웠다',
      },
    },
    sanfrancisco: {
      20190419: {
        title: '사랑하는 사람과 꼭 같이 오고 싶은 레스토랑이 생겼다',
      },
      20190613: {
        title: '우중충한 샌프란 날씨를 따뜻한 클램 차우더로 이겨냈다',
      },
    },
    seattle: {
      20190616: {
        title: '백인밖에 없었던 퀸즈 거리, 약간은 기괴했다',
      },
    },
  },
  singapore: {
    singapore: {
      20170717: {
        title: '5년 만에 다시 찾은 싱가폴은 여전히 아름답다',
      },
    },
  },
}

const photoData = {
  canada: {
    vancouver: {
      20190621: [
        {
          img: 'https://yeji-j.github.io/yeji.log/canada/vancouver/2019-06-21/breakfast.jpg',
          date: '2019-06-21',
          country: 'Canada',
          city: 'Vancouver',
          title: 'BREAKFAST',
          desc: '캐나다에서 엄마가 만들어준 조식',
          tags: [],
        },
      ],
    },
  },
  japan: {
    fukuoka: {
      20180814: [
        {
          img: 'https://yeji-j.github.io/yeji.log/japan/fukuoka/2018-08-14/brunch.jpg',
          date: '2018-08-14',
          country: 'Japan',
          city: 'Fukuoka',
          title: 'BRUNCH',
          desc: '',
          tags: [],
        },
      ],
    },
    tokyo: {
      20170617: [
        {
          img: 'https://yeji-j.github.io/yeji.log/japan/tokyo/2017-06-17/tokyotower.jpg',
          date: '2017-06-17',
          country: 'Japan',
          city: 'Tokyo',
          title: 'TOKYO TOWER',
          desc: '',
          tags: [],
        },
      ],
    },
    osaka: {
      20181201: [
        {
          img: 'https://yeji-j.github.io/yeji.log/japan/osaka/2018-12-01/yakiniku.jpeg',
          date: '2018-12-01',
          country: 'Japan',
          title: 'YAKI NIKU',
          city: 'Osaka',
          desc: '',
          tags: [],
        },
      ],
    },
  },
  taiwan: {
    taipei: {
      20191213: [
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taipei/2019-12-13/jiufen.jpg',
          date: '2019-12-13',
          country: 'Taiwan',
          city: 'Taipei',
          title: 'Spirited Away',
          desc: '',
          tags: [],
        },
      ],
      20221129: [
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taipei/2022-11-29/tofu.jpg',
          date: '2022-11-29',
          country: 'Taiwan',
          city: 'Taipei',
          title: 'EGG TOFU',
          desc: '',
          tags: [],
        },
      ],
    },
    kaohsiung: {
      20230612: [
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/kaohsiung/2023-06-12/tea.jpg',
          date: '2023-06-12',
          country: 'Taiwan',
          city: 'Kaohsiung',
          title: 'pineapple bread',
          desc: '',
          tags: [],
        },
      ],
    },
    taichung: {
      20240216: [
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taichung/2024-02-16/chunshuitang.jpg',
          date: '2024-02-16',
          country: 'Taiwan',
          city: 'Taichung',
          title: 'original milk tea',
          desc: '',
          tags: [],
        },
      ],
    },
  },
  vietnam: {
    hochiminh: {
      20220605: [
        {
          img: 'https://yeji-j.github.io/yeji.log/vietnam/hochiminh/2022-06-05/comtam.jpg',
          date: '2022-06-05',
          country: 'Vietnam',
          city: 'Ho Chi Minh',
          title: 'Com Tam',
          desc: '',
          tags: ['FAVS'],
        },
      ],
    },
    nhatrang: {
      20230709: [
        {
          img: 'https://yeji-j.github.io/yeji.log/vietnam/nhatrang/2023-07-09/pool.jpg',
          date: '2023-07-09',
          country: 'Vietnam',
          city: 'Nha trang',
          title: 'Nha trang',
          desc: '',
          tags: ['FAVS'],
        },
      ],
    },
  },
  thailand: {
    bangkok: {
      20240614: [
        {
          img: 'https://yeji-j.github.io/yeji.log/thailand/bangkok/2024-06-14/curry.jpg',
          date: '2024-06-14',
          country: 'Thailand',
          city: 'Bangkok',
          title: 'crab curry',
          desc: '태국 음식에 반해버린 순간',
          tags: ['FAVS', 'FOOD'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/thailand/bangkok/2024-06-14/film.jpeg',
          date: '2024-06-14',
          country: 'Thailand',
          city: 'Bangkok',
          title: 'best cut',
          desc: '얼굴이 나오지 않아 베스트 컷이 됐다',
          tags: ['FAVS'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/thailand/bangkok/2024-06-14/pool.jpg',
          date: '2024-06-14',
          country: 'Thailand',
          city: 'Bangkok',
          title: 'Pool',
          desc: '더 예쁜 발이 혜진언니다 \n어느 쪽일까요',
          tags: [],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/thailand/bangkok/2024-06-14/noodle.jpg',
          date: '2024-06-14',
          country: 'Thailand',
          city: 'Bangkok',
          title: 'fried noodle',
          desc: '정예지 메뉴 선택 참 잘 해',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/thailand/bangkok/2024-06-14/bus.jpg',
          date: '2024-06-14',
          country: 'Thailand',
          city: 'Bangkok',
          title: 'bus',
          desc: '강한 자들만 살아 남는 태국 버스 \n우린 결국 내렸다',
          tags: [],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/thailand/bangkok/2024-06-14/bhlee.jpg',
          date: '2024-06-14',
          country: 'Thailand',
          city: 'Bangkok',
          title: 'bh at his best',
          desc: '열사병 걸리기 전 잔뜩 겁먹은 모습',
          tags: [],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/thailand/bangkok/2024-06-14/mukata.jpg',
          date: '2024-06-14',
          country: 'Thailand',
          city: 'Bangkok',
          title: 'mukata',
          desc: '땀 뻘뻘 흘리며 먹었던 태국 대표 음식',
          tags: ['FOOD'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/thailand/bangkok/2024-06-14/jazzbar.jpg',
          date: '2024-06-14',
          country: 'Thailand',
          city: 'Bangkok',
          title: 'jazz bar',
          desc: '다시 피아노를 시작하고 싶었던 날',
          tags: ['FAVS'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/thailand/bangkok/2024-06-14/fries.jpg',
          date: '2024-06-14',
          country: 'Thailand',
          city: 'Bangkok',
          title: 'heart shaped ketchup',
          desc: '케찹마저 내 스타일',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/thailand/bangkok/2024-06-14/bin.jpg',
          date: '2024-06-14',
          country: 'Thailand',
          city: 'Bangkok',
          title: "mcdonald's trash bin",
          desc: '태국 맥도날드 쓰레기통',
          tags: [],
        },
      ],
    },
  },
  usa: {
    lasvegas: {
      20190422: [
        {
          img: 'https://yeji-j.github.io/yeji.log/usa/lasvegas/2019-04-22/grandcanyon.jpg',
          date: '2019-04-22',
          country: 'USA',
          city: 'Las Vegas',
          title: 'grand canyon',
          desc: '',
          tags: [],
        },
      ],
    },
    losangeles: {
      20190224: [
        {
          img: 'https://yeji-j.github.io/yeji.log/usa/losangeles/2019-02-24/pinkwall.jpg',
          date: '2019-02-24',
          country: 'USA',
          city: 'Los Angeles',
          title: 'pink wall',
          desc: '',
          tags: [],
        },
      ],
      20190609: [
        {
          img: 'https://yeji-j.github.io/yeji.log/usa/losangeles/2019-06-09/urbanlight.jpg',
          date: '2019-06-09',
          country: 'USA',
          city: 'Los Angeles',
          title: 'urban light',

          desc: '',
          tags: [],
        },
      ],
    },
    newyork: {
      20190626: [
        {
          img: 'https://yeji-j.github.io/yeji.log/usa/newyork/2019-06-26/chelsea.jpg',
          date: '2019-06-26',
          country: 'USA',
          city: 'New York',
          title: 'chelsea market',
          desc: '',
          tags: [],
        },
      ],
    },
    sandiego: {
      20190110: [
        {
          img: 'https://yeji-j.github.io/yeji.log/usa/sandiego/2019-01-10/harborhouse.jpg',
          date: '2019-01-10',
          country: 'USA',
          city: 'San Diego',
          title: 'harbor house',
          desc: '',
          tags: [],
        },
      ],
    },
    sanfrancisco: {
      20190419: [
        {
          img: 'https://yeji-j.github.io/yeji.log/usa/sanfrancisco/2019-04-19/steak.jpg',
          date: '2019-04-19',
          country: 'USA',
          city: 'San Francisco',
          title: 'house of prime rib',
          desc: '',
          tags: ['FAVS', 'FOOD'],
        },
      ],
      20190613: [
        {
          img: 'https://yeji-j.github.io/yeji.log/usa/sanfrancisco/2019-06-13/fisherman.jpg',
          date: '2019-06-13',
          country: 'USA',
          city: 'San Francisco',
          title: "fisherman's wharf",
          desc: '',
          tags: [],
        },
      ],
    },
    seattle: {
      20190616: [
        {
          img: 'https://yeji-j.github.io/yeji.log/usa/seattle/2019-06-16/glassart.jpeg',
          date: '2019-06-16',
          country: 'USA',
          city: 'Seattle',
          title: 'glass art',
          desc: '',
          tags: [],
        },
      ],
    },
  },
  singapore: {
    singapore: {
      20170717: [
        {
          img: 'https://yeji-j.github.io/yeji.log/singapore/2017-07-17/flower.jpg',
          date: '2017-07-17',
          country: 'Singapore',
          city: 'Singapore',
          title: 'street flower shop',
          desc: '5년 만에 다시 간 싱가폴은 여전히 아름답다',
          tags: ['FAVS'],
        },
      ],
    },
  },
}

export default { photoData, titleData }
