
import axiosmain from "./axiosmain";

export const apiSignin = async (values) => {
    const { data } = await axiosmain.post("/QuanLyNguoiDung/DangNhap", values);
    return data;
};



export const apiSignup = async (values) => {
    const { data } = await axiosmain.post("/QuanLyNguoiDung/DangKy", values);
    return data;
};


export const apiGetUsers = async (values) => {
    const { data } = await axiosmain.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", values);
    return data;
};


export const apiAddUser = async (values) => {
    values = { ...values };

    await axiosmain.post('/QuanLyNguoiDung/ThemNguoiDung', values);
}
