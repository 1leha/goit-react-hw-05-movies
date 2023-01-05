import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FilmLinkStyled = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.m};

  color: ${p => p.theme.colors.link};

  &.active {
    color: ${p => p.theme.colors.active};
  }

  &:hover:not(.active) {
    color: ${p => p.theme.colors.hovered};
  }

  transition: ${p => p.theme.transitions};
`;

export const FilmItemStyled = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;
