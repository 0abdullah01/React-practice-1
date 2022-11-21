import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cardData = data.map(item => <Card 
            key={item.title}
            item={item} 
        />)
    return (
        <div>
            <Navbar />
            {cardData}
        </div>
    )
}