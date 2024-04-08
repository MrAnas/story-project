import React, { useRef, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, TextInput, Textarea, Radio, Loader } from "@mantine/core";
import PhoneInput from "react-phone-number-input";
import { useForm, yupResolver } from "@mantine/form";
import { object, string } from "yup";
import axios from "axios";
import { useTranslation } from "react-i18next";

const FormSchema = object({
  name: string().required("Name is required"),
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
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  // const [pdf, setPdf] = useState("");
  const { t } = useTranslation();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      field1: "",
      field2: "",
      field3: "",
      field4: "",
    },
    validate: yupResolver(FormSchema),
  });

  console.log({ selectedLanguage });
  const GetPressRelease = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://story-project-theta.vercel.app/submit-campaign",
        {
          ...form.values,
          lang: selectedLanguage,
        }
      );
      if (response) {
        setIsLoading(false);
        open();
        form.setFieldValue("");
      }
    } catch (error) {
      console.error("Error submitting campaign:", error);
    }
  };

  function handleFormSubmit(e) {
    fetch("https://script.google.com/macros/s/AKfycbwcPjrva-rlW-9T66hxqU7_dhu-ZYHWIYWtcQWTZd2WL28H6TsDNxgxfunPIjT3TqCMLg/exec", {
      
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert(data.msg);
      })
      .catch((err) => console.log(err));
  }

  // console.log({ form });
  return (
    <div className="max-w-4xl mx-auto">
      <form
        // onSubmit={GetPressRelease}
        onSubmit={(e) => {
          e.preventDefault()
          handleFormSubmit(e);
          GetPressRelease()
     
        }}
        ref={formRef}
        id=""
        className="form flex flex-col gap-6 md:gap-12 mx-auto py-12 lg:py-24  px-4 md:px-8"
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
              required
              type="text"
              name="Name"
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
              name="Email"
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
                name="Phone"
                value={form.values.phone}
                onChange={(value) => form.setFieldValue("phone", value)}
                defaultCountry="SA"
                placeholder={t("phoneplaceholder")}
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
              name="Topic"
              classNames={{
                input:
                  " rounded-md border border-[#344054] px-3 py-1 min-h-[120px]",
              }}
              placeholder={t("topicplaceholder")}
            />
            <p className="text-start text-[#475467] text-sm">{t("topicsub")}</p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              {t("companies")}
            </label>
            <TextInput
              placeholder={t("companiesplaceholder")}
              name="Companies"
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
              name="Industry"
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
              name="People"
              classNames={{
                input: " rounded-md border border-[#344054] px-3 py-5",
              }}
              placeholder={t("peopleplaceholder")}
            />
          </div>
          <div className="flex flex-col gap-4  ">
            <label className=" font-medium text-base text-start text-[#344054]">
              {t("language")}
            </label>
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <Radio.Group
                    value={selectedLanguage}
                    onChange={setSelectedLanguage}
                    name="favoriteFramework"
                    withAsterisk
                  >
                    <div className="flex flex-col gap-2">
                      <Radio value="english" label="English" />
                      <Radio value="arabic" label="Arabic" />
                    </div>
                  </Radio.Group>
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
          disabled={isLoading}
          className={`w-full bg-[#00263A]/90 text-lg hover:bg-[#00263A] py-4 md:py-7 rounded-xl ${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {isLoading ? (
            <div className="text-center flex w-full justify-center items-center">
              <Loader />
            </div>
          ) : (
            <div className="text-white"> {t("formsubmit")}</div>
          )}
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
