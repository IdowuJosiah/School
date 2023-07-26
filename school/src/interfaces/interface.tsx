export interface linkItemType {
    title: string,
    path: string
}
export interface slideShow {
    background: string
    bannerText: string

}
export interface navigation extends linkItemType{
    children?: linkItemType[]
}



