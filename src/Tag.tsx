import React from "react";

export type TagProps = {
  img?: string | null;
  emoji?: string | null;
};

function Tag(props: TagProps) {
  const { img, emoji } = props;
  return (
    <div>
      {img && <img src={img} />}
      {emoji}
    </div>
  );
}

export default Tag;
