const includesAny = (arr, values) => values.some(v => arr.includes(v));
var req = new XMLHttpRequest();
req.onload = function () {
    parseHTMLP(this.responseText);
}
req.open('GET', 'index.htmlp');
req.send();

function parseHTMLP(htmlp) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(htmlp, "text/html");
    const htmp = xmlDoc.querySelectorAll('*');

    htmp.forEach(element => {
        if (element.tagName != "HTML") {
            if (element.tagName != "BODY") {
                if (customElements.includes(element.tagName)) {
                    console.log(element);
                    eval(`CE${element.tagName}(element)`)
                } else {
                    let parents = [];
                    let fElements = element;
                    while (fElements) {
                        parents.unshift(fElements.tagName);
                        fElements = fElements.parentNode;
                    }
                    if (includesAny(customElements, parents)) {
                    } else {
                        console.log(element)
                        const dummyElement = document.createElement(element.tagName)
                        dummyElement.innerHTML = element.innerHTML;
                        document.body.appendChild(dummyElement);
                    }
                }
            }
        }
    });
    console.log(xmlDoc);
}

//ADD CUSTOM ELEMENTS HERE
const customElements = ["BREAD", "VERYCOOLGROUP"];

function CEBREAD(e) {
    const bread = document.createElement("img");
    bread.src = "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/16:9/w_4000,h_2250,c_limit/milk-bread.jpg";
    bread.width = 741;
    bread.height = 416;
    document.body.appendChild(bread)
}

function CEVERYCOOLGROUP(e) {
    const coolGroup = document.createElement("div");
    coolGroup.style = `position: absolute; top: 15px; right: 15px; border: 1px, solid ${e.getAttribute("border")}`;
    coolGroup.innerHTML = e.innerHTML;
    document.body.appendChild(coolGroup);
}