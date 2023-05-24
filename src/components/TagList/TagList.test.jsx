/* eslint-disable no-console */
import { render } from '@testing-library/react';
import TagList, { Tag } from '.';

describe('Section Title', () => {
  beforeAll(() => jest.spyOn(console, 'error').mockImplementation(() => {}));
  afterAll(() => console.error.mockRestore());
  afterEach(() => console.error.mockClear());

  it('should render the component', () => {
    const { getByText } = render(
      <TagList>
        <Tag>Tag Item 1</Tag>
        <Tag>Tag Item 2</Tag>
        <Tag>Tag Item 3</Tag>
      </TagList>
    );
    const tagItemOne = getByText('Tag Item 1');
    const tagItemTwo = getByText('Tag Item 2');
    const tagItemThree = getByText('Tag Item 3');

    expect(tagItemOne).toBeTruthy();
    expect(tagItemTwo).toBeTruthy();
    expect(tagItemThree).toBeTruthy();
  });

  it('should contain ul and li tag', () => {
    const { getByRole, getAllByRole } = render(
      <TagList>
        <Tag>Tag Item 1</Tag>
        <Tag>Tag Item 2</Tag>
        <Tag>Tag Item 3</Tag>
      </TagList>
    );

    const tagList = getByRole('list');
    const tagItems = getAllByRole('listitem');

    expect(tagList).toBeTruthy();
    expect(tagItems).toBeTruthy();
    expect(tagList.tagName).toBe('UL');
    expect(tagItems[0].tagName).toBe('LI');
    expect(tagItems.length).toBe(3);
  });

  it.each([
    {
      errorLabel: 'TagList children prop is not set',
      expectText: 'The prop `children` is marked as required in `TagList`',
      tags: [],
    },
    {
      errorLabel: 'Tag children prop is not set',
      expectText: 'The prop `children` is marked as required in `Tag`',
      tags: [undefined],
    },
    {
      errorLabel: 'Tag children prop is not a string',
      expectText: 'Invalid prop `children` of type `object` supplied to `Tag`',
      tags: [<div>Tag Item</div>],
    },
  ])('should throw an error when $errorLabel', ({ expectText, tags }) => {
    if (tags.length) {
      render(
        <TagList>
          {tags.length > 0 && tags.map((tag) => <Tag>{tag}</Tag>)}
        </TagList>
      );
    } else {
      render(<TagList />);
    }

    expect(console.error).toHaveBeenCalled();
    expect(console.error.mock.calls[0][2]).toContain(expectText);
  });

  it('should verify changes on Tag component styles', () => {
    const { getByText } = render(
      <TagList>
        <Tag>Tag Item 1</Tag>
      </TagList>
    );

    const tagItem = getByText('Tag Item 1');
    expect(tagItem.className).toMatchSnapshot();
  });
});
