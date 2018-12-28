import API from "API";


export default {
    initAuth({ commit }) {
        API.getServer()
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
