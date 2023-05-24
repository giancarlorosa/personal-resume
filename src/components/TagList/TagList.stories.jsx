import TagList, { Tag } from '.';

// TODO: find a way to document a compound component.
export default {
  title: 'Components/Tag List',
  component: TagList,
};

export const Implementation = {
  render: () => (
    <TagList>
      <Tag>Marketing</Tag>
      <Tag>Print</Tag>
      <Tag>Digital</Tag>
      <Tag>Design</Tag>
      <Tag>Social</Tag>
      <Tag>Media</Tag>
      <Tag>Time</Tag>
      <Tag>Management</Tag>
      <Tag>Communication</Tag>
      <Tag>Problem-Solving</Tag>
      <Tag>Social</Tag>
      <Tag>Networking</Tag>
      <Tag>Flexibility</Tag>
    </TagList>
  ),
};

export const MultipleLines = {
  render: () => (
    <div className="max-w-lg">
      <TagList>
        <Tag>Marketing</Tag>
        <Tag>Print</Tag>
        <Tag>Digital</Tag>
        <Tag>Design</Tag>
        <Tag>Social</Tag>
        <Tag>Media</Tag>
        <Tag>Time</Tag>
        <Tag>Management</Tag>
        <Tag>Communication</Tag>
        <Tag>Problem-Solving</Tag>
        <Tag>Social</Tag>
        <Tag>Networking</Tag>
        <Tag>Flexibility</Tag>
      </TagList>
    </div>
  ),
};
