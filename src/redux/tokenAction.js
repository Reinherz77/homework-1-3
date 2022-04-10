function saveMyToken(token) {
    return {
        type: "token",
        payload: token,
    }
}

export {saveMyToken}