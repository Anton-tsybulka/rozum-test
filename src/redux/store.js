import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunkMiddleware))
);


export default store;




/* import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga); */