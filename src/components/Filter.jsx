function Filter({ titleFilter, ratingFilter, onTitleChange, onRatingChange, onReset }) {
  return (
    <section className="filter-panel" aria-label="Filter movies">
      <div className="field filter-title">
        <label htmlFor="title-filter">Search by title</label>
        <input
          id="title-filter"
          type="search"
          value={titleFilter}
          onChange={(event) => onTitleChange(event.target.value)}
          placeholder="e.g. Interstellar"
        />
      </div>

      <div className="field">
        <label htmlFor="rating-filter">Minimum rating</label>
        <select
          id="rating-filter"
          value={ratingFilter}
          onChange={(event) => onRatingChange(Number(event.target.value))}
        >
          <option value="0">All ratings</option>
          <option value="5">5 and above</option>
          <option value="6">6 and above</option>
          <option value="7">7 and above</option>
          <option value="8">8 and above</option>
          <option value="9">9 and above</option>
        </select>
      </div>

      <button className="secondary-button" type="button" onClick={onReset}>
        Reset filters
      </button>
    </section>
  );
}

export default Filter;
