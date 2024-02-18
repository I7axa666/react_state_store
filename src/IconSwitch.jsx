function IconSwitch (props) {
    const {icon, onSwitch } = props
    // console.log(icon)
  return (
    <>
      <span
       className="material-icons"
       onClick={onSwitch}
       >
        {icon}
      </span>
    </>
  )
}

export default IconSwitch