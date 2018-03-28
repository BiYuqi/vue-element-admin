import axios from 'axios'
import Cookie from 'js-cookie'
/**
* 封装基于axios的ajax请求
*
*
*/
export const AjaxRequest = function (url, param, payload) {
  this.url = url
  this.param = param
  this.callback = payload.callback
  this.error = payload.error
  this.status = 200
  this.response = {}
  this.getAjaxMethod = () => {
    axios({
      method: 'GET',
      url: this.url,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': localStorage.getItem('token') || Cookie.get('token')
      },
      param: this.param
    }).then(res => {
      this.callback(res)
    }).catch(res => {
      this.error(res)
    })
  }
  this.postAjaxMethod = () => {
    axios({
      method: 'POST',
      url: this.url,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': localStorage.getItem('token') || Cookie.get('token')
      },
      data: this.param
    }).then(res => {
      this.callback(res)
    }).catch(res => {
      this.error(res)
    })
  }
  this.putAjaxMethod = async () => {
    await axios({
      method: 'PUT',
      url: this.url,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': localStorage.getItem('token') || Cookie.get('token')
      },
      data: this.param
    }).then(res => {
      this.callback(res)
    }).catch(res => {
      this.error(res)
    })
  }
  this.deleteAjaxMethod = async () => {
    await axios({
      method: 'DELETE',
      url: url,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': localStorage.getItem('token') || Cookie.get('token')
      },
      params: this.param
    }).then(res => {
      this.callback(res)
    }).catch(res => {
      this.error(res)
    })
  }
}
