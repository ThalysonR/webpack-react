export function inc() {
    return { type: 'INC' }
}

export function dec() {
    return { type: 'DEC' }
}

export function incAsync() {
    return { type: 'INC_ASYNC' }
}

export function stepChanged(e) {
    return {
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}