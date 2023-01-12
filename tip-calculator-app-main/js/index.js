"use strict"

const input_dom = document.querySelectorAll(".field input")
const buttons_dom = document.querySelectorAll("#buttons > div")
const reset_dom = document.querySelector("#reset_button")
const top_total_dom = document.querySelector("#top_total")
const bottom_total_dom = document.querySelector("#bottom_total")
const orange_text_dom = document.querySelector("#orange_text")



for (let i = 0; i < buttons_dom.length; i++) {
    buttons_dom[i].addEventListener("click", action)
}
reset_dom.addEventListener("click", reset)


