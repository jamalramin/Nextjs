"use client"
import React from 'react'
import styles from "./productCard.module.css"

const AddToCard = () => {
  return (
    <button className="px-5 py-2 rounded bg-sky-400 text-white mt-5 " onClick={() => alert("clicked")}>Click</button>
  )
}

export default AddToCard