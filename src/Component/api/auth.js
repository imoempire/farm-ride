import client from "./client";

const catchError = error =>{
   if (error?.response?.data){
      return error.response.data
   }
   return {success: false, error: error.message};
}
export const signUp = async values => {
  try {
    const { data } = await client.post("/user/create", { ...values });
    return data;
  } catch (error) {
   return catchError(error) 
  }
};

export const signIn = async values => {
   try {
     const { data } = await client.post("/user/signin", { ...values });
    return data
   } catch (error) {
    return catchError(error) 
   }
 };

 export const forgetPassword = async email => {
  try {
    const { data } = await client.post("/user/forgetpassword", { email });
   return data
  } catch (error) {
   return catchError(error) 
  }
};

export const verify = async (otp, userId) => {
  try {
    const { data } = await client.post("/user/verify", { otp, userId });
   return data
  } catch (error) {
   return catchError(error) 
  }
};
 
