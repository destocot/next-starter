'use server'

export async function signupAction(formData: FormData) {
  const values = Object.fromEntries(formData.entries())
  const email = `${values.email}`
  const password = `${values.password}`

  console.dir({ email, password }, { depth: null, colors: true })
}
