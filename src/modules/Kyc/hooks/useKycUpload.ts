import { useMutation } from "@tanstack/react-query"
import type { TKycUploadInput, TKycUploadValues } from "../types/kycTypes"
import { KycuploadFile } from "../services/KycServices"
import type { ICustomError } from "../../../shared/interface/ICustomError"
import { toast } from "react-toastify"
import { uploadFileToSupabase } from "../../../shared/utils/uploadToSupabase"

export const useKycUpload = () => {
    return useMutation({
        mutationFn: async (values: TKycUploadInput) => {
            const { file, type, fileType, fileSize } = values;

            // 1. Request signed URL credentials from backend
            const response = await KycuploadFile({
                type,
                fileType,
                fileSize,
            } satisfies TKycUploadValues);

            // Adapt this to the actual return type of KycuploadFile.
            const credentials =
                response.data?.data ?? response.data ?? response;

            // 2. Upload the actual file to Supabase
            const filepath = await uploadFileToSupabase(file, {
                filepath: credentials.filepath,
                token: credentials.token,
            });

            return { filepath, type };
        },

        onSuccess: (res) => {
            console.log("Res", res)
        },
        onError: (err: ICustomError) => {
            console.log(err.response.data.message || "something went wrong")
            toast.error(err.response.data.message || "error check server for info")
        }
    })
}