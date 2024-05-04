import { render } from '@testing-library/react';

import ProductCard from './ProductCard';

describe('ProductCard', () => {
  it('should have component\'s name as className', () => {
    const { container } = render(<ProductCard />);
    const div = container.firstChild as HTMLDivElement;
    
    expect(div.className).toEqual('productCard');
  });
});
