/*global kakao */
import React, { ReactElement, useEffect, useState } from 'react'
import PlaceDetail from './PlaceDetail'

interface Props {
  isShow: boolean
  placeArr: Place[] | []
  deletePlace: any
}

interface Place {
  placename: string
  address: string
  openingHours: string
  breakTime: string
  offDay: string
  contact: string
}

const ScrapPlace = (props: Props): ReactElement => {
  if (typeof window !== 'undefined') {
    const kakao = (window as any).kakao
  }

  const [isPlaceClicked, setIsPlaceClicked] = useState<boolean>(false)
  const [className, setClassName] = useState<string>('show')
  const [indexOfItem, setIndexOfItem] = useState<number>(-1)

  useEffect(() => {
    if (props.isShow) {
      setClassName('show')
    } else {
      setClassName('hidden')
    }
  }, [props.isShow])

  const detailPlace = (e: any) => {
    setIsPlaceClicked(!isPlaceClicked)
    for (let i = 0; i < props.placeArr.length; i++) {
      if (props.placeArr[i].placename === e.target.innerText) {
        setIndexOfItem(i)
      }
    }
  }

  const placeList: JSX.Element[] = props.placeArr.map((name, index) => (
    <div key={index} className='place-list'>
      <div className='place-name' onClick={(e) => detailPlace(e)}>
        {name.placename}
      </div>
      <div className='place-address' onClick={(e) => detailPlace(e)}>
        {name.address}
      </div>
      <div className='x-box' onClick={(e) => props.deletePlace(e)}>
        X
      </div>
    </div>
  ))

  return (
    <div className={className}>
      {isPlaceClicked ? (
        <div>
          <PlaceDetail place={props.placeArr[indexOfItem]} />
          <footer>
            <button onClick={detailPlace} className='go-list'>
              목록으로
            </button>
          </footer>
        </div>
      ) : (
        <div className='scrap-list-box'>
          <span className='star-text'>★</span>
          <h2 className='scrap-text'>스크랩한 목록</h2>
          <p className='content'>해당 장소를 클릭하시면 장소에 대한 세부 내용이 출력됩니다. !</p>
          <div className='place-list-box'>{placeList}</div>
          <div id='road-view'></div>
        </div>
      )}
    </div>
  )
}

export default ScrapPlace
