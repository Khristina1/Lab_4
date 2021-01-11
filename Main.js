let weights = [];
let data = [];

let maxValues = [];
let sumValues = [];
let maxOfSumValues = 0;

const showResults = () => {
  parseData();
  calculateWeights();
  findMaxValues();
  sumObjectValues();
  findMaxOfSumValues();
  pasteTableToHTML();
};

const parseData = () => {
  for (let i = 1; i < 6; i++) {
    weights.push(parseFloat(document.getElementById(`weight_${i}`).value));

    data.push({
      maxRange: parseFloat(document.getElementById(`input${i}_1`).value),
      capacity: parseFloat(document.getElementById(`input${i}_2`).value),
      consumption: parseFloat(document.getElementById(`input${i}_3`).value),
      maxSpeed: parseFloat(document.getElementById(`input${i}_4`).value),
      priceOfUse: parseFloat(document.getElementById(`input${i}_5`).value),
    });
  }
};

const calculateWeights = () => {
  for (let i = 0; i < data.length; i++) {
    data[i].maxRange = (data[i].maxRange * weights[0]).toFixed(2);
    data[i].capacity = (data[i].capacity * weights[1]).toFixed(2);
    data[i].consumption = (data[i].consumption * weights[2]).toFixed(2);
    data[i].maxSpeed = (data[i].maxSpeed * weights[3]).toFixed(2);
    data[i].priceOfUse = (data[i].priceOfUse * weights[4]).toFixed(2);
  }
};

const findMaxValues = () => {
  let maximumRangeVal = -1;
  let maxCapacity = -1;
  let maxConsumption = -1;
  let maxSpeedVal = -1;
  let maxPriceOfUse = -1;

  for (let i = 0; i < data.length; i++) {
    if (data[i].maxRange > maximumRangeVal) maximumRangeVal = data[i].maxRange;
    if (data[i].capacity > maxCapacity) maxCapacity = data[i].capacity;
    if (data[i].consumption > maxConsumption) maxConsumption = data[i].consumption;
    if (data[i].maxSpeed > maxSpeedVal) maxSpeedVal = data[i].maxSpeed;
    if (data[i].priceOfUse > maxPriceOfUse) maxPriceOfUse = data[i].priceOfUse;
  }

  maxValues.push(maximumRangeVal);
  maxValues.push(maxCapacity);
  maxValues.push(maxConsumption);
  maxValues.push(maxSpeedVal);
  maxValues.push(maxPriceOfUse);
};

const sumObjectValues = () => {
  for (let i = 0; i < data.length; i++) {
    let sum = 0;

    sum +=
      Number(data[i].maxRange) +
      Number(data[i].capacity) +
      Number(data[i].consumption) +
      Number(data[i].maxSpeed) +
      Number(data[i].priceOfUse);

    sumValues.push(sum.toFixed(2));
  }
};

const findMaxOfSumValues = () => {
  let max = 0;
  for (let i = 0; i < sumValues.length; i++) {
    if (sumValues[i] > max) max = sumValues[i];
  }
  maxOfSumValues = max;
};

