import SectionTitle from '.';

export default {
  title: 'Components/Section Title',
  component: SectionTitle,
};

const defaultArgTypes = {
  children: { control: 'text' },
  fullWidth: { control: 'boolean' },
};

export const Implementation = {
  args: {
    children: 'Section Title',
    fullWidth: false,
  },
  argTypes: defaultArgTypes,
};

export const MultipleLines = {
  args: {
    children: 'Section Title With Multiple Lines To Test the Line Height',
    fullWidth: false,
  },
  argTypes: defaultArgTypes,
  render: ({ children, fullWidth }) => (
    <div className="max-w-lg">
      <SectionTitle fullWidth={fullWidth}>{children}</SectionTitle>
    </div>
  ),
};

export const WithParagraph = {
  args: {
    children: 'Followed by a paragraph',
    fullWidth: false,
  },
  argTypes: defaultArgTypes,
  render: ({ children, fullWidth }) => (
    <div className="max-w-xl">
      <SectionTitle fullWidth={fullWidth}>{children}</SectionTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nihil
        odio adipisci quaerat, dicta autem quisquam consequatur! Doloremque
        quasi saepe alias illum voluptate autem aspernatur vero. Voluptas
        asperiores quibusdam officia?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
        doloremque eligendi porro est pariatur placeat dolores saepe quidem
        voluptatem eum provident velit quo illum mollitia nam necessitatibus,
        ducimus quos cum?
      </p>
    </div>
  ),
};
