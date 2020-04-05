import React, { useEffect } from "react";
import { Form, Button } from "antd";
import { formItemLayout, tailFormItemLayout } from "./layout";

import {
  RegionSelect,
  MedicalField,
  NonMedicalField,
  OrgTypeSelect,
} from "./Fields/Select";

import {
  MobileField,
  ConfirmMobileField,
  AddressField,
  PinField,
  NameField,
  EmailField,
  NotesField,
  NodalNameField,
  RegNumField,
} from "./Fields/Input";

import { DynamicServicList } from "./Fields/Dynamic";

import { formatData } from "./utils";

function OrganizationKindForm({
  initialValues,
  other,
  regions,
  services,
  onSubmit,
  reset,
}) {
  const [form] = Form.useForm();
  const { resetFields } = form;

  useEffect(() => {
    resetFields();
  }, [reset]);

  const [medical, setMedical] = React.useState([]);
  const [nonMedical, setNonMedical] = React.useState([]);

  const getMetaMap = (meta) =>
    meta.map((m) => ({ id: m.key, value: m.children }));

  function onMedicalChange(values, meta) {
    const res = getMetaMap(meta);
    setMedical(res);
  }

  function onNonMedicalChange(values, meta) {
    const res = getMetaMap(meta);
    setNonMedical(res);
  }

  // called if validation passes
  function handleSubmit(values) {
    formatData(values);
    onSubmit(values);
  }

  return (
    <div>
      <Form
        form={form}
        {...formItemLayout}
        onFinish={handleSubmit}
        initialValues={initialValues}
        //hideRequiredMark={true}
      >
        <NameField />
        <OrgTypeSelect options={other.orgTypeOptions} />
        <RegNumField />
        <NodalNameField />

        <EmailField />

        <MobileField />
        <ConfirmMobileField />

        <AddressField />
        <PinField />

        <RegionSelect options={regions} />

        <MedicalField
          options={services.medicalOptions}
          onChange={onMedicalChange}
        />

        <DynamicServicList serviceType="medical" options={medical} />

        <NonMedicalField
          options={services.nonMedicalOptions}
          onChange={onNonMedicalChange}
        />
        <DynamicServicList serviceType="nonmedical" options={nonMedical} />

        <NotesField />

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default OrganizationKindForm;