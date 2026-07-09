"use strict"

// -------- VARIABLES --------
const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

//let state = {}

// -------- START --------
function startGame() {
    state = {}
    showTextNode(Node.start)
}

// -------- TEXTNODE SHOW --------
function showTextNode(textNodeIndex) {
    const textNode = textNodes[textNodeIndex]
// Error handling for missing text node
    if (!textNode) {
        console.error("Text node not found:", textNodeIndex)
        return
    }
// Update the text content
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.replaceChildren()
    }
// Create buttons for each option
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
// -------- OPTION SHOW --------
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

// -------- OPTION --------
function selectOption(option) {
    const nextNodeNodeId = option.nextNode
    const newState = { ...state, ...(option.setState ?? {}) }
    state = newState
    showTextNode(nextNodeNodeId)
}
// -------- STATE --------
let state = {
    currentPhase: 1,
    perspective: "attacker",
    pen: false,
    sword: false,
    shield: false,
    attack: false,
    merchantHealth: 100,
    score: 0
};

// -------- TEXTNODES --------
const Node = {
  start: "start",
  merchant: "merchant",
            merchant_sword: "merchant_sword",
            merchant_shield: "merchant_shield",
            merchant_swordShield: "merchant_swordShield",
            merchant_ignore: "merchant_ignore",
    sword: "sword",
  win: "win",
  lose: "lose"
};

// -------- TEXTNODES TREE --------
const textNodes = {

   [Node.start] : {
       text: "You wake up in a strange place and see a pen near you.",
       options: [
        {   text: "Take Pen.", setState: { pen: true }, nextNode: Node.merchant},
        {   text: "Leave the pen.", setState: {pen: false}, nextNode: Node.merchant},
            ] 
        },
    
    [Node.merchant] : {
        text: "You venture forth in search of answers to where you are when you come across a merchant.",
        options: [
            {text: "Trade the pen for a sword.", setState: {pen: false, sword: true}, 
                requiredState: (currentState) => currentState.pen,
                nextNode: Node.sword
            },
            {text: "Trade the pen for a shield.", setState: {pen: false, shield: true},
                requiredState: (currentState) => currentState.pen,
                nextNode: Node.sword
            },
            {text: "Trade the pen for a sword and shield.", setState: {pen: false, sword: true, shield: true},
                requiredState: (currentState) => currentState.pen && currentState.shield,
                nextNode: Node.sword
            },
            {
                text: "Ignore the merchant.",
                nextNode: Node.lose
            } 
        ]
    },
    [Node.sword] : {
        text: "You have intrusive thoughts about killing the merchant.",
        options: [
            {text: "Attack the merchant.", setState: {attack:true, merchantHealth: -100},
                requiredState: (currentState) => currentState.sword,
               textNode: Node.merchant_dead
            },

            {text: "Go away.", setState: {attack: false},
            requiredState: (currentState) => currentState.sword,
            nextNode: Node.start
            }
        ]
    },
    [Node.merchant_dead] : {
        text: "The merchant is dead. You have won the game.",
        options: [
            {text: "Play again.", setState: {attack: false, merchantHealth: 100},
                requiredState: (currentState) => currentState.sword,
               nextNode: Node.start
            },
        ]
    }
}

startGame();


    /* {
        id: 3,
        text: "You have a sword and a shield. What do you want to do?",
        options: [
            {
                text: "Attack the merchant.",
                requiredState: (currentState) => currentState.sword && currentState.shield,
                setState: {attack:true, merchantHealth: -100},
                nextNode: 4
            },
            {
                text: "Go away.",
                requiredState: (currentState) => currentState.sword && currentState.shield,
                setState: {attack: false},
                nextNode: 5
            }
        ]
    },
    {
        id: 4,
        text: "You have a sword and a shield. What do you want to do?",
        options: [
            {
                text: "Attack the merchant.",
                requiredState: (currentState) => currentState.sword && currentState.shield,
                setState: {attack:true, merchantHealth: -100},
                nextNode: 5
            },
            {
                text: "Go away.",
                requiredState: (currentState) => currentState.sword && currentState.shield,
                setState: {attack: false},
                nextNode: 4
            }
        ]
    },
    {
        id: 5,
        text: "You have a sword and a shield. What do you want to do?",
        options: [
            {
                text: "Attack the merchant.",
                requiredState: (currentState) => currentState.sword && currentState.shield,
                setState: {attack:true, merchantHealth: -100},
                nextNode: 1
            },
            {
                text: "Go away.",
                requiredState: (currentState) => currentState.sword && currentState.shield,
                setState: {attack: false},
                nextNode: 1
            }
        ]
    } */