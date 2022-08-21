import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreditInputUI from './CreditInputUI';

const onChange = jest.fn();

describe('CreditInputUI component', () => {
    it('Сomponent renders', () => {
        render(<CreditInputUI inscription='руб.'/>);
      
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByText('руб.')).toBeInTheDocument();
    });

    it('Сomponent snapshot', () => {
        const input = render(<CreditInputUI  />);

        expect(input).toMatchSnapshot();
    });

    it('onChange works', () => {
        render(<CreditInputUI onChange={onChange} />);

        userEvent.type(screen.getByRole('textbox'), '5000');

        expect(onChange).toHaveBeenCalledTimes(4);
    });
});
