import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'https://getirtodolistapi.herokuapp.com/api/todos';

const getApi = () => {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(err => {throw err})
}

function* fetchTodos(actions) {
    console.log('GİrDİİİİİ')
    try {
        const todos = yield call(getApi);
        yield put({type: 'GET_TODOS_SUCCESS', todos})
    }catch(e) {
        yield put ({type: 'GET_TODOS_FAILED', message: e.message});
    }
}

function* todoListSaga() {
    yield takeEvery('GET_TODOS_REQUESTED', fetchTodos);
}

export default todoListSaga;