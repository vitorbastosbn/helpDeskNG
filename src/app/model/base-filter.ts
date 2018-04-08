export class BaseFilter<Object> implements BaseFilter<Object> {

    private _objeto: Object;
    private _pagina: number;
    private _registrosPorPagina: number;
    private _paginas: Array<number>;
    private _registros: Array<Object>;

    /**
     * Getter objeto
     * @return {Object}
     */
    public get objeto(): Object {
        if (this._objeto == null) {
            this._objeto = Object();
        }
        return this._objeto;
    }

    /**
     * Setter objeto
     * @param {Object} value
     */
    public set objeto(value: Object) {
        this._objeto = value;
    }

    /**
     * Getter pagina
     * @return {number}
     */
    public get pagina(): number {
        if (this._pagina == null) {
            this._pagina = 0;
        }
        return this._pagina;
    }

    /**
     * Setter pagina
     * @param {number} value
     */
    public set pagina(value: number) {
        this._pagina = value;
    }

    /**
     * Getter registrosPorPagina
     * @return {number}
     */
    public get registrosPorPagina(): number {
        return 10;
    }

    /**
     * Getter paginas
     * @return {Array<number>}
     */
    public get paginas(): Array<number> {
        if (this._paginas == null) {
            this._paginas = [] as Array<number>;
        }
        return this._paginas;
    }

    /**
     * Setter paginas
     * @param {Array<number>} value
     */
    public set paginas(value: Array<number>) {
        this._paginas = value;
    }

    /**
     * Getter registros
     * @return {Array<object>}
     */
    public get registros(): Array<Object> {
        if (this._registros == null) {
            this._registros = [] as Array<Object>;
        }
        return this._registros;
    }

    /**
     * Setter registros
     * @param {Array<object>} value
     */
    public set registros(value: Array<Object>) {
        this._registros = value;
    }


}
