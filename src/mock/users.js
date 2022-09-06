import { faker } from '@faker-js/faker';

export const USERS = [];

export function createRandomUser() {
    return {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        title: 'Manager',
        phone: faker.phone.number('8#######'),
        gender: 'M',
        email: faker.internet.email(),
        accessLevel: 'Manager',
        lastLogin: faker.date.between(),
    }
}

Array.from({ length: 50 }).forEach(() => {
    USERS.push(createRandomUser());
});