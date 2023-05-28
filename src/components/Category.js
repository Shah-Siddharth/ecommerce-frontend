function Category({id, title, handleClick}) {
    return <div className="category" onClick={() => handleClick(id)}>{title}</div>
}

export default Category;