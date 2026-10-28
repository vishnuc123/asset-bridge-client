import { useState } from "react";
import type { TDocumentType, TfileType } from "../types/kycTypes";
import { useKycUpload } from "../hooks/useKycUpload";
import { toast } from "react-toastify";

const KycDocumentUpload = () => {
    const [type, setType] = useState<TDocumentType>("passport");
    const [file, setFile] = useState<File | null>(null);

    const {
        mutate: uploadFile,
        isPending,
        isError,
        error,
        isSuccess,
    } = useKycUpload();

   const handleUpload = () => {
  if (!file) {
    toast.error("Please select a document");
    return;
  }

  uploadFile({
    type,
    fileType: file.type as TfileType,
    fileSize: file.size,
    file,
  });
};
    return (
        <div className="space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">
                Upload KYC Document
            </h2>

            <div className="space-y-2">
                <label
                    htmlFor="documentType"
                    className="block text-sm font-medium text-gray-700"
                >
                    Document Type
                </label>

                <select
                    id="documentType"
                    value={type}
                    disabled={isPending}
                    onChange={(event) => {
                        setType(event.target.value as TDocumentType);
                        setFile(null);
                    }}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                >
                    <option value="passport">Passport</option>
                    <option value="adhaar">Aadhaar</option>
                    <option value="selfie">Selfie</option>
                </select>
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="documentFile"
                    className="block text-sm font-medium text-gray-700"
                >
                    Select Document
                </label>

                <input
                    id="documentFile"
                    type="file"
                    disabled={isPending}
                    accept={
                        type === "selfie"
                            ? "video/mp4"
                            : "image/jpeg,application/pdf"
                    }
                    onChange={(event) =>
                        setFile(event.target.files?.[0] ?? null)
                    }
                    className="block w-full text-sm text-gray-700"
                />
            </div>

            {file && (
                <p className="text-sm text-gray-600">
                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </p>
            )}

            <button
                type="button"
                onClick={handleUpload}
                disabled={!file || isPending}
                className="rounded-lg bg-blue-600 px-5 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isPending ? "Generating Upload URL..." : "Upload Document"}
            </button>

            {isError && (
                <p role="alert" className="text-sm text-red-600">
                    {error instanceof Error
                        ? error.message
                        : "Failed to generate upload URL."}
                </p>
            )}

            {isSuccess && (
                <p className="text-sm text-green-600">
                    Upload URL generated successfully.
                </p>
            )}
        </div>
    );
};

export default KycDocumentUpload;