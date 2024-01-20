import avatarPng from "../assets/avatar.png"

type propType = {
  image: string
}

function Chip({image}: propType) {
  return (
    <img src={avatarPng} alt="" />
  )
}

export default Chip