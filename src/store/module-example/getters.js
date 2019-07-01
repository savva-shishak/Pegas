export default {
  getAddress({address}){
    return address
  },

  getProtocol({protocol}){
    return protocol
  },

  getParameters({params}){
    return params
  },

  getType({type}){
    return type
  },

  getResponse({response}){
    return data(response)
  },

  getStatus({status, statusCode}){
    return status.text[statusCode]
  },

  getStatusColor({status, statusCode}){
    return status.color[statusCode]
  },

  getUrl({address, protocol, statusCode, status, url}){
    return "<span class='text-" + status.color[statusCode] + "'>" + url + "</span>"
  }
}

// доп. функции
const string = obj => {
  if (obj) {
    return "<span class='text-blue-13'>\"" + obj + "\"</span>"
  }
  return "<span class='text-grey-13'>#\"пусто\"</span>"
}

const num = obj => {
  return obj
}

const bool = obj => {
  const color = obj? "green-13": "deep-orange-13"
  return "<span class='text-" + color + "'>" + obj + "</span>"
}

const array = obj => {
  let array = "<ul class='my-array'>["
  for (let i = 0; i < obj.length; i++) {
    array += ("<li><span class='text-white'>___</span>" + data(obj[i]) + "</li>")
  }
  array += "]</ul>"

  return array
}

const object = obj => {
  let array = "<ul class='my-array'>{"
  for (let key in obj) {
    array += ("<li><span class='text-white'>___</span>" + key +": " + data(obj[key]) + "</li>")
  }
  array += "}</ul>"

  return array
}

const data = data => {
  const type = typeof data

  if (type == 'string') {
    return string(data)

  } else if (type == 'number') {
    return num(data)

  } else if (type == 'boolean') {
    return bool(data)

  } else if (type == 'object'){
    return Array.isArray(data)? array(data): object(data)

  } else {
    console.log(type);

    return "<span class='text-orange-10'>Не известный тип данных (уже веведен на консоль)</span>"
  }
}
