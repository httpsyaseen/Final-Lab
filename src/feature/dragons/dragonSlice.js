import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("dragon/fetchData", async () => {
  const response = await fetch("https://api.spacexdata.com/v4/dragons");
  return response.json();
});

const dragon = createSlice({
  name: "dragon",
  initialState: { dragonList: [] },
  reducers: {
    changeReservation(state, action) {
      const { id, type } = action.payload;

      console.log("id", id + "type", type);
      const newDragonList = state.dragonList.map((dragon) => {
        if (type === "reserve" && id === dragon.id) {
          return { ...dragon, reserved: true };
        }
        if (type === "cancel" && id === dragon.id) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });

      state.dragonList = newDragonList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const newDragonList = action.payload.map((dragon) => {
        return { ...dragon, reserved: false };
      });
      state.dragonList = newDragonList;
    });
  },
});
export const { changeReservation } = dragon.actions;
export default dragon.reducer;
export { fetchData };
