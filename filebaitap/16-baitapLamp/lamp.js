class Lamp {
    status;

    constructor(status) {
        this.status = status;
    }
    getStatus(){
        return status
    }

    turnOn() {
        this.status = true;
        console.log('Lighting');
    }
    turnOff() {
        this.status = false;
        console.log('light off');
    }
}
