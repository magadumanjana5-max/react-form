import { useState } from 'react'

export default function FormPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="form-page">
      <section className="form-content">
        <h1>Contact form</h1>
        <p>Fill in your details below and submit the form.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />
          </label>

          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <div className="form-result">
            <p>Thanks for submitting the form.</p>
            <p>
              Name: <strong>{formData.name}</strong>
            </p>
            <p>
              Email: <strong>{formData.email}</strong>
            </p>
            <p>
              Message: <strong>{formData.message}</strong>
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
