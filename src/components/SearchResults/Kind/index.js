import React from "react";
import { Table } from "antd";
import Details from "./Details";
import { getPaginationObject, renderStatus } from "../utils";

function SearchResults({
  result,
  pagination,
  onPageChange,
  onShowSizeChange,
  onResultClose,
}) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "mode",
    },
    {
      title: "Region",
      dataIndex: "region",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Submitted At",
      dataIndex: "createdAt",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (id, row) => renderStatus(id, row, onResultClose),
    },
  ];
  return (
    <div>
      <div>
        <Table
          columns={columns}
          dataSource={result}
          rowKey={(r) => r._id}
          expandable={{
            expandedRowRender: (record) => (
              <div>
                <Details record={record} />
              </div>
            ),
            expandRowByClick: false,
          }}
          pagination={getPaginationObject(
            pagination,
            onPageChange,
            onShowSizeChange
          )}
          size="middle"
        />
      </div>
    </div>
  );
}

export default SearchResults;
