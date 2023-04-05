import { configureStore } from "@reduxjs/toolkit"
import buttonSlice from "./next-step-slice"

const store = configureStore({
    reducer: {button: buttonSlice.reducer}
})

export default store