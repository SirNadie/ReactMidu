export function TwitterFollowCard() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://unavatar.io/sirnadie/" alt="El avatar de SirnNdie" />
        <div className='tw-followCard-info'>
          <strong>Marc Rodriguez</strong>
          <span className='tw-followCard-infoUserName'>@sirnadie</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}