
function SideBarList({ list }) {
  return (
    <>
      {
      list && list.length !== 0 ?
      <ul className="sidebar-list">
        {
          list.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul> : null
      }
    </>
  )
}

export default SideBarList;