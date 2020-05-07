import React from "react";
import { Select, Popconfirm } from "antd";
import { statusOptions, ngoStatusOptions } from "@components/SelectorPanel/SelectFields";

// search results pagination format helper
export function getPaginationObject(
  pagination,
  onPageChange,
  onShowSizeChange
) {
  return {
    current: pagination.page,
    total: pagination.total,
    onChange: onPageChange,
    pageSize: pagination.limit,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    showSizeChanger: true,
    onShowSizeChange: onShowSizeChange,
  };
}

export function renderStatus(id, row, onResultClose) {
  const [status, setStatus] = React.useState(row.status);
  const [confirm, setConfirm] = React.useState(false);
  console.log(renderStatus.name, "id: ", id, " \nrow: ", row, "\nstatus: ", status, "\nconfirm: ", confirm);

  const handleChange = (value) => {
    console.log(handleChange.name, " value: ", value);
    setStatus(value);
    setConfirm(true);
  };

  return (
    <Popconfirm
      title="Are you sure want to update this request?"
      onConfirm={() => {
        // update status, TODO: spinner
        console.log("call: ", id, "status: ", status);
        onResultClose(id, status);
        setConfirm(false);
      }}
      onCancel={() => {
        // reset dropdown here
        console.log(row.status);
        setStatus(row.status);
        setConfirm(false);
      }}
      okText="Yes"
      cancelText="No"
      visible={confirm}
    >
      <Select
        // size={"default"}
        size={{ width: 100 }}
        placeholder="Actions"
        value={status}
        onChange={handleChange}
        className="lightup red"
      >
        {row.act && row.act === "ngo" ? ngoStatusOptions() : statusOptions()}
      </Select>
    </Popconfirm>
  );
}
