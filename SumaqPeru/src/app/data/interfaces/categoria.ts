import { Producto } from "./producto";

export interface Categoria {
  categoriaId: number;
  nombre: string;
  descripcion: string;
  productos: Producto[];
}
