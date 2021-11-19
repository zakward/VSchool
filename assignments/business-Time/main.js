/** CHANGING TEXT WITHIN AN ARRAY OF ELEMENTS */

// var result = document.querySelectorAll("ul.footer-links-list > li") 
// console.log(Array.from(result))

// for (var i = 0; i < result.length; i++) {
//     result[i].textContent= "** REDACTED **"
// }

// var navItems = document.querySelectorAll("ul.menu-items > li")
// console.log(Array.from(navItems))

// for (var i = 0; i < navItems.length; i++) {
//     navItems[i].textContent= "** REDACTED **"
// }

/* CHANGING TEXT OF ONE ELEMENT TO MATCH THE TEXT OF ANOTHER ELEMENT */

// var text = document.querySelector(".footer-links-list > #about").textContent
// document.querySelector("#contact-us").textContent = text


// Why does this not work:

// var logo = document.getElementById("tusk2Tail")
// logo.style.color = "blue"

// // // But this does work:

// // var logo = document.querySelector(".tusk2Tail")
// // logo.style.color = "blue"