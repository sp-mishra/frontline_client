import React from "react";
import { Descriptions, Table, Tag, Space } from "antd";
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

// const data = [
//   {
//     zone: 'zone1',
//     ward: 'ward1',
//     pins: ['123', '1234'],
//   },
//   {
//     zone: 'zone2',
//     ward: 'ward2',
//     pins: ['123', '1234'],
//   },
//   {
//     zone: 'zone3',
//     ward: 'ward3',
//     pins: ['123', '1234'],
//   },
//   {
//     zone: 'zone1',
//     ward: 'ward1',
//     pins: ['123', '1234'],
//   },
//   {
//     zone: 'zone2',
//     ward: 'ward2',
//     pins: ['123', '1234'],
//   },
//   {
//     zone: 'zone3',
//     ward: 'ward3',
//     pins: ['123', '1234'],
//   },
// ];

function Details({ record }) {
  // const renderExtra =
  //   record.mode.toLowerCase() == "individual"
  //     ? getIndividualDetails
  //     : getOrganizationDetails;
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
      {/* <Item label="Services" span={3}>
        {getString(record.covid19)}
      </Item> */}
      {/* <Item label="Pin Code">{record.pin}</Item> */}
      <div>
        <Table columns={columns}
         dataSource={record.bbmp} />
      </div>
    </Descriptions>
  );
}

function getIndividualDetails(record) {
  const rec = record.individual;
  return [
    <Item key="qualification" label="Educational Qualification">
      {rec.qualification}
    </Item>,
    <Item key="profession" label="Profession">
      {rec.profession}
    </Item>,
    <Item key="gender" label="Gender">
      {rec.gender}
    </Item>,
    <Item key="dob" label="Date of Birth">
      {rec.dob}
    </Item>,
  ];
}

function getOrganizationDetails(record) {
  const rec = record.organization;
  return [
    <Item key="org_head" label="Head of Organization">
      {rec.head}
    </Item>,
    <Item key="org_person" label="Nodal Person">
      {rec.person}
    </Item>,
    <Item key="org_type" label="Type of Organization">
      {rec.cat}
    </Item>,
    <Item key="org_nov" label="Number of Volunteers">
      {rec.nov}
    </Item>,
    <Item key="org_reg" label="Registration Number">
      {rec.reg}
    </Item>,
  ];
}

function getRegions(record) {
  let res = null;
  if(record.region) {
    if(Array.isArray(record.region)) {
      res = record.region.join(', ');
    } else {
      res = record.region;
    }
    console.log(getRegions.name,
       "\nrecord.region: ", record.region,
       "\nres: ", res);
  }
}
export default Details;
