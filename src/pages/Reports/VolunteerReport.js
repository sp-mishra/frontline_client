import React from "react";
import SelectorPanel from "@components/SelectorPanel";
import { VolunteerSearchResults } from "@components/SearchResults";
import { Empty } from "antd";
import { connecter } from "@store/report";
import options from "@utils/Options";
import { formatSearchQuery } from "../utils";
import ExportButton from "@components/Misc/ExportButton";

const ACT = "volunteer";

function VolunteerReport({
  result,
  mode,
  setMode,
  region,
  setRegion,
  search,
  service,
  setService,
  pagination,
  dateRange,
  setDateRange,
  exportCSV,
}) {
  function onModeChange(value) {
    setMode(value);
  }

  const onDateRangeChange = (value) => {
    value ? setDateRange(value) : setDateRange([null, null]);
  };

  function onRegionChange(value) {
    setRegion(value);
  }

  function onServiceChange(value) {
    setService(value);
  }
  
  function formatParams() {
    const query = formatSearchQuery({ mode, region, service });
    query.act = ACT; // fixed type field
    return query;
  }

  function triggerSearch({ page = 1, limit = pagination.limit }) {
    search({
      query: formatParams(),
      page,
      limit,
    });
  }

  // handle search and pagination actions
  function handleSearch() {
    triggerSearch({}); // need empty braces here
  }

  function handlePageChange(page = 1) {
    triggerSearch({ page });
  }

  function handleSizeChange(page, limit) {
    triggerSearch({ limit });
  }

  function handleExport() {
    exportCSV({
      query: formatParams(),
    });
  }

  const searchProps = {
    mode,
    modes: options.other.modeOptions,
    onModeChange,

    region,
    regions: options.regions,
    onRegionChange,

    service,
    services: options.services.servicesTree,
    onServiceChange,

    dateRange: dateRange,
    onDateRangeChange,

    onSubmit: handleSearch,
  };
  console.log(VolunteerReport.name, " searchProps: ", searchProps);
  return (
    <div style={{ textAlign: "left" }}>
      <h2>Volunteer (Reports)</h2>
      <div>
        <SelectorPanel {...searchProps} />
      </div>
      {result && result.length > 0 ? (
        <div style={{ margin: 30 }}>
          <VolunteerSearchResults
            result={result}
            pagination={pagination}
            onPageChange={handlePageChange}
            onShowSizeChange={handleSizeChange}
          />
          <ExportButton onClick={handleExport} />
        </div>
      ) : (
        <div style={{ marginTop: 100 }}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      )}
    </div>
  );
}

export default connecter(VolunteerReport);
