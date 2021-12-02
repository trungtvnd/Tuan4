class mobie {

    constructor(battery, text, inbox, sent) {
        this.battery = battery;
        this.text = text;
        this.inbox = inbox;
        this.sent = sent
        this.message = ''
    }
    setMessage(message){
        this.message = message;
    }
    getMessage(message){
        return this.message;
    }

    onOff() {
        if (this.battery > 0) {
            return true
        }
        return alert('dien thoai chua bat')
    }

    turnOn() {
        if (!this.onOff()) {
            alert('Điện thoại chưa bật')
        } else {
            alert('Dien thoai dang bat')
        }

    }

    turnOff() {
        if (!this.onOff()) {
            alert('Điện thoại chưa bật')
        } else {
            alert('Dien thoai dang tat')
        }
    }

    charging() {
        alert('Sac pin' + this.battery++)

    }

    newMess() {
        this.usebattery()
        alert('Dang soan tin nhan')
    }

    receiveMess() {
    this.usebattery()
    }

    sentMess(message, mobie) {
        if(!this.onOff()){
            alert('Điện thoại chưa bật')
        }else {
            this.usebattery()
            return mobie.setMessage(message)
        }


    }

    checkinbox() {
    this.usebattery()
    }
    checkSent(){
    this.usebattery()
    }

    usebattery() {
        return this.battery--
    }

}
let iphone = new mobie(120, 100, 100, 120)
let nokia = new mobie(100, 80, 80, 80)
let lg = new mobie(90, 90, 70, 70)
iphone.sentMess('Message from iphone hêhehe', nokia)
iphone.sentMess('Hello t la iphone', lg)

let message = nokia.getMessage()
// document.getElementById('nokia').innerText = message
console.log("Nokia: " + message)
let message1 = lg.getMessage()
// document.getElementById('lg').innerText = message1
console.log('LG: ' + message1)



