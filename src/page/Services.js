import styled from "styled-components";

const services = [
  { title: "Video Production", desc: "Professional filming & editing." },
  { title: "Brand Marketing", desc: "Creative brand storytelling." },
  { title: "Event Management", desc: "Lights, camera, action live" },
];

const Container = styled.div`
  padding: 3rem 2rem;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.primary || "#6C63FF"};
  font-weight: 700;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.cardBg || "#fff"};
  max-width: 320px;
  flex: 1 1 280px;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.primary || "#6C63FF"};
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.5;
  }
`;

function Services() {
  return (
    <Container>
      <Title>Our Services</Title>
      <CardsWrapper>
        {services.map((service, index) => (
          <Card key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </Card>
        ))}
      </CardsWrapper>
    </Container>
  );
}

export default Services;
