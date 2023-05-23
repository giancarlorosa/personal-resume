/* eslint-disable no-console */
import { render } from '@testing-library/react';
// TODO: Check why toHaveClass is imported but not recognized.
// eslint-disable-next-line no-unused-vars
import { toHaveClass } from '@testing-library/jest-dom';
import SectionTitle from '.';

describe('Section Title', () => {
  beforeAll(() => jest.spyOn(console, 'error').mockImplementation(() => {}));
  afterAll(() => console.error.mockRestore());
  afterEach(() => console.error.mockClear());

  it('should render the component', () => {
    const { getByText } = render(<SectionTitle>Section Title</SectionTitle>);
    const componentTitle = getByText('Section Title');
    expect(componentTitle).toBeTruthy();
  });

  it('should verify if component has a H2 tag', () => {
    const { getByRole } = render(<SectionTitle>Section Title</SectionTitle>);
    const componentTag = getByRole('heading', { level: 2 });
    expect(componentTag).toBeTruthy();
  });

  it('should have by default the display inline-block class when rendering the component', () => {
    const { getByText } = render(<SectionTitle>Section Title</SectionTitle>);
    const componentTitle = getByText('Section Title');
    expect(componentTitle).toHaveClass('inline-block');
  });

  it('should not have display inline-block class if fullWidth parameter is set', () => {
    const { getByText } = render(
      <SectionTitle fullWidth>Section Title</SectionTitle>
    );

    const componentTitle = getByText('Section Title');
    expect(componentTitle).not.toHaveClass('inline-block');
  });

  it.each([
    {
      errorLabel: 'children prop is not set',
      expectText: 'The prop `children` is marked as required in `SectionTitle`',
    },
    {
      children: <div>Section Title</div>,
      errorLabel: 'children prop is not a string',
      expectText:
        'Invalid prop `children` of type `object` supplied to `SectionTitle`',
    },
    {
      children: 'Section Title',
      fullWidth: 'full',
      errorLabel: 'fullWidth prop is not a boolean',
      expectText:
        'Invalid prop `fullWidth` of type `string` supplied to `SectionTitle`',
    },
  ])(
    'should throw an error when $errorLabel',
    ({ children, fullWidth, expectText }) => {
      render(<SectionTitle fullWidth={fullWidth}>{children}</SectionTitle>);
      expect(console.error).toHaveBeenCalled();
      expect(console.error.mock.calls[0][2]).toContain(expectText);
    }
  );
});
