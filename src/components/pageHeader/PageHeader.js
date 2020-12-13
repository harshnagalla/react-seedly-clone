import React from "react";
import style from "./PageHeader.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import classNames from "classnames";

function PageHeader() {
  return (
    <div className={style.header}>
      <img
        className={style.header__logo}
        src="https://i1.wp.com/kelvestor.com/wp-content/uploads/2019/12/seedly-logo.png?fit=1024%2C351ssl=1"
      />
      <div className={style.header__nav}>
        <span
          className={classNames(style.header__option, style.header_optionGreen)}
        >
          Community
        </span>
        <span className={style.header__option}>Content</span>
        <span className={style.header__option}> Banking</span>
        <span className={style.header__option}> Cards</span>
        <span className={style.header__option}> Investments</span>
        <span className={style.header__option}> {"Utility & Bills"}</span>
        <span className={style.header__option}> Insurance</span>
      </div>
      <div className={style.header__search}>
        <IconButton
          type="submit"
          className={style.header__searchIcon}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          className={style.header__searchInput}
          placeholder="Find product reviews, quesetions, or articles "
          inputProps={{ "aria-label": "search google maps" }}
        />
      </div>
      <button className={style.header__joinButton}>Join</button>
    </div>
  );
}

export default PageHeader;

// <div className={style.header__search}>
//         <SearchIcon className={style.header__searchIcon} />
//         <input
//           placeholder={"Find product reviews, quesetions, or articles "}
//           className={style.header__searchInput}
//           type="text"
//         />
//       </div>
