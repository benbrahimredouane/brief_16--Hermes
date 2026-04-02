
function Filter({ filter, setFilter }) {
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'pending', label: 'Pending' }
  ]

  return (
    <div className="filter">
      {filters.map((filterOption) => (
        <button
          key={filterOption.value}
          onClick={() => setFilter(filterOption.value)}
          className={filter === filterOption.value ? 'active' : ''}
        >
          {filterOption.label}
        </button>
      ))}
    </div>
  )
}

export default Filter
