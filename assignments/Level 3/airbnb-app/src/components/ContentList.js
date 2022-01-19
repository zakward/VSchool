import React from "react"
import Data from "./Data"
import Content from "../components/Content"

export default function ContentList() {
    const contentElement = Data.map(content => {
        return <Content 
                        key = {content.id}
                        {...content} //spread operator passes in ALL properties of the data
                        // item = {item} could use the item tag to declare an item property but would have to change the syntax of Content to props.item.id etc..



                        // img = {content.coverImg}
                        // title = {content.title}
                        // rating = {content.stats.rating}
                        // reviewCount = {content.stats.reviewCount}
                        // price = {content.price}
                        // location = {content.location}
                        // openSpots = {content.openSpots}
                        />
    })
    return (
        <>
            <section className = "cards-list">
            {contentElement}
            </section>
        </>
    )
}