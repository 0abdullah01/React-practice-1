import React from "react"

export default function Card(props) {
    return (
        <section className="card">
            <img src={props.item.imageUrl} className="card--img" />
            <div className="info">
                <div className="info--location">
                    <img src="../images/location-logo.png" />
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3 className="info--title">{props.item.title}</h3>
                <p className="info--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="info--description">{props.item.description}</p>
            </div>
        </section>
    )
}