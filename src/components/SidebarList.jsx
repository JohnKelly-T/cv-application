function SideBarList({ list }) {
  return (
    <>
      {list && list.length !== 0 ? (
        <ul className="sidebar-list">
          {list.map((item, index) =>
            typeof item === "object" ? (
              <li key={index}>
                <a href={item.url}>{item.linkText}</a>
              </li>
            ) : (
              <li key={index}>{item}</li>
            ),
          )}
        </ul>
      ) : null}
    </>
  );
}

export default SideBarList;
