const apiCreate = (ajaxinstance) => ({
    getServer() {
        return ajaxinstance({
            method: 'GET',
            url: `/server`,
        })
    },
    generateJSON() {
        return ajaxinstance({
            method: 'POST',
            url: `/generateJSON`,
            ignoreCommonErrorHandler(code) {
                return code == 871
            }
        })
    },
})

export default apiCreate

