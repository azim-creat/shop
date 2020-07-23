import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: null,
    title: "sss",
    first_value : true




  },

  getters: {
    TODOS: state => {
      return state.todos;
    },
  },

  mutations: {
    SET_TODO: (state, payload) => {
      state.todos = payload;
    },

    ADD_TODO: (state, payload) => {
      state.todos.push(payload);
    },
    FIRST_ACTION: (state,payload) => {
      state.first_value = payload; 
    },
    SET_TO: (state,payload) => {
      state[payload[0]] = payload[1]; 
    }
  },

  actions: {
    GET_TODO: async (context, payload) => {
      let {data} = await Axios.get('http://yourwebsite.com/api/todo');
      context.commit('SET_TODO', data);
    },

    SAVE_TODO: async (context, payload) => {
      let {data} = await Axios.post('http://yourwebsite.com/api/todo');
      context.commit('ADD_TODO', payload);
    },
    FIRST_ACTION: (context,payload) => {
       context.commit('FIRST_ACTION',payload) 
    },

    SET_TO: (context,payload) =>{
      context.commit('SET_TO',payload) 
    }
  },
});