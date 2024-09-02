
function calculoDePartidas(vitorias, derrotas) {
     if(vitorias < 10) {
        return 'ferro';
     } else if(vitorias >= 11 && vitorias <= 20) {
        return 'bronze';
     } else if(vitorias >= 21 && vitorias <= 50) {
        return 'prata';
     } else if(vitorias >= 51 && vitorias <= 80) {
        return 'bronze';
     } else if(vitorias >= 81 && vitorias <= 90) {
        return 'prata';
}