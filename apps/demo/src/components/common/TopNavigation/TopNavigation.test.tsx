import { render } from '@testing-library/react';

import TopNavigation from './TopNavigation';

describe('TopNavigation', () => {
  it('should have component\'s name as className', () => {
    const { container } = render(<TopNavigation />);
    const div = container.firstChild as HTMLDivElement;
    
    expect(div.className).toEqual('topNavigation');
  });
});
