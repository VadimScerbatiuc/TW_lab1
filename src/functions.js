import React from 'react'
import { contentmock } from "./content";


export function getInitialState() {
    return JSON.parse(localStorage.getItem('initialState')) || []
}

function setUpdatedState(state) {
    localStorage.setItem('initialState', JSON.stringify(state))
}

export function setInitialStateToLocalStorage() {
    localStorage.setItem('initialState', JSON.stringify(contentmock))
}

export function getStateByKey(key) {
    return JSON.parse(localStorage.getItem(key))
}


export function removeCard(initialState, index) {
    const state = initialState
    const removedElement = state.splice(index, 1)
    return [removedElement, state]
}