import { render } from '@testing-library/react';
import Description from './componenetes/comp5/comp5';

test('renders description text with dynamic name', () => {
  const { getByText } = render(<Description />);
  const descriptionElement = getByText(/Somos un vivero que vende cactus/i);
  expect(descriptionElement).toBeInTheDocument();
});

//Este test evalua si el texto descrito se encuentra en el componente correctamente