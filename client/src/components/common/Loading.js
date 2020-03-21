import React from 'react'
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

export default function Loading() {
    const override = css
        `
         display: inline-block;
         margin: 20% auto;
         border-color: red;
        `
         ;
    return (
        <div className="sweet-loading">
        <HashLoader
          css={override}
          size={100}
          //size={"150px"} this also works
          color={"#a8e063"}
        />
      </div>
    )
}
