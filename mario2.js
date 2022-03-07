function piso(nPiso, altura){    
    nNumeral = nPiso;
    let texto = "<p>"
    for(let i = 0; i < altura - nPiso; i++){
        texto = texto + "&nbsp;";}
    {
        for(let i = 0; i < nNumeral; i++)
        texto = texto + "#";
        texto = texto + "&nbsp;";
        for(let i = 0; i < nNumeral; i++)
        texto = texto + "#";
        texto = texto + "</p>"
    return texto;}
    }
    let nPisos;
    do{
    nPisos = parseInt(prompt("Ingrese la altura de la torre. Número entre 1 y 10"))
    }while(isNaN(nPisos) || nPisos < 1 || nPisos > 10);
    let  contenido = "";
    for(let i = 1; i <= nPisos; i++){
        contenido = contenido + piso(i, nPisos)}
    let contenedor = document.querySelector("#contenedor");
    contenedor.innerHTML = contenido;