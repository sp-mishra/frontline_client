import React from "react";
import * as styles from "./styles.module.less";
import { Spacer } from "@components/Utils";

import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ModeSelect, RegionSelect } from "./SelectFields";

function SelectorPanel({
  // customer props
  mode,
  modes,
  onModeChange,

  // product props
  region,
  regions,
  onRegionChange,

  onSubmit
}) {
  console.log("sp", arguments[0]);
  return (
    <div>
      <div className={styles.selectorCo}>
        <span>Type</span>
        <ModeSelect mode={mode} modes={modes} onModeChange={onModeChange} />
      </div>

      <Spacer />

      <div className={styles.selectorCo}>
        <span>Region</span>
        <RegionSelect
          region={region}
          regions={regions}
          onRegionChange={onRegionChange}
        />
      </div>

      <Spacer />

      <div className={styles.selectorCo}>
        <span>&nbsp;</span>
        <Button onClick={onSubmit} icon={<SearchOutlined />}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default SelectorPanel;
