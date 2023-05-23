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
