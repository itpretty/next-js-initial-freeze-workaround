// import Link from 'next/link'
import { gql, useMutation } from '@apollo/client'
import { getErrorMessage } from '../lib/form'
import Field from '../components/field'
import useSWR  from 'swr'
import request from '../request'

const SignUpMutation = gql`
  mutation SignUpMutation($email: String!, $password: String!) {
    signUp(input: { email: $email, password: $password }) {
      user {
        id
        email
      }
    }
  }
`

function SignUp({globalConst, router, Link, useState, useEffect, useStore}) {
  const [signUp] = useMutation(SignUpMutation)
  const [errorMsg, setErrorMsg] = useState()

  const { getStore, setStore } = useStore()
  useEffect(()=>{
    setStore({signup: true})

    request.get('/repos/itpretty/ant-design-pro')
    .then(function(response) {
      console.log('frontend return: '+JSON.stringify(response?.parent?.owner,null,4))
    })
    .catch(function(error) {
      console.log(error);
    });
  }, [])



  async function handleSubmit(event) {
    event.preventDefault()
    const emailElement = event.currentTarget.elements.email
    const passwordElement = event.currentTarget.elements.password

    try {
      await signUp({
        variables: {
          email: emailElement.value,
          password: passwordElement.value,
        },
      })

      router.push('/signin')
    } catch (error) {
      setErrorMsg(getErrorMessage(error))
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {errorMsg && <p>{errorMsg}</p>}
        <Field
          name="email"
          type="email"
          autoComplete="email"
          required
          label="Email"
        />
        <Field
          name="password"
          type="password"
          autoComplete="password"
          required
          label="Password"
        />
        <button type="submit">Sign up</button> or{' '}
        <Link href="signin">
          <a>Sign in</a>
        </Link>
      </form>
      {ef.frontend}<br />
      {globalConst}<br />
      {ef.frontend}
      {console.log('Forntend prints: '+ ef.common)}
    </>
  )
}

export async function getStaticProps() {
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const json = await res.json()
  // console.log('server side: ', ef.common)

  request
  .get('/repos/itpretty/ant-design-pro')
  .then(function(response) {
    console.log('backend return: '+JSON.stringify(response?.parent?.owner,null,4))
  })
  .catch(function(error) {
    console.log(error);
  });

  return {
    props: {
      // stars: json?.stargazers_count,
      globalConst: ef.common
    },
  }
}

export default SignUp
