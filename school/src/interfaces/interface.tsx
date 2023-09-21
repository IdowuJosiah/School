import exp from "constants";

export interface linkItemType {
    title: string,
    path: string
    isVisible?: boolean
}
export interface schoolNumbers{
    number:number

    title: string

}
export interface images {
    image: string
}
export interface reviewDetails {
    parentImage: string

    parentReview: string

    parentName: string
}
export interface questions{

    question: string
    answer: string
}

export interface navigation extends linkItemType{
    children?: linkItemType[]
}
export interface flyer {
    eBanner : string
}
export interface slideShow {
    background: string
    bannerText: string

}
export interface footer{
    title: string
    path : string



}




