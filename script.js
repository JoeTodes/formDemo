var services = [
  ["Landscape Maintenance (pruning / weed removal)", 10, "/ Hr", 0],
  [
    "Treatment & fertilization",
    0.003,
    "/ Square Foot (typically 3x / year)",
    0,
  ],
  [
    "Lawn Thatching / clean up",
    0.004,
    "/ Square Foot (typically done weekly)",
    0,
  ],
  ["Grass cutting", 0.004, "/ Square Foot (typically 1x / year)", 0],
  ["Mulching", 0.001, "/ Square Foot", 0],
  ["Seeding", 0.007, "/ Square Foot", 0],
  ["Aeration", 0.003, "/ Square Foot (typically 1x / year)", 0],
  ["Tree-health inspections", 5, "/ Tree", 0],
  ["Tree trimming", 40, "/ Tree", 0],
  ["Shrub pruning", 10, "/ Hr", 0],
  ["Weed management", 10, "/ Hr", 0],
  ["Tree removal", 40, "/ Hr", 0],
  ["Landscape Construction", 40, "/ Hr + Materials", 0],
  ["Decking & fencing", 40, "/ Hr + Materials", 0],
  ["Retaining walls", 40, "/ Hr + Materials", 0],
  ["Brick paving & pavers", 40, "/ Hr + Materials", 0],
  ["Patios & pergolas", 40, "/ Hr + Materials", 0],
  ["Water features & ponds", 50, "/ Hr + Materials", 0],
  ["Planting trees & shrubs", 40, "/ Hr + Materials", 0],
  ["Artificial grass / Astroturf", 40, "/ Hr + Materials", 0],
  ["Outdoor lighting / heating & firepits", 40, "/ Hr + Materials", 0],
  ["Lawn / sod installation", 20, "/ Hr + Materials", 0],
];

services.forEach((service) => {
  var row = document.createElement("div");
  row.style.display = "flex";
  row.style.justifyContent = "space-between";

  var name = document.createElement("span");
  name.innerHTML = service[0];
  row.appendChild(name);

  var priceBlock = document.createElement("span");
  var price = document.createElement("span");
  price.innerHTML = service[1];
  priceBlock.appendChild(price);

  var unit = document.createElement("span");
  unit.innerHTML = service[2];
  priceBlock.appendChild(unit);

  row.appendChild(priceBlock);

  var input = document.createElement("input");
  input.type = "number";
  input.oninput = function () {
    service[3] = input.value;
    recalculateTotal();
  };
  row.appendChild(input);

  document.getElementById("form").appendChild(row);
});

function recalculateTotal() {
  var total = 0;
  services.forEach((service) => {
    total += parseInt(service[3]) * service[1];
  });
  document.getElementById("total").innerHTML = total.toFixed(2);
}
