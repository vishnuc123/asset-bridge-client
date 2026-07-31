import type { IUser } from "../../auth/interface/IUser";

type Detail = {
  label: string;
  value: React.ReactNode;
};
interface IProfileDetailsCardProps{
  data:IUser | null
}

const personalDetails = (user: IUser): Detail[] => [
  { label: "Full Name", value: `${user.firstName} ${user.lastName}`},
  { label: "Email", value: user.email },
  { label: "Phone Number", value: user.phone ?? "Nil" },
  { label: "Gender", value: user.gender ?? "Nil" },
  { label: "Date of Birth", value: user.dob ?? "Nil"},
  { label: "Nationality", value: user.nationality ?? "Nil" },
  { label: "Address", value: user.address ?? "Nil" },
];

const accountDetails: Detail[] = [
  { label: "Display Name", value: "s_wilson_168920" },
  { label: "Account Created", value: "March 20, 2020" },
  { label: "Last Login", value: "August 22, 2024" },
  { label: "Membership Status", value: "Premium Member" },
  {
    label: "Account Verification",
    value: (
      <span className="rounded bg-green-100 px-2 py-1 text-sm font-medium text-green-600">
        Verified
      </span>
    ),
  },
  { label: "Language Preference", value: "English" },
  { label: "Time Zone", value: "GMT-5 (Eastern Time)" },
];

function DetailCard({
  title,
  details,
}: {
  title: string;
  details: Detail[];
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-gray-800">{title}</h2>

      <div>
        {details.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-[180px_1fr] items-center border-b border-dashed border-gray-200 py-4 last:border-none"
          >
            <p className="text-sm font-medium text-gray-500">
              {item.label}:
            </p>
            <span className="text-sm font-medium text-gray-500">hai</span>

            <div className="text-sm font-medium text-gray-800">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProfileDetails({data}:IProfileDetailsCardProps) {
  if(!data){
    return null
  }
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <DetailCard
        title="Personal Details"
        details={personalDetails(data)}
      />

      <DetailCard
        title="Account Details"
        details={accountDetails}
      />
    </div>
  );
}