import PropTypes from 'prop-types';
import {
  Section,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
export function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ label, id, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
