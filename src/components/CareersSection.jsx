import styled from 'styled-components';
import CareersButtons from './CareersButtons';

import profesoradoArtesVisuales from '../assets/img/icons/profesorado-de-arte.svg';
import educacionPrimaria from '../assets/img/icons/educación-primaria.svg';
import educacionInicial from '../assets/img/icons/educacion-inicial.svg';
import lengua from '../assets/img/icons/lengua.svg';
import musica from '../assets/img/icons/musica.svg';
import ingles from '../assets/img/icons/ingles.svg';
import desarrolloSoftware from '../assets/img/icons/desarrollo-software.svg';
import redesCiberseguridad from '../assets/img/icons/redes-y-ciberseguridad.svg';
import agronomia from '../assets/img/icons/agronomia.svg';
import recursosHumanos from '../assets/img/icons/recursos-humanos.svg';

const careersCatalog = {
  profesorado: {
    title: 'Profesorados',
    items: [
      {
        name: 'Profesorado de Artes Visuales',
        icon: profesoradoArtesVisuales,
        reflectionColor: 'rgba(200, 154, 184, 0.78)',
        href: '/careers/profesorado-artes-visuales',
      },
      {
        name: 'Profesorado de Educacion Primaria',
        icon: educacionPrimaria,
        reflectionColor: 'rgba(177, 165, 202, 0.78)',
        href: '/careers/profesorado-educacion-primaria',
      },
      {
        name: 'Profesorado de Educacion Inicial',
        icon: educacionInicial,
        reflectionColor: 'rgba(196, 150, 170, 0.78)',
        href: '/careers/profesorado-educacion-inicial',
      },
      {
        name: 'Profesorado de Educacion Secundaria en Lengua y Literatura',
        icon: lengua,
        reflectionColor: 'rgba(168, 157, 188, 0.78)',
        href: '/careers/profesorado-lengua-literatura',
      },
      {
        name: 'Profesorado de Musica',
        icon: musica,
        reflectionColor: 'rgba(160, 144, 204, 0.78)',
        href: '/careers/profesorado-musica',
      },
      {
        name: 'Profesorado de Ingles',
        icon: ingles,
        reflectionColor: 'rgba(154, 169, 215, 0.78)',
        href: '/careers/profesorado-ingles',
      },
    ],
  },
  tecnicatura: {
    title: 'Tecnicaturas',
    items: [
      {
        name: 'Tecnicatura Superior en Desarrollo de Software',
        icon: desarrolloSoftware,
        reflectionColor: 'rgba(142, 147, 186, 0.78)',
        href: '/careers/tecnicatura-desarrollo-software',
      },
      {
        name: 'Tecnicatura Superior en Redes y Ciberseguridad',
        icon: redesCiberseguridad,
        reflectionColor: 'rgba(134, 160, 176, 0.78)',
        href: '/careers/tecnicatura-redes-ciberseguridad',
      },
      {
        name: 'Tecnicatura Superior en Agronomia',
        icon: agronomia,
        reflectionColor: 'rgba(156, 176, 164, 0.78)',
        href: '/careers/tecnicatura-agronomia',
      },
      {
        name: 'Tecnicatura Superior en Recursos Humanos',
        icon: recursosHumanos,
        reflectionColor: 'rgba(190, 160, 151, 0.78)',
        href: '/careers/tecnicatura-recursos-humanos',
      },
    ],
  },
};

export function catalogCareersByCategory(categoryKey = 'profesorado') {
  return careersCatalog[categoryKey] ?? null;
}

export function getTotalCareersCount() {
  return Object.values(careersCatalog).reduce((total, category) => total + category.items.length, 0);
}

function renderCareerCategory(categoryKey) {
  const category = catalogCareersByCategory(categoryKey);

  if (!category) {
    return null;
  }

  return (
    <article className="careers-group" key={categoryKey}>
      <header className="careers-group-header">
        <h2>{category.title}</h2>
      </header>

      <div className="careers-group-grid">
        {category.items.map((career) => (
          <CareersButtons
            key={career.name}
            name={career.name}
            icon={career.icon}
            href={career.href}
            reflectionColor={career.reflectionColor}
          />
        ))}
      </div>
    </article>
  );
}

function CareersSection({ category }) {
  const categoriesToRender = category ? [category] : ['profesorado', 'tecnicatura'];

  return (
    <CareersSectionStyled>
      {categoriesToRender.map(renderCareerCategory)}
    </CareersSectionStyled>
  );
}

export default CareersSection;

const CareersSectionStyled = styled.section`
  width: 100%;
  display: grid;
  gap: 2rem;
  padding: 2rem 0;

  .careers-group {
    display: grid;
    gap: 1rem;
  }

  .careers-group-header h2 {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: clamp(1.6rem, 1.15rem + 1vw, 2.2rem);
    color: var(--color-dark-purple);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    text-align: center;
  }

  .careers-group-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 1100px) {
    .careers-group-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    gap: 1.4rem;

    .careers-group-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`;
