import * as React from "react";
import { cn } from "@bem-react/classname";

import { MenuItem } from "../Item";

export interface IMenuListProps {
  active: string;
  list: { id: string; text: string }[];
}

const cnMenu = cn("Menu");

export const MenuList: React.SFC<IMenuListProps> = props => {
  return (
    <ul className={cnMenu("List")}>
      {props.list.map((item, index) => (
        <MenuItem
          className={cnMenu("Item")}
          key={btoa(index.toString() + item.id)}
          active={props.active === item.id}
          id={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};
