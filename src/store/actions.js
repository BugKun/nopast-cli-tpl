import API from "API";
import {Loading} from "Utils"

export default {
    initAuth({ commit }) {
        Loading.show()
        API.getServer()
            .then(res => {
                if (res.code == 1) {
                    commit("changeServerState", res.data.isActive);
                    // Loading.hide()
                }
            })
            .catch(err => {
                console.log("Oops, error", err);
            })
    }
};
