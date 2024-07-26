import React from 'react';
import bannerImg from '../assets/main04.jpg';
import Banner from '../components/Banner';

function CommunityPage(props) {
  return (
    <div>
      <Banner
        title="community"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas."
        imgUrl={bannerImg}
      />
    </div>
  );
}

export default CommunityPage;
