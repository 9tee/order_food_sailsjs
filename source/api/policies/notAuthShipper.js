module.exports = async (req, res, next) => {
    try {
        req.typeUser = 'shipper'
        return next();
    } catch (err) {
        return res
            .status(403)
            .json(
                { code: 403}
            );
    }
};