export default function ContactCompoent({
  formFields,
  errors,
  submitted,
  handleInputChange,
  handleBlur,
  handleSubmit,
  handleFormReset,
}) {
  return (
    <div>
      {submitted ? (
        <div>
          <p>
            <strong>Thank you for your inquiry!</strong>
          </p>
          <p>
            <strong>
              Your message has been submitted. Once received, I will respond as
              soon as possible.
            </strong>
          </p>
          <p>
            <strong>
              <em>Have a great day!</em>
            </strong>
          </p>
          <button id="resubmitBtn" onClick={handleFormReset}>
            Submit Another Message
          </button>
        </div>
      ) : (
        <>
          <h1>Contact</h1>
          <form
            className="contact"
            name="contact"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="form-name"
              value="portfolioContactForm"
            />
            <div>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formFields.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Name here..."
              />
              {errors.name && <p>{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formFields.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Email here..."
              />
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message"></label>
              <textarea
                id="message"
                name="message"
                value={formFields.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Message here..."
              />
              {errors.message && <p>{errors.message}</p>}
            </div>

            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}
