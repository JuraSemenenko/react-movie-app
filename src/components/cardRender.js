import React from "react";
import ContentCard from "./contentCard";
import ContentGallery from "./contentGallery";
import ContentList from "./contentList";
const CardRender = ({ data, cardType, posterPath, title, isRenderGallery }) => {
  return (
    <div className="d-flex flex-wrap">
      {!isRenderGallery ? (
        <ContentList
          data={data}
          title={title}
          posterPath={posterPath}
          cardType={cardType}
          vote="popularity"
        />
      ) : (
        <ContentGallery
          data={data}
          title={title}
          posterPath={posterPath}
          cardType={cardType}
        />
      )}
    </div>
  );
};

export default CardRender;
