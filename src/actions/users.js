import {getUsers} from "../utils/api";

import {showLoading, hideLoading} from 'react-redux-loading';



export const RECEIVE_USERS = 'RECEIVE_USERS';

export const ADD_USER_QUESTION_ANSWER = 'ADD_USER_QUESTION_ANSWER';

export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';



export function receiveUsers(users) {

    return {

        type: RECEIVE_USERS,

        users

    }

}



export function addUserQuestion(question) {

    return {

        type: ADD_USER_QUESTION,

        question

    }

}



export function addUserQuestionAnswer(authedUser, questionId, selectedOption) {

    return {

        type: ADD_USER_QUESTION_ANSWER,

        authedUser,

        questionId,

        selectedOption

    }

}



export function handleGetUsers() {

    return (dispatch) => {

        dispatch(showLoading());

        return getUsers()

            .then((users) => {

                dispatch(receiveUsers(users));

                dispatch(hideLoading());

            });

    }

}