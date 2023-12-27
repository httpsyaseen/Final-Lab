import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const { dragonList } = useSelector((store) => store.dragon);
  const { missionList } = useSelector((store) => store.mission);

  const reservedDragons = dragonList.filter(
    (dragon) => dragon.reserved === true
  );

  const reservedMissions = missionList.filter(
    (mission) => mission.reserved === true
  );
  console.log("dragonhehe", reservedDragons);
  console.log("missionhehe", reservedMissions);

  return (
    <>
      <h1>Dragons</h1>
      <div>
        <ul>
          {reservedDragons.map((dragon) => (
            <li>{dragon.name}</li>
          ))}
        </ul>
      </div>

      <h1> Missions</h1>
      <div>
        <ul>
          {reservedMissions.map((mission) => (
            <li>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Profile;
