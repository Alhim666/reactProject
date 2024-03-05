import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const validationSchema = z.object({
  type: z.string(),
  limit: z.string(),
  name: z.string().max(40, 'Too long'),
})

export const HomeForm = ({ redirectToGame }) => {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: localStorage.getItem('name'),
    },
  })

  const onSubmit = (data) => {
    redirectToGame(data)
    reset()
  }

  return (
    <form className="home-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <label htmlFor="type">Type:</label>
        <select id="type" {...register('type')}>
          <option value="fruits">Fruits</option>
          <option value="countries">Countries</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="limit">Amount:</label>
        <select id="limit" {...register('limit')} defaultValue="15">
          <option value="8">16</option>
          <option value="10">20</option>
          <option value="12">24</option>
          <option value="15">30</option>
          <option value="18">36</option>
          <option value="20">40</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          {...register('name', {
            onChange: (e) => {
              localStorage.setItem('name', e.target.value)
            },
          })}
        />
      </div>
      <button className="home-button button" type="submit">
        Start a game
      </button>
    </form>
  )
}
