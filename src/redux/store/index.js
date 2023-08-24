import { legacy_createStore as createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "redux/reducers"

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
