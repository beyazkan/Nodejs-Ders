// events
import {EventEmitter} from "events";

var emitter = new EventEmitter();

function clicked(a, b){
    console.log("Clicked!", a, b);
}

function clicked2(){
    console.log("Clicked 2!");
}
function clicked3(){
    console.log("Clicked 3!");
}

// Event handler & event listener
// emitter.addListener("click", clicked);
// emitter.addListener("click", clicked2);
//emitter.on("click", clicked);
// emitter.addListener("click", clicked);
// emitter.addListener("click", clicked);

// Event Trigger
// emitter.emit("click", 3, 5);
// emitter.emit("click", 3, 5);
// emitter.emit("click", 3, 5);
// emitter.emit("click", 3, 5);
// emitter.emit("click", 3, 5);

// emitter.on("click", clicked);
// emitter.on("click", clicked2);
// Olayın bir kez çalıştırılması için "once" methodu kullanılır.
// emitter.once("tek", () => console.log("Tek çağırıldı!"));

// setInterval(()=>{
//     emitter.emit("click", 3, 5);
// }, 1000);

// Olayların isimlerini öğrenmek.
// console.log(emitter.eventNames());
// Dinleyicilerin fonksiyon isimlerini öğrenmek.
// console.log(emitter.listeners("click"));
// Kaç dinleyici olduğunu öğrenmek
// console.log(emitter.listenerCount("click"));

// Events sayısı sınırı - 10
// sayı sınırını değiştirmek
// emitter.setMaxListeners(15);
// emitter.on("click", clicked);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);
// emitter.on("click", clicked2);

// Listenerlerin tek tek silinmesi
emitter.on("click", () => {console.log("Clicked!")});
emitter.on("click", clicked2);
emitter.on("click", clicked3);

console.log(emitter.listeners("click"));
emitter.removeListener("click", clicked2);
emitter.off("click", emitter.listeners("click")[0]);
console.log(emitter.listeners("click"));
// Toplu silinmesi
emitter.removeAllListeners("click");
console.log(emitter.listeners("click"));