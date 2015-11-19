//  Hide total div until an option is added
function hideTotal() {
    "use strict";
    var priceField = document.getElementById('totalPrice');
    priceField.style.display = 'none';
}
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", hideTotal, false);
}
//  Set focus to name field on load
function firstFocus() {
    "use strict";
    document.pizzaForm.name.focus();
}
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", firstFocus, false);
}

//  Hide "Other" field unless "Other" option is chosen in dropdown
var selectLocation = document.getElementById('location'),
    onChange = function (event) {
        "use strict";
        var shown = this.options[this.selectedIndex].value === "other";
        document.getElementById('otherlocation').style.display = shown ? 'block' : 'none';
    };
if (window.addEventListener) {
    selectLocation.addEventListener('change', onChange, false);
} else {
    selectLocation.attachEvent('onchange', function () {
        "use strict";
        onChange.apply(selectLocation, arguments);
    });
}
//  Write a function to validate and ensure that the user enters a value (or makes a selection) for each of the form items here. Use regular expressions to ensure that their name doesn’t contain any numbers and that their zip code, phone number, and email address are formatted correctly. Make sure that the user only enters two alpha characters in the state field.  

//  Run validation when leaving name field
document.getElementById("name").addEventListener("blur", function () {
    "use strict";
    var theName = document.pizzaForm.name.value,
        nameExp = /^([a-zA-Z ]){2,30}$/;
    if (nameExp.test(theName) === false) {
        window.alert("Please provide your name");
        document.pizzaForm.name.focus();
        return false;
    }
});

//  Run validation when leaving address field
document.getElementById("street").addEventListener("blur", function () {
    "use strict";
    if (document.pizzaForm.street.value === "") {
        window.alert("Please provide your street address");
        document.pizzaForm.street.focus();
        return false;
    }
});

//  Run validation when leaving city field
document.getElementById("city").addEventListener("blur", function () {
    "use strict";
    if (document.pizzaForm.city.value === "") {
        window.alert("Please provide your city");
        document.pizzaForm.city.focus();
        return false;
    }
});

//  Run validation when leaving state field
document.getElementById("state").addEventListener("blur", function () {
    "use strict";
    var theState = document.pizzaForm.state.value,
        stateExp = /[0-9]/;
    if (document.pizzaForm.state.value === "" || document.pizzaForm.state.value.length !== 2 || stateExp.test(theState) === true) {
        window.alert("Please enter a state in 2 letters");
        document.pizzaForm.state.focus();
        return false;
    }
});

//  Run validation when leaving zipcode field
document.getElementById("zipcode").addEventListener("blur", function () {
    "use strict";
    var zipExp = /^[0-9]{5}(?:-[0-9]{4})?$/,
        theZip = document.pizzaForm.zipcode.value;
    if (document.pizzaForm.zipcode.value === "" || zipExp.test(theZip) === false) {
        window.alert("Please provide a valid zipcode.");
        document.pizzaForm.zipcode.focus();
        return false;
    }
});

//  Run validation when leaving phone field
document.getElementById("phone").addEventListener("blur", function () {
    "use strict";
    var phoneExp = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/,
        thePhone = document.pizzaForm.phone.value;
    if (document.pizzaForm.phone.value === "" || phoneExp.test(thePhone) === false) {
        window.alert("Please provide your Phone number");
        document.pizzaForm.phone.focus();
        return false;
    }
});

//  Run validation when leaving email field
document.getElementById("email").addEventListener("blur", function () {
    "use strict";
    var emailExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        theEmail = document.pizzaForm.email.value;
    if (document.pizzaForm.email.value === "" || emailExp.test(theEmail) === false) {
        window.alert("Please provide your Email");
        document.pizzaForm.email.focus();
        return false;
    }
});

//  PRICES
var cheesePrices = {
    light: 0,
    normal: 0,
    extra: 2.99,
    double: 3.99
};

var saucePrices = {
    regularTom: 0,
    heartyTom: 0.99,
    bbq: 1.99
};

var handTossed = {
    choose: ["Choose a Size", 0],
    small: ["Small ($9.99)", 9.99],
    medium: ["Medium ($12.99)", 12.99],
    large: ["Large ($14.99)", 14.99]
};

