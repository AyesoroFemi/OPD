import React from "react";
import DummyMoney from "../../../assets/dummy_money.svg";

function Product() {
  return (
    <div className="bg-[#6666FF] mt-10">
      <div className="max-w-screen-xl mx-auto flex gap-16 py-24">
        <div className="basis-1/2">
          {" "}
          <img src={DummyMoney} alt="" />
        </div>
        <div className="basis-1/2 mt-10">
          <p className="text-5xl font-Cabinet_Grotesk text-white w-11/12">
            This is a product designed to allow offline transaction
          </p>
          <p className="mt-4 w-11/12 text-white text-xl">
            This will be a unique product designed to allow offline transactions
            using an offline-ledger blockchain approach. This will be a unique
            product designed to allow offline transactions using an
            offline-ledger blockchain approach.This will be a unique product
            designed to allow offline transactions using a n offline-ledger
            blockchain approach.This will be a unique product designed to allow
            offline transactions using an offline-ledger blockchain
            approach.This will be a unique product designed to allow offline
            transactions using an offline-ledger blockchain approach.This will
            be a unique product designed to allow offline transactions using an
            offline-ledger blockchain approach.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
