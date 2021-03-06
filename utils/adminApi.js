import { request,formData,requestImg } from './api'

export function allInformation() {
  const url = `${process.env.config.BASE_URL}admin/all`
  return request('get', url, {}, true)
}

export function createFoodtype(newfoodtype) {
  const url = `${process.env.config.BASE_URL}admin/foodtype/add`
  return request('post', url, formData(newfoodtype, 'newfoodtype'), true)
}

export function updateFoodtype(updatefoodtype, id) {
  const url = `${process.env.config.BASE_URL}admin/foodtype/edit/${id}`
  return request('put', url, formData(updatefoodtype, 'updatefoodtype'), true)
}

export function deleteFoodtype(id) {
  const url = `${process.env.config.BASE_URL}admin/foodtype/delete/${id}`
  return request('delete', url, {}, true)
}

export function createIngredients(newingredients) {
  const url = `${process.env.config.BASE_URL}admin/ingredients/add`
  return request('post', url, formData(newingredients, 'newingredients'), true)
}

export function updateIngredients(updateingredients, id) {
  const url = `${process.env.config.BASE_URL}admin/ingredients/edit/${id}`
  return request('put', url, formData(updateingredients, 'updateingredients'), true)
}

export function deleteIngredients(id) {
  const url = `${process.env.config.BASE_URL}admin/ingredients/delete/${id}`
  return request('delete', url, {}, true)
}

export function foodmenusWithPageSearchFoodtype(searchData = "", foodtypeId = 0, pageNo = 0, pageSize = 15) {
  const url = `${process.env.config.BASE_URL}admin/foodmenu/page/search/foodtype?searchData=${searchData}&foodtypeId=${foodtypeId}&pageNo=${pageNo}&pageSize=${pageSize}`
  return request('get', url, {}, true)
}

export function foodmenuImg(id) {
  const url = `${process.env.config.BASE_URL}admin/foodmenu/img/${id}`
  return requestImg(url,true)
}

export function requestsWithPage(pageNo = 0, pageSize = 15) {
  const url = `${process.env.config.BASE_URL}admin/request/page?pageNo=${pageNo}&pageSize=${pageSize}`
  return request('get', url, {}, true)
}

export function requestStatus() {
  const url = `${process.env.config.BASE_URL}admin/request/status`
  return request('get', url, {}, true)
}

export function changestatusRequest(id,req) {
  const url = `${process.env.config.BASE_URL}admin/request/changestatus/${id}`
  return request('put', url, formData(req, 'request'), true)
}

export function deleteRequest(id) {
  const url = `${process.env.config.BASE_URL}admin/request/delete/${id}`
  return request('delete', url, {}, true)
}

export function usersWithPage(pageNo = 0, pageSize = 15) {
  const url = `${process.env.config.BASE_URL}admin/user/page?pageNo=${pageNo}&pageSize=${pageSize}`
  return request('get', url, {}, true)
}

export function changestatus(id) {
  const url = `${process.env.config.BASE_URL}admin/user/${id}/changestatus`
  return request('put', url, {}, true)
}

export function deleteUser(id) {
  const url = `${process.env.config.BASE_URL}admin/user/${id}/delete`
  return request('delete', url, {}, true)
}

export function adminChangestatus() {
  const url = `${process.env.config.BASE_URL}admin/changestatus`
  return request('put', url, {}, true)
}