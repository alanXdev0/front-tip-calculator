"use client";
import DollarIcon from "@/images/icon-dollar.svg";
import PeopleIcon from "@/images/icon-person.svg";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [tipAmount, setTipAmount] = useState(0);
  const [personAmount, setPersonAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [numberPeople, setNumberPeople] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);

  const handleTotalAmount = (event: React.FormEvent<HTMLInputElement>) => {
    setTotalAmount(parseFloat(event.currentTarget.value));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:px-48 sm:px-0 bg-light-grayish-cyan">
      <h2 className="text-very-dark-cyan my-20 tracking-wider text-2xl ">
        S P L I
        <br />T T E R
      </h2>
      <div className="bg-white container p-12 rounded-3xl flex sm:flex-col md:flex-row gap-16 md:w-11/12 sm:w-full mb-20">
        <div className="flex-1">
          <div className="mb-12 mt-4 w-full">
            <label
              htmlFor="bill"
              className="block text-sm font-bold mb-2 text-dark-grayish-cyan"
            >
              Bill
            </label>
            <div className="bg-very-light-grayish-cyan rounded-lg relative">
              <Image
                src={DollarIcon}
                className="text-bold m-4 inline absolute left-0 -top-0 h-4 w-4"
                height={12}
                width={12}
                alt="dolar sign icon"
              />
              <input
                id="bill"
                name="bill"
                type="number"
                value={totalAmount}
                onChange={handleTotalAmount}
                className="row-span-2 text-right bg-very-light-grayish-cyan w-full rounded-md h-12 pr-8 text-very-dark-cyan focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent"
              />
            </div>
            <div className="my-12">
              <label
                htmlFor="tip"
                className="block text-sm font-bold mb-2 text-dark-grayish-cyan"
              >
                Select Tip %
              </label>
              <div className="grid grid-cols-3 gap-4">
                <button className="bg-very-dark-cyan text-2xl p-3 rounded-lg text-center text-white hover:bg-light-grayish-cyan hover:text-very-dark-cyan active:bg-primary active:text-very-dark-cyan">
                  5%
                </button>
                <button className="bg-very-dark-cyan text-2xl p-3 rounded-lg text-center text-white hover:bg-light-grayish-cyan hover:text-very-dark-cyan active:bg-primary active:text-very-dark-cyan">
                  10%
                </button>
                <button className="bg-very-dark-cyan text-2xl p-3 rounded-lg text-center text-white hover:bg-light-grayish-cyan hover:text-very-dark-cyan active:bg-primary active:text-very-dark-cyan">
                  15%
                </button>
                <button className="bg-very-dark-cyan text-2xl p-3 rounded-lg text-center text-white hover:bg-light-grayish-cyan hover:text-very-dark-cyan active:bg-primary active:text-very-dark-cyan">
                  25%
                </button>
                <button className="bg-very-dark-cyan text-2xl p-3 rounded-lg text-center text-white hover:bg-light-grayish-cyan hover:text-very-dark-cyan active:bg-primary active:text-very-dark-cyan">
                  50%
                </button>
                <input
                  className="bg-very-light-grayish-cyan text-2xl p-2 rounded-lg text-center text-dark-grayish-cyan placeholder:text-dark-grayish-cyan focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent"
                  type="number"
                  placeholder="Custom"
                  id="tip"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="number-people"
                className="block text-sm font-bold mb-2 text-dark-grayish-cyan"
              >
                Number of People
              </label>
              <div className="bg-very-light-grayish-cyan rounded-lg relative">
                <Image
                  src={PeopleIcon}
                  className="text-bold m-4 inline absolute left-0 -top-0 h-4 w-4"
                  height={12}
                  width={12}
                  alt="people sign icon"
                />
                <input
                  id="bill"
                  name="bill"
                  type="number"
                  className="row-span-2 text-right bg-very-light-grayish-cyan w-full rounded-md h-12 pr-8 text-very-dark-cyan focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-very-dark-cyan rounded-2xl text-white px-12 py-8 relative flex-1">
          <div className="grid grid-cols-2 grid-rows-3">
            <div className="row-span-1">
              <p className="text-md">Tip Amount</p>
              <p className="text-sm text-dark-grayish-cyan">/ person</p>
            </div>
            <p className="text-4xl row-span-2 text-right text-primary">$4.27</p>
          </div>
          <div className="grid grid-cols-2 grid-rows-3">
            <div>
              <p className="text-md">Total</p>
              <p className="text-sm text-dark-grayish-cyan">/ person</p>
            </div>
            <h1 className="text-4xl row-span-2 text-right text-primary">
              $32.79
            </h1>
          </div>
          <button className="w-full bg-primary py-3 rounded-md text-very-dark-cyan hover:bg-light-grayish-cyan">
            RESET
          </button>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://alananaya.dev">Alan Anaya</a>.
      </div>
    </main>
  );
}
