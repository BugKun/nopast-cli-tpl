import Vue from "vue/dist/vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default () => {
    const store = new Vuex.Store({
        state,
        mutations,
        actions
    });

    if (module.hot) {
        module.hot.accept(
            ["./state.js", "./mutations.js", "./actions.js"],
            () => {
                const newState = require("./state.js").default;
                const newMutations = require("./mutations.js").default;
                const newActions = require("./actions.js").default;

                store.hotUpdate({
                    state: newState,
                    mutations: newMutations,
                    actions: newActions
                });
            }
        );
    }

    return store;
};
