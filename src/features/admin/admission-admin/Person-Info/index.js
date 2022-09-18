import React from "react";
import { Button, Col, Row } from "antd";

const applicant_info = {
  id: 2,
  id_number: "1000000",
  first_name: "Sirojiddin",
  last_name: "Ismoilov",
  middle_name: "Rasuljon",
  email: "sirojiddin@gmail.com",
  phone: "+998930540905",
  avatar: "/person-photo.png",
  personal_photo: null,
  is_disabled: "Yo'q",
  disabled_type: "-",
  passport_type: "Id Card",
  passport_series: "AC0072003",
  identification_number: "123456788",
  passport_issue_date: "25.11.2010",
  passport_expire_date: "24.11.2035",
  issued_by: "Toshkent shahar IIB",
  birth_date: "10.09.1999",
  gender: 1,
  nation: "O'zbek",
  country: "Uzbekistan",
  region: "Namangan",
  district: "Turakurgan",
  address: "Beruniy-3",
  passport_file: "password1.png",
  educations: [],
  certifications: [],
  direction: null,
  education_type: null,
  education_language: null,
  exam_score: 12,
  exam_address: "Tashkent",
  is_paid: false,
  authentication_code: null,
  exam_time: "2020-09-07T00:00:00.000Z",
  exam_total_score: null,
  status: 7,
  role_id: 1,
  password: "00000000",
  created_at: "2022-09-17T19:00:00.000Z",
};

const StepFive = () => {
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
                  <h3 className="person_info-desc">
                    {applicant_info.first_name}
                  </h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Familiyasi </p>
                  <h3 className="person_info-desc">
                    {applicant_info.last_name}
                  </h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Sha’rifi</p>
                  <h3 className="person_info-desc">
                    {applicant_info.middle_name}
                  </h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Telefon raqami</p>
                  <h3 className="person_info-desc">{applicant_info.phone}</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Qo’shimcha telefon raqami</p>
                  <h3 className="person_info-desc">+998 99 999 99 99</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Elektron manzili</p>
                  <h3 className="person_info-desc">{applicant_info.email}</h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Nogironlik holati</p>
                  <h3 className="person_info-desc">
                    {applicant_info.is_disabled}
                  </h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">
                    Nogironlik boyicha eslatma
                  </p>
                  <h3 className="person_info-desc">
                    {applicant_info.disabled_type}
                  </h3>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <p className="person_info-title">Fotasurat</p>
              <img
                style={{ width: "150px" }}
                src={applicant_info.avatar}
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
                  <h3 className="person_info-desc">
                    {applicant_info.passport_type}
                  </h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Passport seria raqami </p>
                  <h3 className="person_info-desc">
                    {applicant_info.passport_series}
                  </h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Identification pin</p>
                  <h3 className="person_info-desc">
                    {applicant_info.identification_number}
                  </h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Passport berilgan sana</p>
                  <h3 className="person_info-desc">
                    {applicant_info.passport_issue_date}
                  </h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Amal qilish muddati</p>
                  <h3 className="person_info-desc">
                    {applicant_info.passport_expire_date}
                  </h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Kim tomindan berilgan</p>
                  <h3 className="person_info-desc">
                    {applicant_info.issued_by}
                  </h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Tug’ilgan sanasi</p>
                  <h3 className="person_info-desc">
                    {applicant_info.birth_date}
                  </h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Jinsi</p>
                  <h3 className="person_info-desc">Erkak</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Millati</p>
                  <h3 className="person_info-desc">{applicant_info.nation}</h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Fuqaroligi</p>
                  <h3 className="person_info-desc">{applicant_info.nation}</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Mamlakat</p>
                  <h3 className="person_info-desc">{applicant_info.country}</h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Viloyat</p>
                  <h3 className="person_info-desc">{applicant_info.region}</h3>
                </Col>
              </Row>
              <Row className="person_info-row">
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Shahar / Tuman</p>
                  <h3 className="person_info-desc">
                    {applicant_info.district}
                  </h3>
                </Col>
                <Col className="person_info-col" span={8}>
                  <p className="person_info-title">Manzil</p>
                  <h3 className="person_info-desc">{applicant_info.address}</h3>
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
                  src={"/" + applicant_info.passport_file}
                  alt="person"
                />
                <img
                  style={{ width: "200px", display: "block" }}
                  src="/password2.png"
                  alt="person"
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
                  alt="person"
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
                alt="person"
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
        <div>
          <Button className="btn btn-left" shape="">
            <p>Orqaga</p>
          </Button>
        </div>
        <div>
          <Button className="btn btn-right-decline" shape="">
            <p>Ariza qaytarish</p>
          </Button>
          <Button className="btn btn-right" shape="">
            <p>Ariza yuborish</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepFive;
