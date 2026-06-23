import { Publication } from '@/types';

export const publications: Publication[] = [
  {
    id: 'ijrpr-2025',
    title: 'Applying the Clean Development Mechanism AMS-III.R Methodology to Pig Manure Management: A Case Study of Dharan, Nepal',
    authors: 'Rai, S., & Chand, J.',
    journal: 'International Journal of Research Publication and Reviews (IJRPR), 6(8), 4309–4316',
    year: 2025,
    status: 'published',
  },
  {
    id: 'h2open-2026',
    title: 'Assessment of climate change impact on future water availability and irrigation demand: A case study of the Chanda Mohana Irrigation Project, Nepal',
    authors: 'Rai, S., Chand, J., Acharya, D. R., Poudyal, K. N.',
    journal: 'H2Open Journal, 9(4), 100039',
    year: 2026,
    status: 'published',
  },
  {
    id: 'ioe-conference-2025',
    title: 'How crop water requirements are projected to change with climate change in Chandra Mohan Irrigation Project in Nepal',
    authors: 'Rai, S., Chand, J., Poudyal, K. N., Ghimire, A.',
    journal: 'Proceedings of IOE Graduate Conference (16th), 2025',
    year: 2025,
    status: 'published',
  },
];

export function getPublicationsByStatus() {
  const grouped: Record<string, Publication[]> = {};
  publications.forEach((pub: Publication) => {
    const key = pub.status;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(pub);
  });
  return grouped;
}