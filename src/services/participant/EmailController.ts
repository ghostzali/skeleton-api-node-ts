export const isExist = async (email: string) => {
    function emailChecker(e: string) {
        return false;
    }

    const status = await emailChecker(email);
    if (status) {
        return {
            status: "EXIST",
            message: "Already exist."
        }
    }
    return {
        status: "AVAILABLE",
        message: "Hasn't been taken."
    }
};
