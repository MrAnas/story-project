import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, TextInput, Textarea } from "@mantine/core";
import PhoneInput from "react-phone-number-input";
import { useForm, yupResolver } from "@mantine/form";
import { object, string } from "yup";
import axios from "axios";
import { useTranslation } from "react-i18next";

const FormSchema = object({
  name: string()
    .required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  phone: string().required("Phone number is required"),
  field1: string().required(" Press Release Topic is required"),
  field2: string().required(
    " Companies to be mentioned in the press release is required"
  ),
  field3: string().required("Companies Industry is required"),
  field4: string().required(
    "People to be mentioned in the press release is required"
  ),
  lang: string().required("Language is required"),
});

function CampaignForm() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const {t} = useTranslation()
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
  // console.log({ form });
  const GetPressRelease = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_PRODUCTION + "/submit-campaign",

        form.values
      );
      // console.log(response.data);
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
         {t("formHeading")}
        </h2>
        <div className="flex flex-col gap-4 md:gap-10">
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
            {t("name")}
            </label>
            <TextInput
              type="text"
              {...form.getInputProps("name")}
              className=" placeholder-[#667085]"
              classNames={{
                input: " rounded-md border border-[#344054] px-3 py-5",
              }}
              placeholder={t("nameplaceholder")}
              // required
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
             {t("email")}
            </label>
            <TextInput
              type="text"
              {...form.getInputProps("email")}
              classNames={{
                input: " rounded-md border border-[#344054] px-3 py-5",
              }}
              placeholder={t("emailplaceholder")}
            />
          </div>
          {/* Phone number  */}
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
            {t("phone")}
            </label>
            <div className="w-full">
              <PhoneInput
                label={false}
                value={form.values.phone}
                onChange={(value) => form.setFieldValue("phone", value)}
                defaultCountry="SA"
                placeholder= {t("phoneplaceholder")}
                style={{
                  border: "1px solid #344054",
                  borderRadius: "6px",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
            {t("topic")}
            </label>
            <Textarea
              resize="both"
              {...form.getInputProps("field1")}
              classNames={{
                input:
                  " rounded-md border border-[#344054] px-3 py-1 min-h-[120px]",
              }}
              placeholder={t("topicplaceholder")}
            />
            <p className="text-start text-[#475467] text-sm">
            {t("topicsub")}
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
            {t("companies")}
            </label>
            <TextInput
              placeholder={t("companiesplaceholder")}
              {...form.getInputProps("field2")}
              classNames={{
                input: " rounded-md border border-[#344054] px-3 py-5",
              }}
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
            {t("industry")}
            </label>
            <TextInput
              {...form.getInputProps("field3")}
              classNames={{
                input: " rounded-md border border-[#344054] px-3 py-5",
              }}
              placeholder={t("industryplaceholder")}
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              {t("people")}
            </label>
            <TextInput
              {...form.getInputProps("field4")}
              classNames={{
                input: " rounded-md border border-[#344054] px-3 py-5",
              }}
              placeholder={t("peopleplaceholder")}
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-8 ">
            <label className=" font-medium text-base text-start text-[#344054]">
              {t("language")}
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
                      onClick={() => setSelectedLanguage("emglish")}
                    />
                    <label
                      htmlFor="option1"
                      className=" text-[#344054] cursor-pointer"
                    >
                       {t("1anguage1")}
                    </label>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <input
                      type="radio"
                      id="option2"
                      name="language"
                      className="focus:ring-[#4F46E5] h-4 w-4 cursor-pointer  text-[#4F46E5] border-gray-300 rounded"
                      onClick={() => setSelectedLanguage("arabic")}
                    />
                    <label
                      htmlFor="option2"
                      className="text-[#344054] cursor-pointer"
                    >
                       {t("1anguage2")}
                    </label>
                  </div>
                </div>
                <p className="text-start text-[#475467] text-sm">
                {t("generateLanguage")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#00263A]/90 text-lg hover:bg-[#00263A] py-4 md:py-7 rounded-xl text-white"
        >
              {t("formsubmit")}
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
