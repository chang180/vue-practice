/* eslint-disable no-unused-expressions */
/* eslint-disable eol-last */
/* eslint-disable no-unreachable */
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable indent */
import Vue from 'vue'
import Vuex from 'vuex'
import LocalStorage from '../modules/LocalStorage'

Vue.use(Vuex)

const STORE = new LocalStorage('todo-vue')

export default new Vuex.Store({
    state: {
        todos: []
    },
    getters: {

    },
    mutations: {
        // eslint-disable-next-line space-before-function-paren
        SET_TODOS(state, todos) {
            state.todos = todos
        }
    },
    actions: {
        CREATE_TODO({ commit }, { todo }) {

        },
        READ_TODOS({ commit }) {
            // 1. load
            const todos = STORE.load()
                // 2. commit mutation
            commit("SET_TODOS", todos)
                // 3. return
            return {
                todos
            }
        },
        UPDATE_TODOS({ commit }, { tId, todos }) {

        },
        DELETE_TODS({ commit }, { tId }) {

        }
    },
})