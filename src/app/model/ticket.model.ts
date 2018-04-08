import { Usuario } from './usuario.model';

export class Ticket {
    constructor(
        public id: string,
        public protocolo: number,
        public titulo: string,
        public status: string,
        public prioridade: string,
        public imagem: string,
        public usuario: Usuario,
        public usuarioDesignado: Usuario,
        public data: string,
        public Alteracoes: Array<string>,
    ) {}
}
