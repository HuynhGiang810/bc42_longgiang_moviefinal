import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InfoBooking from "./InfoBooking/InfoBooking";
import SeatList from "./SeatList/SeatList";
import Loading from "../../components/Loading/Loading";
import { listBooking } from "../../slices/bookingMovieSlice";
import cn from "classnames";
import styles from "./BookingMovie.module.scss";

function Booking() {
  const { maLichChieu } = useParams();
  const dispatch = useDispatch();
  const { infoMovie, selectedSeat } = useSelector(
    (state) => state.bookingMovieSlice
  );

  useEffect(() => {
    dispatch(listBooking(maLichChieu));
  }, [selectedSeat]);
  console.log(infoMovie);
  if (!infoMovie) {
    return <Loading />;
  }

  return (
    <div className={styles.wrapBookingMovie}>
      <div className="container py-md-5">
        <div className={cn("row", styles.bookingMovie)}>
          <div className="col-12 col-lg-7">
            <SeatList />
          </div>
          <div className="col-12 col-lg-5">
            <InfoBooking maLichChieu={maLichChieu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
