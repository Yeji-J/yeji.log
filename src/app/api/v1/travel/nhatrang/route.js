import { NextResponse } from 'next/server'
import allData from '../data.js'

export async function GET(request) {
  const { titleData, photoData } = allData
  const country = 'vietnam'
  const city = 'nhatrang'
  const date = '20230709'

  const title = titleData[country][city][date].title
    ? titleData[country][city][date].title
    : ''
  const photoList = photoData[country][city][date]
    ? photoData[country][city][date]
    : []

  return NextResponse.json({ data: { title, photoList } }, { status: 200 })
}
