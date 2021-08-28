import { Container } from './styles';

export function AnimeOfWeek() {
  return (
    <Container>
      <div className="message">
        <h3>This week we recommend you watch Boku no Hero</h3>
      </div>

      <div className="anime">
        <a href="#">
          <img 
            src="https://i.pinimg.com/564x/31/e5/bc/31e5bcb8334258abb49026a1de696fd1.jpg" 
            alt="boku no hero" 
          />
        </a>

        <span>
          The anime is about a academy of heroes, 
          Where they fight together for defeat the anti-heroes
        </span>
      </div>
    </Container>
  )
}