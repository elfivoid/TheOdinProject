"use strict"

// -------- VARIABLES --------
const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {}

// -------- START --------
function startGame() {
    state = {}
    showTextNode(1)
}

// -------- TEXTNODE SHOW --------
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.replaceChildren()
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener("click", () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

// -------- OPTION --------
function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(...state, ...arguments(option.setState ?? {}))
    showTextNode(nextTextNodeId)
}
// -------- TEXTNODES --------
const textNodes = [
    {
       id: 1,
       text: "You wake up in a strange place and see a pen near you.",
       options: [
        {
            text: "Take Pen.",
            setState: { pen: true },
            nextText: 2
        },
        {
            text: "Leave the pen.",
            //setState: {pen: false},
            nextText: 2
        }
       ] 
    },
    {
        id: 2,
        text: "You venture forth in search of answers to where you are when you come across a merchant.",
        options: [
            {
                text: "Trade the pen for a sword.",
                requiredState: (currentState) => currentState.pen,
                setState: {pen: false, sword: true},
                nextText: 3
            },
            {
                text: "Trade the pen for a shield.",
                requiredState: (currentState) => currentState.pen,
                setState: {pen: false, shield: true},
                nextText: 3
            },
            {
                text: "Ignore the merchant.",
                nextText: 3
            }
        ]
    }
]

startGame();

// Factory Function Base
/*function createCar() {
    return {
        brand: "BMW",
        drive() {
            console.log("Vroom!")
        }
    }
}

const car = createCar()
car.drive() */

