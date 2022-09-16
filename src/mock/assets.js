import { faker } from '@faker-js/faker';

export const ASSETS = [];

const levelArr = ['Critical', 'Standard']
const qualificationArr = ['A', 'B', 'C']
const boolArr = ['Yes', 'No']
const intervalArr = ['12-monthly', '6-monthly', '3-monthly']

export function createRandomAsset() {
    return {
        id: faker.datatype.uuid(),
        brand: faker.commerce.productName(),
        model: faker.commerce.productName(),
        serial: faker.datatype.number(),
        age: faker.datatype.number({ min: 0, max: 10}),
        activationDate: faker.datatype.datetime(),
        level: levelArr[Math.floor(Math.random() * levelArr.length)],
        pmCalVendor: faker.company.companySuffix(),
        repairVendor: faker.company.companySuffix(),
        description: faker.commerce.productDescription(),
        usp1058: qualificationArr[Math.floor(Math.random() * qualificationArr.length)],
        pm: intervalArr[Math.floor(Math.random() * intervalArr.length)],
        cal: intervalArr[Math.floor(Math.random() * intervalArr.length)],
        oq: boolArr[Math.floor(Math.random() * boolArr.length)],
        iso17025: boolArr[Math.floor(Math.random() * boolArr.length)],
        labourEntitled: boolArr[Math.floor(Math.random() * boolArr.length)],
        partsEntitled: boolArr[Math.floor(Math.random() * boolArr.length)],
        maintenanceCost: faker.commerce.price(),
        contractEndDate: faker.datatype.datetime(),
    }
}

Array.from({ length: 100 }).forEach(() => {
    ASSETS.push(createRandomAsset());
})