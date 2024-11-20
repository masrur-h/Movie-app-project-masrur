import './MovieCard.css';
export const MovieCard = () => {
  return (
    <div className='card-container'>
      <div className='card-img-container'>
      <img src='data:image/jpeg;base64,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' 
      alt='movie-card'/>
      </div>
          <div className='card-details'>
          <div>
            <span className='title'>The Shawshank</span>
            </div>
            <div>
              <span className='genre'>Genre: Drama</span>
            </div>
            <div className='ratings'>
              <span >Rating: 4.8</span>
              <span >: 2h 22min</span>
            </div>
          
          </div>
          </div>
  )
}