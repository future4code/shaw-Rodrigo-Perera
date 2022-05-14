import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../routes/coordinator";

const useRedirectLogin = () => {
  const navigate = useNavigate();
  const {token} = localStorage

  useEffect(() => {
    if (token !== null && token !== undefined) {
      goToFeedPage(navigate);
    }
  }, []);
};

export default useRedirectLogin;