var thinCrust = {
    choose: ["Choose a Size", 0],
    medium: ["Medium ($11.99)", 11.99],
    large: ["Large ($13.99)", 13.99]
};

var newYork = {
    choose: ["Choose a Size", 0],
    large: ["Large ($16.99)", 16.99],
    exlarge: ["Extra Large ($19.99)", 19.99]
};

var glutenFree = {
    choose: ["Choose a Size", 0],
    small: ["Small ($10.99)", 10.99]
};
//  Load crust options depending on selected crust type
function insertCrustOptions() {
    "use strict";
    var theList = document.getElementById("theCrust"),
        button1 = document.getElementById("handTossed"),
        button2 = document.getElementById("thinCrust"),
        button3 = document.getElementById("newYork"),
        button4 = document.getElementById("glutenFree");

    if (button1.checked) {
        theList.options.length = 0;
        theList.options[0] = new Option(handTossed.choose[0], handTossed.choose[1]);
        theList.options[1] = new Option(handTossed.small[0], handTossed.small[1]);
        theList.options[2] = new Option(handTossed.medium[0], handTossed.medium[1]);
        theList.options[3] = new Option(handTossed.large[0], handTossed.large[1]);
    } else if (button2.checked) {
        theList.options.length = 0;
        theList.options[0] = new Option(thinCrust.choose[0], thinCrust.choose[1]);
        theList.options[1] = new Option(thinCrust.medium[0], thinCrust.medium[1]);
        theList.options[2] = new Option(thinCrust.large[0], thinCrust.large[1]);
    } else if (button3.checked) {
        theList.options.length = 0;
        theList.options[0] = new Option(newYork.choose[0], newYork.choose[1]);
        theList.options[1] = new Option(newYork.large[0], newYork.large[1]);
        theList.options[2] = new Option(newYork.exlarge[0], newYork.exlarge[1]);
    } else {
        theList.options.length = 0;
        theList.options[0] = new Option(glutenFree.choose[0], glutenFree.choose[1]);
        theList.options[1] = new Option(glutenFree.small[0], glutenFree.small[1]);
    }
}
document.getElementById("handTossed").addEventListener("change", function () {
    "use strict";
    insertCrustOptions();
});
document.getElementById("thinCrust").addEventListener("change", function () {
    "use strict";
    insertCrustOptions();
});
document.getElementById("newYork").addEventListener("change", function () {
    "use strict";
    insertCrustOptions();
});
document.getElementById("glutenFree").addEventListener("change", function () {
    "use strict";
    insertCrustOptions();
});

//  Show Cheese, Sauce and Topping Options once a Dough Option is Selected
var hideExtras = document.getElementById("extras");
hideExtras.classList.add("extras");

document.getElementById("theCrust").addEventListener("change", function () {
    "use strict";
    var showExtras = document.getElementById("extras");
    showExtras.classList.remove("extras");
});

//  Show Billing Info once Finished Building Pizza is Confirmed and hide Finished Building button
var hideBilling = document.getElementById("billingInfo");
hideBilling.classList.add("hideBilling");

document.getElementById("finishedBuilding").addEventListener("click", function () {
    "use strict";
    var confirmOptions = window.confirm("Are You Sure You're Done?"),
        showBilling = document.getElementById("billingInfo"),
        finishedBuilding = document.getElementById("finishedBuilding");
    if (confirmOptions === true) {
        showBilling.classList.remove("hideBilling");
        finishedBuilding.classList.add("hideme");
    }
});

//  GETTING COSTS
function getCrustPrice() {
    "use strict";
    var crustPrice = 0,
        e = document.getElementById("theCrust"),
        selectCrustPrice = e.options[e.selectedIndex].value;
    crustPrice = parseFloat(selectCrustPrice).toFixed(2);
    return crustPrice;
}

function getCheesePrice() {
    "use strict";
    var cheesePrice = 0,
        theForm = document.forms.pizza,
        selectedCheese = theForm.elements.cheese;
    cheesePrice = cheesePrices[selectedCheese.value];
    return cheesePrice;
}

function getSaucePrice() {
    "use strict";
    var saucePrice = 0,
        theForm = document.forms.pizza,
        selectedSauce = theForm.elements.sauce;
    saucePrice = saucePrices[selectedSauce.value];
    return saucePrice;
}

