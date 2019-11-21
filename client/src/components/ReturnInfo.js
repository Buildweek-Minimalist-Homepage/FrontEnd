
function ReturnInfo(props) {
  return(
    props.members.map(
      member => (
      console.log (`key = ${member.id}
          Name: ${member.name}
          Email:${member.email}
          Password: ${member.password}`)
      )
    )
  )
}
export default ReturnInfo