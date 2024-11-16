export class Cancion {
  public codCancion: number;
  public tituloCancion: string;
  public cantanteCancion: string;
  public codGeneroCancion: string;
  public imagenCancion: string;
  public imagenCancionBase64: string;

  constructor(
    codc: number,
    tituc: string,
    cant: string,
    gene: string,
    imag: string,
    base: string
  ) {
    this.codCancion = codc;
    this.tituloCancion = tituc;
    this.cantanteCancion = cant;
    this.codGeneroCancion = gene;
    this.imagenCancion = imag;
    this.imagenCancionBase64 = base;
  }
}
