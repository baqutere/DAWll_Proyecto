export interface Direccion {
  direccionId: number;
  direccion: string;
  ciudad: string;
  estado: string;
  codigoPostal: string;
  pais: string;
  activo: boolean;
}

export interface Rol {
  rolId: number;
  nombre: string;
  descripcion: string;
}

export interface Usuario {
  usuarioId?: number;
  nombre?: string;
  email: string;
  password: string;
  telefono?: string;
  fechaRegistro?: string;
  direcciones?: Direccion[];
  roles?: Rol[];
}
