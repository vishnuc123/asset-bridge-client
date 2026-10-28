
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import type { IUser } from "../../auth/interface/IUser";
import { useUpdateProfile } from "../hooks/useUpdateProfile";
import { PersonalDetailsSchema } from "../validations/personalDetailsSchema";


type Detail = {
  label: string;
  field: string;
  value: string;
  editable?: boolean;
};

interface IProfileDetailsCardProps {
  data: IUser | null;
}

const genderOptions = ["male", "female", "other"];

const nationalityOptions = [
  "indian",
  "american",
  "australian",
  "canadian",
  "french",
  "russian",
  "others",
];

export default function ProfileDetails({
  data,
}: IProfileDetailsCardProps) {
  const { mutate: updateProfile, isPending } = useUpdateProfile();

  const [open, setOpen] = useState(false);
  const [field, setField] = useState("");
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  if (!data) return null;

  const personalDetails: Detail[] = [
    {
      label: "First Name",
      field: "firstName",
      value: data.firstName ?? "",
    },
    {
      label: "Last Name",
      field: "lastName",
      value: data.lastName ?? "",
    },
    {
      label: "Email",
      field: "email",
      value: data.email,
      editable: false,
    },
    {
      label: "Phone Number",
      field: "phone",
      value: data.phone ?? "",
    },
    {
      label: "Gender",
      field: "gender",
      value: data.gender ?? "",
    },
    {
      label: "Date of Birth",
      field: "dob",
      value: data.dob ?? "",
    },
    {
      label: "Nationality",
      field: "nationality",
      value: data.nationality ?? "",
    },
    {
      label: "Address",
      field: "address",
      value: data.address ?? "",
    },
  ];

  // const accountDetails: Detail[] = [
  //   {
  //     label: "Display Name",
  //     field: "displayName",
  //     value:  "",
  //     editable: false,
  //   },
  //   {
  //     label: "Language",
  //     field: "language",
  //     value: "English",
  //     editable: false,
  //   },
  //   {
  //     label: "Time Zone",
  //     field: "timezone",
  //     value: "Asia/Kolkata",
  //     editable: false,
  //   },
  // ];

  const handleEdit = (item: Detail) => {
    setField(item.field);
    setLabel(item.label);
    setValue(item.value);
    setError("");
    setOpen(true);
  };

  const handleClose = () => {
    if (isPending) return;

    setOpen(false);
    setError("");
  };

  const handleSave = () => {
    setError("");

    // Only fields defined in your existing schema can be updated here.
    const personalField = [
      "firstName",
      "lastName",
      "phone",
      "gender",
      "dob",
      "nationality",
      "address",
    ] as const;

    if (
      !personalField.includes(
        field as (typeof personalField)[number]
      )
    ) {
      setError("This field cannot be edited here.");
      return;
    }

    // Validate the selected field using your existing Zod schema.
    const result = PersonalDetailsSchema.shape[
      field as (typeof personalField)[number]
    ].safeParse(value);

    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid value");
      return;
    }

    updateProfile(
      { [field]: result.data },
      {
        onSuccess: () => {
          setOpen(false);
          setError("");
        },
        onError: () => {
          setError("Unable to update your profile. Please try again.");
        },
      }
    );
  };

  const renderInput = () => {
    const inputClass =
      "w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

    if (field === "gender" || field === "nationality") {
      const options =
        field === "gender" ? genderOptions : nationalityOptions;

      return (
        <select
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
          className={inputClass}
        >
          <option value="">Select {label.toLowerCase()}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      );
    }

    if (field === "dob") {
      return (
        <input
          type="date"
          value={value}
          max={new Date().toISOString().slice(0, 10)}
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
          className={inputClass}
        />
      );
    }

    return (
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
        placeholder={`Enter ${label.toLowerCase()}`}
        className={inputClass}
      />
    );
  };

  const renderCard = (title: string, details: Detail[]) => (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold">{title}</h2>

      {details.map((item) => (
        <div
          key={item.label}
          className="grid grid-cols-[140px_1fr] items-center gap-3 border-b py-4 last:border-none sm:grid-cols-[160px_1fr]"
        >
          <p className="text-sm font-medium text-gray-500">
            {item.label}
          </p>

          <div className="flex min-w-0 items-center justify-between gap-3">
            <span className="break-words">
              {item.value || "Nil"}
            </span>

            {item.editable !== false && (
              <button
                type="button"
                onClick={() => handleEdit(item)}
                aria-label={`Edit ${item.label}`}
                className="shrink-0 rounded-full border p-2 hover:bg-gray-100"
              >
                <FaEdit />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {renderCard("Personal Details", personalDetails)}
        {/* {renderCard("Account Details", accountDetails)} */}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-profile-title"
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
          >
            <h2
              id="edit-profile-title"
              className="mb-5 text-xl font-semibold"
            >
              Edit {label}
            </h2>

            <label className="mb-2 block text-sm font-medium">
              {label}
            </label>

            {renderInput()}

            {error && (
              <p role="alert" className="mt-2 text-sm text-red-600">
                {error}
              </p>
            )}

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                disabled={isPending}
                className="rounded-lg border px-4 py-2 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSave}
                disabled={isPending}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isPending ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
