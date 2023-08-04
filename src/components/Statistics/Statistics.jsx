import React from 'react';
import PropTypes from 'prop-types';
import { Container, List, StatLi, Title } from './StatStyled';

export function Statistics({ data, title }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <List>
        {data.map(object => {
          return (
            <StatLi key={object.id}>
              <span>{object.label}</span>
              <span>{object.percentage}%</span>
            </StatLi>
          );
        })}
      </List>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
