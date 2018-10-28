import React from "react";
import ContentCard from "./contentCard";
const ContentGallery = ({
  data,
  cardType,
  title,
  posterPath,
  isRenderGallery
}) => {
  return data.map(item => (
    <ContentCard
      key={item.id}
      id={item.id}
      title={item[title]}
      posterPath={item[posterPath]}
      cardType={cardType}
    />
  ));
};

export default ContentGallery;
