class Button {
    status;
    lamp;
    constructor() {
        this.status = false;
    }
    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    buttonOnOff(){
        this.status = !this.status
        this.onOff()
    }
    onOff(){
        if (this.status){
            this.lamp.turnOn()
        }else {
            this.lamp.turnOff()
        }
    }

    // on(lamp) {
    //     this.status = true;
    //     lamp.turnOn();
    // }
    // off(lamp) {
    //     this.status = false;
    //     lamp.turnOff();
    // }
}