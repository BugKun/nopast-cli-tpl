module.exports = (req, res) => {
    res.json({
        success: true,
        data: {
            isActive: true
        }
    });
};
