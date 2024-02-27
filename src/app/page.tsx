"use client";
import React, { ChangeEvent, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import styles from "./page.module.css";

export default function Home() {
  const [bill, setBill] = useState<number>(0);
  const [numberOfPerson, setNumberOfPerson] = useState<number>(0.0);
  const [tip, setTip] = useState<number>(0.0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  function handleChangeBill(event: ChangeEvent<HTMLInputElement>) {
    setBill(parseFloat(event.target.value));
  }
  function handleCustomePercentage(event: ChangeEvent<HTMLInputElement>) {
    setTip(parseFloat(event.target.value));
  }
  function handleChangePersone(event: ChangeEvent<HTMLInputElement>) {
    setNumberOfPerson(parseFloat(event.target.value));
  }
  function handlePercentage(event: React.MouseEvent<HTMLButtonElement>) {
    setTip(parseFloat(event.currentTarget.value));
  }
  return (
    <main className={styles.commonProperty}>
      <h1
        style={{
          textTransform: "uppercase",
          color: "var(--Very-dark-cyan)",
          letterSpacing: "10px",
          fontWeight: "400",
          lineHeight: "2.5rem",
        }}
      >
        splt
        <br />
        tter
      </h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.divOne}>
          <div className={styles.billSection}>
            <label htmlFor="">Bill</label>
            <div style={{ position: "relative" }}>
              <BsCurrencyDollar className={styles.dollar} />
              <input
                type="text"
                value={bill ? bill : "0"}
                onChange={handleChangeBill}
                placeholder="0"
              />
            </div>
          </div>

          <div style={{ width: "90%" }}>
            <label htmlFor="">Select Tip %</label>
            <div className={styles.parcentage}>
              <button type="button" value={5} onClick={handlePercentage}>
                5%
              </button>
              <button type="button" value={10} onClick={handlePercentage}>
                10%
              </button>
              <button type="button" value={15} onClick={handlePercentage}>
                15%
              </button>
              <button type="button" value={25} onClick={handlePercentage}>
                25%
              </button>
              <button type="button" value={50} onClick={handlePercentage}>
                50%
              </button>
              <input
                type="text"
                placeholder="Custom"
                // value={tip}
                onChange={handleCustomePercentage}
              />
            </div>
          </div>
          <div className={styles.billSection}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label htmlFor="">Number of people</label>
              {!numberOfPerson ? (
                <span style={{ color: "red", fontSize: ".6rem" }}>
                  Can not be zero
                </span>
              ) : (
                ""
              )}
            </div>
            <div style={{ position: "relative" }}>
              <IoPerson className={styles.dollar} />
              <input
                type="text"
                value={numberOfPerson ? numberOfPerson : "0"}
                onChange={handleChangePersone}
                placeholder="0"
              />
            </div>
          </div>
        </div>

        <div className={styles.divTwo}>
          <div>
            <div className={styles.tipPerson}>
              <h3>
                Tip Amount <br />
                <span>/person</span>
              </h3>
              <div>${bill & tip ? bill + (bill / 100) * tip : "0.00"}</div>
            </div>
            <div className={styles.TotalPerson}>
              <h3>
                Total <br />
                <span>/person</span>
              </h3>
              <div>
                $
                {numberOfPerson
                  ? parseFloat((bill + (bill / 100) * tip).toFixed(2)) /
                    numberOfPerson
                  : "0.00"}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setBill(0);
              setNumberOfPerson(0);
              setTip(0);
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </main>
  );
}
