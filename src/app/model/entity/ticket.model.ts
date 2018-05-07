import { Usuario } from './usuario.model';
import { StatusEnum } from '../enums/statusEnum';
import { AbstractEntity } from '../../components/comum/abstract/abstract_entity';

export class Ticket extends AbstractEntity {

    private _id: string;
    private _protocolo: number;
    private _titulo: string;
    private _status: StatusEnum;
    private _prioridade: string;
    private _imagem: string;
    private _usuario: Usuario;
    private _usuarioDesignado: Usuario;
    private _data: string;
    private _descricao: string;
    private _alteracoes: Array<string>;

    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter protocolo
     * @return {number}
     */
    public get protocolo(): number {
        return this._protocolo;
    }

    /**
     * Getter titulo
     * @return {string}
     */
    public get titulo(): string {
        return this._titulo;
    }

    /**
     * Getter status
     * @return {StatusEnum}
     */
    public get status(): StatusEnum {
        return this._status;
    }

    /**
     * Getter prioridade
     * @return {string}
     */
    public get prioridade(): string {
        return this._prioridade;
    }

    /**
     * Getter imagem
     * @return {string}
     */
    public get imagem(): string {
        return this._imagem;
    }

    /**
     * Getter usuario
     * @return {Usuario}
     */
    public get usuario(): Usuario {
        if (this._usuario == null) {
            this._usuario = new Usuario();
        }
        return this._usuario;
    }

    /**
     * Getter usuarioDesignado
     * @return {Usuario}
     */
    public get usuarioDesignado(): Usuario {
        if (this._usuarioDesignado == null) {
            this._usuarioDesignado = new Usuario();
        }
        return this._usuarioDesignado;
    }

    /**
     * Getter data
     * @return {string}
     */
    public get data(): string {
        return this._data;
    }

    /**
     * Getter descricao
     * @return {string}
     */
    public get descricao(): string {
        return this._descricao;
    }

    /**
     * Getter alteracoes
     * @return {Array<string>}
     */
    public get alteracoes(): Array<string> {
        return this._alteracoes;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter protocolo
     * @param {number} value
     */
    public set protocolo(value: number) {
        this._protocolo = value;
    }

    /**
     * Setter titulo
     * @param {string} value
     */
    public set titulo(value: string) {
        this._titulo = value;
    }

    /**
     * Setter status
     * @param {StatusEnum} value
     */
    public set status(value: StatusEnum) {
        this._status = value;
    }

    /**
     * Setter prioridade
     * @param {string} value
     */
    public set prioridade(value: string) {
        this._prioridade = value;
    }

    /**
     * Setter imagem
     * @param {string} value
     */
    public set imagem(value: string) {
        this._imagem = value;
    }

    /**
     * Setter usuario
     * @param {Usuario} value
     */
    public set usuario(value: Usuario) {
        this._usuario = value;
    }

    /**
     * Setter usuarioDesignado
     * @param {Usuario} value
     */
    public set usuarioDesignado(value: Usuario) {
        this._usuarioDesignado = value;
    }

    /**
     * Setter data
     * @param {string} value
     */
    public set data(value: string) {
        this._data = value;
    }

    /**
     * Setter descricao
     * @param {string} value
     */
    public set descricao(value: string) {
        this._descricao = value;
    }

    /**
     * Setter alteracoes
     * @param {Array<string>} value
     */
    public set alteracoes(value: Array<string>) {
        this._alteracoes = value;
    }

}
