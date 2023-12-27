import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchMissionData = createAsyncThunk(
  "dragon/fetchMissionData",
  async () => {
    const response = await fetch("https://api.spacexdata.com/v3/missions");
    return response.json();
  }
);

const mission = createSlice({
  name: "mission",
  initialState: { missionList: [] },
  reducers: {
    changeReservation(state, action) {
      // const { id } = action.payload;
      // console.log(id);
      //   state.reserved = !state.reserved;
      const { id, type } = action.payload;

      console.log("id", id + "type", type);
      const newMissionList = state.missionList.map((mission) => {
        if (type === "reserve" && id === mission.mission_id) {
          return { ...mission, reserved: true };
        }
        if (type === "cancel" && id === mission.mission_id) {
          return { ...mission, reserved: false };
        }
        return mission;
      });

      state.missionList = newMissionList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissionData.fulfilled, (state, action) => {
      const newMissionList = action.payload.map((mission) => {
        return { ...mission, reserved: false };
      });
      state.missionList = newMissionList;
    });
  },
});
export const { changeReservation } = mission.actions;
export default mission.reducer;
export { fetchMissionData };
