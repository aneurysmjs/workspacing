import { render } from '@testing-library/react';

import Navigation from './Navigation';

describe('Navigation', () => {
  it('should have component\'s name as className', () => {
    const { container } = render(<Navigation />);
    const div = container.firstChild as HTMLDivElement;
    
    expect(div.className).toEqual('navigation');
  });
});
