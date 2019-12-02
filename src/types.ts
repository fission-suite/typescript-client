import { Value as JSONValue } from 'json-typescript'

export type Content = JSONValue
export type Upload = JSONValue | File
export type CID = string
export type Peer = string

export type ResetPassword = {
  password: string
}

export type Auth = {
  username: string
  password: string
  email?: string
}