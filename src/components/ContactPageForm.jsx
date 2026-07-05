import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { useState } from 'react'

const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'Your first name must be at least 2 characters long' })
    .max(30, { message: 'Your first name is too long' })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        'First name can only contain letters, spaces, hyphens, and apostrophes',
    }),
  lastName: z
    .string()
    .min(2, { message: 'Your last name must be at least 2 characters long' })
    .max(30, { message: 'Your last name is too long' })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        'Last name can only contain letters, spaces, hyphens, and apostrophes',
    }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phoneNumber: z.string().regex(/^(?:\+254|07)\d{8}$/, {
    message:
      'Phone number must start with +254... or 07... and have 10 digits in total',
  }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
})

const ContactPageForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    },
    validators: { onChange: contactSchema },
    onSubmit: async ({ value, formApi }) => {
      if (isSubmitting) return
      setIsSubmitting(true)

      const body = `Name: ${value.firstName} ${value.lastName}%0D%0AEmail: ${value.email}%0D%0APhone: ${value.phoneNumber}%0D%0A%0D%0A${value.message}`
      const mailtoLink = `mailto:globalbridgetoursandtravel@gmail.com?subject=${encodeURIComponent(
        value.subject
      )}&body=${body}`

      window.location.href = mailtoLink
      formApi.reset({ deep: true, keepMeta: false })

      setTimeout(() => setIsSubmitting(false), 1500)
    },
  })

  return (
    <div className="formContainer bg-white border border-gray-100 lg:max-w-lg rounded-lg p-3 sm:p-6 lg:p-8 mb-5">
      <div className="text-center mb-8">
        <h1 className="font-bigB text-2xl text-navy mb-1">Let's talk</h1>
        <p className="text-gray-600">We usually reply within a day.</p>
      </div>

      <form
        className="space-y-2 font-poppins"
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
          {['firstName', 'lastName', 'email', 'phoneNumber'].map(
            (fieldName) => (
              <form.Field name={fieldName} key={fieldName}>
                {(field) => (
                  <div>
                    <label
                      htmlFor={fieldName}
                      className="block text-navy font-semibold text-sm mb-2 uppercase"
                    >
                      {fieldName.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <input
                      type={fieldName === 'email' ? 'email' : 'text'}
                      id={fieldName}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder={`Enter your ${fieldName
                        .replace(/([A-Z])/g, ' $1')
                        .trim()
                        .toLowerCase()}`}
                      className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                    <p className="text-red-600 text-sm mt-1">
                      {field.state.meta.errors
                        .map((error) => error.message)
                        .join(', ')}
                    </p>
                  </div>
                )}
              </form.Field>
            )
          )}
        </div>

        <form.Field name="subject">
          {(field) => (
            <div>
              <label
                htmlFor="subject"
                className="block text-navy font-semibold text-sm mb-2 uppercase"
              >
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter the subject..."
                className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold"
              />
              {field.state.meta.errors.length > 0 && (
                <p className="text-red-600 text-sm mt-1">
                  {field.state.meta.errors
                    .map((error) => error.message)
                    .join(', ')}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field name="message">
          {(field) => (
            <div>
              <label
                htmlFor="message"
                className="block text-navy font-semibold text-sm mb-2 uppercase"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                rows={3}
                className="w-full p-2 border border-gray-300 text-sm rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Write your message..."
              />
              <p className="text-red-600 text-sm mt-1">
                {field.state.meta.errors
                  .map((error) => error.message)
                  .join(', ')}
              </p>
            </div>
          )}
        </form.Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-2 bg-gold text-navy rounded-md font-poppins font-semibold hover:bg-goldLight transition duration-300 disabled:bg-gray-400"
        >
          {isSubmitting ? 'Opening your email app...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
export default ContactPageForm