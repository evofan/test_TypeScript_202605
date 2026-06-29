import { Text } from "./libs/Text"
import { Heading } from "./libs/Heading"

export const App = () => {
    return (
        // <h1>React App</h1>

        <>
            <Text text="true" />
            <Heading tag="h1">見出し</Heading>
            <Heading tag="h1">
                <span>hello, world</span>
            </Heading>
        </>
    )
}