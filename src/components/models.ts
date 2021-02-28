export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export enum LocalStorageKeys {
  ACCESS_TOKE = 'access_token',
  MODAL_INSTALL_APP = 'neverShowAppInstallBanner'
}
