import { render } from '@testing-library/react';
import Carticon from './componenetes/comp4/comp4';

test('renders cart icon image', () => {
  const { getByAltText } = render(<Carticon />);
  const cartIconImage = getByAltText('este');
  expect(cartIconImage).toBeInTheDocument();
});

//Este test evalua si la descripcion de una imagen se encuentra en el componente correctamente