export class Reporte {
    constructor(
        public modelName: string,
        public ipAddress: string,
        public hostName: string,
        public cuentaId: string,
        public cuentaNombre: string,
        public printTotal: number,
        public copyTotal: number,
        public scanTotal: number,
        public printFullColor: number,
        public printBlackWhite: number,
        public copyFullColor: number,
        public copyBlackWhite: number,
        public timeStamp: string,
        public clienteIdcliente: number
    ) { }
}

