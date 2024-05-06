import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Separator = styled.span`
  margin: 0 5px;
`;

const Breadcrumb = ({ items }) => {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link to={item.link}>{item.label}</Link>
          {index < items.length - 1 && <Separator>/</Separator>}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
