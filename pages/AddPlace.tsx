/*global kakao */
import React, { ReactElement, useEffect, useState } from 'react';

interface Props {
  setIsShow: (e:boolean)=>void;
  isShow: boolean;
  placeArr: Place[] | [];
}

interface Place {
  placename: string;
  address: string;
  openingHours: string;
  breakTime: string;
  offDay: string;
  contact: string;
}

const AddPlace = (props: Props): ReactElement => {
  const [className, setClassName] = useState<string>("show");
  const placeArr: Place[] = [...props.placeArr];

  const [inputs, setInputs] = useState<Place>({
    placename: '',
    address: '',
    openingHours: '',
    breakTime: '',
    offDay: '',
    contact: '',
  });

  const { placename, address, openingHours, breakTime, offDay, contact } = inputs;

  useEffect(() => {
    if (props.isShow) {
      setClassName("hidden");
    } else {
      setClassName("show");
    }
  }, [props.isShow]);

  const onChange = (e: any) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const setLocalStorage = () => {
    if (placename !== '' && address !== '') {
      placeArr.push(inputs);
      localStorage.setItem("place", JSON.stringify(placeArr));
      alert("등록 완료되었습니다 !");
      setInputs({
        placename: '',
        address: '',
        openingHours: '',
        breakTime: '',
        offDay: '',
        contact: ''
      });
    } else alert("가게 이름과 주소는 필수 값 입니다.")
    props.setIsShow(true);
  }

  return <div className={className}>
    <div className='add-place-box'>
      <h2>장소 추가하기</h2>
      <div className='set-block' >
        <label htmlFor='placename'>* 가게 이름 :</label>
        <input name='placename' onChange={(e) => onChange(e)} value={placename} />
        <br />
        <label htmlFor='address'>* 주소 :</label>
        <input name='address' onChange={(e) => onChange(e)} value={address} />
        <br />
        <label htmlFor='openingHours'>영업 시간 :</label>
        <input name='openingHours' onChange={(e) => onChange(e)} value={openingHours} />
        <br />
        <label htmlFor='breakTime'>브레이크 타임 :</label>
        <input name='breakTime' onChange={(e) => onChange(e)} value={breakTime} />
        <br />
        <label htmlFor='offDay'>휴무일 :</label>
        <input name='offDay' onChange={(e) => onChange(e)} value={offDay} />
        <br />
        <label htmlFor='contact'>연락처 :</label>
        <input name='contact' onChange={(e) => onChange(e)} value={contact} />
      </div>
      <div className='content'>가게 이름과 주소는 필수 입력 값 입니다 . !</div>
      <button onClick={setLocalStorage} type='submit'>등록</button>
    </div>
  </div>;
}

export default AddPlace;