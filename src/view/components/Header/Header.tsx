import * as React from "react";
import { cn } from "@bem-react/classname";

import { HeaderLeft } from "./Left/Header-Left";
import { HeaderRight } from "./Right/Header-Right";

import "../Container/Container.css";
import "./Header.css";

const cnHeader = cn("Header");

export const Header: React.SFC = () => (
  <header className={cnHeader(null, ["Container"])}>
    <HeaderLeft />
    <HeaderRight />
  </header>
);

// header.header.container
//+ .header__left
//+ 	a(href="#").logo
//+ .header__right
// 	div#hamburger.hamburger
// 		a(href="#").hamburger__link Меню
// 			.hamburger__line
// 	nav.menu
// 		ul.menu__list
// 			-
// 				var menuLinks = [
// 					[ 'main',  		'Сводка' ],
// 					[ 'dump1', 		'Устройства' ],
// 					[ 'dump2',    'Сценарии' ],
// 					[ 'video',  	'Видеонаблюдение' ],
// 					[ 'pointer',  'Пылесос' ],
// 					]
// 			each item,index in menuLinks
// 				- var isActive = (index === activeIndex);
// 				li(class = isActive? 'menu__item menu__item--active': 'menu__item')
// 					a(href='#' id=`${item[0]}` class='menu__link') #{item[1]}
