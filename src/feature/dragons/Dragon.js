import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, changeReservation } from "./dragonSlice";

const Dragon = () => {
  const dispatch = useDispatch();
  const { dragonList } = useSelector((store) => store.dragon);
  console.log("inside dragonjs", dragonList);

  function handleReservation(id, reserved) {
    const type = reserved ? "cancel" : "reserve";
    dispatch(changeReservation({ id, type }));
  }

  useEffect(() => {
    if (dragonList.length === 0) dispatch(fetchData());
  }, [dispatch, dragonList]);

  return (
    <div>
      {dragonList.map((item, id) => (
        <div key={item.id}>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.type}</div>
          <div>
            <img
              style={{ width: "250px", height: "250px" }}
              src={`${item.flickr_images[0]}`}
              alt="mission"
            />
          </div>
          <button onClick={() => handleReservation(item.id, item.reserved)}>
            {item.reserved ? "Reserved" : "Reserve"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dragon;
