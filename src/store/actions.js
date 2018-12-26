import API from "API";


export default {
    initAuth({ commit }) {
        API.getPermission()
            .then(res => {
                if (res.success) {
                    commit("changeServerState", res.data.isActive);
                }
            })
            .catch(err => {
                console.log("Oops, error", err);
            })
    }
};
