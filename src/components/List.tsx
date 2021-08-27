import React from "react";

interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

const List: React.FC<IProps> = ({people}) => {
  return <div>"I am a list"</div>;
}

export default List;