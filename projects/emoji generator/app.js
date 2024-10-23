const emojis = [
    "😁",
    "🤣",
    "😂",
    "😃",
    "😅",
    "😎",
    "😋",
    "😍","😘","🤩","🤗","😚","🙂","😥","😫","😪","😭","😇","🤡","🥺","🥹"
]
let emoji = document.querySelector('#emoji');
emoji.addEventListener("mouseover", ()=>{
    emoji.innerHTML = emojis[Math.floor(Math.random()*emojis.length)]
})