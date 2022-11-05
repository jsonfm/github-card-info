import { useState, useEffect } from "react";
import { UserService } from "@/services/user.service";


export const userService = new UserService();


export const useUserFecth = (username="octocat") => {

    const [user, setUser] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try{
            const response = await userService.getUser(username);
            setUser(response);
            setLoading(false);
        }catch(err){
            setError(err);
        }
    }

    useEffect(() => {
      fetchData();
    }, []);

    return {
        user,
        error,
        loading
    }
}