module.exports = async (req, res, next) => {
    try {
        req.typeUser = 'store'
        return next();
    } catch (err) {
        return res
            .status(403)
            .json(
                { code: 403}
            );
    }
};