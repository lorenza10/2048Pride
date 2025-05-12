
export default class Tile{

    #tileElement
    #x
    #y
    #value

    constructor(tileContainer, value = Math.random() > .5 ? 2 : 4){
        this.#tileElement = document.createElement("div")
        this.#tileElement.classList.add("tile")
        tileContainer.append(this.#tileElement)
        this.value = value
    }

    get value() {
        return this.#value
    }

    set value(v){
        this.#value = v
        // Adds the number to the page
        this.#tileElement.textContent = v
        // Determine how many times raised to power of 2
        const power = Math.log2(v)
        const pride = 'img/Gay_Pride_Flag.png'
        const bisexual = 'img/Bisexual_Pride_Flag.png'
        const lesbian = 'img/Lesbian_Pride_Flag.png'
        const asexual = 'img/Asexual_Pride_Flag.png'
        const nonbinary = 'img/Nonbinary_flag.png'
        const trans = 'img/Transgender_Pride_flag.png'
        const gay = 'img/Transgender_Pride_flag.png'
        const pan = 'img/Pansexuality_Pride_Flag.png'
        const genderfluid = 'img/Genderfluidity_Pride-Flag.png'
        const twospirit = 'img/Two-Spirit_Flag.png'
        const inclusive = 'img/Inclusive_Pride_Flag.png'
        const prideArray = [pride, bisexual, lesbian, asexual, nonbinary, trans, gay, pan, genderfluid, twospirit]

        if (v === 2) {
            this.#tileElement.style.setProperty("--background-image",  `url(${prideArray[0]})`)
            this.#tileElement.textContent = "Pride"
        }
        else if (v === 4) {
            this.#tileElement.style.setProperty("--background-image",  `url(${prideArray[1]})`)
            this.#tileElement.textContent = "Bisexual"
        }
        else if (v === 8) {
            this.#tileElement.style.setProperty("--background-image",  `url(${prideArray[2]})`)
            this.#tileElement.textContent = "Lesbian"
        }
        else if (v === 16) {
            this.#tileElement.style.setProperty("--background-image",  `url(${prideArray[3]})`)
            this.#tileElement.textContent = "Asexual"
        }
        else if (v === 32){
            this.#tileElement.style.setProperty("--background-image",  `url(${prideArray[4]})`)
            this.#tileElement.textContent = "Non Binary"
        }
        else if (v === 64) {
            this.#tileElement.style.setProperty("--background-image",  `url(${prideArray[5]})`)
            this.#tileElement.textContent = "Trans"
        }
        else if (v === 128) {
            this.#tileElement.style.setProperty("--background-image",  `url(${prideArray[6]})`)
            this.#tileElement.textContent = "Gay Men"
        }
        else if (v === 256) {
            this.#tileElement.style.setProperty("--background-image",  `url(${prideArray[7]})`)
            this.#tileElement.textContent = "Pansexual"
        }
        else if (v === 512) {
            this.#tileElement.style.setProperty("--background-image",  `url(${prideArray[8]})`)
            this.#tileElement.textContent = "Genderfluid"
        }
        else if (v === 1024) {
            this.#tileElement.style.setProperty("--background-image",  `url(${prideArray[9]})`)
            this.#tileElement.textContent = "Two Spirit"
        }
        else if (v === 2048) {
            this.#tileElement.style.setProperty("--background-image",  `url(${prideArray[10]})`)
            this.#tileElement.textContent = "Inclusive"
        }

    }

    set x(value) {
        this.#x = value
        this.#tileElement.style.setProperty("--x", value)
    }
    set y(value) {
        this.#y = value
        this.#tileElement.style.setProperty("--y", value)
    }

    remove() {
        this.#tileElement.remove()
    }

    waitForTransition(animation = false) {
        return new Promise(resolve => {
            this.#tileElement.addEventListener(animation ? "animationend" : "transitionend", resolve, {once: true})
        })
    }
}