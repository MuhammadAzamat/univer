import React from "react";
import { Button, Col, Row } from "antd";
const Step5 = () => {
  return (
    <section className="section_app-info">
      <div className="wrapper">
        <div className="app_info">
          <h1 className="app_info-title">Applicant Information</h1>
          <Button className="app_info-btn" shape="round">
            Yangi ariza
          </Button>
        </div>
        <div className="person_info">
          <h2>Shaxsiy ma’lumotlari</h2>
          <Row>
            <Col span={18} className="person_info-block">
              <Row>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Ismi</p>
                  <h3 className="person_info-desc">Umarov</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Familiyasi </p>
                  <h3 className="person_info-desc">Jamshid</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Sha’rifi</p>
                  <h3 className="person_info-desc">Azizjon o’g’li</h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Telefon raqami</p>
                  <h3 className="person_info-desc">+998 97 777 77 77</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Qo’shimcha telefon raqami</p>
                  <h3 className="person_info-desc">+998 99 999 99 99</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Elektron manzili</p>
                  <h3 className="person_info-desc">example@mail.com</h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Nogironlik holati</p>
                  <h3 className="person_info-desc">Yo’q</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">
                    Nogironlik boyicha eslatma
                  </p>
                  <h3 className="person_info-desc">-</h3>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <p className="person_info-title">Fotasurat</p>
              <img
                style={{ width: "150px" }}
                src="/person-photo.png"
                alt="person photo"
              />
            </Col>
          </Row>
        </div>
        <div className="person_info">
          <h2>Passport ma’lumotlari</h2>
          <Row>
            <Col className="person_info-block" span={18}>
              <Row>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Passport turi</p>
                  <h3 className="person_info-desc">ID card</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Passport seria raqami </p>
                  <h3 className="person_info-desc">AA1234567</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Identification pin</p>
                  <h3 className="person_info-desc">1234567899898</h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Passport berilgan sana</p>
                  <h3 className="person_info-desc">25.11.2010</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Amal qilish muddati</p>
                  <h3 className="person_info-desc">24.11.2035</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Kim tomindan berilgan</p>
                  <h3 className="person_info-desc">Toshkent shahar IIB</h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Tug’ilgan sanasi</p>
                  <h3 className="person_info-desc">10.09.1999</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Jinsi</p>
                  <h3 className="person_info-desc">Erkak</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Millati</p>
                  <h3 className="person_info-desc">O'zbek</h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Fuqaroligi</p>
                  <h3 className="person_info-desc">O'zbek</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Mamlakat</p>
                  <h3 className="person_info-desc">O’zbekiston</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Viloyat</p>
                  <h3 className="person_info-desc">Toshkent shahar</h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Shahar / Tuman</p>
                  <h3 className="person_info-desc">Shayhontohur tumani</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Manzil</p>
                  <h3 className="person_info-desc">Beruniy-3</h3>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <div>
                <p className="person_info-title">Passport nusxasi</p>
                <img
                  style={{
                    width: "200px",
                    display: "block",
                    marginBottom: "12px",
                  }}
                  src="/password1.png"
                  alt="person photo"
                />
                <img
                  style={{ width: "200px", display: "block" }}
                  src="/password2.png"
                  alt="person photo"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="person_info">
          <h2>Oldingi o’quv joyi</h2>
          <Row>
            <Col className="person_info-block" span={18}>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">
                    Majburiy 11 yillik ta’lim turi
                  </p>
                  <h3 className="person_info-desc">Maktab</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Maktab raqami</p>
                  <h3 className="person_info-desc">44-maktab</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Tugatgan yili</p>
                  <h3 className="person_info-desc">2021</h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Diplom/Attestat raqami</p>
                  <h3 className="person_info-desc">AA12345678</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Berilgan sanasi</p>
                  <h3 className="person_info-desc">10.10.2021</h3>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <div className="person_info-photo_information">
                <p className="person_info-title">Diplom/Attestat nusxasi</p>
                <img
                  style={{ width: "200px", display: "block" }}
                  src="/diplom.png"
                  alt="person photo"
                />
                <span className="">
                  Yana <br />
                  +2 ta rasm
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <div className="person_info">
          <h2>Sertifikatlari</h2>
          <Row>
            <Col span={18} className="person_info-block">
              <Row>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Sertificat turi</p>
                  <h3 className="person_info-desc">IELTS</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Sertifikat raqami</p>
                  <h3 className="person_info-desc">AB12345678</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Ball</p>
                  <h3 className="person_info-desc">7</h3>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <p className="person_info-title">Sertifikat nusxasi</p>
              <img
                style={{ width: "200px" }}
                src="/sertifikat.png"
                alt="person photo"
              />
            </Col>
          </Row>
        </div>
        <div style={{ border: 0 }} className="person_info">
          <h2>Tanlangan yo’nalish</h2>
          <Row>
            <Col span={18} className="person_info-block">
              <Row>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Ta’lim yo’nalishi</p>
                  <h3 className="person_info-desc">Bank ishi</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Ta’lim turi</p>
                  <h3 className="person_info-desc">Sirtqi ta’lim</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Ta’lim tili </p>
                  <h3 className="person_info-desc">O’zbek</h3>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="app_info-section-btn">
        <Button className="btn btn-left" shape="">
          Orqaga
        </Button>
        <Button className="btn btn-right" shape="">
          Ariza yuborish
        </Button>
      </div>
    </section>
  );
};

export default Step5;
