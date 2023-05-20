import MainTitle from '.';

export default {
  title: 'Components/Main Title',
  component: MainTitle,
};

export const Implementation = {
  args: {
    children: 'Main Title',
  },
};

export const OneLineBigTitle = {
  render: () => (
    <MainTitle>Very big title text but without any linebreak</MainTitle>
  ),
};

export const MultipleLines = {
  render: () => (
    <div className="max-w-2xl mx-auto">
      <MainTitle>Very big title with multiple lines of text</MainTitle>
    </div>
  ),
};

export const TitleWithParagraph = {
  args: {
    children: 'Title followed by a paragraph',
  },
  render: ({ children }) => (
    <div className="max-w-3xl mx-auto">
      <MainTitle>{children}</MainTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
        odit harum minus autem dolore ab, hic magnam, sunt iste ipsam itaque
        architecto enim perferendis vel molestiae magni velit consequuntur
        veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum, id
        corporis ab, nesciunt asperiores hic doloribus voluptatem sunt quidem
        doloremque saepe delectus velit, cupiditate ut nam officia eum
        dignissimos.
      </p>
    </div>
  ),
};

export const MultipleLinesWithParagraph = {
  render: () => (
    <div className="max-w-3xl mx-auto">
      <MainTitle>
        Very big title with multiple lines of text followed by a paragraph
      </MainTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
        odit harum minus autem dolore ab, hic magnam, sunt iste ipsam itaque
        architecto enim perferendis vel molestiae magni velit consequuntur
        veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum, id
        corporis ab, nesciunt asperiores hic doloribus voluptatem sunt quidem
        doloremque saepe delectus velit, cupiditate ut nam officia eum
        dignissimos.
      </p>
    </div>
  ),
};
