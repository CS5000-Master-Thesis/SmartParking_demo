import React, { useEffect } from "react";
import { Form, Input } from "antd";
import icon from "../assets/selv.svg";

const shortFields: string[] = ["Type", "Make", "Model", "Year"];

const Icon = () => <img src={icon} alt="" width={18} />;

const PrefilledForm = ({ dataFields }: { dataFields: any }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(dataFields);
  }, [dataFields, form]);

  return (
    <div className="prefilled-form">
      <Form layout="vertical" form={form}>
        {Object.keys(dataFields).map((field: string, index) => (
          <Form.Item
            label={field}
            key={field}
            name={field}
            className={shortFields.includes(field) ? "short-field" : ""}
          >
            {/* { form.getFieldDecorator(field, {})( */}
            <Input disabled suffix={<Icon />} />
            {/* )} */}
          </Form.Item>
        ))}
      </Form>
    </div>
  );
};

export default PrefilledForm;
