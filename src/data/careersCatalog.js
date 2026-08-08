import icon from './icons.js';

const careersCatalog = {
  profesorado: {
    title: 'Profesorados',
    items: [
      {
        code: 'PAV',
        name: 'Profesorado de Artes Visuales',
        icon: icon.profesoradoArtesVisuales,
        reflectionColor: 'rgba(200, 154, 184, 0.78)',
      },
      {
        code: 'PEP',
        name: 'Profesorado de Educacion Primaria',
        icon: icon.educacionPrimaria,
        reflectionColor: 'rgba(177, 165, 202, 0.78)',
      },
      {
        code: 'PEI',
        name: 'Profesorado de Educacion Inicial',
        icon: icon.educacionInicial,
        reflectionColor: 'rgba(196, 150, 170, 0.78)',
      },
      {
        code: 'PESLL',
        name: 'Profesorado de Educacion Secundaria en Lengua y Literatura',
        icon: icon.lengua,
        reflectionColor: 'rgba(168, 157, 188, 0.78)',
      },
      {
        code: 'PM',
        name: 'Profesorado de Musica',
        icon: icon.musica,
        reflectionColor: 'rgba(160, 144, 204, 0.78)',
      },
      {
        code: 'PI',
        name: 'Profesorado de Ingles',
        icon: icon.ingles,
        reflectionColor: 'rgba(154, 169, 215, 0.78)',
      },
    ],
  },
  tecnicatura: {
    title: 'Tecnicaturas',
    items: [
      {
        code: 'TSDS',
        name: 'Tecnicatura Superior en Desarrollo de Software',
        icon: icon.desarrolloSoftware,
        reflectionColor: 'rgba(142, 147, 186, 0.78)',
      },
      {
        code: 'TSRYC',
        name: 'Tecnicatura Superior en Redes y Ciberseguridad',
        icon: icon.redesCiberseguridad,
        reflectionColor: 'rgba(134, 160, 176, 0.78)',
      },
      {
        code: 'TSA',
        name: 'Tecnicatura Superior en Agronomia',
        icon: icon.agronomia,
        reflectionColor: 'rgba(156, 176, 164, 0.78)',
      },
      {
        code: 'TSRH',
        name: 'Tecnicatura Superior en Recursos Humanos',
        icon: icon.recursosHumanos,
        reflectionColor: 'rgba(190, 160, 151, 0.78)',
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

export function getCareerByCode(code) {
  const normalizedCode = String(code ?? '').trim().toUpperCase();

  for (const [categoryKey, categoryData] of Object.entries(careersCatalog)) {
    const match = categoryData.items.find((career) => career.code === normalizedCode);

    if (match) {
      return {
        ...match,
        categoryKey,
        categoryTitle: categoryData.title,
      };
    }
  }

  return null;
}
