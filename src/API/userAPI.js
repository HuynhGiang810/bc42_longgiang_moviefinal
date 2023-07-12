
import axiosmain from "./axiosmain";

export const apiSignin = async (values) => {
    const { data } = await axiosmain.post("/QuanLyNguoiDung/DangNhap", values);
    return data;
};



export const apiSignup = async (values) => {
    const { data } = await axiosmain.post("/QuanLyNguoiDung/DangKy", values);
    return data;
};
