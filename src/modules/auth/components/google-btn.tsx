import { GoogleLogin, type CredentialResponse } from "@react-oauth/google"
import { useGoogleLogin } from "../hooks/useGoogleLogin";

export const GoogleLoginBtnComp = () => {
    const { mutate: googleLoginFn } = useGoogleLogin();
    const handleSuccess = (credentialRes: CredentialResponse) => {
        if (credentialRes.credential) {
            console.log("credentials for google login",credentialRes.credential)
            googleLoginFn({ credential: credentialRes.credential })
        } else {
            console.log("credential not found")
        }
    }

    const handleError = () => {
        console.log("err")
    }
    return (
        <div>
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} width={100} size="large" shape="rectangular" text="continue_with" />
        </div>
    )
}

export default GoogleLoginBtnComp
