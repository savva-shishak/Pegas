export default {
  address: 'localhost',
  protocol: 'http',
  params: {},
  type: "GET",
  response: null,
  url: "http://localhost",
  statusCode: 0,
  /*
     код статуса:
      0 - нет подключения
      1 - отправка запроса
      2 - ответ получен (успешно)
      3 - ошибка 402
      4 - ошибка запроса
      5 - ошибка на сервере
  */
  status: {
    color: [
      'blue-grey-4',
      'light-blue-2',
      'positive',
      'red-14',
      'red-14',
      'deep-orange-5'
    ],
    text: [
      'нет подключения',
      'отправка запроса',
      'ответ получен (успешно)',
      'ошибка 402',
      'ошибка запроса',
      'ошибка на сервере'
    ]
  }
}
