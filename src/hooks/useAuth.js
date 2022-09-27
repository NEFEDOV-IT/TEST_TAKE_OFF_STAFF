import { useSelector } from "react-redux";

export const useAuth = () => {
  const {user, token, id} = useSelector(state => state.user)

  return {
    isAuth: !!user,
    user,
    token,
    id
  }
}