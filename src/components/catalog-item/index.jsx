import React from "react";
import styled from "styled-components";

import styles from "./styles.module.scss";

const StyledImgWrapper = styled.div`
  width: ${(props) => props.width}px;
  height: 35px;
  margin-bottom: 5px;
`;

const StyledSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image}) center center / contain no-repeat;
`;

const CatalogItem = (props) => {
  const { image, title, width } = props;
  return (
    <div className={styles["item-wrap"]}>
      <StyledImgWrapper width={width}>
        <StyledSvg className={styles["styled-svg"]} image={image} alt={title} />
      </StyledImgWrapper>
      <span>{title}</span>
    </div>
  );
};

export default CatalogItem;
