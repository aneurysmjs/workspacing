import { render } from '@testing-library/react';

import MobileMenu from './MobileMenu';

describe('MobileMenu', () => {
  it("should have component's name as className", () => {
    const { container } = render(<MobileMenu />);
    const div = container.firstChild as HTMLDivElement;

    expect(div.className).toEqual('mobileMenu');
  });
});
