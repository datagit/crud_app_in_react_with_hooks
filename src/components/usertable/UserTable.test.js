import React from 'react';
import { render } from '@testing-library/react';
import UserTable from './UserTable';
var faker = require('faker');

test('renders app name', () => {
    const usersData = [
        { id: 1, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 2, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 3, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 4, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 5, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 6, name: faker.name.findName(), username: faker.internet.userName() },
        { id: 7, name: faker.name.findName(), username: faker.internet.userName() },
    ];

    const { getByText } = render(<UserTable users={usersData} />);
    const linkElement = getByText(/UserName/i);
    expect(linkElement).toBeInTheDocument();
});
