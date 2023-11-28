export default interface IApiResponse<P = null> {
  errorCode: number
  message: string
  data: P
}
