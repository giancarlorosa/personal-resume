/* eslint-disable no-console */
import { render } from '@testing-library/react';
import MainTitle from '.';

describe('MainTitle', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  afterEach(() => {
    console.error.mockClear();
  });

  it('renders the component', () => {
    const { getByText } = render(<MainTitle>Main Title</MainTitle>);
    const componentTitle = getByText('Main Title');
    expect(componentTitle).toBeTruthy();
  });

  it('verifies if component has a H1 tag', () => {
    const { getByRole } = render(<MainTitle>Component text</MainTitle>);
    const componentTag = getByRole('heading', { level: 1 });
    expect(componentTag).toBeTruthy();
  });

  it('throws an error when not pass children prop', () => {
    render(<MainTitle />);

    expect(console.error).toHaveBeenCalled();
    expect(console.error.mock.calls[0][2]).toContain(
      'The prop `children` is marked as required in `MainTitle`'
    );
  });

  it('throws an error when children prop is not a string', () => {
    render(
      <MainTitle>
        <div>Main Title</div>
      </MainTitle>
    );

    expect(console.error).toHaveBeenCalled();
    expect(console.error.mock.calls[0][2]).toContain(
      'Invalid prop `children` of type `object` supplied to `MainTitle`'
    );
  });

  it('verifies changes in the component style', () => {
    const { container } = render(<MainTitle>Main Title</MainTitle>);

    expect(container.firstChild.className).toMatchSnapshot();
  });
});
