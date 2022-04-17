interface savetoken {
    type: any;
}

function saveMyToken(token:savetoken) {
    return {
        type: "token",
        payload: token,
    }
}

export {saveMyToken}