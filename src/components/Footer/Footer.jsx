import React, { useState, useEffect } from "react";
import styles from "./Footer.module.scss";
import { apiGetHeThongRap } from "../../API/movieAPI";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  const [heThongRap, setHeThongRap] = useState([]);

  const getHeThongRap = async () => {
    try {
      const data = await apiGetHeThongRap();
      console.log(data);
      setHeThongRap(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeThongRap();
  }, []);
  return (
    <>
      <div id="footer" className={styles.ungdung}>
        <div className={styles.container}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ color: "white", width: "500px" }}>
              <p
                style={{
                  fontSize: "xx-large",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                Ứng dụng tiện lợi dành cho
              </p>
              <p
                style={{
                  fontSize: "xx-large",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                người yêu điện ảnh
              </p>
              <p
                style={{
                  fontSize: "medium",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>

              
              
            </div>
            <div>
              <img
                src="./img/download.png"
                alt=""
                style={{
                  position: "relative",
                  width: "208px",
                  height: "440px",
                }}
              />

              <img
                src="https://tcdtist-tix-clone.vercel.app/static/media/banner-slider-6.0b2b382d.jpg"
                alt=""
                style={{
                  position: "absolute",
                  width: "190px",
                  height: "420px",
                  marginLeft: "-200px",
                  marginTop: "10px",
                  borderRadius: "20px",
                }}
              />


            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#212121", color: "white" }}>
        <div style={{ marginTop: "20px" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ justifyItems: "left" }}>
                <a href="#">
                  <img
                    src="https://yt3.googleusercontent.com/ytc/AGIKgqPAhQMpB5UqCVLmLwgYaeSVFHYDtlCKLSfWp4Hu=s900-c-k-c0x00ffffff-no-rj"
                    alt=""
                    width={70}
                    style={{ marginTop: "80%" }}
                  />
                </a>
              </div>
              <div className={styles.footer}>
                <p style={{ textAlign: "center" }}>Partner</p>
                <Container>
                  <Row style={{ textAlign: "center", marginBottom: "10px" }}>
                    {heThongRap.map((heThong, index) => {
                      return (
                        <Col md="4" style={{ marginBottom: "10px" }}>
                          {
                            <img
                              src={heThong.logo}
                              alt=""
                              width={50}
                              height={50}
                            />
                          }
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </div>
              <div>
                <p>Moible App</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                  }}
                >
                  <div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png"
                      alt=""
                      width={25}
                    />
                  </div>
                  <div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png"
                      alt=""
                      width={25}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p>Social Media</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                  }}
                >
                  <div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
                      alt=""
                      width={25}
                    />
                  </div>
                  <div>
                    <img
                      src="https://classic.vn/wp-content/uploads/2022/07/zalo-icon.png"
                      alt=""
                      width={25}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0 100px 0 100px",
            }}
          >
            <div style={{ marginTop: "5%" }}>
              <span>2023 All right</span>
            </div>
            <div style={{ width: "70%" }}>
              <p>Giang Cyber Movie</p>
              <p style={{ fontSize: "12px" }}>
                Địa chỉ: Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3, TPHCM
              </p>
              <p style={{ fontSize: "12px" }}>
                Số Điện Thoại (Hotline): 0939.784.616
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
