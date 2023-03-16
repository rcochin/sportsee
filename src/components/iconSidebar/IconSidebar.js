/**
 * A React component for displaying an icon in the sidebar.
 *
 * @param {Object} props - The component props.
 * @param {string} props.imgSrc - The source URL for the icon image.
 * @returns {JSX.Element} The React component for the icon in the sidebar.
*/
const IconSidebar = ({imgSrc}) => {
    return <img src={imgSrc} alt="icône"/>
}

export default IconSidebar