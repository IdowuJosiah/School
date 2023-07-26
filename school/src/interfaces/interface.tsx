export interface navigation {
    title: string,
    path: string
    children?: dropdownItems []
}

export interface dropdownItems {
    itemOne: string
    itemTwo: string
    itemThree?: string,
    itemFour?:string,
    itemFive?: string,
}

