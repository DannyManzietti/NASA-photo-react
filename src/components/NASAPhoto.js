import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";

import { fetchPhoto } from "../fetch/fetchPhoto";

const NASAPhoto = props => {
  const [date, setDate] = useState(new Date());
  const [photoData, setPhotoData] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setPhotoData({});
    fetchPhoto(date)
      .then(res => {
        setPhotoData(res);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, [date]);

  return (
    <>
      <h2>NASA Photo of the day</h2>
      {photoData && (
        <>
          <DatePicker
            onChange={date => {
              setDate(date);
            }}
            dayAriaLabel="dayLabel"
            value={date}
          />
          <h3>{photoData.title}</h3>
          <h3>{photoData.date}</h3>
          <div>
            <img src={photoData.url} alt="NASA Photo of the day" />
          </div>
          <p>{photoData.explanation}</p>
        </>
      )}
      {props.error && <p className="error">{props.error}</p>}
    </>
  );
};

export default NASAPhoto;
