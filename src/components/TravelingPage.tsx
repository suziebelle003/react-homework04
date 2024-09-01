import { useState } from 'react';
import london from '../assets/images/london.jpg';
import newyork from '../assets/images/newyork.jpg';
import paris from '../assets/images/paris.jpg';
import seoul from '../assets/images/seoul.jpg';
import travel from '../assets/images/travel.png';

function TravelingPage() {
  const citiesList = {
    london: london,
    newyork: newyork,
    paris: paris,
    seoul: seoul,
  };
  const [cities, setCities] = useState(london);

  const onClickCities = (e) => {
    e.preventDefault();
    const clickCity = e.target.innerText.toLowerCase();
    setCities(citiesList[clickCity]);
  };
  return (
    <>
      <div className="absolute top-10 left-10 text-3xl cursor-pointer">
        <div className="light-icon fa-regular fa-sun"></div>
        <div className="dark-icon fa-regular fa-moon hidden"></div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <img src={travel} alt={'로고'} width={80} />
          <ul className="flex items-center antialiased justify-around w-full">
            <li>
              <a href="#" onClick={onClickCities}>
                Seoul
              </a>
            </li>
            <li>
              <a href="#" onClick={onClickCities}>
                London
              </a>
            </li>
            <li>
              <a href="#" onClick={onClickCities}>
                Paris
              </a>
            </li>
            <li>
              <a href="#" onClick={onClickCities}>
                NewYork
              </a>
            </li>
          </ul>
          <div>
            <img src={cities} alt={'서울'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelingPage;
