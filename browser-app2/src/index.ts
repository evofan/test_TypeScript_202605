// import { sum } from "./sum";

// console.log(sum(1, 2));

class Applicatio {
    start(){
        console.log("hello world");
    }
}

window.addEventListener("load", ()=>{
    const app = new Applicatio();
    app.start();
})