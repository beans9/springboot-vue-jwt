import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

export {getUserInfo, loginProc, logout}

const enhanceAccessToeken = () => {
  const {accessToken} = localStorage
  if (!accessToken) return
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}
enhanceAccessToeken()

function getUserInfo () {
  const url = `${BASE_URL}/users/info`
  return axios.get(url).then((res) => res.data)
}

function loginProc (data) {
  const url = `${BASE_URL}/login`
  return axios({
    method: 'post',
    url: url,
    data: data
    // withCredentials: true
    // return axios.post(url, data, {withCredentials: true})
    //   .then((res) => res.data)
  }).then(res => {
    localStorage.accessToken = res.data
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data}`
  })
    .catch(function (err) {
      console.log(err.response)
      // alert('error', type)
    })
}

function logout () {
  delete localStorage.accessToken
  axios.defaults.headers.common['Authorization'] = undefined
}
