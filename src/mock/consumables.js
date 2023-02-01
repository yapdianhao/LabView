import { faker } from "@faker-js/faker";

export const CONSUMABLES = [];

export function createRandomConsumables() {
  return {
    id: faker.datatype.uuid(),
    brand: faker.commerce.productName(),
    model: faker.commerce.productName(),
    serial: faker.datatype.number(),
    description: faker.commerce.productDescription(),
    partNo: faker.datatype.number(),
    cost: faker.datatype.number(),
    consumedOn: faker.datatype.datetime(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  CONSUMABLES.push(createRandomConsumables());
});
