import axios from 'axios'
export default {
  async request({commit, state: { url }}){
    const data = await axios.get(url)

    commit('setResponse', {data: data.data,  status: data.status})
  }
}
