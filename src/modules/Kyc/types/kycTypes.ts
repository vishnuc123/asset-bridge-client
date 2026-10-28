export type TDocumentType = "passport" | "adhaar" | "selfie";
export type TfileType = "image/jpeg" | "application/pdf" | "video/mp4"
export type TKycUploadValues = { type: TDocumentType, fileType: TfileType, fileSize: number }
export type TKycUploadInput = TKycUploadValues & {
  file: File;
};