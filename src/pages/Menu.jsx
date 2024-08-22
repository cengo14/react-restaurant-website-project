import React from "react";
import MenuItem from "../component/MenuItem";
import { MenuList } from "./../helper/MenuList";

const Menu = () => {
  return (
    <div className="menu p-4">
      <h1 className="menuTitle p-3 mx-auto">Menümüz</h1>
      <div className="menuList">
        {MenuList.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
