import React from "react";
import { Link } from "react-router-dom";
import { TitleFunction } from "../../../utils/TitleFunction";
import "./style.css";

export default function ErrorPage() {
  TitleFunction("404");

  return (
    <div className="error">
      <div class="mainbox">
        <div class="err">4</div>
        <i class="far fa-question-circle fa-spin"></i>
        <div class="err2">4</div>
        <div class="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <Link to="/">HOME</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
