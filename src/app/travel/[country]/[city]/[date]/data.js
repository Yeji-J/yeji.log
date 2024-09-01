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
        title: '모든 순간이 마음 편하고 좋았던 호치민',
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
          desc: '밀크티 원조 본점 \n 엄마는 흑당 흑임자 인절미를 좋아했다',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taichung/2024-02-16/waiting.jpg',
          date: '2024-02-16',
          country: 'Taiwan',
          city: 'Taichung',
          title: 'for breakfast',
          desc: '아침을 주문하고 기다리던 중에',
          tags: [],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taichung/2024-02-16/noodle.jpg',
          date: '2024-02-16',
          country: 'Taiwan',
          city: 'Taichung',
          title: 'mala noodle',
          desc: '엄마가 우연히 발견한 국수 맛집',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taichung/2024-02-16/view.jpg',
          date: '2024-02-16',
          country: 'Taiwan',
          city: 'Taichung',
          title: 'on our way to xinwuri',
          desc: '기차를 타고 가며 봤던 풍경 \n 평온하다',
          tags: [],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taichung/2024-02-16/rice.jpg',
          date: '2024-02-16',
          country: 'Taiwan',
          city: 'Taichung',
          title: 'din tai feng',
          desc: '딘타이펑의 모든 메뉴는 실패가 없다',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taichung/2024-02-16/mom.jpg',
          date: '2024-02-16',
          country: 'Taiwan',
          city: 'Taichung',
          title: 'best friend',
          desc: '최고의 여행 메이트',
          tags: ['FAVS'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taichung/2024-02-16/danbing.jpg',
          date: '2024-02-16',
          country: 'Taiwan',
          city: 'Taichung',
          title: 'DAN BING',
          desc: '대만 대표 아침 메뉴, 딴삥',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taichung/2024-02-16/huoguo.jpg',
          date: '2024-02-16',
          country: 'Taiwan',
          city: 'Taichung',
          title: 'taiwanese hot pot',
          desc: '야무지게 소스도 만들어 먹는 엄마',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taichung/2024-02-16/coffe.jpg',
          date: '2024-02-16',
          country: 'Taiwan',
          city: 'Taichung',
          title: 'salt coffee',
          desc: '85도씨 소금 커피',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taichung/2024-02-16/accom.jpg',
          date: '2024-02-16',
          country: 'Taiwan',
          city: 'Taichung',
          title: '06:00am',
          desc: '새벽에 일어나 성경을 읽던 엄마 \n 마음이 편안하다',
          tags: [],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/taiwan/taichung/2024-02-16/pork.jpg',
          date: '2024-02-16',
          country: 'Taiwan',
          city: 'Taichung',
          title: 'dongporou',
          desc: '타이중을 떠나기 전 먹었던 동파육 \n 엄마도 좋아했다',
          tags: ['food'],
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
          desc: '베트남식 갈비 덮밥 \n 지금도 생각나요',
          tags: ['FAVS'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/vietnam/hochiminh/2022-06-05/hangry.jpg',
          date: '2022-06-05',
          country: 'Vietnam',
          city: 'Ho Chi Minh',
          title: 'hangry',
          desc: '베트남 도착 후 첫 끼 \n 도저히 먹을 수가 없었다 \n 내 앞 사람은 비명을 질렀다',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/vietnam/hochiminh/2022-06-05/fruits.jpg',
          date: '2022-06-05',
          country: 'Vietnam',
          city: 'Ho Chi Minh',
          title: 'vietnam fruits',
          desc: '모든 종류의 망고와 과일 \n 누군가의 향수를 부르는 마일로 초코 우유 \n 처음 먹어봤던 두리안',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/vietnam/hochiminh/2022-06-05/buncha.jpg',
          date: '2022-06-05',
          country: 'Vietnam',
          city: 'Ho Chi Minh',
          title: 'bun cha',
          desc: '배불러도 들어가던 분짜',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/vietnam/hochiminh/2022-06-05/crocs.jpg',
          date: '2022-06-05',
          country: 'Vietnam',
          city: 'Ho Chi Minh',
          title: 'crocs night',
          desc: '흰색 크록스를 찾아 헤메던 밤',
          tags: [],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/vietnam/hochiminh/2022-06-05/crab.jpg',
          date: '2022-06-05',
          country: 'Vietnam',
          city: 'Ho Chi Minh',
          title: 'soft shell crab',
          desc: '토마토도 안 보이는 맛',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/vietnam/hochiminh/2022-06-05/noodle.jpg',
          date: '2022-06-05',
          country: 'Vietnam',
          city: 'Ho Chi Minh',
          title: 'crab noodle',
          desc: '국물까지 싹싹 비웠다',
          tags: ['food'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/vietnam/hochiminh/2022-06-05/pool.jpg',
          date: '2022-06-05',
          country: 'Vietnam',
          city: 'Ho Chi Minh',
          title: 'to the moon and back',
          desc: '마음 꽉차게 행복했어 아침 수영',
          tags: ['FAVS'],
        },
        {
          img: 'https://yeji-j.github.io/yeji.log/vietnam/hochiminh/2022-06-05/pizza.jpg',
          date: '2022-06-05',
          country: 'Vietnam',
          city: 'Ho Chi Minh',
          title: 'salty salty',
          desc: '소금 덩어리 피자 \n 재밌게 먹었다',
          tags: ['food'],
        },

        {
          img: 'https://yeji-j.github.io/yeji.log/vietnam/hochiminh/2022-06-05/corona.jpg',
          date: '2022-06-05',
          country: 'Vietnam',
          city: 'Ho Chi Minh',
          title: 'covid-19',
          desc: '코로나를 뚫고 다녀온 여행 \n 우린 강했다',
          tags: [],
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
