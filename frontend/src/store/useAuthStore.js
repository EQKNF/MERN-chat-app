import {create} from 'zustand';
import { io } from 'socket.io-client';

import {axiosInstance} from '../lib/axios.js';
import toast from 'react-hot-toast';

const baseURL = 'http://localhost:5003';

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isSigningUp:false,
    isLoggingIn: false,
    isUpdatingProfile:false,
    isCheckingAuth: true,
    onlineUsers: [],
    socket: null,
    
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/check');
            set({ authUser: res.data, isCheckingAuth: false });
            get().connectSocket();
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

            get().connectSocket();
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

            get().connectSocket();
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
            get().disconnectSocket();
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
    updateProfile: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            const res = await axiosInstance.put('/auth/update-profile', data);
            toast.success("Profile updated successfully");
            set({ authUser: res.data});
        } catch (error) {
            toast.error(error.response.data.message);
        }finally{
            set({ isUpdatingProfile: false });
        }
    },
    connectSocket: () => {
        const {authUser} = get();
        if(!authUser || get().socket?.connected) return;

        const socket = io(baseURL, {
            query: {
                userId: authUser._id
            }
        });
        socket.connect();
        set({socket: socket});

        socket.on('getOnlineUsers', (userIds) => {
            set({onlineUsers: userIds});
        });
    },
    disconnectSocket: () => {
        if(get().socket?.connected){
            get().socket.disconnect();
        }   
    },


})  
); 