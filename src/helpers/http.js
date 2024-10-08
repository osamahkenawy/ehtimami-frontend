import { getAuthToken } from '@/plugins/Auth'
// import http from 'axios'
import http from '@/plugins/axios'
// don't remove this export
export const getPortal = () => {
  return localStorage.getItem('portal')
}

// http.interceptors.request.use(config => {
//   config.headers.Authorization = getAuthToken(getPortal())
//   config.headers['Access-Control-Allow-Origin'] = '*'
//   config.headers['timezone'] = Intl.DateTimeFormat().resolvedOptions().timeZone
//   return config
// })
export default http

export * from '@/plugins/Auth'
