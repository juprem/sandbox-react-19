export const simulatingPromise = async (isReject = false, value, previous) =>
    await new Promise((resolve, reject) => {
        if (isReject) setTimeout(reject, 1000);
        setTimeout(resolve, 1000);
    })
        .then(() => value)
        .catch(() => previous);
