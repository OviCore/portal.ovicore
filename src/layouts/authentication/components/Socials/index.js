import SuiButton from "components/SuiButton";
import SuiBox from "components/SuiBox";

import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, OAuthProvider } from "firebase/auth";
import { useNavigate} from "react-router-dom";



function Socials() {

    let navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();
    const provider3 = new OAuthProvider('microsoft.com');

    function handleSignUpWithGoogle() {
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          sessionStorage.setItem('Auth Token', user.uid)
          navigate('/dashboard');
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorCode, errorMessage, credential);
        });
    }

    function handleSignUpWithGithub() {
      const auth = getAuth();
      signInWithPopup(auth, provider2)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          sessionStorage.setItem('Auth Token', user.uid)
          navigate('/dashboard');
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          console.log(errorCode, errorMessage, credential);
        });
    }

    function handleSignUpWithMicrosoft() {
      const auth = getAuth();
      signInWithPopup(auth, provider3)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          sessionStorage.setItem('Auth Token', user.uid)
          navigate('/dashboard');
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          console.log(errorCode, errorMessage, credential);
        });
    }

  return (
    <SuiBox display="flex" justifyContent="center">
      
      <SuiButton variant="outlined" color="black" onClick={() => handleSignUpWithGoogle()}>
        <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(3.000000, 2.000000)" fillRule="nonzero">
              <path
                d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                fill="#4285F4"
              />
              <path
                d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                fill="#34A853"
              />
              <path
                d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                fill="#FBBC05"
              />
              <path
                d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                fill="#EB4335"
              />
            </g>
          </g>
        </svg>
      </SuiButton>
      <SuiBox mr={1} />
      <SuiButton variant="outlined" color="black" onClick={() => handleSignUpWithGithub()}>
        <img width="24px" alt="Octicons-mark-github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/512px-Octicons-mark-github.svg.png"/>
      </SuiButton>
      <SuiBox mr={1} />
      <SuiButton variant="outlined" color="black" onClick={() => handleSignUpWithMicrosoft()}>
        <img width="24" alt="Microsoft logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"/>
      </SuiButton>
    </SuiBox>

  );
}

export default Socials;
