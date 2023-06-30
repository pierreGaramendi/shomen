export const Subitem = (props: any) => {
    const { subitem } = props
    return (
        <div className='subitem'>
            <a href="#" className='subitem-link'>{subitem.title}</a>
        </div>
    )
}