const pasteTableToHTML = () => {
  let html = `
     <div class="container-fluid">
     <div style="margin: 0 auto">
            <div class="input-group input-group-lg">
              <p class="form-control col-1 text-center alert-secondary">№</p>
              <p class="form-control col-1 text-center alert-secondary">Вага</p>
              <p class="form-control col-1 text-center alert-secondary">А</p>
              <p class="form-control col-1 text-center alert-secondary">Б</p>
              <p class="form-control col-1 text-center alert-secondary">В</p>
              <p class="form-control col-1 text-center alert-secondary">Г</p>
              <p class="form-control col-1 text-center alert-secondary">Д</p>
              <p class="form-control col-1 text-center alert-secondary">E</p>
            </div>

            <div class="input-group input-group-lg">
              <p class="form-control col-1 text-center alert-secondary">1</p>
              <p class="form-control col-1 text-center alert-secondary">${
                weights[0]
              }</p>
              <p class="form-control col-1 text-center">${data[0].maxRange}</p>
              <p class="form-control col-1 text-center">${data[1].maxRange}</p>
              <p class="form-control col-1 text-center">${data[2].maxRange}</p>
              <p class="form-control col-1 text-center">${data[3].maxRange}</p>
              <p class="form-control col-1 text-center">${data[4].maxRange}</p>
              <p class="form-control col-1 text-center">${maxValues[0]}</p>
            </div>

            <div class="input-group input-group-lg">
              <p class="form-control col-1 text-center alert-secondary">2</p>
              <p class="form-control col-1 text-center alert-secondary">${
                weights[1]
              }</p>
              <p class="form-control col-1 text-center">${
                data[0].capacity
              }</p>
              <p class="form-control col-1 text-center">${
                data[1].capacity
              }</p>
              <p class="form-control col-1 text-center">${
                data[2].capacity
              }</p>
              <p class="form-control col-1 text-center">${
                data[3].capacity
              }</p>
              <p class="form-control col-1 text-center">${
                data[4].capacity
              }</p>
              <p class="form-control col-1 text-center">${maxValues[1]}</p>
            </div>

            <div class="input-group input-group-lg">
              <p class="form-control col-1 text-center alert-secondary">3</p>
              <p class="form-control col-1 text-center alert-secondary">${
                weights[2]
              }</p>
              <p class="form-control col-1 text-center">${
                data[0].consumption
              }</p>
              <p class="form-control col-1 text-center">${
                data[1].consumption
              }</p>
              <p class="form-control col-1 text-center">${
                data[2].consumption
              }</p>
              <p class="form-control col-1 text-center">${
                data[3].consumption
              }</p>
              <p class="form-control col-1 text-center">${
                data[4].consumption
              }</p>
              <p class="form-control col-1 text-center">${maxValues[2]}</p>
            </div>

            <div class="input-group input-group-lg">
              <p class="form-control col-1 text-center alert-secondary">4</p>
              <p class="form-control col-1 text-center alert-secondary">${
                weights[3]
              }</p>
              <p class="form-control col-1 text-center">${
                data[0].maxSpeed
              }</p>
              <p class="form-control col-1 text-center">${
                data[1].maxSpeed
              }</p>
              <p class="form-control col-1 text-center">${
                data[2].maxSpeed
              }</p>
              <p class="form-control col-1 text-center">${
                data[3].maxSpeed
              }</p>
              <p class="form-control col-1 text-center">${
                data[4].maxSpeed
              }</p>
              <p class="form-control col-1 text-center">${maxValues[3]}</p>
            </div>

            <div class="input-group input-group-lg">
              <p class="form-control col-1 text-center alert-secondary">5</p>
              <p class="form-control col-1 text-center alert-secondary">${
                weights[4]
              }</p>
              <p class="form-control col-1 text-center">${data[0].priceOfUse}</p>
              <p class="form-control col-1 text-center">${data[1].priceOfUse}</p>
              <p class="form-control col-1 text-center">${data[2].priceOfUse}</p>
              <p class="form-control col-1 text-center">${data[3].priceOfUse}</p>
              <p class="form-control col-1 text-center">${data[4].priceOfUse}</p>
              <p class="form-control col-1 text-center">${maxValues[4]}</p>
            </div>

            <div class="input-group input-group-lg">
              <p class="form-control col-1 text-center alert-secondary">Сума</p>
              <p class="form-control col-1 text-center alert-secondary">1</p>
              <p class="form-control col-1 text-center ${
                maxOfSumValues == sumValues[0] ? "alert-success" : ""
              }">${sumValues[0]}</p>
              <p class="form-control col-1 text-center  ${
                maxOfSumValues == sumValues[1] ? "alert-success" : ""
              }">${sumValues[1]}</p>
              <p class="form-control col-1 text-center  ${
                maxOfSumValues == sumValues[2] ? "alert-success" : ""
              }">${sumValues[2]}</p>
              <p class="form-control col-1 text-center  ${
                maxOfSumValues == sumValues[3] ? "alert-success" : ""
              }">${sumValues[3]}</p>
              <p class="form-control col-1 text-center  ${
                maxOfSumValues == sumValues[4] ? "alert-success" : ""
              }">${sumValues[4]}</p>
              <p class="form-control col-1 text-center"></p>
            </div>
            </div>
      </div>
      `;

  document.getElementById(`tableContainer`).innerHTML = html;
};
