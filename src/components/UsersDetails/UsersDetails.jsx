import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { setUsers, setLoading, setError, setPath, selectUsers, selectLoading, selectError, selectPath } from "../../usersSlice/UsersSlice";
import classes from "./UsersDetails.module.css";
import fetchAllUsers from "../../reducer/UsersCreators";


const UsersDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector(selectUsers).find((u) => u.id === parseInt(params.id));
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const path = useSelector(selectPath); 
  const navigate = useNavigate();

  const onBack = () => {
    dispatch(setPath("UsersDetails")); 
    navigate(-1);
  };


  useEffect(() =>{
    dispatch(fetchAllUsers())
  },[])


  return (
    <div className={classes.post}>
      {user && (
        <>
         <button onClick={onBack}>Back</button>
          <h2>
            {user.name} {user.email} {user.phone}
          </h2>
        </>
      )}
      {user && (
        <p>
          SD:{user.company.bs} catchPhrase: {user.company.catchPhrase} NAME:{" "}
          {user.company.name}
        </p>
      )}
      {isLoading && "loading..."}
      {error && error}
    </div>
  );
};

export default UsersDetails;

