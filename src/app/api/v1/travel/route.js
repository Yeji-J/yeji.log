import { NextResponse } from 'next/server'

export async function GET(request) {
  const res = data ? data : []
  return NextResponse.json({ data: res }, { status: 200 })
}

const data = [
  {
    img: '/canada/vancouver/2019-06-21/breakfast.jpg',
    date: '2019-06-21',
    country: 'Canada',
    city: 'Vancouver',
  },
  {
    img: '/japan/fukuoka/2018-08-14/brunch.jpg',
    date: '2018-08-14',
    country: 'Japan',
    city: 'Fukuoka',
  },

  {
    img: '/japan/tokyo/2017-06-17/tokyotower.jpg',
    date: '2017-06-17',
    country: 'Japan',
    city: 'Tokyo',
  },

  {
    img: '/taiwan/taipei/2019-12-13/jiufen.jpg',
    date: '2019-12-13',
    country: 'Taiwan',
    city: 'Taipei',
  },
  {
    img: '/vietnam/hochiminh/2022-06-05/comtam.jpg',
    date: '2022-06-05',
    country: 'Vietnam',
    city: 'Ho Chi Minh',
  },

  {
    img: '/thailand/bangkok/2024-06-14/curry.jpg',
    date: '2024-06-14',
    country: 'Thailand',
    city: 'Bangkok',
  },
  {
    img: '/taiwan/taipei/2022-11-29/tofu.jpg',
    date: '2022-11-29',
    country: 'Taiwan',
    city: 'Taipei',
  },
  {
    img: '/taiwan/kaohsiung/2023-06-12/tea.jpg',
    date: '2023-06-12',
    country: 'Taiwan',
    city: 'Kaohsiung',
  },
  {
    img: '/vietnam/nhatrang/2023-07-09/pool.jpg',
    date: '2023-07-09',
    country: 'Vietnam',
    city: 'Nha trang',
  },
  {
    img: '/taiwan/taichung/2024-02-16/chunshuitang.jpg',
    date: '2024-02-16',
    country: 'Taiwan',
    city: 'Taichung',
  },
  {
    img: '/usa/lasvegas/2019-04-22/grandcanyon.jpg',
    date: '2019-04-22',
    country: 'USA',
    city: 'Las Vegas',
  },
  {
    img: '/usa/losangeles/2019-02-24/pinkwall.jpg',
    date: '2019-02-24',
    country: 'USA',
    city: 'Los Angeles',
  },
  {
    img: '/usa/losangeles/2019-06-09/urbanlight.jpg',
    date: '2019-06-09',
    country: 'USA',
    city: 'Los Angeles',
  },
  {
    img: '/usa/newyork/2019-06-26/chelsea.jpg',
    date: '2019-06-26',
    country: 'USA',
    city: 'New York',
  },
  {
    img: '/usa/sandiego/2019-01-10/harborhouse.jpg',
    date: '2019-01-10',
    country: 'USA',
    city: 'San Diego',
  },
  {
    img: '/usa/sanfrancisco/2019-04-19/steak.jpg',
    date: '2019-04-19',
    country: 'USA',
    city: 'San Francisco',
  },
  {
    img: '/usa/sanfrancisco/2019-06-13/fisherman.jpg',
    date: '2019-06-13',
    country: 'USA',
    city: 'San Francisco',
  },
  {
    img: '/usa/seattle/2019-06-16/glassart.jpeg',
    date: '2019-06-16',
    country: 'USA',
    city: 'Seattle',
  },
  {
    img: '/singapore/2017-07-17/flower.jpg',
    date: '2017-07-17',
    country: 'Singapore',
    city: 'Singapore',
  },
  // {
  //   img: '/vietnam/danang/2018-07-02/',
  //   date: '2018-07-02',
  //   country: 'Vietnam',
  //   city: 'Da Nang',
  // },
  // {
  //   img: '/vietnam/hoian/2018-07-04/',
  //   date: '2018-07-04',
  //   country: 'Vietnam',
  //   city: 'Hoi An',
  // },
  {
    img: '/japan/osaka/2018-12-01/yakiniku.jpeg',
    date: '2018-12-01',
    country: 'Japan',
    city: 'Osaka',
  },
  // {
  //   img: '/japan/kyoto/2018-12-03/',
  //   date: '2018-12-03',
  //   country: 'Japan',
  //   city: 'Kyoto',
  // },
]
