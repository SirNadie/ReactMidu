import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName="sirnadie" name="Marc Rodriguez" />
      <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Duran" />
      <TwitterFollowCard isFollowing={false} userName="elonmusk" name="Elon Musk" />
    </section>
  )
}