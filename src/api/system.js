import axios from 'axios'

const apiCreate = (ajaxinstance) => {
    const api = {}

    api.getPermission = () => {
        return ajaxinstance({
            method: 'GET',
            url: `/api/permission`
        })
    }

    return api
}

export default apiCreate

