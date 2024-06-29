
type BodyType = {
    title: string
}

export const Body = (props: BodyType) => {
    return (
        <>{props.title}</>
    )
}