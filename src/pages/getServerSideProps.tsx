import { GetServerSideProps, NextPage } from 'next'

type Props = {
  name: string
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/dummy`)
  const data = await res.json()
  // eslint-disable-next-line no-console
  console.log('リクエストで毎回動く')
  return {
    props: data,
  }
}

const Home: NextPage<Props> = ({ name }) => {
  return (
    <div>
      <div>npm run build → npm start を実行</div>
      <div>ターミナルに リクエストで毎回動く の文字が出るのを確認できます</div>
      <div>{name}</div>
    </div>
  )
}

export default Home
