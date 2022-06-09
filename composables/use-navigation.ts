export interface INavigationItem {
    title: string,
    to: string
}

export interface INavigation {
    baseItems: INavigationItem[],
    additionalItems: INavigationItem[],
    authItems: INavigationItem[],
}

const baseItems: INavigationItem[] = [
    { title: "Главная", to: "/" },
    { title: "Соискатели", to: "/candidates" },
]

const additionalItems: INavigationItem[] = [
    { title: "О сервисе", to: "/articles/1"}
]

const authItems: INavigationItem[] = [
    { title: "Вход", to: "/login" },
    { title: "Регистрация", to: "/register" },
]

export default function useNavigation (): INavigation {
    return {
        baseItems,
        additionalItems,
        authItems
    }
}