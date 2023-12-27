import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMissionData, changeReservation } from "./missionSlice";

const Mission = () => {
  const dispatch = useDispatch();
  const { missionList } = useSelector((store) => store.mission);
  console.log("inside missionjs", missionList);

  function handleReservation(id, reserved) {
    console.log("this is reserved", reserved);
    const type = reserved ? "cancel" : "reserve";
    dispatch(changeReservation({ id, type }));
  }

  useEffect(() => {
    if (missionList.length === 0) {
      dispatch(fetchMissionData());
    }
  }, [dispatch, missionList]);

  return (
    <div>
      {missionList.map((item, id) => (
        <div key={item.mission_id}>
          <div>{item.mission_id}</div>
          <div>{item.mission_name}</div>
          <div>{item.description}</div>
          <button
            onClick={() => handleReservation(item.mission_id, item.reserved)}
          >
            {item.reserved ? "Reserved" : "Reserve"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Mission;
