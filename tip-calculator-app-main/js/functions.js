

function action(event) {

    input_dom[1].addEventListener("keyup", f3)

    function f3(event) {
        button.id = ""
        orange_text_dom.style.display = "none"
        input_dom[1].id = ""
    }

    let button = event.currentTarget
    let element = event.currentTarget.textContent
    element = element.slice(0, -1)
    console.log(0);
    button.id = ("procent")

    // calc on tip amount and total amount
    let bill = input_dom[0].value;
    let people = input_dom[1].value;
    let tip_amount = calc_tip(bill, people, element)
    let total_amount = calc_total(bill, people, tip_amount)
    top_total_dom.textContent = `$${tip_amount.substring(0, 4)}`
    bottom_total_dom.textContent = `$${total_amount.substring(0, 4)}`

    function calc_tip(bill, people, element) {
        let decimal = bill / 100;
        let total = decimal * element;
        return "" + total / people
    }

    function calc_total(bill, people, tip) {
        let rounded_tip = Math.ceil(tip)

        let split = bill / people;
        let total = split + rounded_tip
        console.log(total);
        return "" + total

    }

    reset_dom.classList.add("reset_all")

    if (input_dom[1].value === "") {
        orange_text_dom.style.display = "block"
        input_dom[1].id = "second"
        top_total_dom.textContent = "$0.00"
        bottom_total_dom.textContent = "$0.00"
    }
    if (input_dom[1].value === 0) {
        orange_text_dom.style.display = "block"
        input_dom[1].id = "second"
        top_total_dom.textContent = "$0.00"
        bottom_total_dom.textContent = "$0.00"
    }


}


function reset(event) {
    input_dom[0].value = "";
    input_dom[1].value = "";
    top_total_dom.textContent = "$0.00"
    bottom_total_dom.textContent = "$0.00"
    reset_dom.classList.remove("reset_all")
    for (let button of buttons_dom) {
        button.id = ""
    }
}