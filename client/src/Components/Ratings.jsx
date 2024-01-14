import React from "react";
import {IoStarHalf,IoStar,IoStarOutline, IoAtOutline} from 'react-icons/io5'

function Ratings({ star }) {
  return (
    <div className="rating">
      <span className="flex gap-1">
        {
            star<0.5 ? <IoStarOutline/> : (star>0.5 && star<1 ? <IoStarHalf/> : <IoStar/>)
        }
        {
            star<1.5 ? <IoStarOutline/> : (star>1.5 && star<2 ? <IoStarHalf/> : <IoStar/>)
        }
        {
            star<2.5 ? <IoStarOutline/> : (star>2.5 && star<3 ? <IoStarHalf/> : <IoStar/>)
        }
        {
            star<3.5 ? <IoStarOutline/> : (star>3.5 && star<4 ? <IoStarHalf/> : <IoStar/>)
        }
        {
            star<4.5 ? <IoStarOutline/> : (star>4.5 && star<5 ? <IoStarHalf/> : <IoStar/>)
        }
      </span>
    </div>
  );
}

export default Ratings;