function getToppingsPrice() {
    "use strict";
    var i = 0,
        toppingPrice = 0,
        checkboxes = document.getElementsByName("topping"),
        selected = [];
    for (i = 0; i < checkboxes.length; i += 1) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
            toppingPrice = selected.length * 0.99;
        }
    }
    return toppingPrice;
}

//  Add it all up
function calculateTotal() {
    "use strict";
    var pizzaPrice = parseFloat(getCheesePrice()) + parseFloat(getSaucePrice()) + parseFloat(getToppingsPrice()) + parseFloat(getCrustPrice()),
        priceField = document.getElementById("totalPrice"),
        roundedTotal = Math.round(pizzaPrice * 100) / 100;
    priceField.style.display = 'block';
    priceField.innerHTML = "Total Pizza Cost: $" + roundedTotal;
}
//  Update total when options change
document.getElementById("theCrust").addEventListener("change", function () {
    "use strict";
    getCrustPrice();
    calculateTotal();
});
document.getElementById("cheese").addEventListener("change", function () {
    "use strict";
    getCheesePrice();
    calculateTotal();
});
document.getElementById("sauce").addEventListener("change", function () {
    "use strict";
    getSaucePrice();
    calculateTotal();
});

document.getElementById("pepperoni").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});
document.getElementById("sausage").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});
document.getElementById("ham").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});
document.getElementById("bacon").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});
document.getElementById("salami").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});
document.getElementById("peppers").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});
document.getElementById("olives").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});
document.getElementById("jalapenos").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});
document.getElementById("mushrooms").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});
document.getElementById("pineapple").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});
document.getElementById("onion").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});

document.getElementById("theCrust").addEventListener("change", function () {
    "use strict";
    calculateTotal();
});

// Copy Location Info to Billing Fields
function copyLocationInfo() {
    "use strict";
    if (document.getElementById('billing').checked) {
        document.pizzaForm.billingName.value = document.pizzaForm.name.value;
        document.pizzaForm.billingStreet.value = document.pizzaForm.street.value;
        document.pizzaForm.billingNumber.value = document.pizzaForm.number.value;
        document.pizzaForm.billingCity.value = document.pizzaForm.city.value;
        document.pizzaForm.billingState.value = document.pizzaForm.state.value;
        document.pizzaForm.billingZip.value = document.pizzaForm.zipcode.value;
    }
}

document.getElementById("billing").addEventListener("change", function () {
    "use strict";
    copyLocationInfo();
});

//  Credit Card Validation
function ccVerify() {
    "use strict";
    var theCard = document.pizzaForm.cardNumber.value,
        cardExp = /[0-9]/;
    if (document.pizzaForm.cardNumber.value === "" || cardExp.test(theCard) === false) {
        window.alert("Please enter a valid CC NUmber");
        document.pizzaForm.cardNumber.focus();
        return false;
    }
    if (document.pizzaForm.cardNumber.value.length === 13 || document.pizzaForm.cardNumber.value.length === 15 || document.pizzaForm.cardNumber.value.length === 16) {
        window.console.log("Valid number of digits");
    } else {
        window.alert("Please enter a valid number of digits");
        document.pizzaForm.cardNumber.focus();
        return false;
    }
}
//  Check CC validation when leaving field
document.getElementById("cardNumber").addEventListener("blur", function () {
    "use strict";
    ccVerify();
});

