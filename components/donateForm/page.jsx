"use client";

import React from "react";
import Select from "react-select";

import "./style.scss";

const options = [
  { value: "Clothing", label: "Clothing" },
  { value: "Footwear", label: "Footwear" },
  { value: "Accessories", label: "Accessories" },
  { value: "Bedding", label: "Bedding" },
  { value: "Kitchenware", label: "Kitchenware" },
  { value: "Furniture", label: "Furniture" },
  { value: "Electronics", label: "Electronics" },
  { value: "Toys", label: "Toys" },
  { value: "Books", label: "Books" },
  { value: "Sports equipment", label: "Sports equipment" },
  { value: "Art supplies", label: "Art supplies" },
  { value: "Musical instruments", label: "Musical instruments" },
  { value: "Pet supplies", label: "Pet supplies" },
  { value: "Tools", label: "Tools" },
  { value: "Gardening supplies", label: "Gardening supplies" },
  { value: "School supplies", label: "School supplies" },
  { value: "Beauty products", label: "Beauty products" },
  { value: "Baby items", label: "Baby items" },
  { value: "Home decor", label: "Home decor" },
  { value: "Office supplies", label: "Office supplies" },
  { value: "Food and beverages", label: "Food and beverages" },
  { value: "Cleaning supplies", label: "Cleaning supplies" },
  { value: "Personal hygiene items", label: "Personal hygiene items" },
  { value: "Medical supplies", label: "Medical supplies" },
  { value: "Household appliances", label: "Household appliances" },
  { value: "Safety equipment", label: "Safety equipment" },
  { value: "Outdoor gear", label: "Outdoor gear" },
  { value: "Travel accessories", label: "Travel accessories" },
  { value: "Fitness equipment", label: "Fitness equipment" },
  { value: "Technology accessories", label: "Technology accessories" },
  { value: "Craft supplies", label: "Craft supplies" },
  { value: "Musical recordings", label: "Musical recordings" },
  { value: "Board games and puzzles", label: "Board games and puzzles" },
  { value: "Collectibles and antiques", label: "Collectibles and antiques" },
  {
    value: "Home improvement tools and supplies",
    label: "Home improvement tools and supplies",
  },
  { value: "DIY crafting supplies", label: "DIY crafting supplies" },
  {
    value: "Knitting and sewing supplies",
    label: "Knitting and sewing supplies",
  },
  { value: "Jewelry making supplies", label: "Jewelry making supplies" },
  { value: "Sporting goods", label: "Sporting goods" },
  { value: "Others", label: "Others" },
];

const DonateForm = () => {
  return (
    <form className="donateForm">
      <div className="donateFormTab">
        <div className="donateInputs">
          <input type="text" placeholder="Name" />
        </div>

        <div className="donateInputs">
          <input type="number" placeholder="Phone" />
        </div>
      </div>

      <div className="donateFormTab">
        <div className="donateInputs">
          <input type="email" placeholder="Email" />
        </div>

        <div className="donateInputs">
          <Select
            isMulti
            options={options}
            placeholder="Select Products"
            className="donateInputSelect"
          />
        </div>
      </div>

      <div className="donateFormTab">
        <div className="donateInputs">
          <input type="number" placeholder="Average Qualtity" />
        </div>
        <div className="donateInputs">
          <input type="text" placeholder="Any Message" />
        </div>
      </div>

      <div className="donateFormTab">
        <div className="donateInputs">
          <select>
            <option>--Location---</option>
            <option>Delhi</option>
            <option>Noida</option>
            <option>Ghaziabad</option>
            <option>Faridabad</option>
            <option>Gurugram</option>
          </select>
        </div>
        <div className="donateInputs">
          <input type="number" placeholder="Pincode" />
        </div>
      </div>

      <div className="donateFormTab">
        <div className="donateInputs">
          <input placeholder="House No." type="number" />
        </div>
        <div className="donateInputs">
          <input type="text" placeholder="Landmark" />
        </div>
      </div>

      <div className="donateFormTab">
        <div className="donateInputs">
          <input type="text" placeholder="Street Address" />
        </div>
        <div className="donateInputs">
          <input type="submit" />
        </div>
      </div>
    </form>
  );
};

export default DonateForm;
