import { faker } from '@faker-js/faker';

export const UTILS = [];

export function createRandomUtil() {
    return {
        id: faker.datatype.uuid(),
        brand: faker.commerce.productName(),
        model: faker.commerce.productName(),
        serial: faker.datatype.number(),
        from: faker.datatype.datetime(),
        to: faker.datatype.datetime(),
        totalHours: faker.datatype.number(),
        remarks: faker.commerce.productDescription(),
    }
}

Array.from({ length: 50 }).forEach(() => {
    UTILS.push(createRandomUtil());
});