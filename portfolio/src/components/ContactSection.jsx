import { useState } from 'react'
import { SectionHeading } from './SectionHeading'

export function ContactSection({ contact }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const formId = 'contact-form'
  const formLabels = contact.form

  function handleFieldChange(event) {
    const { name, value } = event.target
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const subject = formValues.subject.trim() || formLabels.defaultSubject
    const body = [
      `${formLabels.nameLabel}: ${formValues.name}`,
      `${formLabels.emailLabel}: ${formValues.email}`,
      '',
      formLabels.messageLabel,
      formValues.message,
    ].join('\n')

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="content-section contact scroll-mt-28 md:scroll-mt-32" id="contact">
      <div className="container">
        <div className="contact-panel contact__panel">
          <SectionHeading
            eyebrow={contact.eyebrow}
            heading={contact.heading}
            paragraph={contact.text}
          />

          <div className="contact-links contact__links">
            <button
              className="contact-email-button contact__email-button"
              type="button"
              aria-expanded={isFormOpen}
              aria-controls={formId}
              onClick={() => setIsFormOpen((currentValue) => !currentValue)}
            >
              <span>{contact.email}</span>
              <span className="contact-email-button-action contact__email-button-action">
                {isFormOpen ? formLabels.hideFormLabel : formLabels.showFormLabel}
              </span>
            </button>
            <a className="contact__link" href={contact.github} target="_blank" rel="noreferrer">
              {contact.githubLabel}
            </a>
            <a className="contact__link" href={contact.linkedin} target="_blank" rel="noreferrer">
              {contact.linkedinLabel}
            </a>
          </div>

          <div
            className={`contact-form-shell contact__form-shell${isFormOpen ? ' is-open' : ''}`}
            id={formId}
            aria-hidden={!isFormOpen}
          >
            <div className="contact-form-inner contact__form-inner">
              <div className="contact-form-top contact__form-top">
                <p>{formLabels.intro}</p>
                <button
                  className="contact-form-close contact__form-close"
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  disabled={!isFormOpen}
                >
                  {formLabels.closeLabel}
                </button>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <label className="contact-form__field">
                  {formLabels.nameLabel}
                  <input
                    className="contact-form__input"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleFieldChange}
                    autoComplete="name"
                    disabled={!isFormOpen}
                    required
                  />
                </label>

                <label className="contact-form__field">
                  {formLabels.emailLabel}
                  <input
                    className="contact-form__input"
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleFieldChange}
                    autoComplete="email"
                    disabled={!isFormOpen}
                    required
                  />
                </label>

                <label className="contact-form-full contact-form__field">
                  {formLabels.subjectLabel}
                  <input
                    className="contact-form__input"
                    type="text"
                    name="subject"
                    value={formValues.subject}
                    onChange={handleFieldChange}
                    disabled={!isFormOpen}
                    required
                  />
                </label>

                <label className="contact-form-full contact-form__field">
                  {formLabels.messageLabel}
                  <textarea
                    className="contact-form__input contact-form__input--textarea"
                    name="message"
                    value={formValues.message}
                    onChange={handleFieldChange}
                    rows="5"
                    disabled={!isFormOpen}
                    required
                  />
                </label>

                <button
                  className="button button-primary contact-form-submit contact-form__submit"
                  type="submit"
                  disabled={!isFormOpen}
                >
                  {formLabels.sendLabel}
                </button>
              </form>
            </div>
          </div>

          <a className="button button-primary contact__download" href={contact.cvLink} download>
            {contact.downloadLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
