import React from "react";
import "./style.scss";
import DonateForm from "@/components/donateForm/page";
import Image from "next/image";
import qr from "../../public/qr.jpg";
import DonateCalendar from "@/components/DonateCalendar/page";

export const metadata = {
  title: "Donate - Chal Naari: Ashes To Re-birth",
  description:
    "Make a difference - support women and girls by donating to Chal Naari's programs and initiatives.",
};

const Donate = () => {
  return (
    <section className="donate">
      <div className="donateHeader">
        <h1>Donate</h1>
      </div>
      <div className="donateContainer">
        <div className="donateContainerContent">
          <h2>
            At Chal Naari, we offer two convenient modes of accepting donations
            from individuals and communities:
          </h2>
          <div className="donationModes">
            <div className="donationMLeft">
              <h3>1. Direct Donation:</h3>
              <p>
                We accept direct donations via bank transfer, UPI ID or QR Code.
                Donating directly to our bank account is a simple and secure way
                to support our cause of empowering women and girls in the
                community.{" "}
              </p>
              <p>
                You can find our bank account details and UPI ID on our website.
                All donations are tax-deductible and a receipt will be provided
                upon request.
              </p>
              <table>
                <tr>
                  <td>
                    <b>Bank Name</b>
                  </td>
                  <td>Bank of Baroda</td>
                </tr>
                <tr>
                  <td>
                    <b>Account Name</b>
                  </td>
                  <td>Chal Naari Pvt. Ltd</td>
                </tr>
                <tr>
                  <td>
                    <b>Account Number</b>
                  </td>
                  <td>0000 0000 0000 0000</td>
                </tr>
                <tr>
                  <td className="no-border">
                    <b>IFSC Code</b>
                  </td>
                  <td className="no-border">BARB0KANMEE</td>
                </tr>
              </table>
              <div className="qrCode">
                <p className="upi">
                  <span>
                    <b>UPI ID: </b>
                  </span>
                  chalnaari@upi
                </p>
                <Image src={qr} className="qrImage" alt="QR Code" />
              </div>
            </div>
            <div className="donationMRight">
              <h3>2. Local Community Donation:</h3>
              <p>
                We also accept donations from local communities in the form of
                clothes, toiletries, non-perishable food, books, and other
                essential items. Our two vehicles make monthly pick-ups from
                your doorstep, making it easy and hassle-free to donate. Your
                generosity can make a significant impact on the lives of those
                we serve and help us achieve our mission of creating a world
                where every woman has the opportunity to live a life free from
                gender-based violence and discrimination.
              </p>

              <div className="donateCalender">
                <h3>See Available Pickup Dates</h3>
                <div className="donateLocation">
                  <div className="delhi">
                    <h4>Delhi</h4>
                  </div>
                  <div className="noida">
                    <h4>Noida</h4>
                  </div>
                  <div className="ghaziabad">
                    <h4>Ghaziabad</h4>
                  </div>
                  <div className="faridabad">
                    <h4>Faridabad</h4>
                  </div>
                  <div className="gurugram">
                    <h4>Gurugram</h4>
                  </div>
                </div>
                <div className="dCalendar">
                  <DonateCalendar />
                </div>
              </div>
              <DonateForm />
              {/* <DonateForm /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
