class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '÷',
            multiplicar: 'x',
            seno: 'sin',
            coseno: 'cos',
            tangente: 'tan',
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimir();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.preTipoOperacion = undefined;
        this.imprimir();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimir();
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimir();
    }

    imprimir(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
}