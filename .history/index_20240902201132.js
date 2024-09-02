
function calculoDePartidas(vitorias, derrotas) {
     if(vitorias < 10) {
        return 'ferro';
     } else if(vitorias >= 11 && vitorias <= 20) {
        return 'bronze';
     } else if(vitorias >= 21 && vitorias <= 50) {
        return 'prata'
     }
     
}