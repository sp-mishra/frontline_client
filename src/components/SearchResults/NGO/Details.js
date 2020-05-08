import React from "react";
import { Descriptions, Table } from "antd";
import { getString } from "@utils/Parser/strUtils";
const { Item } = Descriptions;

const columns = [
  {
    title: 'Zone',
    dataIndex: 'zone',
    key: 'zone',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Ward',
    dataIndex: 'ward',
    key: 'ward',
    render: ward => <a>{ward}</a>,
  },
  {
    title: 'Pins',
    dataIndex: 'pincodes',
    key: 'pincodes',
    render: pincodes => <a>{pincodes.join(', ')}</a>
  },
];

function Details({ record }) {
  return (
    <Descriptions title="Details" bordered size="middle">
      <Item label="EMail" span={3}>
        {getString(record.email)}
      </Item>
      <Item label="Alternate Mobile Number" span={3}>
        {getString(record.alt_mob)}
      </Item>
      <Item label="Address" span={3}>{record.address}</Item>
      <Item label="Regions" span={3}>{getRegions(record)}</Item>
      <Item label="Registration" span={3}>
        {getString(record.reg)}
      </Item>
      <Item label="Number Of Volunteers" span={3}>
        {getString(record.nov)}
      </Item>
      <div>
        <Table columns={columns}
         dataSource={record.bbmp} />
      </div>
    </Descriptions>
  );
}

function getRegions(record) {
  let res = null;
  console.log(getRegions.name,
    "\nrecord: ", record);
  if(record.region) {
    if(Array.isArray(record.region)) {
      res = record.region.join(', ');
    } else {
      res = record.region;
    }
  }
  return res;
}
export default Details;
