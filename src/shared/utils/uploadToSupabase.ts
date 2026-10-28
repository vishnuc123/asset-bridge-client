import { supabase } from "../../infrastructure/supabase";

interface IUploadCredentials {
  filepath: string;
  token: string;
}

export const uploadFileToSupabase = async (
  file: File,
  credentials: IUploadCredentials
): Promise<string> => {
  const { data, error } = await supabase.storage
    .from("File_Uploads")
    .uploadToSignedUrl(
      credentials.filepath,
      credentials.token,
      file,
      {
        contentType: file.type,
      }
    );

  if (error) {
    throw new Error(`KYC file upload failed: ${error.message}`);
  }

  return data.path;
};