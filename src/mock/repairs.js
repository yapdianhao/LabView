import { faker } from "@faker-js/faker";

export const REPAIRS = [];

const boolArr = ["Yes", "No"];

export function createRandomRepair() {
  return {
    id: faker.datatype.uuid(),
    brand: faker.commerce.productName(),
    model: faker.commerce.productName(),
    serial: faker.datatype.number(),
    problem: faker.random.words(5),
    solution: faker.random.words(5),
    reportedOn: faker.datatype.datetime(),
    recoveredOn: faker.datatype.datetime(),
    downTime: faker.datatype.number(),
    repairVendor: faker.company.companySuffix(),
    firstVisitComplete: boolArr[Math.floor(Math.random() * boolArr.length)],
    costOnParts: faker.datatype.number(),
    costOnLabor: faker.datatype.number(),
    totalCost: faker.datatype.number(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  REPAIRS.push(createRandomRepair());
});
