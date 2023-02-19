import React from "react";
import Tag, { TagProps } from "./Tag";

type TagsProps = {
  tags: TagProps[];
};

const Tags = (props: TagsProps) => {
  const { tags = [] } = props;
  return (
    <div>
      {tags.map((tag) => (
        <Tag {...tag} />
      ))}
    </div>
  );
};

export default Tags;
