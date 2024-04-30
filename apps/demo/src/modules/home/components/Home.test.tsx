import { render } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('should have "Home" as textContent', () => {
    const { container } = render(<Home />);
    const div = container.firstChild as HTMLDivElement;

    expect(div.textContent).toEqual('Hme');
  });
});