//  Display Card Type
function cardType() {
    "use strict";
    var list = document.getElementById("cardVendor"),
        cardTemp = document.pizzaForm.cardNumber.value,
        firstNum = cardTemp.charAt(0),
        secondNum = cardTemp.charAt(1),
        whatType = "Invalid",
        newParagraph = document.createElement("p");
    // As long as <div> has a child node, remove it
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    if (firstNum === "4") {
        whatType = "Visa";
    } else if (firstNum === "3" && secondNum === "7") {
        whatType = "American Express";
    } else if ((firstNum === "5" && secondNum === "1") || (firstNum === "5" && secondNum === "2") || (firstNum === "5" && secondNum === "3") || (firstNum === "5" && secondNum === "4") || (firstNum === "5" && secondNum === "5")) {
        whatType = "MasterCard";
    } else {
        whatType = "Invalid";
    }
    if (whatType === "Visa") {
        var parentDiv = document.getElementById("cardVendor"),
            newParagraph = document.createElement("p"),
            tVisa = document.createTextNode("Visa");
        newParagraph.appendChild(tVisa);
        parentDiv.appendChild(newParagraph);
    } else if (whatType === "American Express") {
        var parentDiv = document.getElementById("cardVendor"),
            newParagraph = document.createElement("p"),
            tAmex = document.createTextNode("American Express");
        newParagraph.appendChild(tAmex);
        parentDiv.appendChild(newParagraph);
    } else if (whatType === "MasterCard") {
        var parentDiv = document.getElementById("cardVendor"),
            newParagraph = document.createElement("p"),
            tMc = document.createTextNode("MasterCard");
        newParagraph.appendChild(tMc);
        parentDiv.appendChild(newParagraph);
    } else {
        window.console.log("Not a valid card vendor");
    }
}
//  Check CC type when leaving field
document.getElementById("cardNumber").addEventListener("blur", function () {
    "use strict";
    cardType();
});
//  CC validation function
function ccValidate() {
    "use strict";
    var list = document.getElementById("invalidCard");
    // As long as <div> has a child node, remove it
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    var str = document.pizzaForm.cardNumber.value;
    var res = str.split("");
    res.reverse();
    for (var i = 1; i < res.length; i += 2) {
        res[i] *= 2;
    }
    var doubled = res;
    var joined = doubled.join("");
    var newSplit = joined.split("");
    for (var i = 0, len = newSplit.length; i < len; i++) {
        newSplit[i] = parseInt(newSplit[i], 10);
    }
    var totalAmount = 0;
    for (var x = 0; x < newSplit.length; x++) {
        totalAmount += newSplit[x];
    }
    if (totalAmount % 10 === 0) {
        window.console.log("Valid Card Number");
    } else {
        var parentDiv = document.getElementById("invalidCard");
        var newParagraph = document.createElement("p");
        var t = document.createTextNode("Invalid Card Number");
        newParagraph.appendChild(t);
        parentDiv.appendChild(newParagraph);
        document.pizzaForm.cardNumber.focus();
        return false;
    }
}

//  Check CVC Number
function cvcValidate() {
    "use strict";
    var theCVC = document.pizzaForm.cvc.value,
        cvcExp = /^[0-9]+$/;
    if (document.pizzaForm.cvc.value === "" || document.pizzaForm.cvc.value.length !== 3 || cvcExp.test(theCVC) === false) {
        window.alert("Please provide your CVC number");
        document.pizzaForm.cvc.focus();
        return false;
    }
}
//  Run validate function when leaving CC field
document.getElementById("cardNumber").addEventListener("blur", function () {
    "use strict";
    ccValidate();
});
//  Run validate function when leaving CVC field
document.getElementById("cvc").addEventListener("blur", function () {
    "use strict";
    cvcValidate();
});

//  Initially hide Place Order button
function hidePlaceOrder() {
    "use strict";
    var placeOrder = document.getElementById('placeOrder');
    placeOrder.style.display = 'none';
}
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", hidePlaceOrder, false);
}

//  Check CC expiration and show Place Order button if OK
function checkCardExp() {
    "use strict";
    var d1 = new Date();
    d1.setFullYear(document.pizzaForm.year.value, document.pizzaForm.month.value - 1);
    var d2 = new Date();
    d2.getFullYear;
    if (d1 < d2) {
        window.alert("The Expiration Date can not be in the past");
    } else {
        var placeOrder = document.getElementById('placeOrder');
        placeOrder.style.display = 'block';
    }
}
//  Run checkCardExp function when selecting Expiration Year or Month options
document.getElementById("month").addEventListener("change", function () {
    "use strict";
    checkCardExp();
});
document.getElementById("year").addEventListener("change", function () {
    "use strict";
    checkCardExp();
});

//  Go to Thank you page on form submission
placeOrder.addEventListener("click", function () {
    "use strict";
    window.open("thanks.html", "_self", "toolbar=yes, scrollbars=yes, resizable=yes, width=1050, height=750");
}, false);

//  Credit Card test numbers
//  TEST NUM VISA
//  invalid  4512113014843252
//  valid  4512113014643252

//  TEST NUM MC
//  invalid  5555555557554444 
//  valid  5555555555554444 

//  TEST NUM AMEX
//  invalid  371449635598431 
//  valid  371449635398431