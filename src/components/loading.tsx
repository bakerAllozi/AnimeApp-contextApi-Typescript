import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Loading() {
  return (
    <p className="Lod">
      <FontAwesomeIcon icon={faCircleNotch} />
    </p>
  );
}

export default Loading;
