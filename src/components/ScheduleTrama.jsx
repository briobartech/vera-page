import styled from "styled-components";

const ScheduleTrama = ({ datos }) => {
  return (
    <Wrapper>
      <Header>
        <div>
          <Eyebrow>HORARIOS</Eyebrow>
          {/* <Title>Organigrama inicial</Title> */}
          <Description>
            Consultá los días, horarios y referentes disponibles.
          </Description>
        </div>

        <GlassIcon>
          <span>⌖</span>
        </GlassIcon>
      </Header>

      <AgendaContainer>

        {/* ENCABEZADO DESKTOP */}
        <TableHeader>
          <span>Día</span>
          <span>Horario</span>
          <span>Actividad</span>
          <span>Referente</span>
          <span aria-hidden="true" />
        </TableHeader>

        {datos.map((dia) => (
          <DaySection key={dia.dia}>

            <DayTitle>
              <DayDot />
              {dia.dia}
            </DayTitle>

            <Items>
              {dia.items.map((item, index) => (
                <AgendaItem key={index}>
                  <DayCell>{dia.dia}</DayCell>

                  <Time>
                    <TimeIcon>◷</TimeIcon>
                    {item.horario}
                  </Time>

                  <Activity>
                    <ActivityTitle>
                      {item.actividad}
                    </ActivityTitle>

                    {item.nota && (
                      <Note>
                        {item.nota}
                      </Note>
                    )}
                  </Activity>

                  <Professor>
                    <Avatar>
                      {item.profesor.charAt(0)}
                    </Avatar>

                    <ProfessorInfo>
                      <ProfessorName>
                        {item.profesor}
                      </ProfessorName>

                      <ProfessorRole>
                        REFERENTE
                      </ProfessorRole>
                    </ProfessorInfo>
                  </Professor>

                  <Arrow>
                    →
                  </Arrow>

                </AgendaItem>
              ))}
            </Items>

          </DaySection>
        ))}

      </AgendaContainer>
    </Wrapper>
  );
};

export default ScheduleTrama;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 2rem 0;

  color: #21183f;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 1.5rem;

  @media (max-width: 700px) {
    align-items: flex-start;
  }
`;

export const Eyebrow = styled.span`
  display: block;

  margin-bottom: 8px;

  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;

  opacity: 0.55;
`;

export const Title = styled.h2`
  margin: 0;

  font-size: clamp(1.5rem, 3vw, 2.4rem);
  line-height: 1;
  letter-spacing: -0.04em;
  font-weight: 700;
`;

export const Description = styled.p`
  max-width: 460px;

  margin: 0.75rem 0 0;

  font-size: 0.9rem;
  line-height: 1.45;

  opacity: 0.6;
`;

export const GlassIcon = styled.div`
  width: 46px;
  height: 46px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 15px;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.55),
    rgba(255, 255, 255, 0.18)
  );

  border: 1px solid rgba(255, 255, 255, 0.65);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    0 15px 35px rgba(50, 30, 100, 0.12);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  span {
    font-size: 1.2rem;
  }
`;

export const AgendaContainer = styled.div`
  position: relative;

  overflow: hidden;

  border-radius: 1.25rem;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.48),
    rgba(255, 255, 255, 0.18)
  );

  border: 1px solid rgba(255, 255, 255, 0.65);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    inset 0 -1px 0 rgba(255, 255, 255, 0.25),
    0 30px 80px rgba(50, 30, 100, 0.16);

  backdrop-filter: blur(30px) saturate(150%);
  -webkit-backdrop-filter: blur(30px) saturate(150%);

  &::before {
    content: "";

    position: absolute;
    inset: 0;

    pointer-events: none;

    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.28),
      transparent 35%,
      transparent 70%,
      rgba(255, 255, 255, 0.12)
    );
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 120px 150px 1fr 180px 24px;

  padding: 0.8rem 1rem;

  border-bottom: 1px solid rgba(255, 255, 255, 0.35);

  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  opacity: 0.5;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const DaySection = styled.div`
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.28);
  }
`;

export const DayTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 20px 28px 8px;

  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  opacity: 0.6;

  @media (min-width: 851px) {
    display: none;
  }
`;

export const DayDot = styled.span`
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: currentColor;

  box-shadow: 0 0 12px currentColor;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AgendaItem = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 120px 150px 1fr 180px 24px;
  align-items: center;

  gap: 14px;

  padding: 1rem 1.2rem;

  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    gap: 0.75rem;

    margin: 0.6rem 0.75rem;
    padding: 1rem;

    border-radius: 1rem;

    background: rgba(255, 255, 255, 0.18);

    border: 1px solid rgba(255, 255, 255, 0.35);

    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.55),
      0 10px 30px rgba(50, 30, 100, 0.07);

    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    }
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 0.85rem;
  font-weight: 600;

  opacity: 0.65;
`;

export const TimeIcon = styled.span`
  font-size: 1rem;
`;

export const Activity = styled.div`
  min-width: 0;
`;

export const ActivityTitle = styled.div`
  font-size: 0.95rem;
  line-height: 1.45;
  font-weight: 600;
`;

export const Note = styled.div`
  margin-top: 6px;

  font-size: 0.75rem;
  line-height: 1.4;

  opacity: 0.5;
`;

export const Professor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.2)
  );

  border: 1px solid rgba(255, 255, 255, 0.7);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    0 5px 15px rgba(50, 30, 100, 0.08);

  font-weight: 700;
`;

export const ProfessorInfo = styled.div`
  min-width: 0;
`;

export const ProfessorName = styled.div`
  font-size: 0.88rem;
  font-weight: 600;
`;

export const ProfessorRole = styled.div`
  margin-top: 3px;

  font-size: 0.62rem;
  letter-spacing: 0.15em;

  opacity: 0.45;
`;

export const Arrow = styled.div`
  width: 30px;
  height: 30px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.22);

  border: 1px solid rgba(255, 255, 255, 0.4);

  opacity: 0.5;

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  ${AgendaItem}:hover & {
    transform: translateX(4px);
    opacity: 1;
  }

  @media (max-width: 850px) {
    position: absolute;

    right: 20px;
    top: 20px;
  }
`;

export const DayCell = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.65;

  @media (max-width: 850px) {
    display: none;
  }
`;