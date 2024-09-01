import TravelDetail from './TravelDetail'

export async function generateStaticParams() {
  const travelPaths = [
    { country: 'canada', city: 'vancouver', date: '20190621' },
    { country: 'japan', city: 'fukuoka', date: '20180814' },
    { country: 'japan', city: 'tokyo', date: '20170617' },
    { country: 'japan', city: 'osaka', date: '20181201' },
    { country: 'taiwan', city: 'taipei', date: '20191213' },
    { country: 'taiwan', city: 'taipei', date: '20221129' },
    { country: 'taiwan', city: 'kaohsiung', date: '20230612' },
    { country: 'taiwan', city: 'taichung', date: '20240216' },
    { country: 'vietnam', city: 'hochiminh', date: '20220605' },
    { country: 'vietnam', city: 'nhatrang', date: '20230709' },
    { country: 'thailand', city: 'bangkok', date: '20240614' },
    { country: 'usa', city: 'lasvegas', date: '20190422' },
    { country: 'usa', city: 'losangeles', date: '20190224' },
    { country: 'usa', city: 'losangeles', date: '20190609' },
    { country: 'usa', city: 'newyork', date: '20190626' },
    { country: 'usa', city: 'sandiego', date: '20190110' },
    { country: 'usa', city: 'sanfrancisco', date: '20190419' },
    { country: 'usa', city: 'sanfrancisco', date: '20190613' },
    { country: 'usa', city: 'seattle', date: '20190616' },
    { country: 'singapore', city: 'singapore', date: '20170717' },
  ]

  return travelPaths.map((path) => ({
    country: path.country,
    city: path.city,
    date: path.date,
  }))
}

export default function TravelPage({ params }) {
  const { country, city, date } = params

  return <TravelDetail params={{ country, city, date }} />
}
