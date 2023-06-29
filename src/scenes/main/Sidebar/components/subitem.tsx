export const Subitem = (props: any) => {
    const { subitem } = props
    return (
        <li className='subitem'>
            <a href="#" className='subitem-link'>{subitem.title}</a>
        </li>
    )
}