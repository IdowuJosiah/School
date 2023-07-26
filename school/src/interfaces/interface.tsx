export interface linkItemType {
    title: string,
    path: string
}

export interface navigation extends linkItemType{
    children?: linkItemType[]
}


