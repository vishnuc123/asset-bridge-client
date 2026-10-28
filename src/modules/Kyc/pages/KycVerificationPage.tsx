import KycDocumentUpload from "../components/UploadDocuments";

const KycVerificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            KYC Verification
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Upload your identity documents to verify your account and access
            Asset Bridge services.
          </p>
        </div>

        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm font-medium text-blue-900">
            Before you upload
          </p>

          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-blue-800">
            <li>Choose the correct document type.</li>
            <li>Accepted formats: JPG, PNG, and PDF where applicable.</li>
            <li>Maximum file size: 5 MB.</li>
            <li>Ensure the document is clear and readable.</li>
          </ul>
        </div>

        <KycDocumentUpload />

        <div className="mt-8 border-t border-gray-200 pt-5">
          <p className="text-center text-xs leading-5 text-gray-500">
            Your identity documents should be accessible only to authorized
            verification personnel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KycVerificationPage;