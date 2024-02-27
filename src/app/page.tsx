"use client";

import React, { ChangeEvent, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import styles from "./page.module.css";

export default function Home() {
  const [bill, setBill] = useState<number>();
  const [numberOfPerson, setNumberOfPerson] = useState<number>();
  const [tip, setTip] = useState<number>(0);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  function handleChangeBill(event: ChangeEvent<HTMLInputElement>) {
    setBill(parseInt(event.target.value));
  }
  function handleCustomePercentage(event: ChangeEvent<HTMLInputElement>) {
    setTip(parseInt(event.target.value));
  }
  function handleChangePersone(event: ChangeEvent<HTMLInputElement>) {
    setNumberOfPerson(parseInt(event.target.value));
  }
  function handlePercentage(event: React.MouseEvent<HTMLButtonElement>) {
    setTip(parseInt(event.currentTarget.value));
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
                value={bill}
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
            <label htmlFor="">Number of people</label>
            <div style={{ position: "relative" }}>
              <IoPerson className={styles.dollar} />
              <input
                type="text"
                value={numberOfPerson}
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
              <div>$0.00</div>
            </div>
            <div className={styles.TotalPerson}>
              <h3>
                Total <br />
                <span>/person</span>
              </h3>
              <div>$0.00</div>
            </div>
          </div>
          <button>Reset</button>
        </div>
      </form>
    </main>
  );
}
