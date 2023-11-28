import IApiResponse from "@interfaces/IApiResponse"
import { Store } from "@reduxjs/toolkit"
import { AxiosInstance, AxiosResponse } from "axios"

// const AUTH_PAGE = "/"

const interceptor = ($http: AxiosInstance, store: Store) => {
  $http.interceptors.request.use((config) => {
    const token = store.getState()["auth"]["token"] ?? ""
    config.params = config.params || {}
    if (typeof window !== "undefined" && config.headers && token !== "") {
      config.headers["Game-Portal-Auth"] = `Bear ${token}`
    }
    return config
  })

  $http.interceptors.response.use(
    (response: AxiosResponse<IApiResponse>) => {
      if (
        response &&
        response.request &&
        response.request.responseURL &&
        !response.request.responseURL.endsWith("/api/users/login") &&
        response.data.errorCode === 1
      ) {
        // store.dispatch(setVerifyModal(true))
        return Promise.reject(response)
      } else if (response.data && response.data.errorCode !== 0) {
        if (response.request.responseURL.includes("/api/users/login")) {
          // store.dispatch(setDataError(response.data))
        }
        return Promise.reject(response)
      }
      return response
    },
    (error) => {
      if (typeof window !== "undefined") {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token")
          // store.dispatch(setModal(true))
        } else if (error.data && error.data.errorCode === 1) {
          // store.dispatch(setVerifyModal(true))
        } else {
          return Promise.reject(error)
        }
        return Promise.reject()
      }
      return Promise.reject(error)
    }
  )
}

export default interceptor
