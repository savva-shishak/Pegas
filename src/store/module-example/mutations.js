export default {
  setSettings(state, changes){
    state.address = changes.address
    state.protocol = changes.protocol
    state.type = changes.type

    state.params = params(changes.params)

    state.url = url(state)
  },

  setResponse(state, act){
    state.response = act.data
    state.statusCode = act.status == 402? 3: Math.floor(act.status / 100)
  }
}


// вычисление url
const url = ({address, protocol, params, type}) => {
  let url = protocol + "://" + address

  let param = Object.keys(params)

  if (type != "POST" && param.length != 0) {
    url += "/?"

    for (let key in params) {
      url += key + "=" + params[key] + "&"
    }

    url = url.slice(0, -1)
  }

  return url
}

// преобразование параметров
const params = params => {
  let newparams = {}
  for (var i = 0; i < params.length; i++) {
    let key = params[i].key,
    val = params[i].val

    newparams[key] = val
  }
  return newparams
}
