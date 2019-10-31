export default function(context) {
  return context.$axios
    .$post('https://reqres.in/api/login', {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    })
    .then((res) => {
      if (res.token !== 'QpwL') {
        context.redirect('/')
      }
    })
}
