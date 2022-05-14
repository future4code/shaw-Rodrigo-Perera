import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

const useAuthorization = () => {
  const navigate = useNavigate();
  const {token} = localStorage

  useEffect(() => {
    if (token === null || token === undefined) {
      goToLoginPage(navigate);
    }
  }, []);

  return token;
};

export default useAuthorization;