import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, TextInput, Textarea } from "@mantine/core";
import { yupResolver } from 'mantine-form-yup-resolver';
import * as Yup from 'yup';
import { useForm } from '@mantine/form';
import PhoneInput from "react-phone-number-input";
import axios from "axios";

const FormSchema = Yup.object().shape({
  name: Yup
    .string()
    .required("Name is required")
    .matches(/^[A-Zz-z/s]+$/, "Name must contain only letters and spaces"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  field1: Yup.string().required(" Press Release Topic is required"),
  field2: Yup
    .string()
    .required(" Companies to be mentioned in the press release is required"),
  field3: Yup.string().required("Companies Industry is required"),
  field4: Yup
    .string()
    .required("People to be mentioned in the press release is required"),
  lang: Yup.string().required("Language is required"),
});

function CampaignForm() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      lang: selectedLanguage,
    },
    validate: yupResolver(FormSchema),
  });
  console.log({ form });
  const GetPressRelease = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_PRODUCTION + "/submit-campaign",

        form.values
      );
      console.log(response.data);
      open();
    } catch (error) {
      console.error("Error submitting campaign:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={GetPressRelease}
        className=" flex flex-col gap-6 md:gap-12 mx-auto py-12 lg:py-24  px-4 md:px-8"
      >
        <h2 className="font-bold text-[#002738]   text-3xl lg:text-5xl py-4">
          Press Release Form
        </h2>
        <div className="flex flex-col gap-4 md:gap-10">
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              Your Name
            </label>
            <TextInput
              type="text"
              {...form.getInputProps("name")}
              className=" placeholder-[#667085]"
              classNames={{
                input: " rounded-md border border-[#344054] px-3 py-5",
              }}
              placeholder="Enter Your Name"
              // required
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              Email Address
            </label>
            <TextInput
              type="text"
              {...form.getInputProps("email")}
              classNames={{
                input: " rounded-md border border-[#344054] px-3 py-5",
              }}
              placeholder="Enter Your Email Address"
            />
          </div>
          {/* Phone number  */}
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              Phone Number
            </label>
            <div className="w-full">
              <PhoneInput
                label={false}
                value={form.values.phone}
                onChange={(value) => form.setFieldValue("phone", value)}
                defaultCountry="NG"
                style={{
                  border: "1px solid #344054",
                  borderRadius: "6px",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              Press Release Topic
            </label>
            <Textarea
              resize="both"
              {...form.getInputProps("field1")}
              classNames={{
                input:
                  " rounded-md border border-[#344054] px-3 py-1 min-h-[120px]",
              }}
              placeholder="E.g New Product Launch"
            />
            <p className="text-start text-[#475467] text-sm">
              The main topic of the press release
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              Companies to be mentioned in the press release
            </label>
            <TextInput
              placeholder="E.g Instagram, Facebook"
              {...form.getInputProps("field2")}
              classNames={{
                input: " rounded-md border border-[#344054] px-3 py-5",
              }}
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              Companies Industry
            </label>
            <TextInput
              {...form.getInputProps("field3")}
              classNames={{
                input: " rounded-md border border-[#344054] px-3 py-5",
              }}
              placeholder="E.g Tech, Fintech, Saas"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              People to be mentioned in the press release
            </label>
            <TextInput
              {...form.getInputProps("field4")}
              classNames={{
                input: " rounded-md border border-[#344054] px-3 py-5",
              }}
              placeholder="E.g CEO, Marketing lead"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-8 ">
            <label className=" font-medium text-base text-start text-[#344054]">
              Language
            </label>
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2  w-max">
                    <input
                      type="radio"
                      id="option1"
                      name="language"
                      className="focus:ring-[#4F46E5] h-4 w-4 cursor-pointer text-[#4F46E5] border-gray-300 rounded"
                      onClick={setSelectedLanguage("emglish")}
                    />
                    <label
                      htmlFor="option1"
                      className=" text-[#344054] cursor-pointer"
                    >
                      English
                    </label>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <input
                      type="radio"
                      id="option2"
                      name="language"
                      className="focus:ring-[#4F46E5] h-4 w-4 cursor-pointer  text-[#4F46E5] border-gray-300 rounded"
                      onClick={setSelectedLanguage("arabic")}
                    />
                    <label
                      htmlFor="option2"
                      className="text-[#344054] cursor-pointer"
                    >
                      Arabic
                    </label>
                  </div>
                </div>
                <p className="text-start text-[#475467] text-sm">
                  The language in which the press release should be generated
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#00263A]/90 text-lg hover:bg-[#00263A] py-4 md:py-7 rounded-xl text-white"
        >
          Submit
        </button>
      </form>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        radius={20}
      >
        <div className="flex flex-col gap-6 justify-center items-center h-[380px] sm:h-[420px]  ">
          <img
            src="/verified.png"
            width={120}
            height={120}
            alt="Pic"
            className="text-center"
          />
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg text-[#0A0D14]">Successful</h3>
            <p className="text-sm text-[#525866] max-w-[282px]">
              You have submitted your form, we would send you an email
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CampaignForm;
