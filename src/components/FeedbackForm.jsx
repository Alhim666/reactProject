import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const validationSchema = z.object({
  firstName: z.string().min(1, { message: 'Firstname is required' }),
  lastName: z.string().min(1, { message: 'Lastname is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  message: z
    .string()
    .min(1, { message: 'Message is required' })
    .max(200, { message: 'Too long message' }),
})

export const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className="container">
      <form className="feedback-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="feedback-text">
          <h1>Feedback form</h1>
        </div>
        <div className="form-row">
          <label htmlFor="firstName">First name</label>
          <input
            className={`${errors.firstName && 'form-error-input'}`}
            id="firstName"
            type="text"
            placeholder="First name"
            {...register('firstName')}
          />
          {errors.firstName && (
            <p className="form-error-text">{errors.firstName?.message}</p>
          )}
        </div>
        <div className="form-row">
          <label htmlFor="lastName">Last name</label>
          <input
            className={`${errors.lastName && 'form-error-input'}`}
            id="lastName"
            type="text"
            placeholder="Last name"
            {...register('lastName')}
          />
          {errors.lastName && (
            <p className="form-error-text">{errors.lastName?.message}</p>
          )}
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            className={`${errors.email && 'form-error-input'}`}
            id="email"
            type="email"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && (
            <p className="form-error-text">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea
            className={`${errors.message && 'form-error-input'}`}
            id="message"
            placeholder="Message"
            {...register('message')}
          />
          {errors.message && (
            <p className="form-error-text">{errors.message?.message}</p>
          )}
        </div>
        <div className="form-row">
          <button className="form-button button" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
