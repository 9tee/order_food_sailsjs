module.exports = async (req, res, next) => {
    try {

        if (!req.headers.Authorization) {
            return res
                .status(401)
                .json(
                    { code: 402 }
                );
        }
        const auth = req.headers.Authorization.split(' ');
        if(auth[0].toLowerCase() !=='bearer'){
            return res
            .status(401)
            .json(
                { code: 402 }
            );
        }
        const userInfo = s
        return next();
    } catch (err) {
        return res
            .status(401)
            .json(
                { code: 402}
            );
    }
};