import { render } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    const { getByText } = render(<Home />);
    const button = getByText(
      'Find in-depth information about Next.js features and API.'
    );
    expect(button).toBeTruthy();
  });
});
