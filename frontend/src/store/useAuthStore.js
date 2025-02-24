import {create} from 'zustand';

import {axiosInstance} from '../lib/axios.js';
import toast from 'react-hot-toast';

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp:false,
    isLoggingIn: false,
    isUpdatingProfile:false,

    isCheckingAuth: true,
    
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/check');
            set({ authUser: res.data, isCheckingAuth: false });
        } catch (error) {
            set({ authUser: null, isCheckingAuth: false });
            console.log("Error in checkAuth", error);
        }
    },
    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post('/auth/signup', data);
            toast.success("Account created successfully");
            set({ authUser: res.data});
        } catch (error) {
            toast.error(error.response.data.message);
        }finally{
            set({ isSigningUp: false });
        }
    },
    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post('/auth/login', data);
            toast.success("Logged in successfully");
            set({ authUser: res.data});
        } catch (error) {
            toast.error(error.response.data.message);
        }finally{
            set({ isLoggingIn: false });
        }
    },
    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout');
            set({ authUser: null });
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },


})  
); 