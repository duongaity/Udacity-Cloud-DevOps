import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import store from "./redux/store";
import { Provider } from "react-redux";

test('renders title', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(getByText('My Tasks')).toBeInTheDocument()
});
