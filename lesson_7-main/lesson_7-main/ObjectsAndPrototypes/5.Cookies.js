// 

class CookieMaker {
    constructor(name, size, color, textColor) {
        this.name = name;
        this.size = size;
        this.color = color;
        this.textColor = textColor;
    }
}

let cookieFirst = new CookieMaker('ginger', '150', 'green', 'white');

class CookiesContainer {
    constructor(arrOfCookies) {
        this.arrOfCookies = arrOfCookies;

        this.build();
    }

    build() {
        let root = document.getElementById('root');

        root.innerHTML = arrOfCookies.map(item => `
            <div style="background-color: ${item.color}; width: ${item.size}px; color: ${item.textColor}; height: 100px; border-radius: 50%; text-align: center;">${item.name}</div>
        `);
    }
}

let arrOfCookies = [cookieFirst];

let cookieBuilder = new CookiesContainer(arrOfCookies);
