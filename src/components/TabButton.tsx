
type TabButtonProps = {
    children: React.ReactNode,
    isActive: boolean,
    onClick: () => void
}

export default function TabButton({children, isActive, onClick}: TabButtonProps) {
if(isActive) {
    return <b className="p-4 m-4 border text-md rounded-sm shadow-sm">{children}</b>
}

return (<button className="p-4 m-4 border text-md rounded-sm shadow-sm" onClick={() => {
    onClick()
}}>{children}</button>)

}