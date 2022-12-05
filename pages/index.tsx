import { useEffect, useState } from 'react'
// import { Map, MapMarker } from 'react-kakao-maps-sdk'
import styles from '../styles/Home.module.scss'
import { Place } from '../type'
import AddPlace from './AddPlace'
import BaseLayout from './BaseLayout'
import ScrapPlace from './ScrapPlace'

export default function Home() {
  const [isShow, setIsShow] = useState<boolean>(true)
  let placeItems: string | null
  const [placeArr, setPlaceArr] = useState<Place[]>([])

  useEffect(() => {
    if (localStorage.getItem('place') !== null) {
      placeItems = localStorage.getItem('place')
    }
    if (typeof placeItems === 'string') {
      setPlaceArr(JSON.parse(placeItems))
    }

    console.log(placeArr)
  }, [])

  // const scrapListClicked = () => {
  //   if (typeof placeItems === 'string') {
  //     setPlaceArr(JSON.parse(placeItems))
  //   }
  //   setIsShow(true)
  // }

  // const addPlaceClicked = () => {
  //   setIsShow(false)
  // }

  const deletePlace = (e: any) => {
    const targetText = e.target.previousElementSibling.previousElementSibling.innerText
    if (confirm('삭제하시겠습니까 ?') === true) {
      // eslint-disable-next-line no-var
      for (var i = 0; i < placeArr.length; i++) {
        if (placeArr[i].placename === targetText) {
          const newPlaceArr = placeArr.filter(function (list) {
            return list.placename !== placeArr[i].placename
          })
          setPlaceArr(newPlaceArr)
          localStorage.removeItem('place')
          localStorage.setItem('place', JSON.stringify(newPlaceArr))
        }
      }
    }
  }

  return (
    <BaseLayout>
      <main className={styles.main}>
        {/* <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: '100%', height: '360px' }}>
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{ color: '#000' }}>Hello World!</div>
          </MapMarker>
        </Map> */}
        <ScrapPlace placeArr={placeArr} deletePlace={deletePlace} isShow={isShow} />
        <AddPlace placeArr={placeArr} isShow={isShow} setIsShow={setIsShow} />
      </main>
    </BaseLayout>
  )
}
