import { BooksSection } from "../../BooksSection"
import { DefaultTemplate } from "../../DefaultTemplate"
import { TitleSection } from "../../TitleSection"

export const HomePage = () => {
    return (
        <DefaultTemplate>
            <TitleSection />
            <BooksSection />
        </DefaultTemplate>
    )
}