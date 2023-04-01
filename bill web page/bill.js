function calculate_total() {

    var product_cost = document.getElementById("product_cost").value;

    var product_quantity = document.getElementById("product_quantity").value;

    var final_cost = product_cost * product_quantity;

    document.getElementById("total").innerHTML = final_cost;

    console.log(final_cost);
}