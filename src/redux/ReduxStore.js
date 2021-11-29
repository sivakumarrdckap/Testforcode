import { createStore } from "redux";
import combinedReducer from "./reducers";
import SimpleCrypto from "simple-crypto-js";

var _secretKey = "some-unique-key";
var simpleCrypto = new SimpleCrypto(_secretKey);

function saveToLocalStorage(state) {
  try {
    const serialized = JSON.stringify(state);
    var encrypted = simpleCrypto.encrypt(serialized);
    sessionStorage.setItem("bulkdata", JSON.stringify(encrypted));
    // localforage.setItem('bulkdata', serialized)
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    let serialized = sessionStorage.getItem("bulkdata");
    var decrypt = simpleCrypto.decrypt(JSON.parse(serialized));
    if (decrypt === null) return undefined;
    return decrypt;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const completedata = loadFromLocalStorage();
export const store = createStore(
  combinedReducer,
  completedata,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));
