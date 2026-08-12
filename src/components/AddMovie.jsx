import { useState } from "react";

const initialForm = {
  title: "",
  description: "",
  posterURL: "",
  trailerURL: "",
  rating: "",
};

function AddMovie({ onAddMovie }) {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const rating = Number(formData.rating);

    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.posterURL.trim() ||
      !formData.trailerURL.trim()
    ) {
      setError("Please complete every field.");
      return;
    }

    if (rating < 0 || rating > 10) {
      setError("The rating must be between 0 and 10.");
      return;
    }

    onAddMovie({
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
      posterURL: formData.posterURL.trim(),
      trailerURL: formData.trailerURL.trim(),
      rating,
    });

    setFormData(initialForm);
    setError("");
  };

  return (
    <section className="add-panel">
      <div className="section-heading">
        <p className="eyebrow">YOUR COLLECTION</p>
        <h2>Add a new movie</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Movie or TV show title"
            />
          </div>

          <div className="field">
            <label htmlFor="posterURL">Poster URL</label>
            <input
              id="posterURL"
              name="posterURL"
              type="url"
              value={formData.posterURL}
              onChange={handleChange}
              placeholder="https://example.com/poster.jpg"
            />
          </div>

          <div className="field">
            <label htmlFor="trailerURL">Trailer embed URL</label>
            <input
              id="trailerURL"
              name="trailerURL"
              type="url"
              value={formData.trailerURL}
              onChange={handleChange}
              placeholder="https://www.youtube.com/embed/..."
            />
          </div>

          <div className="field description-field">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short description"
              rows="3"
            />
          </div>

          <div className="field rating-field">
            <label htmlFor="rating">Rating / 10</label>
            <input
              id="rating"
              name="rating"
              type="number"
              min="0"
              max="10"
              step="0.1"
              value={formData.rating}
              onChange={handleChange}
              placeholder="8.5"
            />
          </div>
        </div>

        <div className="form-footer">
          {error && <p className="error-message">{error}</p>}
          <button className="primary-button" type="submit">
            + Add movie
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddMovie;
