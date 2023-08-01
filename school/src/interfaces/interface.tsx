export interface linkItemType {
    title: string,
    path: string
    isVisible?: boolean
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




