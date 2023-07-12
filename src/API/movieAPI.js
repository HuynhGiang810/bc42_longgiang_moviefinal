import axiosmain from "./axiosmain";



export const apiGetMovies = async () => {
    const { data } = await axiosmain.get("/QuanLyPhim/LayDanhSachPhim", {
        params: {
            maNhom: "GP14",
        },
    });
    return data;
};

export const apiGetBanners = async () => {
    const { data } = await axiosmain.get("/QuanLyPhim/LayDanhSachBanner");
    return data;
};

export const apiGetMovieDetails = async (movieId) => {
    const { data } = await axiosmain.get("/QuanLyPhim/LayThongTinPhim", {
        params: {
            MaPhim: movieId,
        },
    });

    return data;
};

export const apiCreateMovie = async (movie) => {
    const formData = new FormData();
    for (let key in movie) {
        formData.append(key, movie[key]);
    }
    formData.append("maNhom", "GP14");

    await axiosmain.post("/QuanLyPhim/ThemPhimUploadHinh", formData);
};



export const apiGetHeThongRap = async () => {
    const { data } = await axiosmain.get("/QuanLyRap/LayThongTinHeThongRap");
    return data;
};

export const apiGetCumRap = async (cinemaID) => {
    const { data } = await axiosmain.get(
        "/QuanLyRap/LayThongTinCumRapTheoHeThong",
        {
            params: {
                maHeThongRap: cinemaID,
            },
        }
    );
    return data;
};

export const apiGetLichChieuRap = async (cinemaID) => {
    const { data } = await axiosmain.get(
        "/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP14",
        {
            params: {
                maHeThongRap: cinemaID,
            },
        }
    );
    return data;
};

export const apiGetLichChieuPhim = async (maPhim) => {
    const { data } = await axiosmain.get(
        "/QuanLyRap/LayThongTinLichChieuPhim",
        {
            params: {
                MaPhim: maPhim,
            },
        }
    );
    return data;
};

const bookingMovieAPI = {
    getListBooking: (maLichChieu) => {
        return axiosmain.get("QuanLyDatVe/LayDanhSachPhongVe", {
            params: {
                MaLichChieu: maLichChieu,
            }
        })
    },

    postBookingTicket: (DanhSachVe) => {
        return axiosmain.post("QuanLyDatVe/DatVe", DanhSachVe)
    }
}

export default bookingMovieAPI;
