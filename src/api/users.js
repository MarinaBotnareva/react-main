import axios from "axios";

export const fetchTemplate = (path, onSuccess, onError, onFinally) =>
fetch (
    path
)
    .then((response)=>{return response.json()})
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally);

    export const fetchUsers = async (page) =>{
        const response = await  axios.get(
          `https://randomuser.me/api/?results=10&seed=freshcode&page=${page}`,
        );
            
        return response.data;

      } 

      export const register = async (payload) => {
        const response = await axios.post('http://localhost:5000/users', payload)
      } 