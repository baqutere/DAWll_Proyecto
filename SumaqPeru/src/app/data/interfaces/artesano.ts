import { Producto } from "./producto";

export interface Artesano {
  id_artesano: number;
  tienda: string;
  descripcion: string;
  telefono: string;
  direccion: string;
  email: string;
  password: string;
  Producto?: Producto[];

}
