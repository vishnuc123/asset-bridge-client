import { z } from "zod";

export const KycUploadSchema = z.object({
  type: z.enum(["passport", "adhaar", "selfie"]),
  fileType: z.enum([
    "image/jpeg",
    "application/pdf",
    "video/mp4",
  ]),
  size: z.number().int().positive().max(5 * 1024 * 1024),
});

export type TKycUploadValues = z.infer<typeof KycUploadSchema>;