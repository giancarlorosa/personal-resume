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

  it('should render the component', () => {
    const { getByText } = render(<MainTitle>Main Title</MainTitle>);
    const componentTitle = getByText('Main Title');
    expect(componentTitle).toBeTruthy();
  });

  it('should verify if component has a H1 tag', () => {
    const { getByRole } = render(<MainTitle>Component text</MainTitle>);
    const componentTag = getByRole('heading', { level: 1 });
    expect(componentTag).toBeTruthy();
  });

  it.each([
    {
      errorLabel: 'not pass children prop',
      expectText: 'The prop `children` is marked as required in `MainTitle`',
    },
    {
      children: <div>Main Title</div>,
      errorLabel: 'children prop is not a string',
      expectText:
        'Invalid prop `children` of type `object` supplied to `MainTitle`',
    },
  ])('should throw an error when $errorLabel', ({ children, expectText }) => {
    render(<MainTitle>{children}</MainTitle>);
    expect(console.error).toHaveBeenCalled();
    expect(console.error.mock.calls[0][2]).toContain(expectText);
  });

  it('should verify changes in the component style', () => {
    const { container } = render(<MainTitle>Main Title</MainTitle>);

    expect(container.firstChild.className).toMatchSnapshot();
  });
});
