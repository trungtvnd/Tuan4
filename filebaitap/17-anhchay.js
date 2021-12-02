class movePicture {
    image
    top
    left
    size
    speed

    constructor(image, top, left, size, speed) {
        this.image = image
        this.top = top
        this.size = size
        this.speed = speed
    }

    getPicture() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    getMoveRight() {
        return this.left += this.speed
    }

    getMoveDown() {
        return this.top += this.speed
    }

    getMoveLeft() {
        return this.left -= this.speed
    }

    getMoveUp() {
        return this.top -= this.speed
    }
}

speed1 = prompt('Input')
let picture = new movePicture('https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-naruto-chat-ngau-dep-820x600.jpg', 0, 0, 100, speed1)

function run() {
    if (picture.left < (window.innerWidth - picture.size) && picture.top === 0) {
        picture.getMoveRight()
    } else if (picture.top < (window.innerHeight - picture.size) && picture.left > 0) {
        picture.getMoveDown()
    } else if (picture.left > 0) {
        picture.getMoveLeft()
    } else if (picture.top > 0) {
        picture.getMoveUp()
    }
    document.getElementById('game').innerHTML = picture.getPicture()
    setTimeout(run, 100)
}

run()