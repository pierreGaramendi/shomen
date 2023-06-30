export const Subitem = (props: any) => {
    const { subitem } = props
    return (
        <div className='subitem'>
            <div className='subitem-link'>{subitem.title}</div>
        </div>
    )
}