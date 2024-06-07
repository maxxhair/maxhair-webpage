export type ProductStoreType = {
  id: string;
  name: string;
  image: string;
  price: number;
  count: number;
  color: string;
  size: string;
  type: string;
  texture: string;
  remark?: string;
};

export type LoggedUser = {
  cookie: string;
  user: any;
};
