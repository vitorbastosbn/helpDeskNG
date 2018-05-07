import { AbstractEntity } from '../../components/comum/abstract/abstract_entity';

export class Usuario extends AbstractEntity {

    private _id: string;
    private _email: string;
    private _senha: string;
    private _perfil: string;

    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Getter senha
     * @return {string}
     */
    public get senha(): string {
        return this._senha;
    }

    /**
     * Getter perfil
     * @return {string}
     */
    public get perfil(): string {
        return this._perfil;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }

    /**
     * Setter senha
     * @param {string} value
     */
    public set senha(value: string) {
        this._senha = value;
    }

    /**
     * Setter perfil
     * @param {string} value
     */
    public set perfil(value: string) {
        this._perfil = value;
    }


}
