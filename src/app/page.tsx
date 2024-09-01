"use client";
import DollarIcon from "@/images/icon-dollar.svg";
import PeopleIcon from "@/images/icon-person.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [tipAmount, setTipAmount] = useState<string>("$0.00");
  const [personAmount, setPersonAmount] = useState<string>("$0.00");
  const [totalAmount, setTotalAmount] = useState<number | "">("");
  const [numberPeople, setNumberPeople] = useState<number | "">("");
  const [tipPercentage, setTipPercentage] = useState<number | "">("");
  const [selectedTip, setTip] = useState<number | null>(null);
  const [showPeopleAlert, isShowPeopleAlertSet] = useState<boolean>(false);

  const tipsArray: Array<number> = [5, 10, 15, 25, 50];
  const regexAmount: RegExp = /^[0-9]+\.?[0-9]{0,2}$/;
  const regexDigitsOnly: RegExp = /^[0-9]+$/;

  useEffect(() => {
    calculatePersonAmount();
  }, [totalAmount, numberPeople, tipPercentage, selectedTip]);

  const calculatePersonAmount = () => {
    if (
      checkIfIsNumber(totalAmount) &&
      (checkIfIsNumber(tipPercentage) || checkIfIsNumber(selectedTip)) &&
      checkIfIsNumber(numberPeople)
    ) {
      const selectedTipPercentage: number =
        selectedTip !== null
          ? selectedTip
          : tipPercentage !== ""
          ? tipPercentage
          : 0;
      const tipAmount = totalAmount * (selectedTipPercentage / 100);
      const tipPerPerson = tipAmount / numberPeople;
      const amountPerPerson = (totalAmount + tipAmount) / numberPeople;

      setTipAmount(formatNumbers(tipPerPerson));
      setPersonAmount(formatNumbers(amountPerPerson));
    }
  };

  const formatNumbers = (value: number) => {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const checkIfIsNumber = (variable: any) => {
    return typeof variable === "number";
  };

  const handleTotalAmount = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    const parsedValue = parseFloat(inputValue);

    if (regexAmount.test(inputValue) && parsedValue >= 0) {
      setTotalAmount(parseFloat(inputValue));
    } else if (inputValue === "") {
      setTotalAmount("");
    }
  };

  const handleClickTip = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTip(parseInt(event.currentTarget.value));
  };

  const handleCustomTip = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue: string = event.currentTarget.value;
    const parsedValue: number = parseInt(event.currentTarget.value);

    if (regexDigitsOnly.test(inputValue) && parsedValue <= 100) {
      setTipPercentage(parseInt(event.currentTarget.value));
      setTip(null);
    } else if (inputValue === "") {
      setTipPercentage("");
    }
  };

  const handleNumberOfPersons = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue: string = event.currentTarget.value;

    if (regexAmount.test(inputValue)) {
      setNumberPeople(parseInt(inputValue));
    } else if (inputValue === "") {
      setNumberPeople("");
    }

    if (inputValue === "0") {
      isShowPeopleAlertSet(true);
    } else {
      isShowPeopleAlertSet(false);
    }
  };

  const handleReset = () => {
    setTotalAmount(0);
    setTip(null);
    setTipPercentage("");
    setNumberPeople("");
    setTipAmount("$0.00");
    setPersonAmount("$0.00");
    isShowPeopleAlertSet(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:px-48 xs:px-0 bg-light-grayish-cyan">
      <h2 className="text-very-dark-cyan my-20 tracking-wider text-2xl ">
        S P L I
        <br />T T E R
      </h2>
      <div className="bg-white container p-12 rounded-3xl flex xs:flex-col md:flex-row gap-16 md:w-11/12 xs:w-full mb-20">
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
                width={8}
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
                {tipsArray.map((tip) => (
                  <button
                    key={tip}
                    type="button"
                    value={tip}
                    onClick={handleClickTip}
                    className={`bg-very-dark-cyan xs:text-lg md:text-2xl p-3 rounded-lg text-center text-white hover:bg-light-grayish-cyan hover:text-very-dark-cyan active:bg-primary active:text-very-dark-cyan ${
                      selectedTip == tip ? "activeButton" : ""
                    }`}
                  >
                    {tip}%
                  </button>
                ))}
                <input
                  className="bg-very-light-grayish-cyan xs:text-lg md:text-2xl p-2 rounded-lg text-center text-dark-grayish-cyan placeholder:text-dark-grayish-cyan focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent"
                  type="number"
                  value={tipPercentage}
                  onChange={handleCustomTip}
                  placeholder="Custom"
                  id="tip"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex flex-row">
                <label
                  htmlFor="number-people"
                  className="text-sm font-bold mb-2 text-dark-grayish-cyan"
                >
                  Number of People
                </label>
                {showPeopleAlert ? (
                  <p className="text-sm text-right flex-1 text-red">
                    Can&apos;t be zero
                  </p>
                ) : null}
              </div>
              <div className="bg-very-light-grayish-cyan rounded-lg relative">
                <Image
                  src={PeopleIcon}
                  className="text-bold m-4 inline absolute left-0 -top-0 h-4 w-4"
                  height={12}
                  width={8}
                  alt="people sign icon"
                />
                <input
                  id="bill"
                  name="bill"
                  type="number"
                  value={numberPeople}
                  onChange={handleNumberOfPersons}
                  className={`row-span-2 text-right bg-very-light-grayish-cyan w-full rounded-md h-12 pr-8 text-very-dark-cyan focus:ring-2 focus:ring-primary focus:outline-none focus:border-transparent ${
                    showPeopleAlert
                      ? "ring-2 ring-red focus:ring-2 focus:ring-red"
                      : ""
                  }`}
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
            <p className="text-4xl row-span-2 text-right text-primary">
              {tipAmount}
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-3">
            <div>
              <p className="text-md">Total</p>
              <p className="text-sm text-dark-grayish-cyan">/ person</p>
            </div>
            <h1 className="text-4xl row-span-2 text-right text-primary">
              {personAmount}
            </h1>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="w-full bg-primary py-3 rounded-md text-very-dark-cyan hover:bg-light-grayish-cyan"
          >
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
