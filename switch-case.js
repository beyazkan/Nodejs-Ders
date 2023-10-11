var input = 9;
var day;

switch(input){
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
    case 7:
        day = "Pazar";
        break;
    default:
        day = "Lütfen geçerli bir gün giriniz.";
        break;
}

console.log(`Bugün günlerden: ${day}`);